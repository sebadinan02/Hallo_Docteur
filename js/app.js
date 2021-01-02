let checkBox = document.querySelector('#check');
checkBox.addEventListener('click', function () {
	let btn_nav =document.querySelector('#btn-nav');
	let mybody=document.querySelector('body');
	if (checkBox.checked==true) {
		btn_nav.style.left="250";
		btn_nav.style.opacity="0";
		mybody.style.overflow='hidden'
		
	} else{
		mybody.style.overflow=''
		btn_nav.style.left="0";
		btn_nav.style.opacity="";
	}
});