---
layout: post
title:  "Creating a Mongo data schema"
date:   2016-02-08 8:13:41 -0500
categories: javascript, phonegap
---

#####Local notifications in phonegap

At some point in your applications life span, you may want to send notifications to users when they're not using your app. Traditionally, you'll send a push notification to either specific or all users of your app using a push notification service like Amazons SNS. 

[Amazon push notifications](https://aws.amazon.com/sns/)

But sometimes you can get away with using much simpler local notifications that don't require using a push notification service. You can use local notifications for in example in a to do list app. When a certain task is approaching its due date, you send the app user a push notification. You can schedule the notifcation when the to do list item is created, or after the user edits a to do list item by attaching a due date to it.

So if you're using phonegap, here's a quick way to add local notifications to your app in about 15 minutes.

First the the Local Notification plugin to phone either through build or through command line installation.

Phonegap build installation
{% highlight html %}
<plugin name="de.appplant.cordova.plugin.local-notification" spec="0.8.1" source="pgb" />
{% endhighlight %}

Adding localnotification via command line installation
{% highlight html %}
cordova plugin add https://github.com/katzer/cordova-plugin-local-notifications
{% endhighlight %}

Once you've got the plugin installed, let's get started on scheuding local notifications. In the first example below, we're going to set up an immieduate notifcation that runs for example when a user performs an action within your app.

Setting up an immediate notifcation
{% highlight javascript %}
cordova.plugins.notification.local.schedule({
    id: 1,
    text: "Single Notification",
    data: { user:me }
});
{% endhighlight %}

Scheduled notification
{% highlight javascript %}
var schuduled  = new Date(1465126335280); // June 05 1016
cordova.plugins.notification.local.schedule({
    text: "June 5th Notification for someevent",
    at: schuduled,
    led: "FF0000",
    sound: null
})
{% endhighlight %}

Using this local notification plugin, you can also schedule multiple notifications in one call by passing an array of notification objects into the schedule method.

Read more about localnotifications in phonegap below

[LocalNotifications Github](https://github.com/katzer/cordova-plugin-local-notifications/)
