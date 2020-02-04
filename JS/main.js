$(document).ready(function() {
    $("#nav-icon").click(function() {
        $(this).toggleClass('open');
	 $("#sticky-footer").css({
    'width': ($("#sidebar").width() + $("#sticky-footer").width() + 'px')
  });
    });
});


$(document).ready(function() {
if($(window).width() >= 760)
{
      $("#sidebarCollapse").click();      
}});


$(document).ready(function() {

});