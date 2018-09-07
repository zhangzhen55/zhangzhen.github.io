$(function(){
//	setInterval(function(){
//		var curr = $('.hbanner-nav .on');
//		var next = curr.next().size() > 0 ?  curr.next() : $('.hbanner-nav li:first');
//		//alert(curr.next().size());//
//		curr.removeClass('on');
//		next.addClass('on');
//		
//		$('.hbanner-imgs li').removeClass('on').eq(next.index()).addClass('on');
//		
//		
//		
//		
//	},5000)
	
	
	
	
	function abc(){
		var curr = $('.hbanner-nav .on');
		var next = curr.next().size() > 0 ?  curr.next() : $('.hbanner-nav li:first');
		//alert(curr.next().size());//
		curr.removeClass('on');
		next.addClass('on');
		
		$('.hbanner-imgs li').removeClass('on').eq(next.index()).addClass('on');
	}
	
	var sss = setInterval(function(){
		
		abc();
	},3000)
	
	$('.hbanner').hover(function(){
		clearInterval(sss);
	},
		function(){
		sss = setInterval(function(){
		
		abc();
		
	},3000)}
	)
	
	
	
	
	
//	setInterval(function(){
//		var curr = $('.hnews-left_nav .on');
//		var next = curr.next().size() > 0 ?  curr.next() : $('.hnews-left_nav li:first');
//		//alert(curr.next().size());//
//		curr.removeClass('on');
//		next.addClass('on');
//		
//		$('.hnews-left_imgs li').removeClass('on').eq(next.index()).addClass('on');
//		
//		
//		
//		
//	},3000)

	function bbb(){
		var curr = $('.hnews-left_nav .on');
		var next = curr.next().size() > 0 ?  curr.next() : $('.hnews-left_nav li:first');
		//alert(curr.next().size());//
		curr.removeClass('on');
		next.addClass('on');
		
		$('.hnews-left_imgs li').removeClass('on').eq(next.index()).addClass('on');
		
	}
	var zzz = setInterval(function(){
		bbb();
	},3000)
	
	$('.hnews-left_view').hover(function(){
		clearInterval(zzz);
	},
		function(){
		zzz = setInterval(function(){
		
		bbb();
		
	},3000)}
	)
	
	
	//图片点击切换
	$('.hbanner-nav li').click(function(){
		
		$(this).addClass('on').siblings().removeClass('on');
		
		
		
		$('.hbanner-imgs li').removeClass('on').eq($(this).index()).addClass('on');
		
		
		
		
	})
	$('.hnews-left_nav li').click(function(){
		
		$(this).addClass('on').siblings().removeClass('on');
		
		
		
		$('.hnews-left_imgs li').removeClass('on').eq($(this).index()).addClass('on');
		
		
		
	})
})





//$(function(){
//	setInterval(function(){
//		var curr = $('.hrelated-right_imgs .on');
//		var next = curr.next().size() > 0 ? curr.next() : $('.hrelated-right_imgs li:first');
//		curr.removeClass('on');
//		next.addClass('on');
//	},3000)
//})
//
////$(function(){
////	$('.hrelated_next').click(function(){
////		var curr = $('.hrelated-right_imgs .on');
////		var next = curr.next().size() > 0 ? curr.next() : $('.hrelated-right_imgs li:first');
////		curr.removeClass('on');
////		next.addClass('on');
////	})
////})
//
////图片切换按钮
//$(function(){
//	$('.hrelated_next').click(function(){
//		var curr = $('.hrelated-right_imgs .on');
//		var next = curr.next().size() > 0 ? curr.next() : $('.hrelated-right_imgs li:first');
//		curr.removeClass('on');
//		next.addClass('on');
//	})
//})
//$(function(){
//	$('.hrelated_prev').click(function(){
//		var curr = $('.hrelated-right_imgs .on');
//		var prev = curr.prev().size() > 0 ? curr.prev() : $('.hrelated-right_imgs li:last');
//		curr.removeClass('on');
//		prev.addClass('on');
//		
//	})
//})
//
//
//$(function(){
//	setInterval(function(){
//		
//		
//		$('.hrelated-left-body ul').css('margin-left','-230px')
//		
//	},3000)
//})


//hrelated-right-body下的图片加滑动效果
$(function(){
	setInterval(function(){
		$('.hrelated-right_imgs ul').stop().animate({'margin-left':-434},'normal',function(){
			$('.hrelated-right_imgs li:first').appendTo($(this));
			$(this).css({'margin-left':0});
			
		})
	},3000)
	$('.hrelated_next2').click(function(){
		$('.hrelated-right_imgs ul').stop().animate({'margin-left':-434},'normal',function(){
			$('.hrelated-right_imgs li:first').appendTo($(this));
			$(this).css({'margin-left':0});
		})
	})
	
	$('.hrelated_prev2').click(function(){
		$('.hrelated-right_imgs li:last').prependTo($('.hrelated-right_imgs ul'));
		$('.hrelated-right_imgs ul').css({'margin-left':-434});
		$('.hrelated-right_imgs ul').stop().animate({'margin-left':0});
		
		
		
	})
	
})

//hrelated-left-body下的图片加滑动效果
$(function(){
	setInterval(function(){
		$('.hrelated-left_imgs ul').stop().animate({'margin-left':-230},'normal',function(){
			$('.hrelated-left_imgs li:first').appendTo($(this));
			$(this).css({'margin-left':0});
		})
	},3000)
	
	$('.hrelated_next1').click(function(){
		$('.hrelated-left_imgs ul').stop().animate({'margin-left':-230},'normal',function(){
			$('.hrelated-left_imgs li:first').appendTo($(this));
			$(this).css({'margin-left':0});
		})
	})
	$('.hrelated_prev1').click(function(){
		$('.hrelated-left_imgs li:last').prependTo($('.hrelated-left_imgs ul'));
		
  		$('.hrelated-left_imgs ul').css({'margin-left':-230});
		$('.hrelated-left_imgs ul').stop().animate({'margin-left':0});
	})
	
})

