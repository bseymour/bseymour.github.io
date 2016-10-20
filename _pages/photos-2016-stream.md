---
layout: single
author_profile: false
date: 2016-10-20T09:00:00+00:00
type: pages
permalink: /2016stream/
title: 2016 Photo Stream (mostly non-family)

sidebar:
    nav: "sidenav"

---
[TODO - add on-click to see larger image]

<article></article>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

<script type="text/javascript">
$(function() {
    console.log( "ready!" );

    var endpoint = "https://api.flickr.com/services/rest/"
    var apiKey = "4912feac8c866a2c76b84eca4bb55442";
    var photosetId = "72157663655280360";
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
                $('<img class="gallery_image" >').attr("src",photos[i].url_s).appendTo("article");
            }
        }
    }
});
</script>
