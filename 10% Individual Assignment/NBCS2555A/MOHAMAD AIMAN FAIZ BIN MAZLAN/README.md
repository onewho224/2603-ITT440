# MOHAMAD AIMAN FAIZ BIN MAZLAN

# ITT440 – Performance Evaluation and Scalability Analysis of HTTP Request Handling Under Concurrent Load Using k6 on a Public API Service

## Student Information
**Name:** MOHAMAD AIMAN FAIZ BIN MAZLAN  
**Student No:** 2024369211  
**Course:** ITT440  

---

## Project Overview
This project evaluates the performance and scalability of HTTP request handling under concurrent load using k6 on a public API service. The selected target is httpbin.org, which provides multiple endpoints for testing HTTP requests and responses.

The purpose of this project is to measure API response time, throughput and error handling under different traffic conditions and identify performance bottlenecks.

---

## Objectives
- Evaluate API performance under different load conditions
- Measure response time and throughput
- Identify bottlenecks
- Analyze system stability
- Visualize performance using Grafana

---

## Tools Used
- k6
- Grafana
- InfluxDB
- httpbin.org

---

## Target API
https://httpbin.org/

Endpoints tested:
- `/get`
- `/delay/2`
- `/status/500`

---

## Test Scenarios

### 1. Baseline Throughput Test
**Endpoint:** `/get`  
**Users:** 30 VUs  
**Duration:** 1 minute  

Purpose:
- Measure normal response time
- Observe throughput
- Confirm API stability

---

### 2. Latency Stress Test
**Endpoint:** `/delay/2`  
**Users:** 0–60 VUs  
**Duration:** 2 minutes  

Purpose:
- Simulate delayed server response
- Observe latency under concurrent users
- Identify performance degradation

---

### 3. Failure Behavior Test
**Endpoint:** `/status/500`  
**Users:** 25 VUs  
**Duration:** 1 minute  

Purpose:
- Test error response handling
- Observe failure rate
- Evaluate system stability

---

## k6 Test Script

```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  scenarios: {

    baseline_throughput: {
      executor: 'constant-vus',
      vus: 30,
      duration: '1m',
      exec: 'baselineTest',
    },

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

    failure_behavior: {
      executor: 'constant-vus',
      vus: 25,
      duration: '1m',
      exec: 'failureTest',
    },
  },
};

export function baselineTest() {
  const res = http.get('https://httpbin.org/get');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}

export function latencyTest() {
  const res = http.get('https://httpbin.org/delay/2');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}

export function failureTest() {
  const res = http.get('https://httpbin.org/status/500');
  check(res, {
    'status is 500': (r) => r.status === 500,
  });
  sleep(1);
}
```

---

## Grafana Dashboard

Dashboard panels used:

- HTTP Request Duration
- Requests per Second
- Virtual Users
- Error Rate
- Response Time Percentiles

---

## Results Summary

### Baseline Throughput Test
- Stable response time
- No errors detected
- High throughput

### Latency Stress Test
- Response time increased
- Throughput reduced
- Delay observed

### Failure Behavior Test
- HTTP 500 detected
- Error rate increased
- System remained stable

---

## Bottleneck Analysis
The bottlenecks identified include:

- Higher response time during delay testing
- Lower throughput under concurrent load
- Increased error rate in failure testing

---

## Recommendations
- Optimize server response handling
- Improve scalability
- Apply caching where needed
- Monitor continuously using Grafana

---

## Conclusion
The API handled normal traffic efficiently but showed increased latency and reduced throughput under stress conditions. Error handling worked correctly during failure testing. Grafana helped visualize system performance and made bottleneck analysis easier.

---

## Screenshots

### Grafana Dashboard
(Add screenshot here)

### Response Time Graph
(Add screenshot here)

### Error Rate Graph
(Add screenshot here)

### Virtual Users Graph
(Add screenshot here)
