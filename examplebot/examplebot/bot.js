// Our Twitter library
var Twit = require('twit');

// We need to include our configuration file
var T = new Twit(require('./config.js'));


// This is the URL of a search for the latest tweets on the various Halloween hashtags.
var halloweenSearch = {q: "#halloween", count: 10, result_type: "recent"};
var halloweenSearch2 = {q: "#halloween18", count: 10, result_type: "recent"};
var halloweenSearch3 = {q: "#halloween2018", count: 10, result_type: "recent"};
var costumeSearch = {q: "#costume", count: 10, result_type: "recent"};
var costumeSearch2 = {q: "#halloweencostume", count: 10, result_type: "recent"};

// This function finds the latest tweets with the Halloween hashtags, and retweets them.
function retweetLatest() {
	T.get('search/tweets', halloweenSearch, function (error, data) {
	  // log out any errors and responses
	  console.log(error, data);
	  // If our search request to the server had no errors...
	  if (!error) {
	  	// ...then we grab the ID of the tweet we want to retweet...
		var retweetId = data.statuses[0].id_str;
        var screenName = data.statuses[0].user.screen_name;  
		// ...and then we tell Twitter we want to retweet it!
		T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
			if (response) {
				console.log('Success! Check your bot, it should have retweeted something.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
            
		})
	  }
	  // However, if our original search request had an error, we want to print it out here.
	  else {
	  	console.log('There was an error with your hashtag search:', error);
	  }
        
	});
    
    T.get('search/tweets', halloweenSearch2, function (error, data) {
	  // log out any errors and responses
	  console.log(error, data);
	  // If our search request to the server had no errors...
	  if (!error) {
	  	// ...then we grab the ID of the tweet we want to retweet...
		var retweetId = data.statuses[0].id_str;
		// ...and then we tell Twitter we want to retweet it!
		T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
			if (response) {
				console.log('Success! Check your bot, it should have retweeted something.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
		})
	  }
	  // However, if our original search request had an error, we want to print it out here.
	  else {
	  	console.log('There was an error with your hashtag search:', error);
	  }
	});
    
    T.get('search/tweets', halloweenSearch3, function (error, data) {
	  // log out any errors and responses
	  console.log(error, data);
	  // If our search request to the server had no errors...
	  if (!error) {
	  	// ...then we grab the ID of the tweet we want to retweet...
		var retweetId = data.statuses[0].id_str;
		// ...and then we tell Twitter we want to retweet it!
		T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
			if (response) {
				console.log('Success! Check your bot, it should have retweeted something.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
		})
	  }
	  // However, if our original search request had an error, we want to print it out here.
	  else {
	  	console.log('There was an error with your hashtag search:', error);
	  }
	});
    
    T.get('search/tweets', costumeSearch, function (error, data) {
	  // log out any errors and responses
	  console.log(error, data);
	  // If our search request to the server had no errors...
	  if (!error) {
	  	// ...then we grab the ID of the tweet we want to retweet...
		var retweetId = data.statuses[0].id_str;
		// ...and then we tell Twitter we want to retweet it!
		T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
			if (response) {
				console.log('Success! Check your bot, it should have retweeted something.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
		})
	  }
	  // However, if our original search request had an error, we want to print it out here.
	  else {
	  	console.log('There was an error with your hashtag search:', error);
	  }
	});
    
    T.get('search/tweets', costumeSearch2, function (error, data) {
	  // log out any errors and responses
	  console.log(error, data);
	  // If our search request to the server had no errors...
	  if (!error) {
	  	// ...then we grab the ID of the tweet we want to retweet...
		var retweetId = data.statuses[0].id_str;
		// ...and then we tell Twitter we want to retweet it!
		T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
			if (response) {
				console.log('Success! Check your bot, it should have retweeted something.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
		})
	  }
	  // However, if our original search request had an error, we want to print it out here.
	  else {
	  	console.log('There was an error with your hashtag search:', error);
	  }
	});
    
}

function tweetOut(tweet) {
    //var name = event.source.name;
    //var screenName = event.source.screen_name;
    //var username = tweet.user.screen_name;
    var tweet = { 
        status: 'Awesome #costumes, ' + ' Twitter! Here are even more awesome #Halloween celebrations from the Twitter community 🎃 '
    }
    
    T.post('statuses/update', tweet, tweeted);
    
    function tweeted(err, data, response) {
        if (err) {
            console.log("Something went wrong!");
        } else {
            console.log("It worked!");
        }
    }
}


// Try to retweet something as soon as we run the program...
retweetLatest();
tweetOut();

// ...and then every hour after that. Time here is in milliseconds, so
// 1000 ms = 1 second, 1 sec * 60 = 1 min, 1 min * 60 = 1 hour --> 1000 * 60 * 60
setInterval(retweetLatest, 1000 * 60 * 20);
setInterval(tweetOut, 1000 * 60 * 20);



//Location: cd Desktop\College\Year 2\LMC 2700\Project 4\examplebot\examplebot


// "in-progress" implementations below

  /* T.post('friendships/create/', {screen_name: object}, function (error, response) {
                if (response) {
                    console.log(response);
                    console.log('Success!');
                } else if (error) {
                    console.log('There was an error: ', error);
                }
    } ) */

/* function followed(event) {
     var stream = T.stream('user');
     stream.on('follow', followed);
    var name = event.source.name;
    var screenName = event.source.screen_name;
    tweetOut('@' + screenName + ' just followed 👻');
    
} */

//var stream = T.stream('user');
//stream.on('follow', followed); 

//var name = event.source.name;
    //var screenName = event.source.screen_name;
    //var username = tweet.user.screen_name;


