/*---------------------
  menu
----------------------*/
(function () {
	$('.hamburger').on('click', function() {
		$('.bar').toggleClass('animate');
    $('.mobile-menu').toggleClass('active');
    return false;
	})
  $('.has-children').on ('click', function() {
		   $(this).children('ul').slideToggle('slow', 'swing');
       $('.icon-arrow').toggleClass('open');
	});
})();

/*---------------------
  copyright 
----------------------*/
const paragraph = `
  <p>
    &copy; ${new Date().getFullYear()}. БонБатон
  </p>
`;
  document.getElementById('copyright-year').innerHTML = paragraph;

/*---------------------
   Comments
----------------------*/
$(document).ready(function () {
  $('.testiSlide').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [{
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }]
  });
});

/*---------------------
   Booking Form
----------------------*/

var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);
if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}
var dateTomorrow = year + "-" + month + "-" + date;
var checkinElem = document.querySelector("#reservation-date");
checkinElem.setAttribute("min", dateTomorrow);

