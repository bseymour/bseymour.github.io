---
layout: single
author_profile: false
date: 2016-10-20T09:00:00+00:00
type: pages
permalink: /sketches/
title: Sketches

sidebar:
    nav: "photos_sidenav"

---
## Sketches, by Ben

I've always admired the skills and guts of people who are willing to creatively express themselves (in any medium), and am fortunate enough to come from a family which includes concert level classical musicians, award winning Jazz musicians, and award winning artists. Sketching is something that has appealed to me for some time, and so despite my lack of... experience... I'll be taking an 'open' approach, and will be sharing my ongoing sketches here.

Click on an image to see a larger view ('escape' to exit)

[TODO: apply some layout and design elements to the gallery - for now it is just a inline stream.]

<article id="gallery"></article>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

<link rel="stylesheet" media="screen, projection" href="../assets/css/luminous-basic.min.css">

<!-- lightbox using luminous: https://github.com/imgix/luminous -->
<script type="text/javascript">
$(function() {
    console.log( "ready!" );

    var endpoint = "https://api.flickr.com/services/rest/"
    var apiKey = "4912feac8c866a2c76b84eca4bb55442";
    var photosetId = "72157671922194083";
    var extras = "url_sq,url_t,url_s,url_m,url_z,url_o";
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
                $('<a href="' + photos[i].url_z + '" class="gallery_a"><img class="gallery_image" src="' + photos[i].url_s + '" ></a>').appendTo("#gallery");
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
