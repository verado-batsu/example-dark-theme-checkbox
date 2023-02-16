const refs = {
	inputEl: document.getElementById('checkbox'),
	lightTitleEL: document.querySelector('.title-light'),
	darkTitleEl: document.querySelector('.title-dark'),
}
console.log(refs.lightTitleEL);
console.log(refs.darkTitleEl);

refs.inputEl.addEventListener('click', onClick)


function onClick(e) {
	if (refs.inputEl.checked) {
		console.log('Dark');
		document.body.classList.add('dark');
		document.body.classList.remove('light');

		refs.lightTitleEL.classList.add('dark');
		refs.darkTitleEl.classList.add('dark');
		return;
	}
	document.body.classList.add('light');
	document.body.classList.remove('dark');

	refs.lightTitleEL.classList.remove('dark');
	refs.darkTitleEl.classList.remove('dark');
}
