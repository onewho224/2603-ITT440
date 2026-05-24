# MOHAMAD AIMAN FAIZ BIN MAZLAN

---

# 🚀 Performance Evaluation of HTTP Response Behavior Under Concurrent Load Using k6

---

## 🎓 ITT440 – Network Programming (Individual Assignment)

| Item | Details |
|------|--------|
| **Name** | MOHAMAD AIMAN FAIZ BIN MAZLAN |
| **Student No** | 2024369211 |
| **Course** | ITT440 – Network Programming |
| **Target API** | https://httpbin.org/ |
| **Tools Used** | k6, Grafana, InfluxDB, Docker |

---

# 1. Project Overview

This project evaluates how a public API behaves under different levels of concurrent user load using the **k6 performance testing tool**.

The focus is not only whether the API works, but how it performs under real-world conditions such as normal usage, stress load, and failure simulation.

All results are collected using **InfluxDB** and visualized through **Grafana dashboards**.

---

# 2. Problem Statement

Modern APIs must handle multiple concurrent users efficiently.

However, under increasing load, systems may experience:

- Increased response time  
- Reduced throughput  
- Higher error rates  
- Performance instability  

This project investigates these behaviors using structured performance testing.

---

# 3. Objectives

- Evaluate HTTP response performance under concurrent load  
- Measure response time, throughput, and failure behavior  
- Identify performance bottlenecks  
- Observe system stability under stress  
- Visualize metrics using Grafana  

---

# 4. Tools Used

- k6 → Performance testing engine  
- Grafana → Visualization dashboard  
- InfluxDB → Metrics storage  
- Docker → Container environment  
- httpbin.org → Public API test target  

---

# 5. System Architecture

```
k6 → httpbin API → InfluxDB → Grafana
```

This pipeline enables real-time monitoring of API performance during execution.

---

# 6. Test Scenarios

## 🟢 Baseline Throughput Test

- Endpoint: `/get`  
- Virtual Users: 30  
- Duration: 1 minute  

### Purpose
Measure normal API performance under expected usage.

### Observation
- Stable response time  
- No errors  
- Consistent throughput  

📸 Evidence  
![Baseline Test](screenshots/grafana-average-response-time.png)

---

## 🟠 Latency Stress Test

- Endpoint: `/delay/2`  
- Virtual Users: 0 → 60  
- Duration: 2 minutes  

### Purpose
Simulate delayed responses and increasing traffic.

### Observation
- Response time increases under load  
- Latency spikes at high VUs  
- System remains stable  

📸 Evidence  
![Latency Test](screenshots/grafana-requests-per-second.png)

---

## 🔴 Failure Behavior Test

- Endpoint: `/status/500`  
- Virtual Users: 25  
- Duration: 1 minute  

### Purpose
Test system behavior under server error conditions.

### Observation
- HTTP 500 responses handled correctly  
- No crash observed  
- System remains stable  

📸 Evidence  
![Failure Test](screenshots/grafana-http-failure-rate.png)

---

# 7. How to Run the Test

```bash
$env:K6_OUT="influxdb=http://localhost:8086/k6"
k6 run script.js
```

All scenarios are already configured inside `script.js`.

---

# 8. k6 Script Summary

The test script contains 3 scenarios:
- Baseline Throughput Test  
- Latency Stress Test  
- Failure Behavior Test  

Each scenario simulates real-world API traffic conditions.

---

# 9. Results Summary

| Test | Observation |
|------|-------------|
| 🟢 Baseline | Stable performance, no errors |
| 🟠 Latency | Higher response time under load |
| 🔴 Failure | Correct HTTP 500 handling |

---

# 10. Key Findings

- API is stable under normal load
- Performance decreases under stress conditions
- Latency spikes appear under high concurrency
- No system failure detected
- System handled up to 60 concurrent users successfully  

---

# 11. Issues Observed

- Response time inconsistency under load  
- Latency spikes during stress test  
- No clear system breaking point reached  

---

# 12. Recommendations

- Implement caching to reduce latency  
- Improve backend response optimization
- Use load balancing for scalability
- Add rate limiting for traffic spikes
- Increase test range beyond 60 users for deeper analysis

---

# 13. System Evidence (Full Execution Proof)

## 🐳 Docker Containers Running
![Docker](screenshots/docker-running.png)

This shows both InfluxDB and Grafana running successfully.

---

## ⚡ k6 Execution Output
![k6 Result](screenshots/k6-finished.png)

This confirms all 3 test scenarios executed successfully.

---

## 📊 Grafana Dashboard Overview
![Grafana Dashboard](screenshots/grafana-dashboard.png)

Shows real-time metrics:
- Response time
- Request rate
- Error rate
- Virtual users

---

## 🔁 Retest Evidence
![Retest](screenshots/retest.png)

Shows consistency of results during repeated execution.

---

# 14. Conclusion

This project demonstrates that API performance is not only about successful responses.

> Even when an API is stable, performance bottlenecks can still appear under concurrent load.

The main limitation identified is latency under stress conditions, not system failure.

---

# 15. Video Demonstration

👉 https://youtube.com/

---

# ⭐ Final Note

This project integrates real performance engineering tools:
- k6 for load testing
- Grafana for visualization
- InfluxDB for metrics storage
- Docker for environment setup

All results are based on real execution data from a public API.
