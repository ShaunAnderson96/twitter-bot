var Twit = require("twit");

const config = require("./config");
const T = new Twit(config);

//sends tweet an hour
setInterval(tweet, 1000 * 60 * 60);

//calling tweet function
tweet();

function tweet() {
  //creates a random number between 0 and 100
  let r = Math.floor(Math.random() * 100);

  //the tweet contents
  const params = {
    status: "random number " + r + " sent by Shaun from Node.js"
  };
  //posting the tweet
  T.post("statuses/update", params, dataGet);

  function dataGet(err, data, response) {
    if (err) {
      console.log("Something went wrong");
    } else {
      console.log("It worked");
    }
  }
}

//search twitter for tweets containing the word 'killygordon' since 21st Oct 2017

// const param = {
//   q: "killygordon since:2017-10-21",
//   count: 5
// };

// T.get("search/tweets", param, getData);

// function getData(err, data, response) {
//   let tweets = data.statuses;
//   for (let i = 0; i < tweets.length; i++) {
//     console.log(tweets[i].text);
//   }
// }
