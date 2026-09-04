# 🏭 SmartFactory — Integrated Manufacturing IT & AI Platform

> A small-scale smart manufacturing information system integrating production management, machine monitoring, IoT simulation, PDM/BOM, analytics, and Generative AI.

---

## 📌 Overview

**SmartFactory** is a prototype manufacturing information system designed to demonstrate how different IT technologies can be integrated into a modern manufacturing environment.

In a typical manufacturing organization, information is distributed across different systems — production records, machine data, maintenance information, customer orders, product structures, and technical documents.

SmartFactory brings these different types of information together into a single platform.

The system combines:

- 🏭 Production Management
- ⚙️ Machine & Maintenance Management
- 📦 Customer & Order Management
- 🧩 Product Data & BOM Management
- 📡 Simulated IoT Monitoring
- 📊 Manufacturing Analytics
- 🚨 Automated Machine Alerts
- 🤖 Generative AI Assistant
- 🔎 SQL-based Data Retrieval
- 📚 Retrieval-Augmented Generation (RAG)
- 🔗 REST API Integration

The project uses **simulated manufacturing and IoT data** and does not use proprietary industrial data.

---

## 🎯 Project Objective

The objective of SmartFactory is to explore how **manufacturing operations, enterprise information, engineering data, IoT, databases, analytics, and AI** can work together as one integrated information system.

The project was designed around the idea of creating a **"digital brain for a factory"** — a system that can collect information from different manufacturing functions and make that information easier to monitor, analyze, and access.

---

# 🏗️ System Architecture

```text
                         SMARTFACTORY
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
   Production            Machine Data         Business Data
        │                     │                     │
        │                     ▼                     ▼
        │                  IoT Data           Customers / Orders
        │                     │
        │                     ▼
        │                   Alerts
        │
        └─────────────────────┬─────────────────────┘
                              │
                              ▼
                       SQLite Database
                              │
                              ▼
                       Flask REST APIs
                              │
             ┌────────────────┴────────────────┐
             │                                 │
             ▼                                 ▼
       Web Dashboard                    AI Assistant
                                               │
                                  ┌────────────┴────────────┐
                                  │                         │
                                  ▼                         ▼
                            SQL Retrieval              RAG Retrieval
                                  │                         │
                                  ▼                         ▼
                            SQLite DB                   FAISS
                                                            │
                                                            ▼
                                                   Manufacturing Docs
                                  │                         │
                                  └────────────┬────────────┘
                                               ▼
                                            Gemma 2B
                                               │
                                               ▼
                                           AI Response
```
# 🚀 Features & AI

SmartFactory is a small-scale manufacturing information system that integrates production management, machine monitoring, maintenance, product information, IoT simulation, analytics, and Generative AI into a single platform.

The main goal is to demonstrate how structured manufacturing data and unstructured technical knowledge can be combined to create an intelligent manufacturing assistant.

---

# ✨ Features

## 🏭 1. Production Management

The system manages manufacturing production information including:

- Production records
- Machine-wise production
- Product-wise production
- Production quantity
- Defect quantity
- Production dates

The production data is stored in a relational database and exposed through REST APIs.

---

## ⚙️ 2. Machine Management

SmartFactory maintains information about manufacturing machines.

Each machine contains:

- Machine ID
- Machine name
- Machine type
- Location
- Current status

The prototype contains different machine types such as:

- Injection Molding
- Die Casting
- Industrial Robot
- Extrusion
- CNC Machine Tool

---

## 🔧 3. Maintenance Management

The maintenance module stores machine maintenance information.

It tracks:

- Machine
- Maintenance type
- Maintenance description
- Downtime hours
- Maintenance date

This information is used to analyze machine downtime and maintenance activity.

---

## 📡 4. IoT Machine Monitoring

The project includes a simulated IoT layer representing sensor data that could be generated by industrial machines.

The simulator generates:

- 🌡️ Temperature
- 📳 Vibration
- 💨 Pressure
- ⏱️ Operating hours
- 🕒 Timestamp

The generated data is stored in the database and displayed on the dashboard.

Certain machines are intentionally assigned abnormal readings to demonstrate condition monitoring.

Example:

```text
M-002 → High Temperature
M-003 → High Vibration
M-004 → High Pressure
```
## 📸 Screenshots

The following screenshots demonstrate the main features and working interface of the SmartFactory system.

### 1. SmartFactory Dashboard

The main dashboard provides a centralized view of the manufacturing system, including production performance, machine status, maintenance information, IoT data, alerts, and analytics.


(<img width="1855" height="961" alt="image" src="https://github.com/user-attachments/assets/de8fe8c0-6bb6-46d6-9ccf-bcd08cbfd39a" />
)

### 2. Production & Machine Monitoring

The dashboard displays production quantities, defects, machine information, and operational status, allowing users to monitor manufacturing activities from a single interface.


(<img width="1848" height="507" alt="image" src="https://github.com/user-attachments/assets/5c49b5dc-209f-439b-b6a3-3a2eef6c291a" />
)

### 3. IoT Monitoring & Alerts

Simulated IoT sensor data is used to monitor machine temperature, vibration, pressure, and operating hours. The system automatically detects abnormal readings and generates maintenance alerts.


(<img width="1867" height="931" alt="image" src="https://github.com/user-attachments/assets/a8628915-14af-4ca9-b519-952faa3b090c" />
)

### 4. Manufacturing Analytics

Interactive charts provide a visual representation of production, defects, downtime, and machine operating hours, helping users understand manufacturing performance.


(<img width="1804" height="690" alt="image" src="https://github.com/user-attachments/assets/cead911f-ee27-4efb-b25b-f8897dfe0481" />
)

### 5. Product Engineering & BOM

The Product Engineering section provides product information and displays the Bill of Materials (BOM), including components, quantities, materials, specifications, and manufacturing stages.


(<img width="1875" height="931" alt="image" src="https://github.com/user-attachments/assets/f84aa767-c9eb-40c5-8cf0-58468ffb8329" />
)

### 6. AI Manufacturing Assistant

The AI assistant allows users to ask questions about manufacturing data and technical knowledge.

The assistant can retrieve structured information using SQL, retrieve technical information using RAG, and combine both approaches for machine-specific analysis.


(<img width="1828" height="826" alt="image" src="https://github.com/user-attachments/assets/5ab707fc-c4e6-42e1-9dfe-d1973d5e56f4" />
)

---

## 📊 Results

The SmartFactory prototype successfully integrates multiple manufacturing IT concepts into a single system.

### Key Results

- **Centralized Manufacturing Information:** Production, machines, maintenance, customers, orders, products, and BOM information are managed through a unified platform.

- **Real-Time-Style Machine Monitoring:** Simulated IoT sensor data provides continuous machine readings for temperature, vibration, pressure, and operating hours.

- **Automated Anomaly Detection:** The system identifies abnormal machine conditions and generates alerts when sensor values exceed predefined thresholds.

- **Manufacturing Analytics:** Interactive dashboards provide visual insights into production, defects, downtime, and machine utilization.

- **Product Data Management:** Products, components, BOM structures, versions, and manufacturing stages are represented using a structured database.

- **AI-Based Knowledge Retrieval:** Technical manufacturing documents can be searched using a RAG-based AI assistant.

- **SQL-Based Data Analysis:** The AI assistant can answer questions involving structured manufacturing data using predefined SQL queries.

- **Combined SQL + RAG Analysis:** Machine-specific questions can use both live sensor information and technical manufacturing knowledge to provide more useful responses.

- **REST API Integration:** The different modules communicate through Flask REST API endpoints, providing a foundation for integrating frontend, database, analytics, IoT, and AI components.

