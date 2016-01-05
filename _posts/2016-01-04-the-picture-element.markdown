---
layout: post
title:  "The Picture Element"
date:   2016-01-04 8:22:45 -0500
categories: html
---

Let say you wanted to include an image on your webpage, that would be sized accordingly to the users browser, it would probably go something like this.

{% highlight html %}
img {
    max-width: 100%;
    height: auto;
}
{% endhighlight %}

The method above supports resizing the image for browsers of different sizes. It doesn't account for bandwidth for mobile browsers, as the same image is loaded regardless of device, just scaled. What if we could use the same image, but served not only a scaled version, but also an optimized version of our image?

Enter the <picture> element. The picture element allows you to load different images based on media types.

{% highlight html %}
<picture>
    <source srcset="smaller.jpg" media="(max-width: 768px)">
    <source srcset="even-smaller.jpg" media="(max-width: 380px)">
    <source srcset="default.jpg">
    <img srcset="default.jpg" alt="My image">
</picture>
{% endhighlight %}

It allow you to load an entirely different image depending on:

- Media query results e.g. viewport height, width, orientation
- Pixel density

Although the picture tag is not nativity supported in all browsers, it works in about most modern browsers from desktop and mobile.

[Current accessibility across browsers](http://caniuse.com/#feat=picture)