(function($){
    "use strict"; // Start of use strict
	jQuery(document).ready(function($){   
		//Back to top button click
		jQuery("#back-to-top").on("click", function(){ 
			jQuery("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		//call dropdow category toolbar filter
		dropdowListClick('.cate-filter-content', 'ul.product-type-filter');
		//Call dropdow product option
		dropdowListClick('.options-col', 'ul.po-list');
		jQuery('.ideals-w').owlCarousel({
			items : 1,
			// Navigation
			navigation : true,
			navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			rewindNav : true,
			scrollPerPage : false,
		 
			//Pagination
			pagination : false,
			paginationNumbers: false,

			//Autoplay
			autoPlay : false,
			stopOnHover : false,
			singleItem:true
		});
		$(function(){
			$(".po-list li span").on("click", function(){
			  var span = $(this).clone();
			  var options_col = $(this).closest('.options-col');
			  span.attr('class','cur-option-val');
			  options_col.find('.cur-option-w .cur-option-val').replaceWith(span);
			});
		});
		/*-------------js slider call-------------*/
		$(".slider-owl").owlCarousel({
		// Most important owl features
			items : 4,
			itemsCustom : false,
			itemsDesktop : [1199,4],
			itemsDesktopSmall : [980,3],
			itemsTablet: [768,1],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			singleItem : false,
			itemsScaleUp : false,
			//Basic Speeds
			slideSpeed : 200,
			paginationSpeed : 800,
			rewindSpeed : 1000,
		 
			//Autoplay
			autoPlay : false,
			stopOnHover : false,
		 
			// Navigation
			navigation : true,
			navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			rewindNav : true,
			scrollPerPage : false,
		 
			//Pagination
			pagination : false,
			paginationNumbers: false,
		 
			// Responsive 
			responsive: true,
			responsiveRefreshRate : 200,
			responsiveBaseWidth: window,
		 
			//Lazy load
			lazyLoad : false,
			lazyFollow : true,
			lazyEffect : "fade",
		 
			//Auto height
			autoHeight : false,
		 
			//JSON 
			jsonPath : false, 
			jsonSuccess : false,
		 
			//Mouse Events
			dragBeforeAnimFinish : true,
			mouseDrag : true,
			touchDrag : true,
		 
			//Transitions
			transitionStyle : false,
		 
			// Other
			addClassActive : false,
		});
		jQuery(".t-content-w").owlCarousel({
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true,
			pagination : true,
			autoPlay : true,
			stopOnHover : true
		});
		$('[data-toggle="tooltip"]').tooltip();
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

	function menuHide(){
	  jQuery('#mb-main-menu').animate({ 'left': '-100%' }, 250);
	  jQuery('#sitebodyoverlay').hide();
	  isMenuShowing = false;
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
	/* jQuery(window).resize(mobileFooterSlide); */
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