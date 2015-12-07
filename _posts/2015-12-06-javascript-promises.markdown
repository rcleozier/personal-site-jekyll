---
layout: post
title:  "Javascript Promises"
date:   2015-12-06 11:27:00 -0500
categories: javascript
---

### Promises are native in Javascript

I had an interesting problem to solve the other day. I wrote a function that would pass data about a video 
back to the code that initialized the video player. This function could be called immediately after initializing 
the video player, but the value returned by the function wouldn't be defined until after the video was downloaded.

On way to solve this was to tell the developers planning to use this method to wrap this function in a settimeout to 
give it time to download the video information, the better option was to use promises.

I went for Jquery promises intially having worked with them many times before.

{% highlight javascript %}
var div = $( "<div>" );
 
div.promise().done(function( arg1 ) {
  // Will fire right away and alert "true"
  alert( this === div && arg1 === div );
});
{% endhighlight %}

But now I would have to include jQuery in order to get it to work. So i decided to use native javascript promises instead.


{% highlight javascript %}
var promise = new Promise(function(resolve, reject) {
    resolve("Data is ready so resolve!");
});

promise.then(function(result) {
  console.log(result); // "We have the data!"
}, function(err) {
  console.log(err); // Error: "It broke"
});

{% endhighlight %}

The downside is that promises are not nativly supported in any version of IE. Go figure. You'll have to use a polyphill. 