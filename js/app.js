var checkBox = document.querySelector('#check');
checkBox.addEventListener('click', function () {
	let mybody=document.querySelector('body')
	if (checkBox.checked==true) {
		mybody.style.overflow="hidden";
	} else{
		mybody.style.overflow="";
	}
});