<script lang="js">
    import { input_throttle, input_steering, gamepad_input } from '$lib/stores.js';
  
    window.addEventListener("gamepadconnected", (e) => {
        const gamepad = e.gamepad;
        console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
            gamepad.index, gamepad.id,
            gamepad.buttons.length, gamepad.axes.length);
    })

    window.addEventListener("gamepaddisconnected", (e) => {
        console.log("Gamepad disconnected from index %d: %s",
            e.gamepad.index, e.gamepad.id);
    })

    function handleGamepadInput() {
        const gamepads = navigator.getGamepads();
        const gamepad = gamepads[0];
        if (gamepad) {
            const axes = gamepad.axes;
            const buttons = gamepad.buttons;
            const throttle = Math.round(axes[1] * 100);
            const steering = Math.round(axes[0] * 100);
            input_throttle.set(throttle);
            input_steering.set(steering);
        }
        requestAnimationFrame(handleGamepadInput);
    }

    gamepad_input.subscribe(() => {
        if ($gamepad_input) {
            requestAnimationFrame(handleGamepadInput);
        }
    })

    function setGamepadInput() {
        gamepad_input.set(true);
    }
</script>

<div class="flex bg-gray-600 p-4 rounded-xl shadow-lg">
    Gamepad {gamepad_input ? "connected" : "disconnected"}
    <button
        class="bg-gray-800 col-start-3 row-start-2 p-2 rounded-lg text-center hover:bg-gray-700"
        on:click={setGamepadInput}>
        Set Gamepad Input
    </button>
</div>