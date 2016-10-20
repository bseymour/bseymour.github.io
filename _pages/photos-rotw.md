---
layout: single
author_profile: false
date: 2016-10-19T09:00:00+00:00
type: pages
permalink: /reflecting/
title: Reflecting on the Weekend - Photos collages

sidebar:
    nav: "photos_sidenav"

---
My working week typically starts with a 2 hour drive/train/walk/tube/walk to the office (or flight out from Heathrow visiting our Continental European customers). During this time, I enjoy perusing some of the photos we took over the weekend (either direct on my phone, or via dropbox and our home collation process) and endeavour to form a small collage (using Diptic) of the highlights.

In this very basic initial construction of the page, the images below are brought in via a public Flickr set of the collages I regularly make and share, and just displayed inline.
(More info on the Flickr API : https://www.flickr.com/services/api/explore/flickr.photosets.getPhotos )

<article>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

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
                $('<img class="gallery_image" >').attr("src",photos[i].url_m).appendTo("article");
            }
        }
    }
});
</script>

</article>
