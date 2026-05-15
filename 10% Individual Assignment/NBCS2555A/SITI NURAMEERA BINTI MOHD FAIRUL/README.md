# SITI NURAMEERA BINTI MOHD FAIRUL
# Comprehensive Performance Testing and Bottleneck Analysis of SpaceX REST API Using Grafana k6

## Introduction

This project focuses on performance testing of the SpaceX REST API using Grafana k6. The purpose of this project is to evaluate the API performance under different traffic conditions including load testing, stress testing, and spike testing.

## Target API

https://api.spacexdata.com/v4/launches/latest

## Testing Tool

Grafana k6

## Test Types

- Load Test
- Stress Test
- Spike Test
  
## Hypothesis

The hypothesis of this project is that the SpaceX REST API can handle moderate user traffic efficiently during normal load conditions. However, under extreme concurrent user requests during stress and spike testing, the API may experience increased response time, reduced throughput, and possible request failures.

---

## Test Environment

- Operating System: Kali Linux
- Performance Testing Tool: Grafana k6
- Target API: https://api.spacexdata.com/v4/launches/latest
- Internet Connection: Stable broadband connection

---

## Load Test

The load test was performed to evaluate the API performance under normal expected traffic conditions.

### Load Test Script

```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 20,
  duration: '30s',
};

export default function () {
  const res = http.get('https://api.spacexdata.com/v4/launches/latest');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}
```

### Load Test Result

<img width="755" height="563" alt="image" src="https://github.com/user-attachments/assets/8794657d-0d1f-4e94-9a58-94b62faed371" />


### Analysis

The load test showed stable performance with low response time and no significant request failures. The API successfully handled moderate concurrent traffic efficiently.

---

## Stress Test

The stress test was conducted to determine the breaking point of the API under high user load.

### Stress Test Script

```javascript
import http from 'k6/http';

export const options = {
  stages: [
    { duration: '30s', target: 50 },
    { duration: '30s', target: 100 },
    { duration: '30s', target: 200 },
    { duration: '30s', target: 0 },
  ],
};

export default function () {
  http.get('https://api.spacexdata.com/v4/launches/latest');
}
```

### Stress Test Result

<img width="965" height="386" alt="image" src="https://github.com/user-attachments/assets/1ebc67cc-5970-4621-90be-5ebcbe2ad9c0" />


### Analysis

The stress test indicated increased response times and reduced performance stability as the number of virtual users increased. Some requests experienced delays under heavy traffic conditions.

---

## Spike Test

The spike test evaluated the API behavior during sudden traffic increases.

### Spike Test Script

```javascript
(PASTE SPIKE TEST CODE HERE)
```

### Spike Test Result

<img width="918" height="391" alt="image" src="https://github.com/user-attachments/assets/c314c483-cfc4-45e9-a48b-51638fa4c216" />


### Analysis

The spike test demonstrated that sudden increases in user traffic affected the response consistency of the API. Temporary latency spikes were observed during rapid traffic escalation.

---

## Bottleneck Analysis

Several potential bottlenecks were identified during the testing process. Under higher concurrent traffic, the API showed increased response times and reduced stability. This may indicate server-side limitations, network latency, or possible rate limiting mechanisms.

---

## Recommendations

- Implement load balancing mechanisms
- Improve backend resource optimization
- Introduce caching strategies
- Enhance server scalability for high traffic scenarios

---

## Conclusion

This project successfully demonstrated the use of Grafana k6 for conducting performance testing on the SpaceX REST API. The load, stress, and spike tests provided valuable insights into the API performance behavior under different traffic conditions. Overall, the API performed well under moderate load but showed performance degradation during extreme traffic conditions.
