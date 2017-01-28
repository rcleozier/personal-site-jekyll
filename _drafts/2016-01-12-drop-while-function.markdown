---
layout: post
title:  "Javascript drop while function"
date:   2016-01-06 4:21:40 -0500
categories: javascript, algorithms
---

##### Spoiler alert
My dropWhile solution to a kata on Codewars.com. I decided to share my answer here just a reference for anyone who doesn't know about Codewars and katas. My function definitely has room for improvement and simplicity.

##### Description
Yet another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to remove the longest prefix of elements such that the predicate is true for each element. We'll call this the dropWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.

{% highlight javascript %}
	function dropWhile(arr, pred) {
	  finalArr = [];
	  found = false;
	  arr.forEach(function(val) {
	     if (!pred(val) && !found) {
	       finalArr.push(val);
	       found = true;
	      } else if (found)
	        finalArr.push(val);
	      
	  });
	  
	  return finalArr;
	}
{% endhighlight %}
