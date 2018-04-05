(function($){
    "use strict"; // Start of use strict 
	jQuery(document).ready(function($){  
		$(".search-safari").hide();
		$(".search-w").on("click", function(){
			$('.search-safari').slideToggle();
		})
		$(".search-w").on("click", function(e){
			e.stopPropagation();
		});
		$(".search-safari").on("click", function(e){ 
			e.stopPropagation();
		});
		$("body").on("click", function(e){ 
			$('.search-safari').hide(); 
		});
		//Back to top button click
		jQuery("#back-to-top").on("click", function(){  
			jQuery("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		//Mobile menu show submenu
		var heightWeb = jQuery(this).height();
		jQuery('#mb-main-menu').css('height',heightWeb);
		jQuery('#sitebodyoverlay').css('height',heightWeb);
		jQuery("#mb-main-menu li.parent a").on("click", function(){   
			jQuery("#mb-main-menu li.parent a").removeClass('active');
			//slide up all the link lists
			jQuery("#mb-main-menu li.parent ul").slideUp();
			//slide down the link list below the h3 clicked - only if its closed
			if(!jQuery(this).next('ul').is(":visible"))
			{
			  jQuery(this).next().slideDown();
			  jQuery(this).addClass('active');
			}
		}); 
		jQuery("#cate_list li.parent a").on("click", function(){ 
			jQuery("#cate_list li.parent a").removeClass('active');
			//slide up all the link lists
			jQuery("#cate_list li.parent ul").slideUp();
			//slide down the link list below the h3 clicked - only if its closed
			if(!jQuery(this).next('ul').is(":visible"))
			{
			  jQuery(this).next().slideDown();
			  jQuery(this).addClass('active');
			}
		}); 
		//Show hide menu call function
		jQuery(".mbmenu-icon").on("click", function(){  
			if(isMenuShowing){
			  menuHide();
			}else{
			  menuShow();
			}
		});
		jQuery("#sitebodyoverlay").on("click", function(){   
			menuHide();
		});
		jQuery("#close-mb-menu").on("click", function(){   
			menuHide();
		}); 
	});
	//Service and skill slide on mobile
	//function show and hide mobile menu
	var isMenuShowing = false;
	function menuShow(){
	  //jQuery('#sitebody').addClass('mobilemenu').animate({ 'right': '-84.375%' }, 250);
	  jQuery('#mb-main-menu').animate({ 'left': '0' }, 250);
	  jQuery('#mb-main-menu').css('display','block');
	  jQuery('#sitebodyoverlay').show();
	  jQuery(window).scrollTop(0);
	  isMenuShowing = true;
	}
	//Footer slide on mobile
	function mobileFooterSlide() {
	  var checkWidth = jQuery(window).width();

	  if(checkWidth < 768) {
		jQuery(".footer-col h2").on("click", function(){    
		  //slide up all the link lists
		  jQuery(".footer-col .footer-content").slideUp(200);
		  //slide down the link list below the h3 clicked - only if its closed
		  if(!jQuery(this).next().is(":visible"))
		  {
			jQuery(this).next().slideDown();
		  }
		});
	  }
	}
	//call footer accordian slide  on mobile
	jQuery(window).ready(mobileFooterSlide); 
	function menuHide(){
	  jQuery('#mb-main-menu').animate({ 'left': '-100%' }, 250);
	  jQuery('#sitebodyoverlay').hide();
	  isMenuShowing = false;
	}  
	//Drop down select list function
	function dropdowListClick(hover, dropdow){
		jQuery(hover).on("click", function(){   
		jQuery(this).find(dropdow).toggle(200);
	  });
	}
	//Change option selected
	function optionSelected(selected, current){
		jQuery(selected).on("click", function(){  
		var dataO = jQuery(this).attr("data-o");
		var valueSelected = jQuery(this).text();
		var dataOC = jQuery(current).attr("data-o");
		alert(valueSelected);
		if(dataO == dataOC){
		  jQuery(current).text(valueSelected);
		}
	  });
	}
	
})(jQuery); // End of use strict