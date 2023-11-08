<script lang="js">
  import { host, pwm0, pwm1, pwm2, pwm3, pwm4, pwm5,
           input_throttle, input_steering, Vmax, Wmax,
           vel_angular, vel_linear, ext_temp0,
           int_temp0, int_temp1, int_temp2,
           int_hum0, int_hum1, int_hum2, int_pres0,
           alt0, accel_x, accel_y, accel_z,
           gyro_x, gyro_y, gyro_z, mag_x, mag_y,
           mag_z, imu_temp, invert_controls } from '$lib/stores.js';

  import { onMount } from 'svelte';
	import InputSelector from '$lib/components/inputSelector.svelte';
	import PwmCard from '$lib/components/pwmCard.svelte';
  import CameraFov from '$lib/components/cameraFov.svelte';
	import CameraCard from '$lib/components/cameraCard.svelte';

  onMount(() => {
    host.set(window.location.hostname)
  })

  function calcVW() {
    var throttle = Math.round($input_throttle)
    var steering = Math.round($input_steering)
    var throttle_scaler = throttle - (Math.abs(steering)/2*throttle/100)
    var steering_scaler = steering - (Math.abs(throttle)/2*steering/100)

    vel_linear.set(isNaN(throttle_scaler) ? 0 : throttle_scaler / 100 * $Vmax)
    vel_angular.set(isNaN(steering_scaler) ? 0 : steering_scaler / 100 * $Wmax)
  }

  input_throttle.subscribe(() => {
    calcVW();
  })

  input_steering.subscribe(() => {
    calcVW();
  })

</script>

<div class="flex flex-col m-4 pt-4 gap-4">
  <div class="flex gap-4 w-full">
    <div class="self-center basis-[30%]"><CameraCard /></div>
    <div class="basis-2/5"><CameraCard /></div>
    <div class="self-center basis-[30%]"><CameraCard /></div>
  </div>

  <div class="basis-2/4 flex gap-4">
    <InputSelector />
    <div class="flex flex-col gap-4">
      <div class="bg-gray-600 rounded-xl shadow-lg px-4 py-2 text-xl">
        <div class="grid grid-cols-2 grid-rows-1 gap-4 py-4">
          <div class="text-center col-start-1 row-start-1">
            Left
            <PwmCard pwmVal={$pwm0} />
          </div>
          <div class="text-center col-start-2 row-start-1">
            Right
            <PwmCard pwmVal={$pwm3} />
          </div>
        </div>
      </div>
    </div>

    <div class="flex-auto flex flex-col gap-4">
      <CameraFov />
    </div>
  </div>
</div>