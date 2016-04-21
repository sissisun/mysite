(function(fn) {
	if(typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = fn();
	} else if(typeof require === 'function') {
		require([], fn)
	} else {
		fn();
	}
}(function() {
	var canvas = document.getElementById('clock'),
		cxt = canvas.getContext("2d"),

		tick_width = 4,
		tick_color = "#BED062",
		hour_pointer_width = 7,
		hour_pointer_color = "#89599C",
		min_pointer_width = 5,
		min_pointer_color = "#C55959",
		sec_pointer_width = 3,
		sec_pointer_color = "#3C9890",
		hour_angle = 2 * Math.PI / 12;
		min_angle = 2 * Math.PI / 60;
		sec_angle = 2 * Math.PI / 60;
		circle = {
			x: canvas.width / 2,
			y: canvas.height/2,
			radius: 200
		};


	function drawClock() {
		var now = new Date(),
			hour = now.getHours(),
			min = now.getMinutes(),
			sec = now.getSeconds();

		hour > 12 ? hour - 12 : hour;
		
		clear();
		drawTicks();
		drawHourPointer(hour, min, sec);
		drawMinPointer(min, sec);
		drawSecPointer(sec);
	};

	function clear() {
		cxt.clearRect(0, 0, canvas.width, canvas.height);
	};

	function drawTick(angle, radius, cnt) {
		var tickWidth = cnt % 5 ? tick_width/2 : tick_width;
		/*if(cnt % 5 === 0) {*/
			cxt.beginPath();

			cxt.arc(circle.x + Math.cos(angle) * radius,
							circle.y + Math.sin(angle) * radius, tickWidth, 0, 360);

			/*cxt.moveTo(circle.x + Math.cos(angle) * (radius-tickWidth/2), 
				circle.x + Math.sin(angle) * (radius-tickWidth/2));

			cxt.lineTo(circle.x + Math.cos(angle) * (radius+tickWidth/2), 
				circle.x + Math.sin(angle) * (radius+tickWidth/2));*/

			cxt.fill();
			cxt.closePath();
	/*	}*/
		
	};

	function drawTicks() {
		var radius = circle.radius,
			angle_max = 2 * Math.PI,
			angle_delta = Math.PI/30;

		cxt.save();

		cxt.fillStyle = tick_color;
		for(var angle=0, cnt=0; angle < angle_max; angle+=angle_delta, cnt++) {
			drawTick(angle, radius, cnt);
		}

		cxt.restore();
	};

	function drawHourPointer(hour, min, sec) {
		cxt.save();

		cxt.lineWidth = hour_pointer_width;
		cxt.strokeStyle = hour_pointer_color;
		cxt.translate(circle.x, circle.y);
		cxt.rotate((hour + (min + sec/60)/60) * hour_angle);
		cxt.beginPath();
		cxt.moveTo(0, -140);
		cxt.lineTo(0 ,10);
		cxt.stroke();
		cxt.closePath();
		cxt.restore();
	};

	function drawMinPointer(min, sec) {
		cxt.save();

		cxt.lineWidth = min_pointer_width;
		cxt.strokeStyle = min_pointer_color;
		cxt.translate(circle.x, circle.y);
		cxt.rotate((min + sec/60) * min_angle);
		cxt.beginPath();
		cxt.moveTo(0, -160);
		cxt.lineTo(0 ,10);
		cxt.stroke();
		cxt.closePath();
		cxt.restore();
	};

	function drawSecPointer(sec) {
		cxt.save();

		cxt.lineWidth = sec_pointer_width;
		cxt.strokeStyle = sec_pointer_color;
		cxt.translate(circle.x, circle.y);
		cxt.rotate(sec * sec_angle);
		cxt.beginPath();
		cxt.moveTo(0, -180);
		cxt.lineTo(0 ,10);
		cxt.stroke();
		cxt.closePath();
		cxt.restore();
	};

	drawClock();
	setInterval(drawClock, 1000);
}))