$(document).ready(function(){
	//左边导航实现功能
	//获取元素
	var tagbtn=$('.tagbtn');
	tagbtn.prop('flag',true);
	var right_box=$('.right_box');
	var left_box=$('.left_box');
	var oldW=left_box.width();
	var logo=$('.logo');
	var anav_box=$('.nav-box');
	var atop_nav=$('.top-nav');
	var  items_box=$('.in-box');//列表导航
	var items_icon=items_box.find('.items_icon');
	var  items_title=items_box.find('.items-title span');//文字连接
	var  items_list=items_box.find('.items-list');
	var ali=items_list.find('li');
	ali.prop('li_onoff',true);
	var ali_ele;
	ali.click(function(){
        if(window.localStorage.getItem('bg')==null){

			$(this).css('background','#009688').siblings().css('background','').parents('.in-box').siblings().find('li').css('background','');
		}else{
			$(this).css('background',window.localStorage.getItem('bg').split(',')[3]).siblings().css('background','').parents('.in-box').siblings().find('li').css('background','');
		}

		ali.prop('li_onoff',true);
		$(this).prop('li_onoff',false);
		ali_ele=$(this)
	});

	var tagnum=0;
	items_list.slideUp();
	items_title.prop('tagoff',true);
	//实现功能  一级菜单的展开  和 图标的转换
	items_title.click(function(){
		tagnum++;
		var index=$(this).parents('.in-box').index();
		if($(this).prop('tagoff')){
			$(this).parent().next().children('.down').css({
				top:-36
			}).parents('.in-box').siblings().find('.down').css({
				top:0
			});
			$(this).parent().next().children('.up').css({
				top:0
			}).parents('.in-box').siblings().find('.up').css({
				top:36
			});
			items_list.eq(index).slideDown().parent().siblings().find('.items-list').slideUp();
			items_title.prop('tagoff',true);
			$(this).prop('tagoff',false);		
		}else{
			items_list.eq(index).slideUp();
			$(this).parent().next().children('.down').css({
				top:0
			});
			$(this).parent().next().children('.up').css({
				top:36
			});
			$(this).prop('tagoff',true);
			
		}
	})
	// 移动特效
	var nav_move=$('.nav_move');
	  nav_move.slideUp();
	items_title.parent().hover(function(){
		nav_move.slideDown();
		console.log($(this).parent().offset().top)
		nav_move.css({
			top:$(this).parent().offset().top
		})
	});
	items_icon.parent().hover(function(){
		nav_move.slideDown();
		if(tagbtn.prop('flag')==false){
			nav_move.css({
				top:items_icon.eq(0).width()
			})
		}

		nav_move.css({
			top:$(this).parent().offset().top
		})
	});

	//导航栏的缩小

	right_box.css('left',left_box.width())
	tagbtn.click(function(){
		if($(this).prop('flag')){
			right_box.width($('body').width()-items_icon.eq(0).width()/2+8)
			right_box.removeClass('col-lg-10');
			right_box.animate({
				left:items_icon.eq(0).width()/2+16,
				/* width:$('body').width()-items_icon.eq(0).width()/2+8 */
			});
			items_title.parent().hide();
			items_title.parent().next().hide();
			logo.addClass('col-1');
			logo.find('img').removeClass('d-none')
			logo.find('img').addClass('d-block  py-3 px-2 ')
			logo.find('span').removeClass('d-block')
			logo.find('span').addClass('d-none')
			var ele=items_box.children('.items-list').not(':hidden');
			ele.hide();	

			left_box.animate({
				left:0
			});
			items_icon.click(function(){
				nav_move.css({
					left:0
				});
				logo.addClass('col-12')
				logo.find('img').removeClass('d-block float-right py-3 px-2 ')
				logo.find('img').addClass('d-none')
				ele.show();
				logo.find('span').addClass('d-block')
				left_box.removeClass('col-lg-1')
				left_box.addClass('col-lg-2')
				items_title.parent().show();
				items_title.parent().next().show();
				items_icon.removeClass('text-right col-12 px-2')
				items_icon.addClass('text-center')
				left_box.animate({
					left:0
				})
				
				right_box.addClass('col-lg-10')
				right_box.animate({
					left:left_box.width(),
					width:$('body').width()-left_box.width()
				})
				tagbtn.prop('flag',true)
			})
			tagbtn.prop('flag',false)
		}else{
			logo.addClass('col-12');
			logo.find('img').removeClass(' py-3 px-2 d-block ');
			logo.find('img').addClass('d-none');
			logo.find('span').addClass('d-block text-center col-12')
			items_title.parent().show();
			items_title.parent().next().show();
			left_box.animate({
				left:0
			});
			
			right_box.addClass('col-lg-10');
			right_box.animate({
				left:left_box.width(),
				width:$('body').width()-left_box.width()
			});
			tagbtn.prop('flag',true)
		}
		
	});
	
	//右边的特效
	var l_move=$('.left-move');
	var r_move=$('.right-move');
	var tl_icon=$('.tleft_box .t_icon');
	var tr_icon=$('.tright_box .t_icon');
	tl_icon.hover(function(){
		console.log($(this).position().left)
		l_move.css({
			width:$(this).find('i').width(),
			left: $(this).position().left+15
		})
	});
	tr_icon.hover(function(){
		r_move.css({
			width:$(this).outerWidth(),
			left:$(this).position().left+$('.tright_box').position().left
		})
	});
	tl_icon.parent().hover(function(){
		l_move.css({
			opacity:1
		})
	},function(){
		l_move.css({
			opacity:0
		})
	})
	tr_icon.parent().hover(function(){
		r_move.css({
			opacity:1
		})
	},function(){
		r_move.css({
			opacity:0
		})
	});
	//响应式特效
	
	$(window).resize(function(){
		if($(window).width()<967){
			left_box.animate({
				left:-left_box.width()
			});
			left_box.removeClass('col-2');
			left_box.addClass('col-4');
			right_box.animate({
				left:0
			})

			
		}else{
			left_box.animate({
				left:0
			});
			right_box.animate({
				left:left_box.width()
			});
			left_box.removeClass('col-4');
			left_box.addClass('col-2')
		}
	});
	//切换页面
	var iframe_box=$('iframe');
	var alinks=items_list.find('a');
	alinks.click(function(){
		var link=$(this).attr('href').replace("#/","");
		iframe_box.attr('src',link)
	});
	//配色模板的初始化
	var newarr=[];
	var colorArr_tophead=['balck','#03152A','#2E241B','#50314F','cornflowerblue','seagreen','coral','darkred','#666'];
	var colorArr_nav=['#20222A','black','black','#50314F','#344058','#3A3D49','black','#28333E','#24262F'];
	var colorArr_topmain=['white','white','white','white','cornflowerblue','seagreen','coral','white','white'];
	var colorArr_main=['#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2','#f2f2f2'];
	var themes=$('.theme');
	 for(var i=0;i<themes.length;i++){
		 themes.eq(i).find('.top-head').css('background',colorArr_tophead[i])
	 }
	//配色方案  本地存储
	//获取区域


	themes.click(function(){
		newarr=[];
		var t_index=$(this).parent().index();
		anav_box.css({
			background:colorArr_nav[t_index],

		});
		newarr.push(colorArr_nav[t_index]);
		atop_nav.css({
			background:colorArr_topmain[t_index],

		});
		newarr.push(colorArr_topmain[t_index]);
		right_box.css({
			background:colorArr_main[t_index],

		});
		newarr.push(colorArr_main[t_index]);
		logo.css('background',colorArr_tophead[t_index]);
		newarr.push(colorArr_tophead[t_index]);
		if(ali_ele!=undefined){
			ali_ele.css({
				background:colorArr_tophead[t_index],
			});
		}
		window.localStorage.setItem('bg',newarr);
	});
	var str=window.localStorage.getItem('bg');
	//获取出来后是一个字符串 需要转换成数组
	if(str==null){
		oldarr=['black','white','#f2f2f2','black'];
		anav_box.css({
			background:oldarr[0]
		});
		atop_nav.css({
			background:oldarr[1]

		});
		right_box.css({
			background:oldarr[2]
	});
		logo.css({
			background:oldarr[3]

		});
	}else{
		var oldarr=str.split(',');//转换数组方法
		console.log(oldarr);
		anav_box.css({
			background:oldarr[0]

		});
		atop_nav.css({
			background:oldarr[1]

		});
		right_box.css({
			background:oldarr[2]

		});
		logo.css({
			background:oldarr[3]

		});
	}
	//遮罩层的实现
	var theme_btn=$('.theme_btn');
	var theme_wrap=$('.theme_wrap');
	var color_box=$('.color-box');
	theme_btn.click(function(){
		theme_wrap.show();
		color_box.animate({
			right:0
		})
	});
	theme_wrap.click(function(){
		$(this).hide();
		color_box.animate({
			right:-500
		})
	})
});