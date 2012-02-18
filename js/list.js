(function() {
    
    // js平稳退化
    $('#teams').css('position', 'fixed');
    $('.step>p').after($('<div class="wb"></div>'));

    // 项目组列表折叠
    $('#teams li p').css('display','none');

    $('#teams').on('click', 'li', function() {
    	var $this = $(this);
    	if ($this.children('p').is(':hidden')){
    		$this
    		.children('a').addClass('hover').end()
    		.children('p')
	    		.slideDown(500)
	    	.end()
	    	.siblings().children('a').removeClass('hover').parent()
	    		.children('p')
	    		.slideUp(500)
	    } else {
	    	$this.children('a').removeClass('hover').end()
	    	.children('p').slideUp(500);
	    }
	    return false;
	});

	// 照片墙/表单交互效果
	$('.itm').mouseenter(function(){
		$(this).children('.wb').fadeOut('fast');
		// $(this).prev().fadeIn('slow');
	}).mouseleave(function(){
		$(this).children('.wb').fadeIn('slow');
		// $(this).prev().fadeOut('slow');
	});

	$('input, textarea, select').blur(function(e){
		if(!$(this).val()){return;}
		// console.log("blur");
		// $(this).data('id')
		$(this).removeClass('empty');
		var id = $(this).data('id');
		if(id < 17){
			$('.itm').children('.wb').eq(id).fadeOut('slow');
			$('.itm').children('.wb').eq(id).parent('.itm')
				.unbind()
				.unbind();
		} else {
			for(var i=0; i<4; ++i){
				$('.itm').children('.wb').eq(17+(id-17)*4+i).fadeOut('slow');
				$('.itm').children('.wb').eq(17+(id-17)*4+i).parent('.itm')
				.unbind()
				.unbind();
			}
		}
	});

	$("button[type='submit']").click(function(){
		var ret = true;
		$('input, textarea, select').each(function(){
			if (!$(this).val()){
				if ($(this).data('id')<11 || $(this).data('id')>17){
					$(this).addClass('empty');
					ret = false;	
				}
			}
		});
		$("html,body").animate({scrollTop: $('.empty').eq(0).offset().top-20}, 500);
		return ret;
	});

})();
