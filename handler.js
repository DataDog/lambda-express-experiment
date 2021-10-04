'use strict';

const serverless = require('serverless-http');
const express = require('express');

const expressApp = express();

expressApp.get('/', (req, res) => {
  res.send('Hello root path')
})

expressApp.get('/hello', (req, res) => {
  res.send('Hello /hello path')
})

const serverlessHttpHandler = serverless(expressApp);

module.exports.hello = async (event, context) => {

  console.log(context);
  console.log(event);
  const result = await serverlessHttpHandler(event, context);

  console.log({
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  })

  return result;


};
