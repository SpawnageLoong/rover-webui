<script lang="js">
  import ROSLIB from 'roslib';
  import * as stores from '$lib/stores.js';

  // Stores management
  // -----------------

  let pwm0, pwm1, pwm2, pwm3, pwm4, pwm5,
      v_lin, v_ang, ext_temp0, int_temp0,
      int_temp1, int_temp2, int_hum0,
      int_hum1, int_hum2, int_pres0, alt0,
      accel_x, accel_y, accel_z,
      gyro_x, gyro_y, gyro_z,
      mag_x, mag_y, mag_z, imu_temp = 0;
  stores.pwm0.subscribe(value => {
    pwm0 = value;
  });
  stores.pwm1.subscribe(value => {
    pwm1 = value;
  });
  stores.pwm2.subscribe(value => {
    pwm2 = value;
  });
  stores.pwm3.subscribe(value => {
    pwm3 = value;
  });
  stores.pwm4.subscribe(value => {
    pwm4 = value;
  });
  stores.pwm5.subscribe(value => {
    pwm5 = value;
  });
  stores.vel_linear.subscribe(value => {
    v_lin = value;
  });
  stores.vel_angular.subscribe(value => {
    v_ang = value;
  });
  stores.ext_temp0.subscribe(value => {
    ext_temp0 = value;
  });
  stores.int_temp0.subscribe(value => {
    int_temp0 = value;
  });
  stores.int_temp1.subscribe(value => {
    int_temp1 = value;
  });
  stores.int_temp2.subscribe(value => {
    int_temp2 = value;
  });
  stores.int_hum0.subscribe(value => {
    int_hum0 = value;
  });
  stores.int_hum1.subscribe(value => {
    int_hum1 = value;
  });
  stores.int_hum2.subscribe(value => {
    int_hum2 = value;
  });
  stores.int_pres0.subscribe(value => {
    int_pres0 = value;
  });
  stores.alt0.subscribe(value => {
    alt0 = value;
  });
  stores.accel_x.subscribe(value => {
    accel_x = value;
  });
  stores.accel_y.subscribe(value => {
    accel_y = value;
  });
  stores.accel_z.subscribe(value => {
    accel_z = value;
  });
  stores.gyro_x.subscribe(value => {
    gyro_x = value;
  });
  stores.gyro_y.subscribe(value => {
    gyro_y = value;
  });
  stores.gyro_z.subscribe(value => {
    gyro_z = value;
  });
  stores.mag_x.subscribe(value => {
    mag_x = value;
  });
  stores.mag_y.subscribe(value => {
    mag_y = value;
  });
  stores.mag_z.subscribe(value => {
    mag_z = value;
  });
  stores.imu_temp.subscribe(value => {
    imu_temp = value;
  });

  // Connecting to ROS
  // -----------------

  var ros = new ROSLIB.Ros({
    url : 'ws://192.168.1.168:9090'
  });
  ros.on('connection', function() {
    console.log('Connected to websocket server.');
  });
  ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
  });
  ros.on('close', function() {
    console.log('Connection to websocket server closed.');
  });

  // Subscribing to a Topic
  // --------------------------------------

  var pwm0_subscriber = new ROSLIB.Topic({
    ros : ros,
    name : '/motors_pwm/motor0',
    messageType : 'std_msgs/Int32'
  });
  var pwm1_subscriber = new ROSLIB.Topic({
    ros : ros,
    name : '/motors_pwm/motor1',
    messageType : 'std_msgs/Int32'
  });
  var pwm2_subscriber = new ROSLIB.Topic({
    ros : ros,
    name : '/motors_pwm/motor2',
    messageType : 'std_msgs/Int32'
  });
  var pwm3_subscriber = new ROSLIB.Topic({
    ros : ros,
    name : '/motors_pwm/motor3',
    messageType : 'std_msgs/Int32'
  });
  var pwm4_subscriber = new ROSLIB.Topic({
    ros : ros,
    name : '/motors_pwm/motor4',
    messageType : 'std_msgs/Int32'
  });
  var pwm5_subscriber = new ROSLIB.Topic({
    ros : ros,
    name : '/motors_pwm/motor5',
    messageType : 'std_msgs/Int32'
  });
  var cmd_vel_subscriber = new ROSLIB.Topic({
    ros : ros,
    name : '/cmd_vel',
    messageType : 'geometry_msgs/Twist'
  });
  var sensor_subscriber = new ROSLIB.Topic({
    ros : ros,
    name : '/sensor_data',
    messageType : 'rover_interfaces/SensorData'
  });

  // Subscriber callbacks
  // --------------------

  pwm0_subscriber.subscribe(function(message) {
    // console.log('Received message on ' + pwm0_subscriber.name + ': ' + message.data);
    stores.pwm0.set(message.data);
  });
  pwm1_subscriber.subscribe(function(message) {
    // console.log('Received message on ' + pwm1_subscriber.name + ': ' + message.data);
    stores.pwm1.set(message.data);
  });
  pwm2_subscriber.subscribe(function(message) {
    // console.log('Received message on ' + pwm2_subscriber.name + ': ' + message.data);
    stores.pwm2.set(message.data);
  });
  pwm3_subscriber.subscribe(function(message) {
    // console.log('Received message on ' + pwm3_subscriber.name + ': ' + message.data);
    stores.pwm3.set(message.data);
  });
  pwm4_subscriber.subscribe(function(message) {
    // console.log('Received message on ' + pwm4_subscriber.name + ': ' + message.data);
    stores.pwm4.set(message.data);
  });
  pwm5_subscriber.subscribe(function(message) {
    // console.log('Received message on ' + pwm5_subscriber.name + ': ' + message.data);
    stores.pwm5.set(message.data);
  });
  cmd_vel_subscriber.subscribe(function(message) {
    // console.log('Received message on ' + cmd_vel_subscriber.name + ': ' + message.data);
    stores.vel_linear.set(message.linear.x);
    stores.vel_angular.set(message.angular.z);
  });
  sensor_subscriber.subscribe(function(message) {
    // console.log('Received message on ' + sensor_subscriber.name);
    stores.ext_temp0.set(message.ext_temp0);
    stores.int_temp0.set(message.int_temp0);
    stores.int_temp1.set(message.int_temp1);
    stores.int_temp2.set(message.int_temp2);
    stores.int_hum0.set(message.int_hum0);
    stores.int_hum1.set(message.int_hum1);
    stores.int_hum2.set(message.int_hum2);
    stores.int_pres0.set(message.int_pres0);
    stores.alt0.set(message.int_alt);
    stores.accel_x.set(message.accel_x);
    stores.accel_y.set(message.accel_y);
    stores.accel_z.set(message.accel_z);
    stores.gyro_x.set(message.gyro_x);
    stores.gyro_y.set(message.gyro_y);
    stores.gyro_z.set(message.gyro_z);
    stores.mag_x.set(message.mag_x);
    stores.mag_y.set(message.mag_y);
    stores.mag_z.set(message.mag_z);
    stores.imu_temp.set(message.int_temp3);
  })

</script>

<h1>Simple roslib Example</h1>
<p>Check your Web Console for output.</p>

Target Velocities:
<ul>
  <li>Linear: {v_lin}</li>
  <li>Angular: {v_ang}</li>
</ul>

PWM Values:
<ul>
  <li>PWM 0: {pwm0}</li>
  <li>PWM 1: {pwm1}</li>
  <li>PWM 2: {pwm2}</li>
  <li>PWM 3: {pwm3}</li>
  <li>PWM 4: {pwm4}</li>
  <li>PWM 5: {pwm5}</li>
</ul>
