let checkBox = document.querySelector('#check');
let sidebar=document.querySelector('.sidebar');
sidebar.style.zIndex =1000;
checkBox.addEventListener('click', function () {
	let mybody=document.querySelector('body')
	let btn_nav =document.querySelector('#btn-nav');
	if (checkBox.checked==true) {
		mybody.style.overflow="hidden";
		btn_nav.style.left="250";
		btn_nav.style.opacity="0";
	} else{
		mybody.style.overflow="";
		btn_nav.style.left="0";
		btn_nav.style.opacity="1";
	}
});