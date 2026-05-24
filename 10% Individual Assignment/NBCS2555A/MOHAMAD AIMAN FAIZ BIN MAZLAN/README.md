# MOHAMAD AIMAN FAIZ BIN MAZLAN

---

# Performance Evaluation of HTTP Response Behavior Under Concurrent Load Using K6 on a Public API Service

## Student Information

| Item | Details |
|------|---------|
| **Name** | MOHAMAD AIMAN FAIZ BIN MAZLAN |
| **Student No.** | 2024369211 |
| **Course** | ITT440 – Network Programming |
| **Assignment** | Individual Assignment (10%) |

---

# 1. Project Overview

This project evaluates HTTP response behavior under concurrent load using **k6 performance testing tool** on a public API service.

The selected target API is:

👉 https://httpbin.org/

This service is used to simulate real-world HTTP behavior, including:

- Normal request handling
- Delayed network response
- Server error simulation

The main objective is to analyze how a web API performs under different concurrency levels and identify system bottlenecks.

Performance data is collected using **InfluxDB** and visualized using **Grafana dashboards**.

---

# 2. Problem Statement

Modern web APIs must handle concurrent user requests efficiently.

However, under high traffic conditions, systems may experience:

- Increased response time  
- Reduced throughput  
- Higher error rates  

Therefore, performance testing is essential to evaluate system stability, scalability, and reliability under load.

---

# 3. Objectives

- Evaluate HTTP response behavior under concurrent load  
- Measure response time and throughput  
- Identify system performance bottlenecks  
- Analyze failure behavior under stress conditions  
- Visualize performance metrics using Grafana  

---

# 4. Tools Used

| Tool | Purpose |
|------|--------|
| k6 | Performance and load testing |
| Grafana | Real-time visualization |
| InfluxDB 1.8 | Time-series metrics storage |
| Docker | Containerized environment |
| httpbin.org | Public API test service |

---

# 5. Test Scenarios

## 5.1 Baseline Throughput Test

**Endpoint:** `/get`  
**Virtual Users:** 30  
**Duration:** 1 minute  

### Purpose:
- Measure normal API performance  
- Establish baseline throughput  
- Validate system stability under normal conditions  

---

## 5.2 Latency Stress Test

**Endpoint:** `/delay/2`  
**Virtual Users:** 0 → 60  
**Duration:** 2 minutes  

### Purpose:
- Simulate network latency conditions  
- Observe response time degradation  
- Analyze system behavior under increasing load  

---

## 5.3 Failure Behavior Test

**Endpoint:** `/status/500`  
**Virtual Users:** 25  
**Duration:** 1 minute  

### Purpose:
- Simulate server failure response  
- Measure error handling capability  
- Evaluate system stability under failure conditions  

---

# 6. k6 Test Script

📄 File: [`script.js`](./script.js)

## Execution Command

```bash
$env:K6_OUT="influxdb=http://localhost:8086/k6"
k6 run script.js
```

---

## Script Summary

The script includes:

- Three performance test scenarios
- Concurrent virtual user simulation
- HTTP request validation using checks
- Real-time metrics export to InfluxDB

---

# 7. System Architecture

```
k6 (Load Generator)
        ↓
InfluxDB (Metrics Storage)
        ↓
Grafana (Visualization Dashboard)
```

---

# 8. Results Summary

| Test Name | Observation |
|-----------|------------|
| Baseline Throughput Test | Stable response time and high throughput |
| Latency Stress Test | Noticeable increase in response time under load |
| Failure Behavior Test | HTTP 500 errors correctly detected |

---

# 9. Performance Analysis

## 9.1 Baseline Test

- Stable response time  
- No request failures  
- High throughput performance  

## 9.2 Latency Stress Test

- Response time increases significantly  
- Throughput decreases under load  
- System delay observed under concurrency  

## 9.3 Failure Behavior Test

- HTTP 500 responses successfully captured  
- Error rate increases as expected  
- System remains stable under failure simulation  

---

# 10. Bottleneck Analysis

Identified performance limitations:

- Increased latency under concurrent users  
- Reduced throughput during stress conditions  
- Error handling behavior under failure scenarios  

---

# 11. Conclusion

This project successfully demonstrates HTTP response behavior under concurrent load using k6.

Key findings:

- API performs efficiently under normal conditions  
- Performance degrades under stress and latency simulation  
- Failure responses are correctly handled and monitored  
- Grafana provides effective visualization of system behavior  

This confirms the importance of performance testing in network-based applications.

---

# 12. Video Demonstration

👉 YouTube Link: https://youtube.com/
