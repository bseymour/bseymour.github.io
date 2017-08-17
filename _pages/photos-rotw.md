---
title: Reflecting on the Weekend - Photos collages
date: 2016-10-19 09:00:00 Z
permalink: "/reflecting/"
layout: single
author_profile: false
type: pages
sidebar:
  nav: photos_sidenav
---

My working week typically starts with a 2 hour drive/train/walk/tube/walk to the office (or flight out from Heathrow visiting our Continental European customers). During this time, I enjoy perusing some of the photos we took over the weekend (either direct on my phone, or via dropbox and our home collation process) and endeavour to form a small collage (using Diptic) of the highlights.

In this very basic initial construction of the page, the images below are brought in via a public Flickr set of the collages I regularly make and share, and just displayed inline.
(More info on the Flickr API : https://www.flickr.com/services/api/explore/flickr.photosets.getPhotos )

<article id="gallery"></article>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

<link rel="stylesheet" media="screen, projection" href="../assets/css/luminous-basic.min.css">

<script type="text/javascript">
$(function() {
    console.log( "ready!" );

    var endpoint = "https://api.flickr.com/services/rest/"
    var apiKey = "4912feac8c866a2c76b84eca4bb55442";
    var photosetId = "72157671649272141";
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
                $('<a href="' + photos[i].url_m + '" class="gallery_a"><img class="gallery_image" src="' + photos[i].url_s + '" ></a>').appendTo("#gallery");
            }
            loadLuminous();
        }
    }
});
</script>


<script src="../assets/js/Luminous.min.js"></script>
<script>
  function loadLuminous(){
      new LuminousGallery(document.querySelectorAll('.gallery_a'), {}, {
        caption: function(trigger) {
          return trigger.querySelector('img').getAttribute('alt');
        }
      });
  };
</script>
