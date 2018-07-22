function dragMoveListener(event) {
	var target = event.target,
		// keep the dragged position in the data-x/data-y attributes
		x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
		y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

	// translate the element
	target.style.webkitTransform = target.style.transform =
		"translate(" + x + "px, " + y + "px)";

	// update the posiion attributes
	target.setAttribute("data-x", x);
	target.setAttribute("data-y", y);
}

interact(".size")
	.draggable({
		onmove: window.dragMoveListener
	})
	.resizable({
		edges: { left: true, right: true, bottom: true, top: true },
		preserveAspectRatio: true
	})
	.on("resizemove", function(event) {
		var target = event.target;
		(x = parseFloat(target.getAttribute("data-x")) || 0),
			(y = parseFloat(target.getAttribute("data-y")) || 0);

		// update the element's style
		target.style.width = event.rect.width + "px";
		target.style.height = event.rect.height + "px";

		// translate when resizing from top or left edges
		x += event.deltaRect.left;
		y += event.deltaRect.top;

		target.style.webkitTransform = target.style.transform =
			"translate(" + x + "px," + y + "px)";

		target.setAttribute("data-x", x);
		target.setAttribute("data-y", y);
		target.textContent = event.rect.width + "×" + event.rect.height;
	});

$(".open").click(function() {
	$(this).toggleClass("open closed");
});

$(".closed").click(function() {
	$(this).toggleClass("open closed");
});

setTimeout(function() {
	$(".welcome").css("display", "none");
}, 5000);

function banner() {
	let elem = document.getElementById("banner");
	let pos = 0;
	var id = setInterval(frame, 5);
	function frame() {
		if (pos == 3500) {
			clearInterval(id);
		} else {
			pos += -2;
			elem.style.marginLeft = pos + "px";
		}
	}
}

banner();
