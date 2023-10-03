<script lang="js">
  import { host, pwm0, pwm1, pwm2, pwm3, pwm4, pwm5,
           input_throttle, input_steering, input_increment,
           vel_angular, vel_linear, ext_temp0,
           int_temp0, int_temp1, int_temp2,
           int_hum0, int_hum1, int_hum2, int_pres0,
           alt0, accel_x, accel_y, accel_z,
           gyro_x, gyro_y, gyro_z, mag_x, mag_y,
           mag_z, imu_temp } from '$lib/stores.js';

  import { onMount } from 'svelte';

  onMount(() => {
    host.set(window.location.hostname)
  })

  function incrementThrottle() {
    input_throttle.update((n) => Math.min(n+$input_increment, 1))
  }

  function decrementThrottle() {
    input_throttle.update((n) => Math.max(n-$input_increment, -1))
  }

  function incrementSteering() {
    input_steering.update((n) => Math.min(n+$input_increment, 1))
  }

  function decrementSteering() {
    input_steering.update((n) => Math.max(n-$input_increment, -1))
  }

  function stopAll() {
    input_steering.set(0);
    input_throttle.set(0);
  }

</script>

<div class="flex m-4 pt-4 gap-4">
  <div class="basis-2/4 flex flex-col gap-4">
    <div class="bg-gray-600 p-4 rounded-xl shadow-lg aspect-video">
      <img
        src="http://{$host}:8081"
        alt="Front camera stream"
        class="object-scale-down">
    </div>
    <div class="bg-gray-600 p-4 rounded-xl shadow-lg">
      <div class="flex">
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
    </div>
  </div>

  <div class="basis-2/4 flex flex-col gap-4">
    <div class="bg-gray-600 rounded-xl shadow-lg px-4 py-2">
      Target Velocities:
      <ul>
        <li>Linear: {$vel_linear}</li>
        <li>Angular: {$vel_angular}</li>
      </ul>
    </div>

    <div class="bg-gray-600 rounded-xl shadow-lg px-4 py-2">
      Inputs:
      <ul>
        <li>Throttle: {Math.round($input_throttle*100)}%</li>
        <li>Steering: {Math.round($input_steering*100)}%</li>
      </ul>
    </div>
  
    <div class="bg-gray-600 rounded-xl shadow-lg px-4 py-2">
      PWM Values:
      <ul>
        <li>PWM 0: {$pwm0}</li>
        <li>PWM 1: {$pwm1}</li>
        <li>PWM 2: {$pwm2}</li>
        <li>PWM 3: {$pwm3}</li>
        <li>PWM 4: {$pwm4}</li>
        <li>PWM 5: {$pwm5}</li>
      </ul>
    </div>
  
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