var posts=["2024/11/03/Geely/","2024/11/27/vue/","2024/10/20/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };