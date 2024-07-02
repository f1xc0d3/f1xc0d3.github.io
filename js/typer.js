document.addEventListener('DOMContentLoaded', function() {
	function typer() {
		var typed = new Typed(".typed-words", {
			strings: ["Give me alone", "Give me alone.", "Give me alone..", "Give me alone...", "..."],
			// strings: ["А навернуться с крыши<br>больно?", "Может утопиться?", "Или лучше подвеситься<br>к потолку?", "Наглотаться таблеток?", "Перерезать сонную артерию?", "Перерезать сонную артерию?<br>Левую или правую?", "..."],
			typeSpeed: 20,
			backSpeed: 1,
			backDelay: 5000,
			startDelay: 10000,
			loop: false,
			showCursor: false,
			cursorChar: "|",
			attr: null,
		});
	}
	typer();
});
