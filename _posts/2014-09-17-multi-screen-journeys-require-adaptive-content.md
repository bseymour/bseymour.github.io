---
title: Multi-Screen Journeys Require Adaptive Content
date: 2014-09-17 13:45:23 Z
permalink: "/2014/09/17/multi-screen-journeys-require-adaptive-content/"
categories:
- eCommerce
layout: single
author_profile: true
type: pages
---

Note: This post originally appeared on the blog at Amplience.com (however the images were lost using a migration).

<span style="text-decoration: underline;">A proliferation of devices</span>

The daily use of a plethora of connected devices is now becoming the norm, with eBay reporting last year that over 40% of customer transactions were multi-screen sourced, with those 21% of users who multi-screen accounting for nearly 44% of all online transactions.

[<img class="aligncenter size-large wp-image-1975" src="http://amplience.com/wp-content/uploads/2014/09/multiscreen-pie-chart-1024x329.png" alt="multiscreen pie chart" width="980" height="314" />](http://amplience.com/wp-content/uploads/2014/09/multiscreen-pie-chart.png)

Perhaps a 7” tablet over breakfast -> phone on the train -> desktop in the office -> phone again on the high street or over lunch -> then tablet or laptop again when on the settee that evening, before finally pushing the button and making that purchase.

Even if there is a tendency for the final conversion to occur on a particular group of device types, it is increasingly likely that the decision making process will have occurred across a broad range of devices and contexts i.e. browse by day and transact by night.

It’s no longer a discussion about which device or context is most important, rather an acknowledgement that many of your most important site visitors will see your site through many different devices and contexts, potentially within the same day; This puts a different texture on the trend that virtually all online growth is currently in mobile.

<span style="text-decoration: underline;">Consistency of Experience</span>

Bricks and mortar retailers go to great lengths to provide a consistent shopping experience across their different stores, often also striving for brand and experience consistency across different countries and regions. Physical constraints in the size and layout of the store may naturally lead to varying adaptations of that experience, but if the feel, organization and flow of the shopping experience can remain familiar from store to store, then visitors can feel more comfortable and at home whichever particular store they happen to find themselves in.

Providing this consistency of User Experience is perhaps even more important for your multi-screen visitors. During multiple visits across multiple devices a lack of consistency can introduce fiction and frustration into the user journey as they interact with your site content. If these visitors are returning to your site throughout the day, then it is a reasonable indicator of interest and intent, in which case they are precisely the user whose journey you would want to make as smooth as possible.

There has been a growing acknowledgement that while taking a Responsive Web Design approach may lead to additional complexity in the design and development stage of a site design that by using a common code-base and common implementation, it is much more likely that you can achieve a closer consistency of User experience, and reduce the risk of unintentional synchronization drift over time. This responsive design approach brings its own challenges, especially for rich media, where the key is to be able to have all assets, (including deep zoom, spin, video, interactive experience) available to be served in the optimal form, for all devices and contexts, both now and in the future.

A solution such as Amplience Dynamic Media, takes your single master asset, and at request-time can serve it at any size, format and quality. Some rumours suggest the Apple Watch may have a screen resolution of 386 x 480 pixels, and that its interesting Digital Crown will make it really easy to zoom in an out – so the ability to instantly request an image with the appropriate width ( product-image.jpg?w=386&h=480 ) across every single image across your product range, may well give you a competitive edge.

<span style="text-decoration: underline;">Consistency of Content – Adaptive Approach</span>

The varying specifications and technologies of different devices mean that not all solutions are appropriate for all devices, and as such we need to consider an adaptive approach to site content. For example:

Visiting the Tom Ford lipstick category page on a desktop device, rewards you with an attention-grabbing interactive short video snippet on some of the model shots:

<div id="Wordpress-Video" class="video-js vjs-default-skin vjs-paused">
  <p>
    <video id="Wordpress-Video_html5_api" class="vjs-tech" src="http://i1.adis.ws/v/bendemo/Tom_Ford_lips/mp4_480p" preload="auto" width="300" height="150"></video><img class="vjs-poster" tabindex="-1" src="http://i1.adis.ws/v/bendemo/Tom_Ford_lips?$video-600x475$" alt="" />
  </p>

  <div class="vjs-text-track-display">
  </div>

  <div class="vjs-big-play-button" tabindex="0">
  </div>

  <div class="vjs-controls">
  </div>
</div>

&nbsp;

Visiting the same Tom Ford lipstick category page on a mobile device rewards you with an experience optimized for devices with less real estate and potentially reduced bandwidth. Instead of embedded videos, you just see stunning static images which fit the available space perfectly. From a user’s perspective the content across both devices is not identical, but it is certainly consistent :

[<img class="aligncenter wp-image-1978" src="http://amplience.com/wp-content/uploads/2014/09/tom-ford-lipstick-mobile.png" alt="tom ford lipstick mobile" width="301" height="543" />](http://amplience.com/wp-content/uploads/2014/09/tom-ford-lipstick-mobile.png)

<span style="text-decoration: underline;">Consistency of Content – Image Display</span>

When we were discussing using a single master asset solution another great use-case is serving higher definition images to those devices which would benefit from them, such as the ‘retina’ display devices from Apple.

Amplience customers use ‘transformational templates’ to control the way the image is served. On a DFS category page, they are utilizing dynamic Image requests using the ‘transformational templates’ $3col\_ss$ or $3col\_retina$ where the latter means that a **high definition image** is requested and subsequently served to the retina device:

[<img class="aligncenter size-large wp-image-1980" src="http://amplience.com/wp-content/uploads/2014/09/DFS-3col-TT-1024x616.png" alt="DFS - 3col - TT" width="980" height="589" />](http://amplience.com/wp-content/uploads/2014/09/DFS-3col-TT.png)

<span style="text-decoration: underline;">Consistency of Content – Page Layouts</span>

Another example of adapting content is when different sized devices/screens warrant different layouts/designs in order to better utilize the available viewport. In these cases we are likely to need to change the layout of that content, or perhaps reduce the overall content and keep it more focused. For example, below is the same feature content, but displayed in interactive merchandising modules whose designs have been adapted to suit narrow or wide page layouts.

The design and experience is consistent, but the layout and some of the content has been adapted:

[<img class="aligncenter size-large wp-image-1983" src="http://amplience.com/wp-content/uploads/2014/09/module-womenswear-sale-comp-1024x601.png" alt="module - womenswear sale - comp" width="980" height="575" />](http://amplience.com/wp-content/uploads/2014/09/module-womenswear-sale-comp.png)

Live demo : <a title="Lookbook Demo" href="http://demo.amplience.com/customdemos/ampstore/lookbook/" target="_blank">http://demo.amplience.com/customdemos/ampstore/lookbook/</a>

In scenarios such as this, Amplience Content Services prove to be extremely powerful. We can create pieces of textual content, which can then be centrally managed and reused wherever needed. The text “Womenswear Sale” and “Get Ready for Summer” have been created as separate pieces of content within Amplience Media Platform.

The text editor enables the creation of centrally managed content, which could be xml, html, json or plain text:

[<img class="aligncenter size-full wp-image-1984" src="http://amplience.com/wp-content/uploads/2014/09/content-services-womenswear-2.png" alt="content services - womenswear 2" width="626" height="310" />](http://amplience.com/wp-content/uploads/2014/09/content-services-womenswear-2.png)

You can then map this content to where it needs to be used in the feature (you can probably see internationalised text is also supported – but that is for another blog post):

[<img class="aligncenter size-large wp-image-1985" src="http://amplience.com/wp-content/uploads/2014/09/i18n-authoring-studio-content-services-1024x570.png" alt="i18n - authoring studio - content services" width="980" height="545" />](http://amplience.com/wp-content/uploads/2014/09/i18n-authoring-studio-content-services.png)

&nbsp;

If you ever need to update that text, you can do it once, and everywhere that it is utilized will automatically then receive the updated content.

**Summary**

Centrally managed content, be it textual, images, video or interactive creative content, can provide considerable improvements to workflow efficiencies, which can reduce your time-to-site, and make it much more feasible to get your carefully crafted and cultivated content in front of eyes that matter the most, and in a consistent manner.

Our customers best provide the final word:

“Dynamic Media has transformed the speed at which we can create and deliver rich product content” commented Bruno Oghittu from Charlotte Olympia. “**Using this solution has saved approximately 85% on image and video asset management time and cost. It also has enabled us to deliver campaigns more frequently than we could have done so in the past**”.

Charlotte Olympia post here: <a title="There's no business like shoe business." href="http://amplience.com/2014/04/theres-no-business-like-shoe-business-for-charlotte-olympia/" target="_blank">http://amplience.com/2014/04/theres-no-business-like-shoe-business-for-charlotte-olympia/</a>
