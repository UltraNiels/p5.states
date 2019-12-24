const mouse_clicked_actions = [];
const mouse_pressed_actions = [];
const mouse_released_actions = [];
const mouse_dragged_actions = [];
const mouse_moved_actions = [];
const mouse_wheel_actions = [];
const double_clicked_actions = [];
const key_pressed_actions = [];
const key_typed_actions = [];
const key_released_actions = [];
const setup_actions = [];
const preload_actions = [];
const states = {};
let _state;

states.states = [];
Object.prototype.__defineGetter__('state', () =>_state);
Object.prototype.__defineSetter__('state', n  => {
	for (let s of states.states) {
		if (s.name == state) s.end();
		if (s.name == n) s.start();
		_state = n
	}
})

const add_action = (state, list, action) => {
	list.push({
		state: state,
		action: action,
	})
}

const new_state = (name, start, draw, end) => {
	states.states.push({
		name: name,
		start: start,
		draw: draw,
		end: end
	})
}

states.doSetup = () => {for (let action of setup_actions) action.action();}
states.doPreload = () => {for (let action of preload_actions) action.action();}

states.doDraw = () => {
	for (let s of states.states) {
		if (state == s.name) s.draw();
	}}
states.doMouseClicked = () => {
	for (let action of mouse_clicked_actions) {
		if (state == action.state) action.action();
	}}
states.doMousePressed = () => {
	for (let action of mouse_pressed_actions) {
		if (state == action.state) action.action();
	}}
states.doMouseReleased = () => {
	for (let action of mouse_released_actions) {
		if (state == action.state) action.action();
	}}
states.doMouseDragged = () => {
	for (let action of mouse_dragged_actions) {
		if (state == action.state) action.action();
	}}
states.doMouseMoved = () => {
	for (let action of mouse_moved_actions) {
		if (state == action.state) action.action();
	}}
states.doDoubleClicked = () => {
	for (let action of double_clicked_actions) {
		if (state == action.state) action.action();
	}}
states.doMouseWheel = () => {
	for (let action of mouse_wheel_actions) {
		if (state == action.state) action.action();
	}}
states.doKeyPressed = () => {
	for (let action of key_pressed_actions) {
		if (state == action.state) action.action();
	}}
states.doKeyTyped = () => {
	for (let action of key_typed_actions) {
		if (state == action.state) action.action();
	}}
states.doKeyReleased = () => {
	for (let action of key_released_actions) {
		if (state == action.state) action.action();
	}}

draw = states.doDraw;
setup = states.doSetup;
preload = states.doPreload;

mouseClicked = states.doMouseClicked;
mouseReleased = states.doMouseReleased;
mousePressed = states.doMousePressed;
mouseDragged = states.doMouseDragged;
mouseWheel = states.doMouseWheel;
doubleClicked = states.doDoubleClicked;
keyPressed = states.doKeyPressed;
keyTyped = states.doKeyTyped;
keyReleased = states.doKeyReleased;
mouseMoved = states.doMouseMoved;