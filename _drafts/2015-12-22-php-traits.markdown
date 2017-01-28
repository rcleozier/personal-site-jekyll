---
layout: post
title:  "PHP Traits"
date:   2015-12-22 7:16:00 -0500
categories: php
---

Traits are collection of methods that let you share an implementation across classes. It believe it easier to think of them as included classes or even static classes without the scope resolution operator. They can easily be imported into multiple classes. Name collisions can occur if the importing class shared a method with the same name in the imported trait. The importing class methods will implement its own defined method directly. Traits also offer multiple inheritance which isn't possible in PHP.

##### Usage

{% highlight php %}
trait Calculater {
  public function calculate() {
    return "I'm calculating"";
  }
}

class MyClass {
    use Calculater;

    function doStuff() {
      return $this->calculate();
    }
}

$calc = new MyClass;
$calc->calculate();
{% endhighlight %}