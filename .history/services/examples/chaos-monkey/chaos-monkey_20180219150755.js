const express = require("express");
const app = express();
const onFinished = require("on-finished");



class ChaosMonkey {
  constructor(expressApplication) {
    this.app = expressApplication;
  }

  subscribeToHooks(){
    onFinished(res, function(err, res) {
          console.log("Finished");
    })
  }
  start() {
    setTimeout(() => {
      process.stdout.write("Starting the chaos monkey");
    }, 100);
  }
}

new ChaosMonkey().start();