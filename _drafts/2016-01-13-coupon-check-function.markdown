---
layout: post
title:  "Javascript Coupon Check function"
date:   2016-01-13 4:21:40 -0500
categories: javascript, algorithms
---

##### Spoiler alert
My coupon check solution to a kata on Codewars.com. The function is written to veryify a coupon based on expiration date and current date. The solution and the full description from Codewars is below.

##### Description
Your mission: 
Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false.

A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"

{% highlight javascript %}
	function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
	  if (enteredCode !== correctCode) {
	    return false;
	  }
	  
	  if (Date.parse(currentDate) > Date.parse(expirationDate)) {
	    return false;
	  }
	  
	  return true;
	}
{% endhighlight %}
