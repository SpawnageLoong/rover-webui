<script lang="js">
  import { camera_pan, camera_tilt } from '$lib/stores.js';
</script>

<div class="flex bg-gray-600 rounded-xl shadow-lg px-4 py-2">
  <div class="text-xl flex flex-col basis-2/4">
    Horizontal FoV:
    <svg width="200" height="200">
      <circle
        cx="100"
        cy="100"
        r="100"
        stroke="white"
        stroke-width="2"
        fill=transparent
        stroke-dasharray="5, 5" />
      <path
        d="M 100 100
           L 13.4 150
           A 100 100 0 0 0 186.6 150
           L 100 100"
        stroke="red"
        stroke-width="2"
        fill="red"
        fill-opacity="0.2"
        transform="rotate({180 + $camera_pan} 100 100)"/>
    </svg>
  </div>
      
  <div class="text-xl flex flex-col basis-2/4">
    Vertical FoV:
    <svg width="200" height="200">
    </svg>
  </div>
</div>