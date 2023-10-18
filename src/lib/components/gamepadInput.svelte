<script lang="js">
    import { input_throttle, input_steering,
             joystick_deadzone,  joystick_left_invert, joystick_right_invert,
             camera_pan, camera_tilt, cam_pan_max, cam_tilt_max, gamepad_input } from '$lib/stores.js';
    var gamepad_connected = false;
    let poll;

    let buttonMap = {
		a: 0,
		b: 0,
		x: 0,
		y: 0,
		lb: 0,
		rb: 0,
		lt: 0,
		rt: 0,
		map: 0,
		menu: 0,
		lstick: 0,
		rstick: 0,
		du: 0,
		dd: 0,
		dl: 0,
		dr: 0,
		xbox: 0
	};
    let axisMap = {
		lx: 0,
		ly: 0,
		rx: 0,
		rx: 0
	};

    const startController = () => {
        gamepad_connected = true;
        const gamepads = navigator.getGamepads();
        if (!gamepads) {
            return;
        }
        const gamepad = gamepads[0];
        const buttons = ["a","b","x","y","lb","rb","lt","rt","map","menu","lstick","rstick","du","dd","dl","dr","xbox"];
        const axes = ["lx","ly","rx","ry"];

        gamepad.buttons.forEach((button, i) => {
            buttonMap[buttons[i]] = button.pressed ? button.value : 0;
        })
        gamepad.axes.forEach((axis, i) => {
            axisMap[axes[i]] = ( axis > $joystick_deadzone || axis < -($joystick_deadzone) ) ? parseFloat(axis.toFixed(3)) : 0;
        })

        if ($gamepad_input) {
            input_throttle.set(Math.round(buttonMap["rt"] * 100) - Math.round(buttonMap["lt"] * 100));
            input_steering.set(Math.round(axisMap["lx"] * -100) * ($joystick_left_invert ? -1 : 1));
            camera_pan.set(Math.round(axisMap["rx"] * $cam_pan_max) * ($joystick_right_invert ? -1 : 1));
            camera_tilt.set(Math.round(axisMap["ry"] * $cam_tilt_max) * ($joystick_right_invert ? -1 : 1));
        }

        poll = requestAnimationFrame(startController);
    }

    const stopController = () => {
        gamepad_connected = false;
        cancelAnimationFrame(poll);
        input_throttle.set(0);
        input_steering.set(0);
        camera_pan.set(0);
        camera_tilt.set(0);
    }

</script>

<svelte:window on:gamepadconnected={startController} on:gamepaddisconnected={stopController} />

<div class="flex flex-col p-4">
    Gamepad {gamepad_connected ? "connected" : "disconnected"}, Input {$gamepad_input ? "enabled" : "disabled"}
    <br>
    <div class="rounded-xl px-4 py-2">
        Inputs:
        <ul>
          <li>Throttle: {Math.round($input_throttle)}%</li>
          <li>Steering: {Math.round($input_steering)}%</li>
        </ul>
      </div>
</div>