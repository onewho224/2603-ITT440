# ITT440 - Network Programming

## Benchmarking High-Throughput Performance of Stateless User-Management Services via Autocannon

---

## Student Information

| Details | Information |
|---|---|
| Name | Muhammad Ikram Masiran |
| Student ID | 2024522127 |
| Group | NBCS2555A |
| Course | ITT440 - Network Programming |

---

# 1. Introduction

In modern application development, APIs play a crucial role in enabling communication between systems. One of the most important aspects of API performance is its ability to handle a high number of requests efficiently, commonly measured as Requests Per Second (RPS).

This study focuses on evaluating the performance of a stateless API using ReqRes, a publicly available REST API designed for testing and learning purposes. Since ReqRes is stateless, it is suitable for benchmarking high-throughput scenarios without session dependency.

## Objectives

- To measure the throughput performance of the API
- To analyze system behavior under sudden high traffic spikes
- To evaluate long-term stability under continuous load

---

# 2. Methodology

## 2.1 Tools Used

- Autocannon
  - A Node.js-based HTTP benchmarking tool

## 2.2 Metrics Used

- Requests Per Second (RPS)
- Latency
- Throughput

## 2.3 Target API

### Endpoint
```bash
https://reqres.in/api/users?page=2
```

### Authentication
The test utilizes an `x-api-key` header to authenticate requests.

---

# 3. Testing Approach

## 3.1 Throughput Test

The throughput test measures API performance under low concurrency using 10 connections to establish a performance baseline.

### Command

```bash
autocannon -c 10 -d 10 -H "x-api-key: YOUR_API_KEY" https://reqres.in/api/users?page=2
```
### Design

```bash
Design: Analyzes performance as traffic remains at a baseline level.
```

<img width="1509" height="70" alt="image" src="https://github.com/user-attachments/assets/1aed5a21-0fe5-4431-8e46-f5ff9b7df7b6" />

---

## 3.2 Burst Spike Test

The burst spike test subjects the API to a sudden surge of 200 concurrent connections to identify system limits and breaking points.

### Command

```bash
autocannon -c 200 -d 10 -H "x-api-key: YOUR_API_KEY" https://reqres.in/api/users?page=2
```
### Design

```bash
 Design: Sudden jump from low to 200 concurrent users
```
<img width="1527" height="74" alt="image" src="https://github.com/user-attachments/assets/4e32fb4d-4d9e-47d8-a9b2-fff1d449c435" />


---

## 3.3 Endurance Soak Test

The endurance soak test applies a steady load of 50 connections over a duration of 5 minutes to evaluate long-term stability and consistency.

### Command

```bash
autocannon -c 50 -d 300 -H "x-api-key: YOUR_API_KEY" https://reqres.in/api/users?page=2
```
### Design

```bash
Design: 50 users for 5 minutes to detect performance degradation over time.
```
<img width="1517" height="73" alt="image" src="https://github.com/user-attachments/assets/b23604cd-3649-410d-a664-c0c116c175be" />


---

# 4. Results

## 4.1 Throughput Test Result

| Metric | Result |
|---|---|
| Average Latency | 30.2 ms |
| Average Request Rate | 326.3 req/s |
| Total Requests | 3,000 |
| Error Rate | 0% |

<img width="941" height="391" alt="image" src="https://github.com/user-attachments/assets/cf8bdb60-ae95-401b-89fa-c2c54008f917" />

---

## 4.2 Burst Spike Test Result

| Metric | Result |
|---|---|
| Average Latency | 548.9 ms |
| Max Latency | 1466 ms |
| Success Rate | 0% |
| Failed Responses | 3,558 non-2xx responses |

<img width="992" height="416" alt="image" src="https://github.com/user-attachments/assets/792878cf-be7f-4de4-9a63-abbc07c3a975" />

---

## 4.3 Endurance Soak Test Result

| Metric | Result |
|---|---|
| Average Latency | 154.12 ms |
| Max Latency | 2861 ms |
| Total Requests | 600,000 |
| Error Rate | ~100% |
| Failed Responses | 598,898 non-2xx responses |

<img width="985" height="414" alt="image" src="https://github.com/user-attachments/assets/d0aa37a6-e27a-4b1e-b5d3-3bdbb2c7a12e" />

---

# 5. Discussion

The throughput test demonstrated excellent API performance under low concurrency conditions with low response latency and zero error rates.

However, the stress and endurance tests revealed significant reliability degradation under high load conditions. During the burst spike test, the system experienced a complete failure with a 100% error rate. Although the average latency was recorded at 548.9 ms, the responses mainly represented rejected requests rather than successful data delivery.

The endurance soak test further confirmed these limitations. Sustained traffic over five minutes resulted in high latency spikes and a large number of failed requests. These findings suggest that the API infrastructure enforces strict rate limiting and experiences scalability limitations under high-throughput scenarios.

---

# 6. Conclusion

This project successfully evaluated the performance and reliability of the ReqRes API using high-throughput benchmarking with Autocannon.

The findings indicate that the API performs efficiently under low traffic conditions but experiences significant degradation as concurrency levels increase.

## Summary

- Excellent response time under low load
- High failure rates under heavy traffic
- Limited scalability during stress conditions
- Strong rate-limiting mechanisms detected

## Recommendations

- Implement load balancing
- Improve caching mechanisms
- Optimize server-side infrastructure
- Increase scalability support for high-concurrency environments

---

# 7. Technologies Used

- Node.js
- Autocannon
- REST API
- ReqRes API

---

# 8. References

1. ReqRes API  
   https://reqres.in/

2. Autocannon GitHub Repository  
   https://github.com/mcollina/autocannon
