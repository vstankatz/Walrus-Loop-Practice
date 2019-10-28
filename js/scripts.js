$(document).ready(function() {

  var tags = ['h1', 'p', 'img'];


  var words = ['header', 'paragraph', 'image'];

    tags.forEach(function(tag, i) {
      $(tag).click(function() {
        alert("This is a " + words[i]);
      });

  });
});
