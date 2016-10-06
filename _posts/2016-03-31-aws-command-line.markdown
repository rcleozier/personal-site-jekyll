---
layout: post
title: "AWS Command Line Tools"
date: 2016-03-31 8:13:41 -0500
categories: linux
---

#####AWS Cli

Recently I wrote a php script that would run daily using a cron tab to back up images to Amazon S3. The process required me to include the AWS PHP package, write PHP code that opens a directory, loops through every file and push each image to S3 even if it was already present on S3.

After further research I ran into the AWS ClI. The AWS CLI supports copying, moving, and syncing from Amazon S3 to Amazon S3 all from the command line.

AWS cli commands are just like running linux commands from your terminal.

##### Installing

There are multiple ways to install AWS Cli on your machine. I ended up using pip to install the CLI on my VPS.

[Installing CLI](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)

###### Configuration

After installing the CLI, you'll have to configure it using your AWS Api Keys. Below are the commands used to configuring the CLI with your api keys

{% highlight linux %}
$ aws configure
AWS Access Key ID [None]: [accessKeyId]
AWS Secret Access Key [None]: [accessKey]
Default region name [None]: [regionName]
Default output format [None]: ENTER
{% endhighlight %}

###### Bucket Management

Creating Buckets
{% highlight linux %}
	 aws s3 mb s3://bucket-name
{% endhighlight %}

Removing Buckets
{% highlight linux %}
	$ aws s3 rb s3://bucket-name
{% endhighlight %}

Listing Buckets
{% highlight linux %}
	$ aws s3 ls
{% endhighlight %}

Syncing
The command that removed about 200 lines of code for me into one single command is the sync command. Sync copies missing or outdated files or objects between the source and target. With the --delete option you can remove files from the target not present in the source.

{% highlight linux %}
	$ aws s3 sync . s3://my-bucket/path
{% endhighlight %}


Learn more about Amazons AWS CLI
[AWS CLi](https://aws.amazon.com/cli/)
