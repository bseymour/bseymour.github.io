---
layout: single
author_profile: false
type: pages
title: Jekyll Static Site Generator - NaBloPoMo &#35;2
date: 2016-11-02T2:09:00+00:00
post_image: /images/posts/NaBloPoMo2-th.jpg
permalink: /2016/11/02/Jekyll-Static-Site-Generator
categories: [general, blogging]
tags: [jekyll, NaBloPoMo]
sidebar:
    nav: "nablopomo_blog_sidenav"
---
As mentioned [yesterday](../01/Getting-back-into-blogging), having decided to move away from a database-driven blog site I started looking into static site generators. (Though inspired by Aral's [Breaking Things](http://www.breakingthin.gs/) I did also consider building my own locally scripted solution).  

[StaticGen](https://www.staticgen.com/) is a fantastic resource for reviewing the top Open-Source Static Site Generators, and it is so heartening to see that there are so many highly active and lovingly maintained projects.

![StaticGen screenshot](/images/posts/NaBloPoMo2-sg.jpg){:height="300px"}

Friends had recommended Middleman, and I'd seen a lot of positive writing about Jekyll, so they formed my initial (very) shortlist. After a maddeningly unproductive first attempt with Middleman a few months ago, I gave Jekyll a try, and found it much smoother running.

More details are available on the [Jekyll website](https://jekyllrb.com/)
or directly from their [github repo](https://github.com/jekyll/jekyll).

One of the joys of Jekyll is that you can just write your content in [markdown](https://daringfireball.net/projects/markdown/) which is a text-to-HTML tool, which enables you to write structured content, without the distraction of typographical formatting, or lock-in of proprietary writing apps such as Word or Pages. Here are some examples of markdown in action from [this cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

---
```
# H1
## H2
### H3
italics, with *asterisks* or _underscores_.
emphasis/ bold, with **asterisks** or __underscores__.
Links:
[I'm an inline-style link](https://www.google.com)

```

You can also include standard HTML as part of your markdown, so it gives great flexibility, and is especially useful when migrating existing content from a system, where you might not be able to guarantee the cleanliness of your content.  

As an extra bonus, Github also uses Jekyll under the covers for it's project pages, and effectively provides free hosting via '[GitHub-pages](https://pages.github.com/)' (a.k.a. gh-pages), with a simple-to-get-started-with automatic regeneration workflow when you commit new content to the repo for your gh-pages site - but more on that tomorrow.
