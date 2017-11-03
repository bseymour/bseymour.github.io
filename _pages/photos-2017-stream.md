---
title: 2017 Photo Stream (mostly non-family)
date: 2017-11-03 09:00:00 Z
permalink: "/2017stream/"
layout: single
author_profile: false
type: pages
sidebar:
  nav: photos_sidenav
---

## Photowall of some of our favourite (non-family) photos from 2017

<article id="gallery"></article>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

<link rel="stylesheet" media="screen, projection" href="../assets/css/luminous-basic.min.css">

<script type="text/javascript">
$(function() {
    console.log( "ready!" );

    var endpoint = "https://api.flickr.com/services/rest/"
    var apiKey = "4912feac8c866a2c76b84eca4bb55442";
    var photosetId = "72157679744500446";
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
