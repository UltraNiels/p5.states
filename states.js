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
let _state, _mainstate;

states.states = [];
Object.prototype.__defineGetter__('state', () =>_state);
Object.prototype.__defineSetter__('state', n  => {
	for (let s of states.states) {
		if (s.name == _state && s.end) s.end();
		if (s.name == n && s.start) s.start();
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
	if (typeof name == 'object') {
		if (!name.name || name.draw) {
			console.error('States must have a name and a draw function.');
		}
		states.states.push(name);
		return;
	}

	if (!name || !draw) {
		console.error('States must have a name and a draw function.')
	}

	states.states.push({
		name: name,
		start: start,
		draw: draw,
		end: end
	});
};

const mainState = (s) => s? _mainstate = s : _mainstate;

states.doSetup = () => {for (let action of setup_actions) action.action();}
states.doPreload = () => {for (let action of preload_actions) action.action();}

states.doDraw = () => {
	if (!state) state = _mainstate;
	for (let s of states.states) {
		if (state == s.name) s.draw();
		return;
	}
}
states.doAction = (list) => {
	for (let action of list) {
		if (state == action.state || action.state == 'all') action.action();
	}
}

draw = states.doDraw;
setup = states.doSetup;
preload = states.doPreload;

mouseClicked 	= () => states.doAction(mouse_clicked_actions);
mouseReleased 	= () => states.doAction(mouse_released_actions);
mousePressed 	= () => states.doAction(mouse_pressed_actions);
mouseDragged 	= () => states.doAction(mouse_dragged_actions);
mouseMoved 		= () => states.doAction(mouse_moved_actions);;
mouseWheel 		= () => states.doAction(mouse_wheel_actions);
doubleClicked 	= () => states.doAction(double_clicked_actions);
keyPressed 		= () => states.doAction(key_pressed_actions);;
keyTyped 		= () => states.doAction(key_typed_actions);;
keyReleased 	= () => states.doAction(key_released_actions);;