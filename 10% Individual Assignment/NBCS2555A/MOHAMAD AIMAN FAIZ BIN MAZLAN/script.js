import http from 'k6/http';
import { check, sleep } from 'k6';

/*
========================================================
ITT440 - Network Programming
Performance Testing Script using k6
Target: https://httpbin.org/
========================================================
*/

export const options = {
  scenarios: {

    // =========================
    // 1. Baseline Throughput Test
    // =========================
    baseline_throughput: {
      executor: 'constant-vus',
      vus: 30,
      duration: '1m',
      exec: 'baselineTest',
    },

    // =========================
    // 2. Latency Stress Test
    // =========================
    latency_stress: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '30s', target: 20 },
        { duration: '1m', target: 60 },
        { duration: '30s', target: 0 },
      ],
      exec: 'latencyTest',
    },

    // =========================
    // 3. Failure Behavior Test
    // =========================
    failure_behavior: {
      executor: 'constant-vus',
      vus: 25,
      duration: '1m',
      exec: 'failureTest',
    },
  },
};

/* =========================
   BASELINE THROUGHPUT TEST
   ========================= */
export function baselineTest() {
  const res = http.get('https://httpbin.org/get');

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}

/* =========================
   LATENCY STRESS TEST
   ========================= */
export function latencyTest() {
  const res = http.get('https://httpbin.org/delay/2');

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}

/* =========================
   FAILURE BEHAVIOR TEST
   ========================= */
export function failureTest() {
  const res = http.get('https://httpbin.org/status/500');

  check(res, {
    'status is 500': (r) => r.status === 500,
  });

  sleep(1);
}