# p5.states
 A states state for the p5 with the states state.js state states

### How tu use
exemple state:
```javascript
function circleStart() {
	// every time state starts.
	let circleX = width/2;
	let circleY = width/2;
	let circleR = 20;
}
function circleDraw() {
	// Draw
	background('#123');
	circle(circleX, circleY, circleR);
}
function circleEnd() {
	// every time state ends. State ends when switching to another state
}

function enlargeCircle() {circleR++;}
new_state('circle', circleStart, circleDraw, circleEnd);
```

You can make multiple states in multiple files. Switching to another state is easy:
```javascript
state = 'rectangle'; 
```
When you do this, the end function of circle gets called, ín this case `circleEnd()`, and the start function of rectangle gets called. And from now on, the draw function of rectangle gets called.

To make things easier, we now have `mouse_pressed_actions`, `mouse_released_actions`, `key_pressed_actions`, and so forth. These actions get called if the current state is the state given.
```javascript
add_action('circle', mouse_clicked_actions, enlargeCircle);
```

p5.states defines `draw()`, and all mouse and keyboard action functions, but if you don't like it you can overwrite them. You can find the original functions in `states.doDraw`, `states.doMouseClicked`, and so forth.