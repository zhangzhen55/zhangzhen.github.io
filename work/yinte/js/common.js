
/*导航点击事件*/
$(function(){
	$('.header-btn').click(function(){
		$('.nav').addClass('nav_active');
		$('html,body').addClass('noscroll');
		$('body').addClass('left');
		
	})
	$('.nav-back').click(function(){
		$('.nav').removeClass('nav_active');
		$('html,body').removeClass('noscroll');
		$('body').removeClass('left');
	})
})
	
//头部logo、电话切换
var mySwiperCom1= new Swiper('.header-main',{
	autoplay : 5000,
	autoplayStopOnLast : true,
})

//搜索框显示事件
$(function(){
	
	$('.header-search-box').click(function(){
		$('.search').addClass('search-active');
		$('html,body').addClass('noscroll');
	})
	
	$('.search .button').click(function(){
		$('.search').removeClass('search-active');
		$('html,body').removeClass('noscroll');
	})
	

})

//nav2导航
var num1 = $(".nav2 .swiper-wrapper a.on").parent().index();
var mySwiperCom2 = new Swiper('.nav2 .swiper-container',{
	slidesPerView:'auto',
	initialSlide :num1,
})


//.main .swiper-container下的
 var swiperCom3 = new Swiper('.com1-slide', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        slidesPerColumn: 2,
        paginationClickable: true,
//      spaceBetween: 15
    });
    

