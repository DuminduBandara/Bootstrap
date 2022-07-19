
$(document).ready(function(){
	$('.filter-btn').click(function(){
		const value = $(this).attr('data-filter');
		if(value == 'all'){
			$('.food-item').show('1000');
		}
		else{
			$('.food-item').not('.' + value).hide('1000');
			$('.food-item').filter('.' + value).show('1000');
		}
	});

	$('.filter-btn').click(function(){
		$(this).addClass('active-f').siblings().removeClass('active-f');
	});
});