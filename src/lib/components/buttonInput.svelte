<script lang="js">
    import { input_throttle, input_steering, input_increment,
             camera_pan, camera_tilt, cam_increment,
             cam_pan_max, cam_tilt_max, gamepad_input } from '$lib/stores.js';
  
    function incrementThrottle() {
      if ($gamepad_input) {
        return;
      }
      input_throttle.update((n) => Math.min(n+$input_increment, 100))
    }
  
    function decrementThrottle() {
      if ($gamepad_input) {
        return;
      }
      input_throttle.update((n) => Math.max(n-$input_increment, -100))
    }
  
    function incrementSteering() {
      if ($gamepad_input) {
        return;
      }
      input_steering.update((n) => Math.min(n+$input_increment, 100))
    }
  
    function decrementSteering() {
      if ($gamepad_input) {
        return;
      }
      input_steering.update((n) => Math.max(n-$input_increment, -100))
    }
  
    function stopAll() {
      if ($gamepad_input) {
        return;
      }
      input_steering.set(0);
      input_throttle.set(0);
    }

    function incrementCamPan() {
      if ($gamepad_input) {
        return;
      }
      camera_pan.update((n) => Math.min(n+$cam_increment, $cam_pan_max))
    }

    function decrementCamPan() {
      if ($gamepad_input) {
        return;
      }
      camera_pan.update((n) => Math.max(n-$cam_increment, -$cam_pan_max))
    }

    function incrementCamTilt() {
      if ($gamepad_input) {
        return;
      }
      camera_tilt.update((n) => Math.min(n+$cam_increment, $cam_tilt_max))
    }

    function decrementCamTilt() {
      if ($gamepad_input) {
        return;
      }
      camera_tilt.update((n) => Math.max(n-$cam_increment, -$cam_tilt_max))
    }

    function resetCam() {
      if ($gamepad_input) {
        return;
      }
      camera_pan.set(0);
      camera_tilt.set(0);
    }

    function onKeyDown(e) {
      console.log(e.keyCode);
      switch(e.keyCode) {
        case 38:
          incrementCamTilt();
          break;
        case 40:
          decrementCamTilt();
          break;
        case 37:
          incrementCamPan();
          break;
        case 39:
          decrementCamPan();
          break;
        case 87:
          incrementThrottle();
          break;
        case 83:
          decrementThrottle();
          break;
        case 65:
          decrementSteering();
          break;
        case 68:
          incrementSteering();
          break;
        case 32:
          stopAll();
          break;
      }
	}
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<div class="flex p-4 gap-4">
    <div class="grid grid-cols-3 grid-rows-3 gap-2 left-0">
      <button
        on:click={incrementThrottle}
        class="bg-gray-800 col-start-2 p-2 rounded-lg text-center hover:bg-gray-700">
        Foward
        <br>
        W
      </button>
      <button
        on:click={incrementSteering}
        class="bg-gray-800 col-start-1 row-start-2 p-2 rounded-lg text-center hover:bg-gray-700">
        Left
        <br>
        A
      </button>
      <button
        on:click={stopAll}
        class="bg-gray-800 col-start-2 row-start-2 p-2 rounded-lg text-center hover:bg-gray-700 w-[72px] h-[72px]">
        Stop
      </button>
      <button
        on:click={decrementSteering}
        class="bg-gray-800 col-start-3 row-start-2 p-2 rounded-lg text-center hover:bg-gray-700">
        Right
        <br>
        D
      </button>
      <button
        on:click={decrementThrottle}
        class="bg-gray-800 col-start-2 row-start-3 p-2 rounded-lg text-center hover:bg-gray-700">
        Reverse
        <br>
        S
      </button>
    </div>

    <div class="flex-grow rounded-xl px-4 py-2 text-xl text-center">
      Inputs:
      <ul>
        <li>Throttle: {Math.round($input_throttle)}%</li>
        <li>Steering: {Math.round($input_steering)}%</li>
      </ul>
    </div>

    <div class="grid grid-cols-3 grid-rows-3 gap-2 right-0">
      <button
        on:click={incrementCamTilt}
        class="bg-gray-800 col-start-2 p-2 rounded-lg text-center hover:bg-gray-700">
        Up
        <br>
        ↑
      </button>
      <button
        on:click={incrementCamPan}
        class="bg-gray-800 col-start-1 row-start-2 p-2 rounded-lg text-center hover:bg-gray-700">
        Left
        <br>
        ←
      </button>
      <button
        on:click={resetCam}
        class="bg-gray-800 col-start-2 row-start-2 p-2 rounded-lg text-center hover:bg-gray-700 w-[72px] h-[72px]">
        Reset
      </button>
      <button
        on:click={decrementCamPan}
        class="bg-gray-800 col-start-3 row-start-2 p-2 rounded-lg text-center hover:bg-gray-700">
        Right
        <br>
        →
      </button>
      <button
        on:click={decrementCamTilt}
        class="bg-gray-800 col-start-2 row-start-3 p-2 rounded-lg text-center hover:bg-gray-700">
        Down
        <br>
        ↓
      </button>
    </div>
  </div>