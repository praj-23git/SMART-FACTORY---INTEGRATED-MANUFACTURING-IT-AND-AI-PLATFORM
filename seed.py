from app import app
from database.models import (
    db,
    Machine,
    Production,
    Maintenance,
    Customer,
    Order
)


machines = [
    Machine(
        machine_name="M-001",
        machine_type="Injection Molding",
        location="Factory A",
        status="Running"
    ),
    Machine(
        machine_name="M-002",
        machine_type="Die Casting",
        location="Factory A",
        status="Warning"
    ),
    Machine(
        machine_name="M-003",
        machine_type="Industrial Robot",
        location="Factory B",
        status="Running"
    ),
    Machine(
        machine_name="M-004",
        machine_type="Extrusion",
        location="Factory B",
        status="Maintenance"
    ),
    Machine(
        machine_name="M-005",
        machine_type="CNC Machine Tool",
        location="Factory C",
        status="Running"
    )
]


production_records = [
    Production(
        machine_id=1,
        product_name="Automotive Housing",
        quantity=500,
        defects=8,
        production_date="2026-09-01"
    ),
    Production(
        machine_id=2,
        product_name="Aluminum Component",
        quantity=420,
        defects=12,
        production_date="2026-09-01"
    ),
    Production(
        machine_id=3,
        product_name="Robot Assembly",
        quantity=180,
        defects=3,
        production_date="2026-09-01"
    ),
    Production(
        machine_id=4,
        product_name="Plastic Sheet",
        quantity=350,
        defects=7,
        production_date="2026-09-01"
    ),
    Production(
        machine_id=5,
        product_name="Precision Component",
        quantity=275,
        defects=4,
        production_date="2026-09-01"
    )
]


maintenance_records = [
    Maintenance(
        machine_id=1,
        maintenance_type="Preventive",
        description="Lubrication and inspection",
        downtime_hours=2.0,
        maintenance_date="2026-08-28"
    ),
    Maintenance(
        machine_id=2,
        maintenance_type="Corrective",
        description="Cooling system inspection",
        downtime_hours=5.5,
        maintenance_date="2026-08-30"
    ),
    Maintenance(
        machine_id=4,
        maintenance_type="Repair",
        description="Extrusion motor replacement",
        downtime_hours=8.0,
        maintenance_date="2026-09-01"
    )
]


customers = [
    Customer(
        customer_name="Nexa Automotive",
        industry="Automotive",
        country="Japan"
    ),
    Customer(
        customer_name="Orion Electronics",
        industry="Electronics",
        country="India"
    ),
    Customer(
        customer_name="Meditech Industries",
        industry="Medical",
        country="Germany"
    )
]


orders = [
    Order(
        customer_id=1,
        product_name="Automotive Housing",
        quantity=1000,
        order_date="2026-08-28",
        status="In Production"
    ),
    Order(
        customer_id=2,
        product_name="Precision Component",
        quantity=500,
        order_date="2026-08-30",
        status="Pending"
    ),
    Order(
        customer_id=3,
        product_name="Medical Component",
        quantity=750,
        order_date="2026-09-01",
        status="Confirmed"
    )
]


with app.app_context():

    db.create_all()

    db.session.add_all(machines)
    db.session.add_all(production_records)
    db.session.add_all(maintenance_records)
    db.session.add_all(customers)
    db.session.add_all(orders)

    db.session.commit()

    print("SmartFactory database populated successfully!")