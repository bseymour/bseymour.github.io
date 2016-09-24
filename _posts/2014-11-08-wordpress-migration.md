---
id: 2410
title: WordPress Migration
date: 2014-11-08T23:10:18+00:00
author: Ben
layout: default
guid: http://ox10.it/allbs/?p=2410
permalink: /2014/11/08/wordpress-migration/
post_image:
  - /images/allbsuploads/2014/11/Screenshot-2014-11-09-19.54.16.png
categories:
  - general
  - handy
---
This post is only on the new location for the ALL BS site &#8211; seeing it means that the migration was successful&#8230;. and actually surprisingly painless.

I used the &#8220;all-in-one WordPress Migration&#8221; plugin.:

<a title="https://wordpress.org/plugins/all-in-one-wp-migration/" href="https://wordpress.org/plugins/all-in-one-wp-migration/" target="_blank">https://wordpress.org/plugins/all-in-one-wp-migration/</a>

Install the plugin on the original WP instance, and run the export command (go through the advanced options, maybe elect not to export the spam comments etc..) &#8211; this then gives you a .zip containing pretty much everything from your site including media assets.

&nbsp;

Then install the plugin on the fresh WP instance, and run the import using that .zip.

<img class="aligncenter size-full wp-image-2416" src="/images/allbsuploads/2014/11/Screenshot-2014-11-09-19.27.48.png" alt="Screenshot 2014-11-09 19.27.48" width="469" height="347" />

Everything seems to have worked pretty much seamlessly, with my only problem being that the some of the internal links and media base paths were set to be the new temporary WP location, ahead of the DNS changes being made. I suspect that if I&#8217;d tweaked the WP instances &#8216;general&#8217; settings ahead of running the ingestion that things would have been simpler.

My final step was to update the DNS for my domain to point at the new nameserver&#8230; and then it was a question of waiting while DNS propagation progressed. One recomendation to speed this up was to use via OpenDNS&#8217;s CacheCheck [http://cachecheck.opendns.com/ ](http://cachecheck.opendns.com/  "http://cachecheck.opendns.com/").
