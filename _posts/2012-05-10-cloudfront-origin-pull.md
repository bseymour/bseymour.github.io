---
layout: single
author_profile: true
type: pages

title: Origin pull on Amazon Cloudfront
date: 2012-05-10T22:36:34+00:00
permalink: /2012/05/10/cloudfront-origin-pull/
post_image:
  - /images/allbsuploads/2012/05/Red_Fox_sq.jpg
categories:
  - HEADER
  - quicktip
---
Since mid 2010 Amazon Web Services Cloudfront CDN has supported origin pull from non-S3 storage. I&#8217;ve been using Cloudfront for some time, but always S3 based objects.

Steps to set up Amazon Cloudfront for origin pull on non-S3 objects:

Create a Cloudfront distribution (I do this via Cloudberry S3 Explorer Pro), setting the location of the non-s3 server &#8216;mydomain.co.uk&#8217;

Create a subdomain: img.mydomain.co.uk

Map the subdomain to the cloudfront ID -(I used my server&#8217;s cPanel&#8217;s Advanced DNS Zone editor).

img:mydomain.co.uk : qwerty12345.cloudfront.net

er&#8230; that&#8217;s it <img src="http://allbs.co.uk/wp-includes/images/smilies/simple-smile.png" alt=":-)" class="wp-smiley" style="height: 1em; max-height: 1em;" />

Now \_any\_ image previously served via:

http://mydomain.co.uk/images/myimage.jpg

Can be requested via the Cloudfront edge network using:

http://img.mydomain.co.uk/images/myimage.jpg

For example:

<a title="http://allbs.co.uk/images/Red_Fox_400.jpg" href="http://allbs.co.uk/images/Red_Fox_400.jpg" target="_blank">http://allbs.co.uk/images/Red_Fox_400.jpg</a>

is via my web server

and

<a title="http://img.allbs.co.uk/images/Red_Fox_400.jpg" href="http://img.allbs.co.uk/images/Red_Fox_400.jpg" target="_blank">http://img.allbs.co.uk/images/Red_Fox_400.jpg</a>

is via CDN origin pull.
