---
layout: post
title:  "Adblock Detection"
date:   2015-12-10 9:12:00 -0500
categories: javascript
---

One way to detect the presense of an ad blocker if you're using google adsense on your website is to check if google_jobrunner is defined on your page. It should be undefined and never loaded if an adblocker is present. The code below uses a setTimeout() to let the google adsense javascript download and create a new instance. 

{% highlight javascript %}
<script>
  window.onload = function() {
    setTimeout(function() {
      if ( typeof(window.google_jobrunner) === "undefined" ) {
        console.log("ad blocker installed");
      } else {
        console.log("no ad blocking found.");
      }
    }, 10000);  
  };
</script>
{% endhighlight %}

Another pretty neat detection method is loading an external file on your server called 'ads.js' with only one line of code which is a variable definition. The idea here os that an ad blocker will prevent the network request and the variable will be undefined.

**Ads.js content**

{% highlight javascript %}
var canRunAds = true;
{% endhighlight %}


**Your main code**

{% highlight html %}
<html>
  <head>
    <script src="/js/ads.js"></script>
  </head>
  <body>
    <script>
      if( window.canRunAds === undefined ){
        // adblocker detected, show fallback
        showFallbackImage();
      }
    </script>
  </body>
</html>
{% endhighlight %}

The solution I ended up using was a library called fuckAdBlock. It has a few customizable options like continuous polling, calling on look and various callback methods. Check out a sample below. The full library can be grabbed at github

{% highlight javascript %}
fuckAdBlock.setOption({
    debug: true,
    checkOnLoad: false,
    resetOnEnd: false
});

fuckAdBlock.onDetected(adBlockDetected);
fuckAdBlock.onNotDetected(adBlockNotDetected)
{% endhighlight %}

[Ad Blocker GitHub](https://github.com/sitexw/FuckAdBlock/releases)