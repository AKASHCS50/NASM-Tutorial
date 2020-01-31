$(document).ready(function() {
    $("#nav-icon").click(function() {
        $(this).toggleClass('open');
    });
});


$(document).ready(function() {
if($(window).width() >= 760)
{
      $("#sidebarCollapse").click();      
}});

$(function() {

    var $sidebar   = $("#sidebar"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 90;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });
    
});