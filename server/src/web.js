import compression from 'compression';
import nodeMailer from 'nodemailer';
import express from 'express';
import cors from 'cors';
import fs from 'fs';

import { PORT, MAIL_TOKEN } from './config/index.js';
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
      service: 'gmail',
      auth: {
         user: 'astro.cekolb@gmail.com',
         pass: MAIL_TOKEN,
      }
   });
   const mailOptions = {
      from: email,
      to: 'astro.cekolb@gmail.com',
      subject: `Contact Message: ${name} (${email})`,
      text: message,
   }
   transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
         console.log(err);
         res.send({success: false, message: 'Error sending message. Please try again later, or contact me directly at astro.cekolb@gmail.com'});
      } else {
         console.log(info);
         res.send({success: true, message: 'Message sent. Thank you for contacting me.'});
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
const server = app.listen(PORT, () => console.log(`Web server running on port ${PORT}`));