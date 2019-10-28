$(document).ready(function() {

  var tags = ['h1', 'p', 'img'];


  var words = ['header', 'paragraph', 'image'];

  // tags.forEach(function(tag) {
  //   $(tag).click(function() {
  //     var tag = ['header', 'paragraph', 'image']
  //     tag.forEach(function(tag) {
  //       alert("This is a " + tag);
  //     });
  //
  //   });

    tags.forEach(function(tag, i) {
      $(tag).click(function() {
        alert("This is a " + words[i]);
      });

  });


  // var alerts = function(){
  //   words.forEach(function(word) {
  //     alert("This is a " + word[1];
  //   });
  // };
  //
  //
  // $("h1").click(function() {
  //   alerts();
  // });
  //
  // $("p").click(function() {
  //   alerts();
  // });
  //
  // $("img").click(function() {
  //   alerts();
  // });




});
