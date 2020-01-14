$(function () {
	// show sidebar in mobile view
	$('#sidebarCollapse').on('click', function(){
		console.log('sidebarCollapse');
		$('.left-panel, .right-panel').toggleClass('deploy-left');
	});
	// close card butt
	$('.close-icon').on('click',function(){
		$(this).closest('.card').fadeOut();
	})
	// minimize card-body butt
	$(document).on('click','.minimize-icon',function(){
		$(this).closest('.card').find('.card-body').slideToggle();
	})
	// sidebar links spawn various cards
	$('.spawn-card').on('click', function(){
		console.log('booyah!');
		$('#card' + $(this).attr('title')).show();
	})
});
