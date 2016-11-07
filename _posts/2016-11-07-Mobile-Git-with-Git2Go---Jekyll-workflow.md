---
layout: single
author_profile: true
type: pages
title: Mobile Git with Git2Go - Jekyll workflow
date: 2016-11-07T2:09:00+00:00
post_image: /images/posts/default.png
permalink: /2016/11/07/Mobile-Git-with-Git2Go---Jekyll-workflow
categories: [general]
tags: [NaBloPoMo]
sidebar:
    nav: "blog_sidenav"
---

The last step in yesterday's post described using a 1Writer action to pass my markdown file into Github where it will trigger an automatic Jekyll regeneration of my site on GitHub-pages. In a mobile context my Git client of choice for iOS is [Git2Go](http://git2go.com/).

![Mobile context](/images/posts/NaBloPoMo7-mobile.jpg)   

In a similar vein to 1Writer,  Git2Go has  great  URL Scheme implementation, such that the 1Writer action can pass in my new file, place it in the desired github (or Bitbucket) repo and directory location, and hence make it instantly available to commit

![Send to Git2Go](/images/posts/NaBloPoMo7-action.jpg)

```
gittogo://repositories/github/bseymour/bseymour.github.io/files/new?path=_posts/[name]&content=[text]
```

I can also upload my post images via Git2Go,  though I need too manually rename the image from the default 'Asset.jpg' to the desired filename for the post.

![Git2Go asset rename](/images/posts/NaBloPoMo7-git2go-commit.jpg) 

... and of course I can also edit my files, directly within Git2Go

![Git2Go edit](/images/posts/NaBloPoMo7-edit.jpg)

wherever I am... which this morning includes over a mocha in Hyde Park

![mobile in hyde park](/images/posts/NaBloPoMo7-hyde-park.jpg)





