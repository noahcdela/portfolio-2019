// PAPER.JS

var color = '#4764CD',
	points = 2,
	// pathLength = 350,
	pathLength = [250, 350, 10, 150],
	path = new Path({
	strokeColor: '#4764CD',
	strokeWidth: 80
});

var start = view.center / [10, 1];
for (var i = 0; i < points; i++)
	path.add(start + new Point(i * pathLength[0], 0));

function nextLengthSize() {
	i = i + 1; // increase i by one
	i = i % pathLength.length; // if we've gone too high, start from `0` again
	return pathLength[i]; // give us back the item of where we are now
}

function onMouseMove(event) {
	path.firstSegment.point = event.point;
	for (var i = 0; i < points - 1; i++) {
		var segment = path.segments[i],
			nextSegment = segment.next,
			vector = segment.point - nextSegment.point;
		vector.length = pathLength[0];
		nextSegment.point = segment.point - vector;
	}
}

function onMouseDown(event) {
	var copy = path.clone();
	copy.position;
}

function onMouseUp(event) {
	// vector.length = nextLengthSize();
}
































// var color = '#4764CD'
// var points = 2;
// var length = 350;
// var path = new Path({
// 	strokeColor: '#4764CD',
// 	strokeWidth: 20
// });

// var circle = new Path.Circle({
//     center: [80, 50],
//     radius: 50,
//     fillColor: color
// });

// var triangle = new Path.RegularPolygon(new Point(80, 70), 3, 80);
// triangle.fillColor = color;

// var start = view.center / [10, 1];
// for (var i = 0; i < points; i++)
// 	path.add(start + new Point(i * length, 0));

// function onMouseMove(event) {
// 	path.firstSegment.point = event.point;
// 	for (var i = 0; i < points - 1; i++) {
// 		var segment = path.segments[i];
// 		var nextSegment = segment.next;
// 		var vector = segment.point - nextSegment.point;
// 		vector.length = length;
// 		nextSegment.point = segment.point - vector;
// 	}
// 	// circle.position = event.point;
// 	triangle.position = event.point;
// }

// function onMouseDown(event) {
// 	var copy = path.clone();
// 	copy.position;
// }

// function onMouseUp(event) {

// }















































// // var myCircle = new Path.Circle(new Point(100, 70), 100);
// // myCircle.fillColor = 'black';

// var colors = ['#4764CD','#fff899','#edefdb'];
// var index = 1;

// // var shapeCircle = new Path.Circle({
// //     radius: 75,
// //     fillColor: colors[0]
// // });

// // var shapeTriangle = new Path.RegularPolygon({
// // 	center: view.center,
// // 	radius: 100,
// // 	fillColor: colors[1]
// // });

// // var shapeRectangle = new Rectangle({
// // 	strokeColor: color[0],
// // 	strokeWidth: 100,
// // 	points: 2,
// // 	length: 400
// // });

// var shapes = ['myCircle','shapeTriangle','shapeRectangle'];

// // The amount of points in the path:
// var points = 2;

// // The distance between the points:
// var length = 400;

// var path = new Path({
// 	strokeColor: colors[0],
// 	strokeWidth: 100,
// 	// opacity: .5
// 	// closed: false
// 	// blendMode: 'multiply'
// });

// var start = view.center / [10, 1];
// for (var i = 0; i < points; i++)
// 	path.add(start + new Point(i * length, 0));

// function onMouseMove(event) {
// 	path.firstSegment.point = event.point;
// 	for (var i = 0; i < points - 1; i++) {
// 		var segment = path.segments[i];
// 		var nextSegment = segment.next;
// 		var vector = segment.point - nextSegment.point;
// 		vector.length = length;
// 		nextSegment.point = segment.point - vector;
// 	}
// 	// path.smooth({ type: 'continuous' });
// }

// function onMouseDown(event) {
// 	var copy = path.clone();
// 	copy.position;
// 	// length = 200;
// 	// path.strokeColor = colors[index];
// 	// index = (index+1)%(colors.length);
// }