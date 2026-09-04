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
