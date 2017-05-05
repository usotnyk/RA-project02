var options = ['home', 'opinion', 'world', 'national', 'politics', 'upshot', 'nyregion', 'business', 'technology', 'science', 'health', 'sports', 'arts', 'books', 'movies', 'theater', 'sundayreview', 'fashion', 'tmagazine', 'food', 'travel', 'magazine', 'realestate', 'automobiles', 'obituaries', 'insider']

//6. Function to be called when no articles are available from nyt

var dispalyEmptyArticlesView = function() {
  $('#error').show();
};

//5. looping through filtered array of articles to render HTML

var renderArticlesAsHtml = function (arrayToRender) {
  $("header").addClass("resize");

  if (arrayToRender.length == 0) {
    dispalyEmptyArticlesView(); //create div to display if articles array is returned empty (give class .rendered);
    return;
  }

  var clone = $("#clone").clone();
  for (var i = 0; i < arrayToRender.length; i++) {
    var abstract = arrayToRender[i].abstract;
    var imageUrl = arrayToRender[i].multimedia[4].url;
    var articleUrl = arrayToRender[i].url;
    $(clone).children("p").text(abstract);
    $(clone).removeAttr("id");
    $(clone).attr("href",articleUrl);
    $(clone).addClass("rendered");
    $(clone).css('background-image', 'url("' + imageUrl + '")');
    $(".articles-container").append(clone[0].outerHTML);
  }

};

//4. extracting and saving 12 articles that have photos
var getFilteredArticles = function (receivedData) {
    var allArticles = [];
    var articles = receivedData['results'];
    var filteredArticles = articles.filter(function(article) {
      return article.multimedia.length > 0;
    }).slice(0, 12);
    renderArticlesAsHtml (filteredArticles);
}

//3. Shows loading gif when AJAX request is made and hides it after - independent function

$(document).ajaxStart(function(){
    $('#loaderGif').show();
 }).ajaxStop(function(){
    $('#loaderGif').hide();
 });

//2. onReadyFn sends get request to NYT and receives result
var onOptionSelected = function (someSection) {
    $(".rendered").remove();
    if (someSection == undefined) {
      return;
    }
    
    var selectedSection = someSection;
    var url = "https://api.nytimes.com/svc/topstories/v2/" + selectedSection + ".json";
    url += '?' + $.param({
      'api-key': "0005835ede544efe89fbe3d6b4f8c386"
    });

    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(topStories) {
      getFilteredArticles(topStories);
    }).fail(function(err) {
      console.error(err);
    });

}
/* How to refactor:
var init = function () {
  init: {

  },
  call : {
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(topStories) {
      console.log(topStories);
      getFilteredArticles(topStories);
    }).fail(function(err) {
      throw err;
    });
  },
  url : {
    var url = "https://api.nytimes.com/svc/topstories/v2/" + selectedSection + ".json";
    url += '?' + $.param({
      'api-key': "0005835ede544efe89fbe3d6b4f8c386"
    });
  }
}
init.call();
*/

//1. Dynamically populating select options from an array and passing the value of selected option to onOptionSelected

$(document).ready(function(){
    var optionClone = $("#optionClone").clone();
    for (var i = 0; i < options.length; i++) {
        var value = options[i];
        var textField = options[i][0].toUpperCase() + options[i].slice(1);;

        $(optionClone).attr("value",value);
        $(optionClone).text(textField);
        $(optionClone).removeAttr("id");
        // $(optionClone).removeAttr("disabled");
        $("#selectedSection").append(optionClone[0].outerHTML);
      }
  $("#selectedSection").heapbox({
    "title":"Select something...",// http://blog.bartos.me/heapbox-0-9-4-released/
    'onChange':function(val){
      onOptionSelected(val)
    }
  });
});