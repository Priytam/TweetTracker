# TweetTracker
track your tweet

Sample example how to connect tweeter


create directory say tweetTaracker 

unzip the downloaded zipped source 

change directory to TweetTracker

run npm install 

run gulp 


open localhost:3000

you can see twwet configured for track javascript 

want to change track open config/lib/socket.io.js

twit.stream('statuses/filter',{ track: 'javaScript'}, function(stream){
        streamHandler(stream, io);
});

and change tack : 'JavaScript' to your cutom tracks 

one can add location key also


TODO:// user login and saves their custom track based on locations (can put their own customer KEY and cutomer SECRET )
// base is set for user Authentication using Oauth2 and Passport 
