// Add active class to the menu depending on which page is selected
(function(){
	var id = $('body').attr('id');
	$('#' + id + 'NavBar').addClass('active');
	$('#m-' + id + 'NavBar').addClass('active');
})();