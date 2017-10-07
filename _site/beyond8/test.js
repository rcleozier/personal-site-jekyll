var Feed = function() {

  this.url = 'http://beyond8blog.tumblr.com/api/read/json?num=12&callback=?';
  this.data = {};

  this.init = function() {
    var that = this;

    $.getJSON(this.url, function(data) {
      var posts = data.posts;

      that.converted(posts);
    });
  };

  this.converted = function(posts) {
    for (var i = 0; i < posts.length; i++) {
        console.log(posts);

        var caption = posts[i]['photo-caption'];
        var image = posts[i]['photo-url-1280'];

        if (!image) {
          continue;
        }

        if (caption) {
          caption = caption.replace(/<{1}[^<>]{1,}>{1}/g," ");
        }

        var post = {
          'title' : posts[i]['reblogged-from-title'],
          'image': image,
          'caption': caption,
          'date': posts[i]['date'],
          'url': posts[i]['url'],
        };

        var render = [post];
        this.renderPost(render);
    };
  }

  this.renderPost = function(posts) {
    var markup = "<div class='feed-item'> <p class='feed-title'>${title}</p><img src='${image}'/> <p class='feed-caption'> ${caption} </p> <a href='${url}'> Read More </a></div>";
    $.template( "movieTemplate", markup );
    $.tmpl( "movieTemplate", posts )
     .appendTo( "#feed" );
  };
};
