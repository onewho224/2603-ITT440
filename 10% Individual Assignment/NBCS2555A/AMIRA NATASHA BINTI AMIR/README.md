# AMIRA NATASHA BINTI AMIR
# Comprehensive Performance Testing and Bottleneck Analysis of a Web Application using Apache JMeter

## Project Overview

This project focuses on conducting comprehensive performance testing on the web application:

https://performancetestingpractice.com/

using Apache JMeter. The objective of this project is to evaluate the application's performance, stability, and scalability under different user load conditions through multiple testing methodologies.

---

# Objectives

* To perform Load Testing, Stress Testing, and Soak Testing using Apache JMeter.
* To analyze the application's response time, throughput, latency, and error rate.
* To identify system bottlenecks and performance limitations.
* To provide recommendations for performance optimization and system improvement.

---

# Performance Testing Tool

## Apache JMeter

Apache JMeter was selected because it is an open-source and industry-standard performance testing tool capable of simulating concurrent users and generating detailed analytical reports.

### Advantages of Apache JMeter

* Free and open-source
* Supports multiple performance testing types
* User-friendly graphical interface
* Generates detailed reports and graphs
* Widely used in real-world industry testing

Official Website:
https://jmeter.apache.org/

---

# Target Web Application

Website Tested:

https://performancetestingpractice.com/

This website was selected because it is publicly accessible and designed specifically for practicing performance and automation testing scenarios.

---

# Test Environment

| Component           | Specification       |
| ------------------- | ------------------- |
| Operating System    | Windows 11          |
| Processor           | Intel Core i5       |
| RAM                 | 8 GB                |
| Tool                | Apache JMeter 5.6.3 |
| Java Version        | JDK 17              |
| Browser             | Google Chrome       |
| Internet Connection | Stable Broadband    |

---

# Performance Testing Types

## 1. Load Test

### Objective

To determine whether the application can handle normal expected traffic loads.

### Configuration

| Parameter      | Value      |
| -------------- | ---------- |
| Virtual Users  | 10         |
| Ramp-Up Period | 10 Seconds |
| Loop Count     | 2          |

### Expected Outcome

The application should remain stable with low response time and minimal errors under normal user traffic conditions.

---

## 2. Stress Test

### Objective

To identify the breaking point of the application under extreme traffic conditions.

### Configuration

| Parameter      | Value      |
| -------------- | ---------- |
| Virtual Users  | 100        |
| Ramp-Up Period | 20 Seconds |
| Loop Count     | 5          |

### Expected Outcome

The application may experience increased response time, server instability, and request failures under heavy load conditions.

---

## 3. Soak Test

### Objective

To evaluate the long-term stability and reliability of the application.

### Configuration

| Parameter     | Value      |
| ------------- | ---------- |
| Virtual Users | 20         |
| Duration      | 30 Minutes |
| Loop Count    | Forever    |

### Expected Outcome

The application should maintain stable performance over an extended period without significant degradation or memory leaks.

---

# Test Methodology

The following methodology was applied during testing:

1. Configure Thread Group settings in Apache JMeter.
2. Create HTTP Request samplers targeting the web application.
3. Simulate concurrent virtual users.
4. Execute Load, Stress, and Soak testing scenarios.
5. Collect performance metrics using JMeter listeners and HTML Dashboard Reports.
6. Analyze response time, throughput, latency, and error rates.
7. Identify bottlenecks and system limitations.

---

# Performance Metrics Analyzed

The following Key Performance Indicators (KPIs) were analyzed:

| KPI            | Description                             |
| -------------- | --------------------------------------- |
| Response Time  | Time taken for the server to respond    |
| Throughput     | Number of requests processed per second |
| Error Rate     | Percentage of failed requests           |
| Latency        | Delay before receiving server response  |
| Active Threads | Number of active virtual users          |

---

# Bottleneck Analysis

Based on the testing conducted, several potential bottlenecks were identified:

* Increased response time during high concurrent traffic.
* HTTP request failures under stress conditions.
* Possible server-side rate limiting or anti-bot protection.
* Resource limitations affecting throughput consistency.

---

# Recommendations

Several improvements are recommended to enhance the application's performance:

* Implement server-side load balancing.
* Optimize backend processing and database queries.
* Improve caching mechanisms.
* Increase server resource allocation.
* Configure better request handling during peak traffic conditions.

---

# Conclusion

In conclusion, Apache JMeter successfully demonstrated the performance characteristics of the target web application under different load conditions. The Load Test showed acceptable performance during normal traffic, while the Stress Test revealed system limitations under heavy load. The Soak Test evaluated the application's long-term stability and consistency.

The project provided valuable insights into web application performance analysis, bottleneck identification, and optimization strategies commonly applied in real-world industry environments.

---

# Screenshots

## JMeter Configuration



## Aggregate Report



## HTML Dashboard Report



## Graph Analysis


---

# Video Presentation

YouTube Link:


---

# Author

Name: AMIRA NATASHA BINTI AMIR
Course: ITT440
Project: Comprehensive Web Application Performance Testing & Analysis
