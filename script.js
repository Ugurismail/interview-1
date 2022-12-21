"use strict";

//just to add little bir of js i also have https://github.com/Ugurismail/decider.git and https://github.com/Ugurismail/iqtest.git ones.
const items = [...document.querySelectorAll(".slide")];

let options = {
	margin: "-10%",
	threshold: 0.0,
};

let observer = new IntersectionObserver(showItem, options);

function showItem(entries) {
	entries.forEach((el) => {
		if (el.isIntersecting) {
			console.log(el);
			el.target.classList.remove("slide");
			el.target.classList.add("active");
		}
	});
}

items.forEach((item) => {
	observer.observe(item);
});
