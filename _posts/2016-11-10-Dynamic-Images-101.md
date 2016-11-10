---
layout: single
author_profile: false
type: pages
title: Dynamic Images 101 - NaBloPoMo &#35;10
date: 2016-11-10T2:09:00+00:00
post_image: /images/posts/NaBloPoMo10-th.png
permalink: /2016/11/10/Dynamic-Images-101
categories: [general]
tags: [NaBloPoMo]
sidebar:
    nav: "nablopomo_blog_sidenav"
---
I mentioned 'Dynamic Imaging' systems in [yesterday's post](../09/Responsive-Images-101). While these services are growing in popularity, they are still somewhat niche, yet they have the potential to be extremely valuable to anyone working on websites that contain images, so I wanted to give a brief overview.

# Single Master Asset
Dynamic Imaging systems are SaaS services, which typically take the approach where a high-resolution ‘master asset’ is used to generate the image variants server-side at *request-time*.

Typically, the image control commands are passed in via the HTTP/S request for a given image variant, using either a pseudo- directory-path (.../800px/image.jpg) or querystring parameters to direct the commands. Here we are requesting the image in a given format, at a specifid size, compression level and applying sharpening:

```
/image.jpg?width=800

/image.jpg?width=600&quality=75

/image.jpg?width=400&quality=75&sharpening=0,1,1,7
```

![Dynamic Imaging - resize](/images/posts/NaBloPoMo10-resize.png)


# Stop Forking Your Content
Having all-variants derived from a single master, means that if you update that master, then all of the derivates will be automatically updated, so avoiding complex synchronisation and maintenance issues, leading to fantastic  flexibility in the delivery of our image needs. However, this does have the potential to push a much greater load on to your servers, and so you need to ensure that you’ve architected a robust and preferably auto-scaling solution, ideally in conjunction with a Content Delivery Network (CDN) to handle some of the scalability and resilience concerns.

Depending on how they are implemented, **other benefits** of a Dynamic Imaging Solution might be:

• Future format support: When the next new uber-file-format is released, provided we can  and a way to support it with our Dynamic Imaging solution, then all we need to do is tweak our code to add it to the image candidates referenced in the srcset or picture element, and we can readily start supporting it.
For example: .../image.bef or .../image?format=bef
(Where ‘bef’ is some imagined future format: ‘Best Ever Format’)

• Complex Manipulation: Applying colour filters or image compositing on the server side means that you can provide more complex image variants and treatments without needing to round- trip the process through your desktop applications, which could again introduce content forking

• Image SEO: Some solutions can also support pre-processing rules to facilitate the decoupling of your file naming convention and photography work ows from the image requests that you use in your page templates using ‘apparent image requests’. This means that the request for image123.jpg could be re-formed with greater contextual relevance, and also language variations:

```
.../image123/contextually-relevant-description.jpg

.../image123/kontextrelevante-beschreibung.jpg

.../image123/disgrifiad-cyd-destun-perthnasol.jpg
```


• Point of Interest: Some solutions provide support for additional metadata, such as encoding the Point of Interest of an image, such that it can be leveraged through the image request, while being managed through the Dynamic Imaging system. The image below takes you to a live example:

[![Point Of Interest](/images/posts/NaBloPoMo10-poi.png)](http://respimg.es/eg/priDI/)

presets or template for business control





Having worked with several [industry-leading global Dynamic Imaging systems](http://amplience.com/products/dynamic-media/) over the 10 years, the recent responsive images support goes a long way towards what I’ve been waiting for, and where I think we see more potential.

The srcset/sizes attributes enable the User Agent (browser) to select the most suitable asset from a list of available image candidates based on device pixel ratio and viewport width.

The picture element adds to this, enabling designers and developers to exert greater degrees of control over the delivered imagery, including art direction, depending on viewport width and of further contexts, such as device orientation and supported  le types.

Meanwhile, Dynamic Imaging systems enable us to avoid
the risks and limitations of forking our content through batch or manual processes. At request-time, they allow us to take that single master asset and dynamically transform it into the almost unlimited variants which we can then use to form our image candidates.

![Dynamic Imaging - Responsive Images](/images/posts/NaBloPoMo10-PRI.png)
