<script lang="js">
  import { host, pwm0, pwm1, pwm2, pwm3, pwm4, pwm5,
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
</script>

<div class="p-4">
  Dashboard
  <br>
</div>

<div class="flex m-4">
  <div class="flex-auto">
    <img
      src="http://{$host}:8081"
      width="960"
      height="540"
      alt="Front camera stream">
  </div>

  <div class="flex-auto">
    Target Velocities:
    <ul>
      <li>Linear: {$vel_linear}</li>
      <li>Angular: {$vel_angular}</li>
    </ul>
    <br>
  
    PWM Values:
    <ul>
      <li>PWM 0: {$pwm0}</li>
      <li>PWM 1: {$pwm1}</li>
      <li>PWM 2: {$pwm2}</li>
      <li>PWM 3: {$pwm3}</li>
      <li>PWM 4: {$pwm4}</li>
      <li>PWM 5: {$pwm5}</li>
    </ul>
    <br>
  
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
      <br>
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