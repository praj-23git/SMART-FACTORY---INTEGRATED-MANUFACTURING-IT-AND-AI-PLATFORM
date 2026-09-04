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
