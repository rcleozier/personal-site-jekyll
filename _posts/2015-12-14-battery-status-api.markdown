---
layout: post
title:  "Battery Status Api"
date:   2015-12-14 7:16:00 -0500
categories: javascript
---

The battery API lets you tap into the battery status of the machine your code is running on (Support: Chrome, Firefox and Opera). With the battery api, you can retrieve current battery information and also charging status.
You can do some pretty neat things, like have your app to run more efficiently when the devices battery is almost depleted.

##### Battery Promise

{% highlight javascript %}
  navigator.getBattery().then(function(battery) {
    // battery.chargingTime 
    // battery.dischargingTime
    // battery.charging
    // battery.level
  });
{% endhighlight %}


##### Battery Events

There are also  battery events that you can listen to. These events are for when the battery charging status has changed, battery level has changed, charging total time has changed and finally discharging time has changed.

{% highlight javascript %}
  // Charing time change
  battery.addEventListener('chargingtimechange', function() {
    // battery.chargingTime "seconds"
  });

  // Discharging time change
  battery.addEventListener('dischargingtimechange', function() {
    // battery.dischargingTime "seconds"
  });

  // Charging status has changed
  battery.addEventListener('chargingchange', function() {
     // battery.charging
  });

  // Charging level has changed
  battery.addEventListener('levelchange', function() {
    // battery.level
  });
{% endhighlight %}


Read more about the battery status api below
https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API