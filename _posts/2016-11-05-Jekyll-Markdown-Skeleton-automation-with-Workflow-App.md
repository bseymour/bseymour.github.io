---
layout: single
author_profile: false
type: pages
title: Jekyll Markdown Skeleton automation with Workflow App
date: 2016-11-05T2:09:00+00:00
post_image: /images/posts/NaBloPoMo5-th.jpg
permalink: /2016/11/05/Jekyll-Markdown-Skeleton-automation-with-Workflow-App
categories: [general]
tags: [NaBloPoMo]
sidebar:
    nav: "blog_sidenav"
---

Things are about to get a bit meta! A few days ago we talked about [how writing in markdown](../02/Jekyll-Static-Site-Generator) is pretty straight forward, however generating the appropriate front matter for Jekyll, and giving it the correct file name for it to be recognised as a blog can be a little laborious.

Standard Jekyll requires the file to be named as such: YYYY-MM-dd-blog-post-title.md

And the YML standard front matter for my Jekyll configuration is along the lines of:
---
layout: single
author_profile: false
type: pages
title: Blog Post Title
date: YYYY-MM-DDTHH:MM:00+00:00
post_image: /images/posts/post-thumbnail.jpg
permalink: /YYYY/MM/DD/Blog-Post-TITLE
categories: [general]
tags: [NaBloPoMo]
sidebar:
    nav: "blog_sidenav"
---

As you may have spotted the YYYY, MM and DD values are used repeatedly, and if we are writing the post on the date of the post, then are known by the local system that we are using.

The 'Blog Post Title' is also used several times, in both the markdown file name, the Title of the post, and in the permalink.

Hence, a workflow enabling us to pass in a 'title' and able to utilise the current date, and to re-use this values to automatically form a markdown skeleton for our post, would save us from this dull repeated task. 

Enter the Workflow App (for iOS - I'm afraid I've not tried the Android version if there is one). Once I run my app configuration it prompts me for the blog post title:

![Workflow app - enter title](/images/posts/NaBloPoMo5-workflow-title.jpg)

And then the following markdown skeleton is generated:

![Markdown Skelton](/images/posts/NaBloPoMo5-skeleton.jpg)

The above screenshot is from 1Writer, and which thanks to its URL Scheme support also automatically names the file in the correct naming convention for Jekyll.... but more on 1Writer tomorrow. For now, let's have a closer look at that Workflow App configuration.

![Worflow configuration 1](/images/posts/NaBloPoMo5-workflow1.jpg)
![Worflow configuration 2](/images/posts/NaBloPoMo5-workflow2.jpg)
![Worflow configuration 3](/images/posts/NaBloPoMo5-workflow3.jpg)
![Worflow configuration 4](/images/posts/NaBloPoMo5-workflow4.jpg)
![Worflow configuration 5](/images/posts/NaBloPoMo5-workflow5.jpg)
![Worflow configuration 6](/images/posts/NaBloPoMo5-workflow6.jpg)

The final touch was to add this workflow as an apparent app on my home screen:

![Worflow Home Screen](/images/posts/NaBloPoMo5-workflow-homescreen.jpg)

Workflow app offers sync'ing, and so once I was happy with the result, it instantly became available to use on my iPhone.

Next up, we'll talk about the onward path for using the generated markdown file - but we'll leave that for tomorrow.

Finally, here is a photo of me using this workflow, purely on my ipad, on our dining table.

![Writing on dining table](/images/posts/NaBloPoMo5-dining-table.jpg)