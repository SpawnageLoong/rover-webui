<script lang="js">
  import { host, pwm0, pwm1, pwm2, pwm3, pwm4, pwm5,
           input_throttle, input_steering, Vmax, Wmax,
           vel_angular, vel_linear, ext_temp0,
           int_temp0, int_temp1, int_temp2,
           int_hum0, int_hum1, int_hum2, int_pres0,
           alt0, accel_x, accel_y, accel_z,
           gyro_x, gyro_y, gyro_z, mag_x, mag_y,
           mag_z, imu_temp } from '$lib/stores.js';

  import { onMount } from 'svelte';
	import InputSelector from '../lib/components/inputSelector.svelte';
	import PwmCard from '../lib/components/pwmCard.svelte';
  import CameraFov from '../lib/components/cameraFov.svelte';

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

<div class="flex m-4 pt-4 gap-4">
  <div class="basis-2/4 flex flex-col gap-4">
    <div class="bg-gray-600 p-4 rounded-xl shadow-lg aspect-video">
      <img
        src="http://{$host}:8081"
        alt="Front camera stream"
        class="object-scale-down">
    </div>
    <InputSelector />
  </div>

  <div class="basis-2/4 flex gap-4">
    <div class="flex flex-col gap-4">
      <div class="bg-gray-600 rounded-xl shadow-lg px-4 py-2 text-xl">
        Target Velocities:
        <ul class="text-base">
          <li>Linear: {Math.round($vel_linear*1000) / 1000}</li>
          <li>Angular: {Math.round($vel_angular*1000) / 1000}</li>
        </ul>
      </div>

      <div class="bg-gray-600 rounded-xl shadow-lg px-4 py-2 text-xl">
        PWM Values:
        <div class="grid grid-cols-2 grid-rows-3 gap-4 py-4">
          <div class="text-center col-start-1 row-start-1">
            #1
            <PwmCard pwmVal={$pwm0} />
          </div>
          <div class="text-center col-start-1 row-start-2">
            #2
            <PwmCard pwmVal={$pwm1} />
          </div>
          <div class="text-center col-start-1 row-start-3">
            #3
            <PwmCard pwmVal={$pwm2} />
          </div>
          <div class="text-center col-start-2 row-start-1">
            #4
            <PwmCard pwmVal={$pwm3} />
          </div>
          <div class="text-center col-start-2 row-start-2">
            #5
            <PwmCard pwmVal={$pwm4} />
          </div>
          <div class="text-center col-start-2 row-start-3">
            #6
            <PwmCard pwmVal={$pwm5} />
          </div>
        </div>
      </div>
    </div>

    <div class="flex-auto flex flex-col gap-4">
      <CameraFov />

      <div class="bg-gray-600 rounded-xl shadow-lg px-4 py-2">
        Telemetry:
        <ul>
          <li>External Temperature: {$ext_temp0}</li>
          <li>Internal Temperature 0: {$int_temp0}</li>
          <li>Internal Temperature 1: {$int_temp1}</li>
          <li>Internal Temperature 2: {$int_temp2}</li>
          <li>Internal Temperature 3: {$imu_temp}</li>
          <li>Internal Humidity 0: {$int_hum0}</li>
          <li>Internal Humidity 1: {$int_hum1}</li>
          <li>Internal Humidity 2: {$int_hum2}</li>
          <li>Internal Pressure 0: {$int_pres0}</li>
          <li>Altitude 0: {$alt0}</li>
        </ul>
      </div>
      <div class="bg-gray-600 rounded-xl shadow-lg px-4 py-2">
        <ul>
          <li>Acceleration X: {$accel_x}</li>
          <li>Acceleration Y: {$accel_y}</li>
          <li>Acceleration Z: {$accel_z}</li>
          <li>Gyro X: {$gyro_x}</li>
          <li>Gyro Y: {$gyro_y}</li>
          <li>Gyro Z: {$gyro_z}</li>
          <li>Magnetometer X: {$mag_x}</li>
          <li>Magnetometer Y: {$mag_y}</li>
          <li>Magnetometer Z: {$mag_z}</li>
        </ul>
      </div>
    </div>
  </div>
</div>