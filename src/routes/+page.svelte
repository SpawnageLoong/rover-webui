<script lang="js">
  import ROSLIB from 'roslib';
  import { pwm0_store, pwm1_store, pwm2_store,
           pwm3_store, pwm4_store, pwm5_store,
           vel_linear, vel_angular } from '$lib/stores.js';

  // Stores management
  // -----------------

  let pwm0, pwm1, pwm2, pwm3, pwm4, pwm5, v_lin, v_ang = 0;
  pwm0_store.subscribe(value => {
    pwm0 = value;
  });
  pwm1_store.subscribe(value => {
    pwm1 = value;
  });
  pwm2_store.subscribe(value => {
    pwm2 = value;
  });
  pwm3_store.subscribe(value => {
    pwm3 = value;
  });
  pwm4_store.subscribe(value => {
    pwm4 = value;
  });
  pwm5_store.subscribe(value => {
    pwm5 = value;
  });
  vel_linear.subscribe(value => {
    v_lin = value;
  });
  vel_angular.subscribe(value => {
    v_ang = value;
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

  // Subscriber callbacks
  // --------------------

  pwm0_subscriber.subscribe(function(message) {
    // console.log('Received message on ' + pwm0_subscriber.name + ': ' + message.data);
    pwm0_store.set(message.data);
  });
  pwm1_subscriber.subscribe(function(message) {
    // console.log('Received message on ' + pwm1_subscriber.name + ': ' + message.data);
    pwm1_store.set(message.data);
  });
  pwm2_subscriber.subscribe(function(message) {
    // console.log('Received message on ' + pwm2_subscriber.name + ': ' + message.data);
    pwm2_store.set(message.data);
  });
  pwm3_subscriber.subscribe(function(message) {
    // console.log('Received message on ' + pwm3_subscriber.name + ': ' + message.data);
    pwm3_store.set(message.data);
  });
  pwm4_subscriber.subscribe(function(message) {
    // console.log('Received message on ' + pwm4_subscriber.name + ': ' + message.data);
    pwm4_store.set(message.data);
  });
  pwm5_subscriber.subscribe(function(message) {
    // console.log('Received message on ' + pwm5_subscriber.name + ': ' + message.data);
    pwm5_store.set(message.data);
  });
  cmd_vel_subscriber.subscribe(function(message) {
    // console.log('Received message on ' + cmd_vel_subscriber.name + ': ' + message.data);
    vel_linear.set(message.linear.x);
    vel_angular.set(message.angular.z);
  });

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
