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

  //making menu item active
  // check if variable menuItem is defined AND
  // check if menuItem = value.text (your menu link name eg. "OUR TEAM")
  // if equals then mark the link as active
  if (typeof menuItem !== "undefined" && menuItem === value.text) {
    active = "active";
  } else {
    active = "non-active";
  }

  $('.navbar-nav').append('<li class="nav-item '+ active +'"><a class="nav-link" href="' + value.link + '">'+ value.text +'</a></li>')
});

$.ajax({
  url: 'https://spreadsheets.google.com/feeds/list/1eiveKin8A93-RqXdI59fETjJRVSqGvUxjv82g77IiP8/1/public/values?alt=json',
  dataType: 'json',
  success: function(data) {
  // console.log(data);
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



// <ul class="navbar-nav ml-auto">
//   <li class="nav-item">
//     <a class="nav-link" href="index.html">HOME</a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" href="OurPromise.html">OUR PROMISE</a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" href="OurTeam.html">OUR TEAM</a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" href="Contact.html">CONTACT</a>
//   </li>
// </ul>
// </nav>
