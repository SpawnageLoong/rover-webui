<script lang="js">
  import ROSLIB from 'roslib';
  import { pwm0_store } from '$lib/stores.js';

  let pwm0 = 0;

  pwm0_store.subscribe(value => {
    pwm0 = value;
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
    // ----------------------
  
    var listener = new ROSLIB.Topic({
      ros : ros,
      name : '/listener',
      messageType : 'std_msgs/String'
    });
  
    listener.subscribe(function(message) {
      console.log('Received message on ' + listener.name + ': ' + message.data);
    });
  
    var pwm0_subscriber = new ROSLIB.Topic({
      ros : ros,
      name : '/pwm0',
      messageType : 'std_msgs/Int32'
    });

    pwm0_subscriber.subscribe(function(message) {
      console.log('Received message on ' + pwm0_subscriber.name + ': ' + message.data);
      pwm0_store.set(message.data);
    });

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h1>Simple roslib Example</h1>
<p>Check your Web Console for output.</p>

<p>PWM 0 Value: {pwm0}</p>