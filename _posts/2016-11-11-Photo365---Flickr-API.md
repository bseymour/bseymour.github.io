---
title: Photo365 - Flickr API
date: 2016-11-11 02:09:00 Z
permalink: "/2016/11/11/Photo365---Flickr-API"
categories:
- general
tags:
- NaBloPoMo
layout: single
author_profile: false
type: pages
post_image: "/images/posts/NaBloPoMo11-th.png"
post_cl_image: "posts/NaBloPoMo11-th.png"

sidebar:
  nav: nablopomo_blog_sidenav
---

My working week typically starts with a 2 hour drive/train/walk /tube/walk to the Shoreditch office (or flight out from Heathrow visiting our Continental European customers).

As with many activities or tasks that we undertake with any great regularity, it is easy to switch on to auto-pilot. For part of the day to become something to be 'got through', rather than actively appreciated.

As such, I have tried to undertake activities, which encourage being more in the present. In 2013 I undertook the 'photo365' project - in which you aim to take a photo-a-day. A simple and accessible goal, the biggest challenges were on the days when I was very much in my head-down routine, and it forced me to once again pay more attention to my surroundings, and to look for *the interesting and the beautiful in the everyday*.

This collection was maintained on Flickr, in an album called '[365#2013](https://www.flickr.com/photos/boseymour/albums/72157632402224642)'

[![365 2013 Set on Flickr](/images/posts/NaBloPoMo11-Flickr-365213.png)](https://www.flickr.com/photos/boseymour/albums/72157632402224642)


In rebuilding this site, I also wanted take the various pieces of my personal content from other sites/services, and to start consolidating them on here. Flickr has been a most reliable photo service for many years, and as such I wanted to leverage their API rather than copy/duplicate all of those 365#2013 photos onto a separate site/host/environment.

Here is the code

```
<script type="text/javascript">
$(function() {
    console.log( "ready!" );

    var endpoint = "https://api.flickr.com/services/rest/"
    var apiKey = "-----------------------------";
    var photosetId = "72157632402224642";
    var extras = "url_sq,url_t,url_s,url_m,url_o";
    var method = "flickr.photosets.getPhotos";

    var request = endpoint+"?method="+method+
                "&api_key="+apiKey+
                "&photoset_id="+photosetId+
                "&extras="+extras+
                "&format=json&jsoncallback=?";
    $.getJSON(request,buildGallery);

    function buildGallery(data,result){
        if(result=="success"){
            var photos = data.photoset.photo;
            for(var i=0; i<photos.length; i++){
                $('<a href="' + photos[i].url_o + '" class="gallery_a"><img class="gallery_image" src="' + photos[i].url_sq + '" ></a>').appendTo("#gallery");
            }
            loadLuminous();
        }
    }
});
</script>
```

photosetId can be gleaned from the URL of the Set:
![Flickr-URL](/images/posts/NaBloPoMo11-Flickr-URL.png)

In this initial version there has been pretty much no loading optimisation, design/layout or performance consideration. It is functional though, the fluid layout pretty much works on all screen sizes, and I actually quite like the look of the 'wall of thumbnails' but this code loads all of the images in the 'Set' (album) and in this case there are hundreds.

The working page of the embedded 365#2013 set is [here](/photo365-2013/).

![Embedded Flickr Set](/images/posts/NaBloPoMo11-Embedded.png)

You may have noticed that loadLuminous function call near the bottom, this is a library for image popups, which I will talk more about tomorrow.
