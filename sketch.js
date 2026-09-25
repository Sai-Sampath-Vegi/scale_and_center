const r = require("raylib");
const geometry = require("./geometry");

const windowWidth = 800;
const windowHeight = 600;
const windowTitle = "Scale and Center";

const FPS = 60;

const outerRectangleWidth = 400;
const outerRectangleHeight = 300;

const innerRectangleRelativeWidth = 0.8;
const innerRectangleRelativeHeight = 0.8;

function running() { return !r.WindowShouldClose(); }

function setup() {
	r.InitWindow(windowWidth, windowHeight, windowTitle);
	r.SetTargetFPS(FPS);
}

function update() { }

function draw() {
	const innerRectangleWidth = outerRectangleWidth * innerRectangleRelativeWidth;
	const innerRectangleHeight = outerRectangleHeight * innerRectangleRelativeHeight;

	const outerX = geometry.calcOffSet(windowWidth, outerRectangleWidth);
	const outerY = geometry.calcOffSet(windowHeight, outerRectangleHeight);

	const innerX = outerX + geometry.calcOffSet(outerRectangleWidth, innerRectangleWidth);
	const innerY = outerY + geometry.calcOffSet(outerRectangleHeight, innerRectangleHeight);

	r.BeginDrawing();

	r.ClearBackground(r.BLUE);

	r.DrawRectangle(outerX, outerY, outerRectangleWidth, outerRectangleHeight, r.WHITE);
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