---
layout: single
author_profile: true
type: pages
title: URL Schemes and 1Writer - Jekyll workflow
date: 2016-11-06T2:09:00+00:00
post_image: /images/posts/default.png
permalink: /2016/11/06/URL-Schemes-and-1Writer---Jekyll-workflow
categories: [general]
tags: [none]
sidebar:
    nav: "blog_sidenav"
---
The conclusion of [yesterday's post](../05/Jekyll-Markdown-Skeleton-automation-with-Workflow-App) was an output URL Scheme from Workflow App. :

![Workflow App - URL Scheme](/images/posts/NaBloPoMo6-workflow-url-scheme.jpg)

URL Schemes are something I'd not explored until recently. URL Schemes enable the opening of one application from another application. But more than that, they can enable you to perform various actions as that application opens (dependant on the URL Scheme support that was built into that application's development.

Looking at the output from the Workflow app includes the app to be opened 'onewriter', the 'name=' of the document that we will be creating, and the 'text=' containing all of the url-encoded text that will form the initial text in our new document. Url-encoded, because all of these details are being passed across via URL Scheme, which is in effect something which we will be passing through Safari.  

for the last few years, the lovely iA Writer was my markdown/focused writing/ plain text editor of choice, and had thoroughly enjoyed using ... however, some aspects of their support for URL schemes turned out to be somewhat lacking for this workflow:
![iA Writer - tweet](/images/posts/NaBloPoMo6-iawriter.jpg)

So, after a little googling, I came across [1Writer](http://1writerapp.com/) which has much more up to date [support for URL Schemes](http://1writerapp.com/docs/urlscheme).

A potentially even ore interesting aspect to 1Writer is its Actions. Which enables a combination of URL Schemes and Javscipt for you to extend the capabilities of the app.

>"1Writer has a powerful action system. It comes with a ton of built-in actions. Generate a link to share your document in plain text or PDF. Pick your notebook, add tags, and turn a text selection or the entire document into a new, rich-text Evernote note. Email your document in plain text, formatted text or PDF, and much more. **You can create even more powerful custom actions using URL scheme or JavaScript - text manipulation, replace the clipboard contents, perform a find & replace, insert a document template, look up synonyms - the possibilities are endless.**"

It has an [Action Directory](http://1writerapp.com/actiondir) of existing actions, which you can also to share your own actions with the community.  

I'll be talking about an Action I shared relating to Responsive Images in a later post, but the first action I started using for this workflow, was one to pass on my newly created blog post .md file to Github via my iOS Git client of choice Git2Go.

![1Writer Actions 1](/images/posts/NaBloPoMo6-actions1.jpg)

![1Writer Actions 2](/images/posts/NaBloPoMo6-actions2.jpg)

The result of running this action, is the use of another URL Scheme command:

```
gittogo://repositories/github/bseymour/bseymour.github.io/files/new?content=[text]&path=_posts/[name]
```

I just used that action, to push this post to Github using Git2Go ... more about Git2Go tomorrow :)