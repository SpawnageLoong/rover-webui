<script lang="js">
  import * as stores from '$lib/stores.js';

</script>

<h1>Simple roslib Example</h1>
<p>Check your Web Console for output.</p>

Target Velocities:
<ul>
  <li>Linear: {stores.vel_linear}</li>
  <li>Angular: {stores.vel_angular}</li>
</ul>
<br>

PWM Values:
<ul>
  <li>PWM 0: {stores.pwm0}</li>
  <li>PWM 1: {stores.pwm1}</li>
  <li>PWM 2: {stores.pwm2}</li>
  <li>PWM 3: {stores.pwm3}</li>
  <li>PWM 4: {stores.pwm4}</li>
  <li>PWM 5: {stores.pwm5}</li>
</ul>
<br>

Telemetry:
<ul>
  <li>External Temperature: {stores.ext_temp0}</li>
  <li>Internal Temperature 0: {stores.int_temp0}</li>
  <li>Internal Temperature 1: {stores.int_temp1}</li>
  <li>Internal Temperature 2: {stores.int_temp2}</li>
  <li>Internal Temperature 3: {stores.imu_temp}</li>
  <li>Internal Humidity 0: {stores.int_hum0}</li>
  <li>Internal Humidity 1: {stores.int_hum1}</li>
  <li>Internal Humidity 2: {stores.int_hum2}</li>
  <li>Internal Pressure 0: {stores.int_pres0}</li>
  <li>Altitude 0: {stores.alt0}</li>
  <br>
  <li>Acceleration X: {stores.accel_x}</li>
  <li>Acceleration Y: {stores.accel_y}</li>
  <li>Acceleration Z: {stores.accel_z}</li>
  <li>Gyro X: {stores.gyro_x}</li>
  <li>Gyro Y: {stores.gyro_y}</li>
  <li>Gyro Z: {stores.gyro_z}</li>
  <li>Magnetometer X: {stores.mag_x}</li>
  <li>Magnetometer Y: {stores.mag_y}</li>
  <li>Magnetometer Z: {stores.mag_z}</li>
</ul>