import compression from 'compression';
import nodeMailer from 'nodemailer';
import express from 'express';
import cors from 'cors';
import fs from 'fs';

import { PORT } from './config/index.js';
'use strict';

// ----- init ----- //
const app = express();
app.use(compression());
app.use(cors());
app.use(express.json());

// ----- log ----- //
const requestLogger = (request, response, next) => {
   const message = {
      method: request.method,
      path: request.path,
      body: request.body,
   }
   console.log('received api call:', message);
   next();
}
app.use(requestLogger);

// ----- RESTful ----- //
app.get('/api/csm/:mrto/:vwind/:vrto', (req, res) => {
   const { mrto, vwind, vrto } = req.params;
   fs.readFile(`./src/data/csm/50-${mrto}-${vwind}-${vrto}-lri.json`, (err, data) => {
      if (err) console.log(err);
      res.json(JSON.parse(data));
   });
});

app.get('/api/nn/:file', (req, res) => {
   fs.readFile(`./src/data/nn/${req.params.file}`, (err, data) => {
      if (err) console.log(err);
      res.json(JSON.parse(data));
   })
});

app.post('/api/nn', (req, res) => {
   const data = JSON.stringify(req.body, null, 3);
   const filename = Date.now().toString(36);
   fs.writeFile(`./src/data/nn/input_${filename}.json`, data, err => {
      if (err) console.log(err);
   });
   res.send(true);
});

app.get('/api/img/:file', (req, res) => {
   res.sendFile(`./src/data/img/${req.params.file}`, {root: '.'});
});

app.post('/api/contact', (req, res) => {
   const { name, email, message } = req.body; 
   const transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
         user: 'astro.cekolb@gmail.com',
      }
   });
   const mailOptions = {
      from: 'astro.cekolb@gmail.com',
      to: 'astro.cekolb@gmail.com',
      subject: 'contacting from site!',
      text: 'yo dawg',
   }
   transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
         console.log(err);
      } else {
         console.log(info);
      }
   });
});

// ----- static serving ----- //
app.use(express.static('../client/build'));     // NOTE: this MUST come after API requests

// ----- unknown endpoint ----- //
const unknownEndpoint = (request, response) => {
   response.status(404).send({ error: 'unknown endpoint' });
}
app.use(unknownEndpoint);

// ----- listen ----- //
const server = app.listen(PORT, () => console.log(`DataVis server running on port ${PORT}`));