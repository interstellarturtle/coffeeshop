// Making the navigation bar dynamic

var nav = [
{
  link:"index.html",
  text: "HOME"
},
{
  link:"OurPromise.html",
  text: "OUR PROMISE"
},
{
  link: "Menu.html",
  text: "MENU"
},
{
  link:"OurTeam.html",
  text: "OUR TEAM"
},
{
  link:"Contact.html",
  text: "CONTACT"
}
];

$.each(nav, function(key, value){

  // Marking navigation bar items as active

  if (typeof menuItem !== "undefined" && menuItem === value.text) {
    active = "active";
  } else {
    active = "non-active";
  }

  $('.navbar-nav').append('<li class="nav-item '+ active +'"><a class="nav-link" href="' + value.link + '">'+ value.text +'</a></li>')
});


// Fetching the data for the "Menu" page from Google Spreadsheets

$.ajax({
  url: 'https://spreadsheets.google.com/feeds/list/1eiveKin8A93-RqXdI59fETjJRVSqGvUxjv82g77IiP8/1/public/values?alt=json',
  dataType: 'json',
  success: function(data) {
    $.each(data.feed.entry, function(key,value) {
      var title = value.gsx$title.$t;
      var description = value.gsx$description.$t;
      var price = value.gsx$price.$t;
      var src_image = value.gsx$picurl.$t;
      var drinkType = value.gsx$menucategory.$t;
      var drinkElement = '<div class="col-md-16 text-center"><img src="' + src_image + '" class = "img-fluid"><h4>' + title + '<br>' + price + '<br></h4><p>' + description + '</p></div>';
      if ("Hot" === drinkType) {
        $('#coffeemenu #hotDrinks').append(drinkElement);
      } else {
        $('#coffeemenu #coldDrinks').append(drinkElement);
      }

    });
  }
});
