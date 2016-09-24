---
id: 1559
title: 'Node.js : hour 1'
date: 2013-10-29T23:22:04+00:00
author: Ben
layout: default
guid: http://ox10.it/allbs/?p=1559
permalink: /2013/10/29/nodejs-hour-1/
post_image:
  - http://ox10.it/allbs/wp-content/uploads/2013/10/Screen-Shot-2013-10-29-at-23.25.09.png
categories:
  - HEADER
  - Mac
  - WebDev
---
During half term, Em and the kids were off visiting family for a few days.

The [Big Storm](http://www.bbc.co.uk/news/uk-24690552) caused chaos to the trains, and so  I hadn’t done my usual Monday commute to Shoreditch.

The combination meant that I found myself in the unusual position of having most of an evening to myself, so I wanted to see:

**<span style="color: #ff6600;">How much fun I could have with Node.js</span>** &#8211; **<span style="text-decoration: underline;">in just an hour</span>**.

&nbsp;

[Node.js](http://nodejs.org/) has had plenty of attention for some time, but hadn’t drawn me in until [@adamyeats](https://twitter.com/adamyeats) short talk at [12 Devs of Autumn](http://12devs.co.uk/events/12-devs-of-autumn/). Ironically Adam’s talk followed [@westleyknight](https://twitter.com/westleyknight) in which he encouraged us not to feel like we had to learn everything…. <img src="http://allbs.co.uk/wp-includes/images/smilies/simple-smile.png" alt=":-)" class="wp-smiley" style="height: 1em; max-height: 1em;" />

**<span style="text-decoration: underline;">Installing Node.js</span>**:

First step was to install node.js locally on my Mac for dev, and also I will be using a VPS (from [Digital Ocean](https://www.digitalocean.com/?refcode=d23ec85b8a18)) for live.

Mac (local) using homebrew:

> >>brew install node

Linux (VPS) Ubuntu:

> >>sudo apt-get install nodejs

(older ubuntu/distro’s may need guidance from [here](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager))

**<span style="text-decoration: underline;">Node beginner</span>**

Node.js is a fairly popular topic currently and there are loads of greats resources, but I really liked the style, tone and pace of [@manuelkiessling](https://twitter.com/manuelkiessling) ’s <http://www.nodebeginner.org/> (free to read online, or can purchase as part of a bundle for $10)

This stack overflow page also has a stack of great links: <http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js>

**<span style="text-decoration: underline;">Hello world</span>**

The ubiquitous first program:

> var http = require(&#8220;http&#8221;);

> http.createServer(function(request, response){

> response.writeHead(200,{&#8220;Content-Type&#8221;:&#8221;text/plain&#8221;});

> response.write(&#8220;Hello World from Node.js&#8221;);

> response.end();

> }).listen(8888);

&nbsp;

This file was called server1.js and so to run it:

> >>node server1.js

and visit http://localhost:8888/server.js

Above “http&#8221; references one of the standard ‘modules’ that Node ships with.

For other modules, either write your own, or enjoy the gifts from this great community and use npm, which apparently it stands for ‘Node Packaged Modules’ (not node package manager) : <https://npmjs.org/>

**<span style="text-decoration: underline;">nodemon</span>**

My first annoyance was stop-starting node whenever I made a code change. There appear to be a few options for this, but in my first test Remy Sharp’s ([@rem](https://twitter.com/rem)) nodemon did exactly what I was looking for, so I didn&#8217;t look any further (why would i?!)

> npm install nodemon -g

and from that point on instead of using:

>>node myfile.js

the following is used:

> >>nodemon myfile.js

Whenever I now make code changes, in my terminal I saw:

28 Oct 21:20:37 &#8211; [nodemon] starting \`node server1.js\`

28 Oct 21:20:59 &#8211; [nodemon] <span style="color: #339966;">restarting due to changes&#8230;</span>

&nbsp;

**<span style="text-decoration: underline;">querystring</span>**

I wanted to extract the query string contents from the URL used for the request, and this is possible using standard functions:

> var pathname = url.parse(request.url).pathname;

> var query = url.parse(request.url).query;

> console.log(&#8220;Request for &#8221; + pathname + “ received with querystring: &#8221; + query + &#8221; &#8220;);

&nbsp;

**<span style="text-decoration: underline;">favicon</span>**

While I was experimenting with capturing querystring parameter, the console output was a little annoying as it kept showing 2 lines on favicon request whenever I viewed the page (this may be a quirk of Chrome), and so I used the following:

> if (request.url === &#8216;/favicon.ico&#8217;) {

> response.writeHead(200, {&#8216;Content-Type&#8217;: &#8216;image/x-icon&#8217;} );

> response.end();

> //console.log(&#8216;favicon requested&#8217;);

> return; }

(I edited out the console log as this was what I was trying avoid &#8211; but clearly if you wanted to actually serve the favicon, the above needs further tweaking, but I’m leaving that for later)

**<span style="text-decoration: underline;">Twitter &#8211; hello world</span>**

The more modern variant of the standard Hello World app, is to trigger a Twitter status update, for which I used the npm ‘node-twitter-api’ (<https://npmjs.org/package/node-twitter-api> ):

> npm install node-twitter-api

You need to get your consumer key and consumer secret from <!--?xml version="1.0" encoding="UTF-8" standalone="no"?-->

<a style="font-family: Arial;" href="https://dev.twitter.com/">https://dev.twitter.com/</a> in the ‘manage your apps’ section. As my initial <span style="font-family: Arial;">use will be local, and just for some initial basic status updates, I stored the access token and access token secret as variable:</span>

<img style="display: block; margin-left: auto; margin-right: auto; border: 0px;" title="Nodejs - Twitter - Code shot.png" src="http://ox10.it/allbs/wp-content/uploads/2013/10/Nodejs-Twitter-Code-shot.png" alt="Nodejs  Twitter  Code shot" width="480" height="382" border="0" />

&nbsp;

Upon running the code I got the following response:

{ statusCode: 401,

data: &#8216;{&#8220;request&#8221;:&#8221;\\/1.1\\/statuses\\/update.json&#8221;,&#8221;error&#8221;:&#8221;**Read-only application cannot POST**.&#8221;}’ }

So I updated the application type setting on dev.twitter.com:

<img style="display: block; margin-left: auto; margin-right: auto;" title="Screen Shot 2013-10-28 at 22.24.06.png" src="http://ox10.it/allbs/wp-content/uploads/2013/10/Screen-Shot-2013-10-28-at-22.24.06.png" alt="Screen Shot 2013 10 28 at 22 24 06" width="333" height="149" border="0" />

&nbsp;

&#8211; and then ensure you recreate your access token. Run the code, and hey presto:

<img style="display: block; margin-left: auto; margin-right: auto;" title="Screen Shot 2013-10-29 at 22.59.12.png" src="http://ox10.it/allbs/wp-content/uploads/2013/10/Screen-Shot-2013-10-29-at-22.59.12.png" alt="Screen Shot 2013 10 29 at 22 59 12" width="310" height="75" border="0" />

&nbsp;

&nbsp;

**<span style="text-decoration: underline;">Twilio &#8211; hello world</span>**

Another favourite hello world is to use the wonderful Twilio API to send an SMS to my phone. My time was nearly up, but I gave it a go.

> npm install twilio

(I’m becoming rather fond of npm, and it seems that while I had been avoiding node.js, a lot of interesting folks and companies have developed their node modules)

I grabbed my Twilio account SID and Auth Token, and using the code example from here: <https://www.twilio.com/blog/2013/03/introducing-the-twilio-module-for-node-js.html> :

<img style="display: block; margin-left: auto; margin-right: auto; border: 0px;" title="Screen Shot 2013-10-29 at 23.12.30.png" src="http://ox10.it/allbs/wp-content/uploads/2013/10/Screen-Shot-2013-10-29-at-23.12.30.png" alt="Screen Shot 2013 10 29 at 23 12 30" width="480" height="399" border="0" />

and moments later my mobile received:

<img style="display: block; margin-left: auto; margin-right: auto;" title="Screenshot_2013-10-29-23-05-17.png" src="http://ox10.it/allbs/wp-content/uploads/2013/10/Screenshot_2013-10-29-23-05-171.png" alt="Screenshot 2013 10 29 23 05 17" width="300" height="132" border="0" />

&nbsp;

&nbsp;

All in all, the hour was superb. I’ve barely scratched the surface of Node.js, but it already feels like once of those programming languages that is going to be thoroughly enjoyable to use….. somehow having a very low coefficient of friction.

Next time, I was to explore which other services and products I use have npm&#8217;s : fitbit, google docs,&#8230;.

&nbsp;

&nbsp;

&nbsp;
