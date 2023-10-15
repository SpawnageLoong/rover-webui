<script lang="js">
  import { gamepad_input } from '$lib/stores.js';
	import ButtonInput from './buttonInput.svelte';
	import GamepadInput from './gamepadInput.svelte';

  function setGamepadInput() {
    gamepad_input.set(true);
  }

  function setKeyboardInput() {
    gamepad_input.set(false);
  }
</script>

<div class="flex flex-col bg-gray-600 pb-4 px-4 pt-2 rounded-xl shadow-lg">
  <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px">
        <li class="mr-2">
            <button 
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg ${!$gamepad_input ? ' text-blue-400 border-blue-400' : 'hover:text-gray-600 hover:border-gray-300 '}"
              on:click={setKeyboardInput}
              >
              Keyboard
            </button>
        </li>
        <li class="mr-2">
            <button 
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg ${$gamepad_input ? ' text-blue-400 border-blue-400' : 'hover:text-gray-600 hover:border-gray-300 '}"
              on:click={setGamepadInput}
              >
              Gamepad
            </button>
        </li>
    </ul>
  </div>
  {#if ($gamepad_input)}
    <GamepadInput />
  {:else}
    <ButtonInput />
  {/if}
</div>