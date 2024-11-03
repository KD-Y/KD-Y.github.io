var posts=["2024/10/20/hello-world/","2024/11/03/Geely/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };