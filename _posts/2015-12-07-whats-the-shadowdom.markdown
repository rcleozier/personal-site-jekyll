---
layout: post
title:  "What's The Shadow Dom"
date:   2015-12-07 12:40:00 -0500
categories: html
---

You've probably heard the term shadow dom often come up quiet often as of late. What exactly is it?

Shadow DOM refers to the ability of the browser to include a subtree of DOM elements into the rendering of a document, but not into the main document DOM tree. 

##### If you've ever used the <video> tag then you've have interacted with the shadow dom.

{% highlight html %}
	<video src="http://craftymind.com/factory/html5video/BigBuckBunny_640x360.mp4" controls></video>
{% endhighlight %}

If you take a look at the source of the video, you'll see the html actual mark up that makes up video. Including the elements that make up the play button, scrubber bar and actual viewing area.

The shadow dom introduces a new element called a shadow root. A shadow root is rendered in an element that's called a shadow host.

#### Creating a shadow root and host

{% highlight html %}
<div>This is now the shadow host!</div>
<script>
  var host = document.querySelector(‘div’);
  var root = host.webkitCreateShadowRoot();
  root.textContent = ‘Hello, Im the shadow root!’;
</script>
{% endhighlight %}

In the example above we're adding content to the shadow dom. Content shouldn't be put into the shadow dom because it will not be accessible by search engines or screen readers.

The shadow dom is currently only support by Chrome and Opera.

[Shadow dom Compatibility](http://caniuse.com/#search=shadow%20dom)