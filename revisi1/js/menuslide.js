    
	/*Menu-toggle*/
	/* Clicked */
    /*$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
		$("#menu-toggle").hide();
		//$("#menu-toggle2").removeAttr("style");
    });
	
	$("#menu-toggle2").click(function(e) {
		//alert('Alert!!');
        e.preventDefault();
        $("#wrapper").toggleClass("active");
		$("#menu-toggle").show();
    });
	
	$(".navbar-toggle").click(function(e) {
		
        e.preventDefault();
        $("#wrapper").toggleClass("active");
		$("#menu-toggle2").attr("style","display:none");	
    });
	*/
	
	/* Hovered */
	$("#menu-toggle").hover(function() {		
		$("#wrapper").removeClass("active").animate({left:20},500);		
	});
	if(screen.width > 768){
		$("body, ul.nav li").click(function(e) {
			$("#wrapper").addClass("active").animate({left:0},1000);
		});
		
		/*Scroll Spy*/
   		 $('body').scrollspy({ target: '#spy', offset:80});

	}
	
	$(".navbar-toggle").hover(function(e) {
		//alert('Alert!!');
			$("#wrapper").removeClass("active").animate({left:20},500);
    });
	
    
    /*Smooth link animation*/
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });