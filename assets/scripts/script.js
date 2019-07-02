let scorpion = document.getElementsByClassName('character-name1')[0];
let subzero =  document.getElementsByClassName('character-name2')[0];
let field =  document.getElementsByClassName('image-container')[0];




scorpion.onclick = () => {
	field.classList.remove('-subzero');
	field.classList.add('-scorpion');
};
subzero.onclick = () => {
	field.classList.remove('-scorpion');
	field.classList.add('-subzero');
};
