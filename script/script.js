'use strict'

let pppLinks = document.querySelectorAll(".ppp-link");
let div = document.querySelector('.main__content');

for (let index = 0; index < pppLinks.length; index++) {
	const link = pppLinks[index];

	link.addEventListener('click', function (e) {
		const popName = link.getAttribute('href').replace("#", '');
		const curentPop = document.getElementById(popName);
		console.log(curentPop);
		popOpen(curentPop);
		document.body.classList.add('filter');
		e.preventDefault();
	});
}

function popOpen(curentPop) {
	const popActive = document.querySelector('.ppp__content.open');
	console.log(popActive);
	if (popActive) {
		popClose(popActive)
	}
	curentPop.classList.add('open');
}

function popClose(popActive) {
	popActive.classList.remove('open');
}