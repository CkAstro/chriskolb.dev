// NOTE: this is a custom gl helper implementation
//    - majority of scene rendering stuff needs to be moved to Renderables

import { mat4 } from 'gl-matrix';

const cube = {
   vertices: [
      -1.0, -1.0,  1.0,    // front
       1.0, -1.0,  1.0,
       1.0,  1.0,  1.0,
      -1.0,  1.0,  1.0,
      -1.0, -1.0, -1.0,    // back
      -1.0,  1.0, -1.0,
       1.0,  1.0, -1.0,
       1.0, -1.0, -1.0,
      -1.0,  1.0, -1.0,    // top
      -1.0,  1.0,  1.0,
       1.0,  1.0,  1.0,
       1.0,  1.0, -1.0,
      -1.0, -1.0, -1.0,    // bottom
       1.0, -1.0, -1.0,
       1.0, -1.0,  1.0,
      -1.0, -1.0,  1.0,
       1.0, -1.0, -1.0,    // right
       1.0,  1.0, -1.0,
       1.0,  1.0,  1.0,
       1.0, -1.0,  1.0,
      -1.0, -1.0, -1.0,    // left
      -1.0, -1.0,  1.0,
      -1.0,  1.0,  1.0,
      -1.0,  1.0, -1.0,
   ],
   indices: [
      0,  1,  2,     0,  2,  3,    // front
      4,  5,  6,     4,  6,  7,    // back
      8,  9,  10,    8,  10, 11,   // top
      12, 13, 14,    12, 14, 15,   // bottom
      16, 17, 18,    16, 18, 19,   // right
      20, 21, 22,    20, 22, 23,   // left
   ],
}

const initBuffers = (gl, shape) => {
   const vertexBuffer = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(shape.vertices), gl.STATIC_DRAW);

   const indexBuffer = gl.createBuffer();
   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
   gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(shape.indices), gl.STATIC_DRAW);

   return {
      vertices: vertexBuffer,
      indices: indexBuffer,
      indexCount: shape.indices.length,
   }
}

class Renderable {
   constructor(gl, shaderProgram) {
      this.glInstance = gl;
      this.shaderProgram = shaderProgram;
      this.buffers = initBuffers(gl, cube);
   }

   render() {
      const gl = this.glInstance;

      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.vertices);
      gl.vertexAttribPointer(
         this.shaderProgram.attribLocations.vertexPosition, 
         3, gl.FLOAT, false, 0, 0,
      );
      gl.enableVertexAttribArray(this.shaderProgram.attribLocations.vertexPosition);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers.indices);
      gl.drawElements(gl.TRIANGLES, this.buffers.indexCount, gl.UNSIGNED_SHORT, 0);
   }
}

class GLHelper {
   constructor() {
      this.isInit = false;
      this.glInstance = null;
      this.shader = null;
      this.projectionMatrix = null;
      this.modelViewMatrix = null;
      this.eyePosition = null;
      this.renderable = null;

      this.zoom = null;
      this.azi = null;
      this.pol = null;

      this.FoV = 45.0;
      this.zNear = 0.1;
      this.zFar = 100.0;
   }

   init(gl, shader) {
      this.glInstance = gl;
      this.shader = shader;
      this.projectionMatrix = this.getProjectionMatrix()
      this.modelViewMatrix = mat4.create();
      this.renderable = new Renderable(gl, shader);

      this.isInit = true;
   }

   getProjectionMatrix() {
      const { width, height } = this.glInstance.canvas;
      return mat4.perspective(
         mat4.create(),
         this.FoV * Math.PI / 180.0,
         width / height,
         this.zNear,
         this.zFar,
      );
   }

   getModelViewMatrix(camera) {
      const { width, height } = this.glInstance.canvas;
      const azimuthal = 2.0 * Math.PI * camera.azi / width;
      const polar = 2.0 * Math.PI * camera.pol / height;
      const zoom = camera.zoom;

      this.modelViewMatrix = mat4.create();
      mat4.translate(
         this.modelViewMatrix, 
         this.modelViewMatrix, 
         [0.0, 0.0, zoom]
      );
      mat4.rotate(
         this.modelViewMatrix, 
         this.modelViewMatrix, 
         azimuthal, 
         [0.0, 1.0, 0.0]
      );
      mat4.rotate(
         this.modelViewMatrix, 
         this.modelViewMatrix, 
         polar, 
         [Math.cos(azimuthal), 0.0, Math.sin(azimuthal)]
      );

      const invertedView = mat4.invert(mat4.create(), this.modelViewMatrix);
      this.eyePosition = [
         invertedView[12],
         invertedView[13],
         invertedView[14],
      ];
   }

   renderScene(objects, scene, tex) {
      const gl = this.glInstance;

      // clear window 
      gl.clearColor(0, 0, 0, 1.0);
      gl.clearDepth(1.0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);

      const camera = scene.camera;
      this.getModelViewMatrix(camera);

      for (const obj of objects) {
         gl.useProgram(this.shader.program);
         gl.uniformMatrix4fv(this.shader.uniformLocations.projectionMatrix, false, this.projectionMatrix);
         gl.uniformMatrix4fv(this.shader.uniformLocations.modelViewMatrix, false, this.modelViewMatrix);

         gl.uniform3fv(this.shader.uniformLocations.eyePos, this.eyePosition);
         gl.uniform1f(this.shader.uniformLocations.nu, 10.0**scene.nu);
         gl.uniform1f(this.shader.uniformLocations.hideCSM, scene.unHideCSM);
         gl.uniform1f(this.shader.uniformLocations.resolution, scene.volDim);

         // enable data texture
         gl.activeTexture(gl.TEXTURE0);
         gl.bindTexture(gl.TEXTURE_3D, tex.data[0]);
         gl.uniform1i(this.shader.uniformLocations.volumeData, 0);

         // enable cmap texture
         gl.activeTexture(gl.TEXTURE1);
         gl.bindTexture(gl.TEXTURE_2D, tex.cmap[0]);
         gl.uniform1i(this.shader.uniformLocations.colormap, 1);

         this.renderable.render();
      }
   }
}

export default GLHelper;