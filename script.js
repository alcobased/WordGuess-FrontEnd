document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM loaded');
	const charInput = document.querySelector('.char-field');
	const lessBtn = document.querySelector('#less');
	const moreBtn = document.querySelector('#more');
	const calcBtn = document.querySelector('#calc');
	const charLine = document.querySelector('#char-line');
	moreBtn.addEventListener('click', () => {
		const lastCharField = charLine.lastChild
		const newCharInput = charInput.cloneNode(true);
		newCharInput.querySelector('input').value = '';
		container.appendChild(newCharInput);
	});
	lessBtn.addEventListener('click', () => {
		if (container.childElementCount > 1) {
			container.removeChild(container.lastChild);
		};
	});
	// calcBtn.addEventListener('click', () => {
	// 	console.log
	// });
});

function populateChars(charCount, containerElement) {
	for (let i = 1; i <= charCount; i++) {
		
	};
};