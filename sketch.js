const r = require("raylib");
const geometry = require("./geometry");

const window = {
	width: 800,
	height: 600,
	title: "Scale and Center",
};

const FPS = 60;

const outerRectangle = {
	width: 400,
	height: 300,
};

const innerRectangle = {
	relativeWidth: 0.8,
	relativeHeight: 0.8,
};

function running() { return !r.WindowShouldClose(); }

function setup() {
	r.SetTraceLogLevel(r.LOG_NONE);
	r.InitWindow(window.width, window.height, window.title);
	r.SetTargetFPS(FPS);
}

function update() { }

function draw() {
	const innerRectangleWidth = outerRectangle.width * innerRectangle.relativeWidth;
	const innerRectangleHeight = outerRectangle.height * innerRectangle.relativeHeight;

	const outerX = geometry.calcOffset(window.width, outerRectangle.width);
	const outerY = geometry.calcOffset(window.height, outerRectangle.height);

	const innerX = outerX + geometry.calcOffset(outerRectangle.width, innerRectangleWidth);
	const innerY = outerY + geometry.calcOffset(outerRectangle.height, innerRectangleHeight);

	r.BeginDrawing();

	r.ClearBackground(r.BLUE);

	r.DrawRectangle(outerX, outerY, outerRectangle.width, outerRectangle.height, r.WHITE);
	r.DrawRectangle(innerX, innerY, innerRectangleWidth, innerRectangleHeight, r.RED);

	r.EndDrawing();
}

function teardown() { r.CloseWindow(); }

module.exports = {
	running,
	setup,
	update,
	draw,
	teardown,
}