const text = document.getElementById("text");
const words = text.innerHTML.split(" ");
let i = 0;

function changeColor() {
	if (i >= words.length) {
		i = 0;
	}
	text.innerHTML = words
		.map((word, index) => {
			if (index === i) {
				return `<span style="color: black;">${word}</span>`;
			} else {
				return word;
			}
		})
		.join(" ");
	i++;
	setTimeout(changeColor, 1000);
}

