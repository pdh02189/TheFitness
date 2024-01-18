$(function () {
	$('.gnb > ul > li').mouseover(function(){
		$(this).children('.lnb').stop().slideDown(300);
	});
	$('.gnb > ul > li').mouseleave(function(){
		$(this).children('.lnb').stop().slideUp(300);
	});
});