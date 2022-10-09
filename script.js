;const submitButton = document.querySelector('#submit');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');

submitButton.addEventListener('click', function() {
	popup.classList.toggle('display-flex');

	closeBtn.addEventListener('click', function() {
	popup.classList.remove('display-flex')
	})

	if(input.value.length == 0) {
		popup.classList.remove('display-flex');

		alert("Please enter a value")
	} else {
		popup.classList.add('display-flex');
	}

})

const input = document.querySelector("input");