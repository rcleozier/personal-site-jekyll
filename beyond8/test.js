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
        var caption = posts[i]['photo-caption'];
        var image = posts[i]['photo-url-1280'];
        var photos = posts[i]['photos'];
        var images = [];

        if (photos) {
          for (var x = 0; x < photos.length; x++) {
              images.push(photos[x]["photo-url-1280"]);
          }
        }

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
          'images': images,
          'className': 'feed-item',
          'target': 'feed-item-' + i,
        };

        var render = [post];
        this.renderPost(render);
    };
  }

  this.renderPost = function(posts) {
    var markup = "<div class='${className}'> <p class='feed-title'>${title}</p><img src='${image}'/> <div id='${target}'> </div> <p class='feed-caption'> ${caption} </p></div>";
    $.template( "movieTemplate", markup );
    $.tmpl( "movieTemplate", posts )
     .appendTo( "#feed" );

     var target = '#' + posts[0].target;
     for (var y = 0; y < posts[0].images.length; y++){
        $(target).prepend($('<img>',{id:'theImg',src:posts[0].images[y]}));
     };
  };


};
