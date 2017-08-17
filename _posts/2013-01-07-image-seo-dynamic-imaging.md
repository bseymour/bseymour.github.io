---
title: Image SEO &#038; Dynamic Imaging Systems
date: 2013-01-07 23:03:38 Z
permalink: "/2013/01/07/image-seo-dynamic-imaging/"
categories:
- Dynamic Media
- eCommerce
- HEADER
- Rich Media
- WebDev
- feature
layout: single
author_profile: true
type: pages
post_image:
- "/images/allbsuploads/2013/01/book-art1.jpg"
---

At this time, the image and video verticals in search engine results pages (SERPs) do not yet tend to be as hotly contested over as the textual content elements of SEO. Yet, video and images both make up part of the prime real estate that is the first page of search results.

&nbsp;

[<img class="size-medium wp-image-953 alignright" src="/images/allbsuploads/2013/01/book-art-SERP-300x218.png" alt="Book Art" width="300" height="218" />](https://www.google.co.uk/search?hl=en&tbo=d&q=book+art)

(Screen grab of the Google results when searching for &#8220;book art&#8221; &#8211; the image results take a prominent position on the first results page, and so can potentially be a valuable tool for boosting organic search results for an online presence)

&nbsp;

<span style="text-decoration: underline;">Key considerations</span>

1) Alt attribute &#8211; this has for some time been a popular focus for descriptive keywords to provide context for the image.

2) Filename &#8211; also a valuable vehicle for providing image context (hyphens considered a better separator than underscore, space or plus), though can be logistically difficult to undertake for websites containing a considerable quantity of images, such as for an online retailer.

3) File size &#8211; google are understood to have incorporated site speed in rankings, i.e. page load is a ranking factor &#8211; and so good practice around images optimisation are an important part of page load and hence potentially the overall page rank.

&nbsp;

**<span style="text-decoration: underline;">Dynamic Imaging Systems</span>**

I&#8217;ve been fortunate to work with some of the leading Dynamic Media Platforms for over 5 years now, and one of the numerous benefits is that they can help with #2 and #3 above.

**#2 Decoupling the source asset from the image request** : For example, with the Amplience Dynamic Media System a pre-processing rule can be used to de-couple the image request from the asset itself. Both of the following URLs are actually requests for identical images (the original file was called Butterfly.jpg (though the image extension/format is also dynamic)):

http://images.amplience.com/i/bendemo/Butterfly.jpg

<a title="http://images.amplience.com/i/bendemo/Butterfly/awesome-wordy-SEO-friendly-filename.jpg" href="http://images.amplience.com/i/bendemo/Butterfly/awesome-wordy-SEO-friendly-filename.jpg" target="_blank">http://images.amplience.com/i/bendemo/Butterfly/<strong>awesome-wordy-SEO-friendly-filename</strong>.jpg</a>

Which means you can consider SEO strategies which can utilise a similar control mechanism for (apparent) filenames as for Alt attributes.

**#3 Image Optimisation** : Many sites still undertake a batch process to create their images in pre-determined sizes and formats, and historically this may have minimal impact on the business-as-usual workflow, ongoing maintenance, and iterative enhancement. However, the last 5 years has seen an exponential shift in the divergence of the devices and environments used to browse the internet, and especially the recent rise of mobile and tablet use, and the significance of their owners for your site traffic (especially in an eCommerce environment). The ability to adapt your page to suit different screens and resolutions (typically through a responsive layout) or to adapt your payload/page weight for varying bandwidths has probably never been more essential.

The ability to dynamically apply image manipulation controls through the HTTP request for an asset, means that you can make refinements to the rich media aspects of your page and instantaneously see results (for example across every single product image on an eCommerce site with hundreds of thousands of products). For example you could resize an image, change it&#8217;s format, apply varying levels of compression, and readjust the visual quality of the asset through sharpening , all in a single image request, using the following querystring parameters:

?w=300&qlt=85&unsharp=0,1,1,7

<a title="Optimised awesome wordy SEO friendly filename" href="http://images.amplience.com/i/bendemo/Butterfly/awesome-wordy-SEO-friendly-filename.jpg?w=300&qlt=85&unsharp=0,1,1,7" target="_blank"> http://images.amplience.com/i/bendemo/Butterfly/awesome-wordy-SEO-friendly-filename.jpg?w=300&qlt=85&unsharp=0,1,1,7</a>

Reducing the qlt level, and adjusting the sharpening to compensate means that for your mobile/low bandwidth visitors you can **control the image file size**, without compromising much at all on the visual quality of your assets (especially on say a search results or product lister page which utilises a large number of images).

&nbsp;

(All views expressed are my own, and do not necessarily reflect those of my employer)

&nbsp;

Hat-tip to this article, which finally prompted me to finish this post:

webdesign.tutsplus.com/articles/general/optimizing-images-for-seo/
