$(document).ready(function() {
	var scorpion = $('.character-name1');
	var subzero = $('.character-name2');
	var field = $('.image-container');

	scorpion.click(function() {
		setTimeout(field.addClass('-animated'), 1000)
		showScorpion();


	})
	subzero.click(function() {
		showSubzero();
		setTimeout(field.addClass('-animated'), 1000)
	})
	





	function showScorpion() {
    field.removeClass('-subzero');
	field.addClass('-scorpion');

}

	function showSubzero() {
  	field.addClass('-subzero');
	field.removeClass('-scorpion');
}
});