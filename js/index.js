
		$(document).ready(function(){
			//给页面增加背景
			var winWidth=$(window).width();
			var winHeight=$(window).height();
			// $('.page').width(winWidth).height(winHeight);

			//放置箭头位置
			var arrowLeft=($(window).width()-86)/2;
			$('.arrow').css({left:arrowLeft});

			//音频按钮操作
			var audio=document.getElementById('audio');

			// zepto实现
			// $('.music-btn').on('tap',function(){
			// 	$(this).toggleClass('music-on');

			// 	//音频暂停操作 注：必须用原生js
			// 	if(audio.paused){
			// 		audio.play();
			// 	}else{
			// 		audio.pause();
			// 	}
			// });

			// 百度touch插件实现
			touch.on('.music-btn','tap',function(e){
				$('.music-btn').toggleClass('music');
				// 音频暂停操作 注：必须用原生js
				audio.paused?audio.play():audio.pause();
				// if(audio.paused){
				// 	audio.play();
				// }else{
				// 	audio.pause();
				// }
			});

			//
			var num=$('.main .page').size();//3

			var curIndex=0;
			// $('.main .page').eq(curIndex).find('.box').removeClass('hide')
			touch.on('.main','swipeup',function(e){
				if(curIndex<num-1){//0<2 1<2 前两张能滑
					$('.main .page').eq(curIndex).addClass('pageUp');
					$('.main .page').eq(curIndex).find('.box').addClass('hide')
					curIndex++;
					$('.main .page').eq(curIndex).removeClass('pageDown');
					$('.main .page').eq(curIndex).find('.hide').removeClass('hide')
					console.log(curIndex);
					// swipeAni(curIndex);
				}
				if(curIndex>=num-1){
					$('.arrow').hide();
				}

			});

			touch.on('.main','swipedown',function(e){
				$('.arrow').show();
				if(curIndex>0){
					$('.main .page').eq(curIndex).addClass('pageDown');
					$('.main .page').eq(curIndex).find('.box').addClass('hide');
					curIndex--;
					$('.main .page').eq(curIndex).removeClass('pageUp');
					$('.main .page').eq(curIndex).find('.hide').removeClass('hide');
					console.log(curIndex);
					// swipeAni(curIndex);
				}	
			});


			// $('.page1>img').addClass('slideDown');
			// $('.page1 .info li').addClass('fadeInLeft');

			// function swipeAni(ind){
			// 	switch (ind){
			// 		case 0:
			// 			$('.page1 .photo').addClass('slideDown');
			// 			$('.page1 .info li').addClass('fadeInLeft');
			// 			$('.page2 .want li:nth-child(odd)').removeClass('fadeInLeft');
			// 			$('.page2 .want li:nth-child(even)').removeClass('fadeInRight');
			// 			$('.page3 .want li:nth-child(odd)').removeClass('fadeInLeft');
			// 			$('.page3 .want li:nth-child(even)').removeClass('fadeInRight');
			// 			break;
			// 		case 1:
			// 			$('.page1 .photo').removeClass('slideDown');
			// 			$('.page1 .info li').removeClass('fadeInLeft');
			// 			$('.page2 .want li:nth-child(odd)').addClass('fadeInLeft');
			// 			$('.page2 .want li:nth-child(even)').addClass('fadeInRight');
			// 			$('.page3 .want li:nth-child(odd)').removeClass('fadeInLeft');
			// 			$('.page3 .want li:nth-child(even)').removeClass('fadeInRight');
			// 			break;
			// 		case 2:
			// 			$('.page1 .photo').removeClass('slideDown');
			// 			$('.page1 .info li').removeClass('fadeInLeft');
			// 			$('.page2 .want li:nth-child(odd)').removeClass('fadeInLeft');
			// 			$('.page2 .want li:nth-child(even)').removeClass('fadeInRight');
			// 			$('.page3 .want li:nth-child(odd)').addClass('fadeInLeft');
			// 			$('.page3 .want li:nth-child(even)').addClass('fadeInRight');
			// 			break;
			// 	}

			
		});
	