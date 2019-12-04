//jshint esversion:6

// toggle overlay

$('.btn-container button').click(() => {
  $('#overlay').css('display', 'block');
});

$('.close-btn').click(() => {
  $('#overlay').css('display', 'none');
});


// display data

function getContent(event) {
  var target = event.target.innerHTML;
  data.forEach(item => {
    if (item.title === target) {
      $(".explanation p").text(item.content);
      $(".explanation h1").text(item.title);
    }
  });
}

$('.kategorie').mouseover(getContent);

$(".kategorie").focus(getContent);
