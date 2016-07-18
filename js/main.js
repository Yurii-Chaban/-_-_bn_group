$(function () {
	$('.hidden-menu li a').each(function () {
	    var location = window.location.href;
	    var link = this.href;
	    var result = location.match(link);
	    if(result) {
	    $(this).addClass('active');
	    }
	});
});
$(function () {
    $('.dropdown-content li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        var result = location.match(link);
        if(result) {
        $(this).addClass('dropdown-active');
        }
    });
});
$(function () {
    $('.footer-menu li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        var result = location.match(link);
        if(result) {
        $(this).addClass('active-footer');
        }
    });
});
$(function () {
    $('.services-list li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        var result = location.match(link);
        if(result) {
        $(this).addClass('active-services');
        }
    });
});
$(function () {
    $('.dropdown-content-black li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        var result = location.match(link);
        if(result) {
        $(this).addClass('black-active');
        }
    });
});
$(function () {
	 $('.services-content-list ul a:first-child').each(function () {
	     var location = window.location.href;
	     var link = this.href;
	     var result = location.match(link);
	     if(result) {
	     $(this).addClass('serices-actived');
	     }
	 });
});