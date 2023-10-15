<script lang="js">
    import { input_throttle, input_steering, gamepad_input } from '$lib/stores.js';
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
            axisMap[axes[i]] = ( axis > 0.01 || axis < -0.01 ) ? parseFloat(axis.toFixed(3)) : 0;
        })

        if ($gamepad_input) {
            input_throttle.set(Math.round(buttonMap["rt"] * 100) - Math.round(buttonMap["lt"] * 100));
            input_steering.set(Math.round(axisMap["lx"] * -100));
        }

        poll = requestAnimationFrame(startController);
    }

    const stopController = () => {
        gamepad_connected = false;
        cancelAnimationFrame(poll);
        input_throttle.set(0);
        input_steering.set(0);
    }

    function setGamepadInput() {
        if ($gamepad_input) {
            gamepad_input.set(false);
        } else {
            gamepad_input.set(true);
        }
    }
</script>

<svelte:window on:gamepadconnected={startController} on:gamepaddisconnected={stopController} />

<div class="flex flex-col bg-gray-600 p-4 rounded-xl shadow-lg">
    Gamepad {gamepad_connected ? "connected" : "disconnected"}, Input {$gamepad_input ? "enabled" : "disabled"}
    <button
        class="bg-gray-800 col-start-3 row-start-2 p-2 rounded-lg text-center hover:bg-gray-700"
        on:click={setGamepadInput}>
        Set Gamepad Input
    </button>
</div>