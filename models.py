from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


# =========================
# Machine
# =========================

class Machine(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    machine_name = db.Column(
        db.String(100),
        nullable=False
    )

    machine_type = db.Column(
        db.String(100),
        nullable=False
    )

    location = db.Column(
        db.String(100),
        nullable=False
    )

    status = db.Column(
        db.String(50),
        nullable=False
    )


# =========================
# Production
# =========================

class Production(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    machine_id = db.Column(
        db.Integer,
        db.ForeignKey("machine.id"),
        nullable=False
    )

    product_name = db.Column(
        db.String(100),
        nullable=False
    )

    quantity = db.Column(
        db.Integer,
        nullable=False
    )

    defects = db.Column(
        db.Integer,
        nullable=False
    )

    production_date = db.Column(
        db.String(20),
        nullable=False
    )


# =========================
# Maintenance
# =========================

class Maintenance(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    machine_id = db.Column(
        db.Integer,
        db.ForeignKey("machine.id"),
        nullable=False
    )

    maintenance_type = db.Column(
        db.String(100),
        nullable=False
    )

    description = db.Column(
        db.String(255),
        nullable=False
    )

    downtime_hours = db.Column(
        db.Float,
        nullable=False
    )

    maintenance_date = db.Column(
        db.String(20),
        nullable=False
    )


# =========================
# Customer
# =========================

class Customer(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    customer_name = db.Column(
        db.String(100),
        nullable=False
    )

    industry = db.Column(
        db.String(100),
        nullable=False
    )

    country = db.Column(
        db.String(100),
        nullable=False
    )


# =========================
# Order
# =========================

class Order(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    customer_id = db.Column(
        db.Integer,
        db.ForeignKey("customer.id"),
        nullable=False
    )

    product_name = db.Column(
        db.String(100),
        nullable=False
    )

    quantity = db.Column(
        db.Integer,
        nullable=False
    )

    order_date = db.Column(
        db.String(20),
        nullable=False
    )

    status = db.Column(
        db.String(50),
        nullable=False
    )


# =========================
# IoT Sensor Data
# =========================

class SensorData(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    machine_id = db.Column(
        db.Integer,
        db.ForeignKey("machine.id"),
        nullable=False
    )

    temperature = db.Column(
        db.Float,
        nullable=False
    )

    vibration = db.Column(
        db.Float,
        nullable=False
    )

    pressure = db.Column(
        db.Float,
        nullable=False
    )

    operating_hours = db.Column(
        db.Float,
        nullable=False
    )

    recorded_at = db.Column(
        db.String(30),
        nullable=False
    )


# =========================
# PDM / PLM - Product
# =========================

class Product(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    product_number = db.Column(
        db.String(50),
        unique=True,
        nullable=False
    )

    product_name = db.Column(
        db.String(100),
        nullable=False
    )

    product_type = db.Column(
        db.String(100),
        nullable=False
    )

    version = db.Column(
        db.String(20),
        nullable=False
    )

    description = db.Column(
        db.String(255),
        nullable=False
    )


# =========================
# PDM / PLM - Component
# =========================

class Component(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    component_number = db.Column(
        db.String(50),
        unique=True,
        nullable=False
    )

    component_name = db.Column(
        db.String(100),
        nullable=False
    )

    material = db.Column(
        db.String(100),
        nullable=False
    )

    specification = db.Column(
        db.String(255),
        nullable=False
    )


# =========================
# BOM - Bill of Materials
# =========================

class BOM(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    product_id = db.Column(
        db.Integer,
        db.ForeignKey("product.id"),
        nullable=False
    )

    component_id = db.Column(
        db.Integer,
        db.ForeignKey("component.id"),
        nullable=False
    )

    quantity = db.Column(
        db.Integer,
        nullable=False
    )

    bom_type = db.Column(
        db.String(50),
        nullable=False
    )

    manufacturing_stage = db.Column(
        db.String(100),
        nullable=True
    )