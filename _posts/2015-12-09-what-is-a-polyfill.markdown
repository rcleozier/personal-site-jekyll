---
layout: post
title:  "What is a polyfill?"
date:   2015-12-07 7:30:00 -0500
categories: html
---

In my last post, I discussed using Promises natively in Javascript without the need for jQuery. The exception was IE, which does not natively support Promises without the use of a polyfill. 

#### What's a polyfill?

A polyfill is added functionality that provides a fall back for features that may not be supported by a browser. If the browser doesn't support an Api, then the polyfill installs its own implementation. Also a polyfill can be written in another language and is not just limited to Javascript. A shim is often used interchangeably to define a polyfill but whats a shim?

**A Shim**

A shim, on the other hand, refers to any piece of code that performs interception of an API call and provides a layer of abstraction. It isn't necessarily restricted to a web application or HTML5/CSS3.

A complete list of cross browser polyfills is provided by Paul Irish below
[HTML5 Cross Browser Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills)