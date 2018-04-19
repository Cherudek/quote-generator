$(document).ready(function() {

  function getQuote() {

    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

    $.getJSON(url, function(data) {
      $("#text").html(data.quoteText);
      if (data.quoteAuthor === '') {
        $("#author").html(' - Unknown');
      } else {
        $("#author").html(" - "+data.quoteAuthor);
      }
      text = data.quoteText;
      author = data.quoteAuthor;
      var quot = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' - ' + data.quoteAuthor;
       $(".twitter-share-button").attr("href", quot);
    });
    

    
   /* $(".twitter").on("click", function(a) {
      window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + text + author);
    });*/
  }
  $("#newquote").on("click", function(b) {
    getQuote();
  });
});