const functions = require('firebase-functions');
const puppeteer = require('puppeteer');

'use strict';
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const runtimeOpts = {
  timeoutSeconds: 300,
  memory: '1GB'
}

exports.example = functions
  .runWith(runtimeOpts)
  .https.onRequest(async(req, res) => {
    const url = "https://example.com";

    const browser = await puppeteer.launch({
        args: ['--no-sandbox']
    });
    const page = await browser.newPage();
    await page.goto(url);
    res.send(await page.title());
    await browser.close();
  });
