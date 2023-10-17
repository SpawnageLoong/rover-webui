<script lang="js">
  import { camera_pan, camera_tilt } from '$lib/stores.js';
</script>

<div class="flex bg-gray-600 rounded-xl shadow-lg px-4 py-2">
  <div class="text-xl flex flex-col basis-2/4 gap-2 w-28 items-center">
    Horizontal FoV:
    <svg width="200" height="200">
      <circle
        cx="100"
        cy="100"
        r="98"
        stroke="white"
        stroke-width="2"
        fill=transparent
        stroke-dasharray="5, 5" />
      <path
        d="M 100 100
           L 15.1 149
           A 98 98 0 0 0 184.9 149
           L 100 100"
        stroke="red"
        stroke-width="2"
        fill="red"
        fill-opacity="0.2"
        transform="rotate({180 - $camera_pan} 100 100)"/>
    </svg>
    {$camera_pan}°
  </div>
      
  <div class="text-xl flex flex-col basis-2/4 gap-2 w-28 items-center">
    Vertical FoV:
    <svg width="200" height="200">
      <path
        d="M 200 100
           L 100 100
           L 100 200"
        stroke="white"
        stroke-width="2"
        fill="transparent"/>
      <rect
        x="100"
        y="100"
        width="100"
        height="100"
        stroke="none"
        fill="white"
        fill-opacity="0.2" />
      <path
        d="M 100 100
           L 164.6 173.7
           A 98 98 0 0 0 164.6 26.3
           L 100 100"
        stroke="red"
        stroke-width="2"
        fill="red"
        fill-opacity="0.2"
        transform="rotate({180 + $camera_tilt} 100 100)"/>
    </svg>
    <div class="text-center">
      {$camera_tilt}°
    </div>
  </div>
</div>