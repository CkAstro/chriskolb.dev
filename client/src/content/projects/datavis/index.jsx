import { ContentPage, Showcase } from 'components/containers';
import { FancyButton, Icons } from 'components/elements';
import style from './datavis.module.css';

const datavis = {
   title: <span style={{fontWeight: '100'}}>use <span style={{fontWeight: '900'}}>DataVis</span> to view data anywhere</span>,
   components: 'WebGL / GLSL / React / Node / REST',
   image: require('assets/img/datavis_display.webp'),
   description: 'Upload and view volumetric scalar data.',
   link: 'https://datavis.chriskolb.dev',
   pages: [
      <ContentPage>
         <div className={style.imageContainer}>
            <img src={require('assets/img/datavis.webp')}/>
         </div>
         <div className={`${style.contentContainer}`}>
            <h1><a href='https://github.com/CkAstro/datavis' target='_blank' title='View project on GitHub'><Icons.GitHub fill='black' size={24}/></a> DataVis</h1>

            <p>View volumetric scalar data from your browser. This web-app allows the user to upload and view their own research data with support for multiple formats and resolutions.</p>

            <p>The front-end is created in React and uses a custom WebGL/GLSL implementation to quickly render volumetric data mapped to planar and spherical shapes, or shown as an iso-surface (a surface of constant value). The back-end runs on Node.js with Express and will process incomming datasets to add an easily-renderable data format to the API response.</p>

            <a href='https://datavis.chriskolb.dev' target='_blank'>
               <FancyButton.Style2>View App</FancyButton.Style2>
            </a>
         </div>
      </ContentPage>,

      <ContentPage>
         <div className={style.contentContainer}>
            <h1>Using the App - Creating Slices</h1>

            <p>The volumetric dataset is viewed through slices (with more features coming soon!)</p>

            <div className={style.contentContainer__flexSection}>
               <div>
                  <h2>The Create Items Tool</h2>
                  <p>The create items tool is located in the Toolbar. It is shown to the right and consists of 5 buttons.</p>
                  <p>From left to right, clicking these buttons creates: a constant-value isosurface, a spherical slice, a constant-Z plane, a constant-Y plane, and a constant-X plane.</p>
               </div>
               <div>
                  <img src={require('assets/img/create_items.webp')}/>
               </div>
            </div>

            <div className={style.contentContainer__flexSection}>
               <div>
                  <h2>The Item Controller</h2>
                  <p>Once a slice is created, it will appear in the item controller, located at the bottom of the Toolbar.</p>
                  <p>On the top bar is the item name, viewport visibility, and the delete button. Clicking the visibility options will toggle the display. Clicking the delete button will remove the item.</p>
                  <p>Both the item name and the slider values are editable via double-click.</p>
                  <p>The slidebars allow you to change how the item is displayed. For the isosurface, you can change the value (range 0 to 1). For the constant-value planes, you can change the axis value (range -1 to 1). For the sphere, you can change both the radius (range 0 to 1) and the center ,coordinates.</p>
                  <p> The "Variable" option allows you to change via drop-down which variable is displayed.</p>
               </div>
               <div>
                  <img src={require('assets/img/control_items.webp')}/>
               </div>
            </div>
         </div>
      </ContentPage>,
      <ContentPage>
         <div className={style.contentContainer}>
            <h1>Using the App - Camera Controls</h1>

            <p>The camera is rotated by clicking on the viewport and dragging. Note all rotation is about the y-axis. Scrolling will zoom in/out.</p>

            <div className={style.contentContainer__flexSection}>
               <div>
                  <h2>Camera Options</h2>
                  <p>There are currently two camera options: <b>Compare mode</b> and <b>Link mode</b>. These are available in the main display section and are pictured to the right.</p>
               </div>
               <div>
                  <img src={require('assets/img/split_camera_1.webp')}/>
               </div>
            </div>

            <div className={style.contentContainer__flexSection}>
               <div>
                  <h2>Compare Mode</h2>
                  <p>Compare mode enables a second viewport which allows the user to view the same dataset with different items visible. Item visibility per-viewport is handled in the item controller.</p>
                  <p>In the example to the right, <b>compare mode</b> has been enabled and a second viewport is visible. Each displays a planar slice.</p>
               </div>
               <div>
                  <img src={require('assets/img/split_camera_2.webp')}/>
               </div>
            </div>

            <div className={style.contentContainer__flexSection}>
               <div>
                  <h2>Link Mode</h2>
                  <p>Link mode enables and disables viewport camera linking. When enabled, each viewport will have the same zoom and viewing angle. When disabled, the user may interact with the two viewports separately.</p>
                  <p>In the example to the right, <b>link mode</b> has been disabled and the second viewport has been rotated.</p>
               </div>
               <div>
                  <img src={require('assets/img/split_camera_3.webp')}/>
               </div>
            </div>
         </div>
      </ContentPage>,
      <ContentPage>
         <div className={style.contentContainer}>
            <h1>Using the App - Saving and Loading Sessions</h1>

            <p>The app allows you to save sessions, including camera options, display items, and item settings. Loading textures is currently not supported.</p>

            <div className={style.contentContainer__flexSection}>
               <div>
                  <h2>Session Buttons</h2>
                  <p>The <b>save</b> and <b>load</b> session buttons are available in the main display section and are pictured to the right.</p>
               </div>
               <div>
                  <img src={require('assets/img/sessions_1.webp')}/>
               </div>
            </div>

            <div className={style.contentContainer__flexSection}>
               <div>
                  <h2>Saving a Session</h2>
                  <p>Clicking the <b>save session</b> button will bring up the window pictured to the right. Simply choose a session name and click the "save" button.</p>
                  <p>The session will be stored as a cookie, so clearing cookies will erase the session. Server-side support is coming soon.</p>
               </div>
               <div>
                  <img src={require('assets/img/sessions_2.webp')}/>
               </div>
            </div>

            <div className={style.contentContainer__flexSection}>
               <div>
                  <h2>Loading a Session</h2>
                  <p>Clicking the <b>load session</b> button will bring up the window pictured to the right, with a list of all saved sessions. Clicking on a session will immediately load it.</p>
                  <p>To delete a saved session, click the '&times;' button. A confirmation will pop up asking you to click the '&times;' button a second time. Doing this will delete the session.</p>
               </div>
               <div>
                  <img src={require('assets/img/sessions_3.webp')}/>
               </div>
            </div>

         </div>
      </ContentPage>


   ],
}

const DataVis = () => <Showcase info={datavis}/>;

export default DataVis;