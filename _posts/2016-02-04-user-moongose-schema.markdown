---
layout: post
title:  "Creating a Mongo data schema"
date:   2016-02-04 9:12:40 -0500
categories: javascript, mongodb
---

#####Creating a schema

I've been tinkering around with creating a user authentication flow in node.js. The first step for me was creating a schema to store user information in Mongo.

I choose to go with Mongoose as my Mongo DB wrapper.

Here is a short snipped of the user schema i created. I'll update the post later as I fully complete the flow

The example below demonstrates creating a user Schema using Mongoose 
{% highlight javascript %}
	var userSchema = new mongoose.Schema({
	  email: {
	    type: String,
	    unique: true,
	    required: true
	  },
	  name: {
	    type: String,
	    required: true
	  },
	  hash: String,
	  salt: String
	});
{% endhighlight %}

Below are the supported types

<ul>
	<li>String</li>
	<li>Number</li>
	<li>Date</li>
	<li>Buffer</li>
	<li>Boolean</li>
	<li>Mixed</li>
	<li>ObjectId</li>
	<li>Array</li>
</ul>
