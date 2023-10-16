import { writable,get } from "svelte/store";
import ROSLIB from "roslib";

export const host = writable("192.168.1.168")
export const rosConnection = writable(false);

export const pwm0 = writable(0);
export const pwm1 = writable(0);
export const pwm2 = writable(0);
export const pwm3 = writable(0);
export const pwm4 = writable(0);
export const pwm5 = writable(0);

export const input_throttle = writable(0);
export const input_steering = writable(0);
export const input_increment = writable(1);

export const gamepad_input = writable(false);
gamepad_input.subscribe(() => {
  input_throttle.set(0);
  input_steering.set(0);
})

export const Vmax = writable(2.924);
export const Wmax = writable(6.542);

export const vel_linear  = writable(0.0);
export const vel_angular = writable(0.0);

export const camera_pan = writable(0.0);
export const camera_tilt = writable(0.0);

export const ext_temp0 = writable(0);
export const int_temp0 = writable(0);
export const int_temp1 = writable(0);
export const int_temp2 = writable(0);
export const int_hum0  = writable(0);
export const int_hum1  = writable(0);
export const int_hum2  = writable(0);
export const int_pres0 = writable(0);
export const alt0      = writable(0);

export const accel_x  = writable(0);
export const accel_y  = writable(0);
export const accel_z  = writable(0);
export const gyro_x   = writable(0);
export const gyro_y   = writable(0);
export const gyro_z   = writable(0);
export const mag_x    = writable(0);
export const mag_y    = writable(0);
export const mag_z    = writable(0);
export const imu_temp = writable(0);

// Connecting to ROS
// -----------------
var ros = new ROSLIB.Ros({
    url : 'ws://192.168.1.168:9090'
});
ros.on('connection', function() {
    console.log('Connected to websocket server.');
    rosConnection.set(true);
});
ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
    rosConnection.set(false);
});
ros.on('close', function() {
    console.log('Connection to websocket server closed.');
    rosConnection.set(false);
});

// Subscribing to a Topic
// --------------------------------------

  var pwm_subscriber = new ROSLIB.Topic({
    ros : ros,
    name : '/motors_pwm',
    messageType : 'rover_interfaces/PwmArray'
  });
  var sensor_subscriber = new ROSLIB.Topic({
    ros : ros,
    name : '/sensor_data',
    messageType : 'rover_interfaces/SensorData'
  });

  // Subscriber callbacks
  // --------------------

  pwm_subscriber.subscribe(function(message) {
    // console.log('Received message on ' + pwm0_subscriber.name + ': ' + message.data);
    pwm0.set(message.pwm0);
    pwm1.set(message.pwm1);
    pwm2.set(message.pwm2);
    pwm3.set(message.pwm3);
    pwm4.set(message.pwm4);
    pwm5.set(message.pwm5);
  });
  sensor_subscriber.subscribe(function(message) {
    // console.log('Received message on ' + sensor_subscriber.name);
    ext_temp0.set(message.ext_temp0);
    int_temp0.set(message.int_temp0);
    int_temp1.set(message.int_temp1);
    int_temp2.set(message.int_temp2);
    int_hum0.set(message.int_hum0);
    int_hum1.set(message.int_hum1);
    int_hum2.set(message.int_hum2);
    int_pres0.set(message.int_pres0);
    alt0.set(message.int_alt);
    accel_x.set(message.accel_x);
    accel_y.set(message.accel_y);
    accel_z.set(message.accel_z);
    gyro_x.set(message.gyro_x);
    gyro_y.set(message.gyro_y);
    gyro_z.set(message.gyro_z);
    mag_x.set(message.mag_x);
    mag_y.set(message.mag_y);
    mag_z.set(message.mag_z);
    imu_temp.set(message.int_temp3);
  })

  // Publishers
  // --------------------------------------
  var twist_publisher = new ROSLIB.Topic({
    ros : ros,
    name : '/cmd_vel',
    messageType : 'geometry_msgs/Twist'
  })

  vel_linear.subscribe(() => {
    var twist = new ROSLIB.Message({
      linear : {
        x : get(vel_linear),
        y : 0,
        z : 0
      },
      angular : {
        x : 0,
        y : 0,
        z : get(vel_angular)
      }
    });
    twist_publisher.publish(twist);
  })

  vel_angular.subscribe(() => {
    var twist = new ROSLIB.Message({
      linear : {
        x : get(vel_linear),
        y : 0.0,
        z : 0.0
      },
      angular : {
        x : 0.0,
        y : 0.0,
        z : get(vel_angular)
      }
    });
    twist_publisher.publish(twist);
  })
  