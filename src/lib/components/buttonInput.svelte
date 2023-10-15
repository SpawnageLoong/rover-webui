<script lang="js">
    import { input_throttle, input_steering,
             input_increment, gamepad_input } from '$lib/stores.js';
  
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
</script>

<div class="flex p-4">
    <div class="grid grid-cols-3 grid-rows-3 gap-2">
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
        class="bg-gray-800 col-start-2 row-start-2 p-2 rounded-lg text-center hover:bg-gray-700">
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
  </div>