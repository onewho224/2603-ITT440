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

This project evaluates how an API behaves under different levels of traffic using **k6 performance testing tool**.

Instead of only checking whether the API works, the focus is on how it performs under real conditions such as normal usage, stress load, and failure responses.

The results are collected using **InfluxDB** and visualized in **Grafana dashboards**.

---

# 2. Objective

The main objective is to understand HTTP performance behavior under concurrent access.

This includes:
- Response time behavior under load  
- Throughput changes  
- Failure handling  
- System stability observation  

---

# 3. Tools Used

- k6 → Load testing engine  
- Grafana → Visualization dashboard  
- InfluxDB → Metrics storage  
- Docker → Container runtime  
- httpbin.org → Test API  

---

# 4. System Flow

```
k6 → httpbin API → InfluxDB → Grafana
```

This flow allows real-time monitoring of test execution results.

---

# 5. Test Scenarios & Results

---

## 🟢 5.1 Baseline Throughput Test

- Endpoint: `/get`  
- Users: 30 VUs  
- Duration: 1 minute  

### Purpose
To measure normal API performance under expected usage.

### Result
- Stable response time  
- No failed requests  
- Consistent throughput  

### 📸 Evidence
![Baseline Test](screenshots/baseline.png)

---

## 🟠 5.2 Latency Stress Test

- Endpoint: `/delay/2`  
- Users: 0 → 60 VUs  
- Duration: 2 minutes  

### Purpose
To observe performance under delayed response conditions and increasing traffic.

### Result
- Response time increases under load  
- Latency spikes detected  
- System remains stable  

### 📸 Evidence
![Latency Test](screenshots/latency.png)

---

## 🔴 5.3 Failure Behavior Test

- Endpoint: `/status/500`  
- Users: 25 VUs  
- Duration: 1 minute  

### Purpose
To test system behavior under server error conditions.

### Result
- HTTP 500 handled correctly  
- No system crash  
- Stable execution  

### 📸 Evidence
![Failure Test](screenshots/failure.png)

---

# 6. How to Run the Test

```bash
$env:K6_OUT="influxdb=http://localhost:8086/k6"
k6 run script.js
```

All scenarios are already configured inside `script.js`.

---

# 7. k6 Script Summary

The script contains:
- Baseline Throughput Test  
- Latency Stress Test  
- Failure Behavior Test  

Each scenario simulates different real-world traffic conditions.

---

# 8. Results Summary

| Test | Observation |
|------|-------------|
| 🟢 Baseline | Stable performance, no errors |
| 🟠 Latency | Higher response time under load |
| 🔴 Failure | Correct error handling |

---

# 9. Key Findings

- API is stable under normal conditions  
- No request failures observed  
- Response time increases with load  
- Tail latency is present under stress  
- System handles up to 60 concurrent users  

---

# 10. Issues Observed

- Response time inconsistency under load  
- Latency spikes during stress test  
- No clear system breaking point identified  

---

# 11. Recommendations

- Implement caching to reduce latency  
- Use load balancing for traffic scaling  
- Optimize backend response handling  
- Add rate limiting for spike protection  
- Expand testing beyond 60 users for deeper analysis  

---

# 12. System Evidence (Full Execution Proof)

## 🐳 Docker Containers Running
![Docker](screenshots/docker.png)

This shows both InfluxDB and Grafana running successfully.

---

## ⚡ k6 Execution Output
![k6 Result](screenshots/k6-result.png)

This confirms all 3 test scenarios executed successfully.

---

## 📊 Grafana Dashboard Overview
![Grafana Dashboard](screenshots/grafana.png)

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

# 13. Conclusion

This project successfully demonstrates API performance behavior under different traffic conditions.

The main takeaway is that:
> Even when an API looks stable, stress testing reveals hidden performance differences.

This is why proper load testing is important before deploying real systems.

---

# 14. Video Demonstration

👉 https://youtube.com/

---

# 📌 Repository Structure

```
ITT440-Performance-Testing/
│
├── script.js
├── README.md
└── screenshots/
    ├── baseline.png
    ├── latency.png
    ├── failure.png
    ├── docker.png
    ├── k6-result.png
    ├── grafana.png
    └── retest.png
```

---

# ⭐ Final Note

This project integrates:
- Real API testing
- Load simulation using k6
- Metrics storage using InfluxDB
- Visualization using Grafana

All results are based on real-time execution data.
