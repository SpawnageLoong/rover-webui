import { writable } from "svelte/store";

export const pwm0 = writable(0);
export const pwm1 = writable(0);
export const pwm2 = writable(0);
export const pwm3 = writable(0);
export const pwm4 = writable(0);
export const pwm5 = writable(0);

export const vel_linear  = writable(0);
export const vel_angular = writable(0);

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
