from app import app
from database.models import db, Product, Component, BOM


# =========================
# Products
# =========================

products = [

    Product(
        product_number="P-001",
        product_name="Automotive Housing",
        product_type="Automotive Component",
        version="1.0",
        description="Precision manufactured housing used in automotive assemblies."
    ),

    Product(
        product_number="P-002",
        product_name="Aluminum Component",
        product_type="Die Casting Component",
        version="1.2",
        description="Lightweight aluminum component manufactured using die casting."
    ),

    Product(
        product_number="P-003",
        product_name="Robot Assembly",
        product_type="Industrial Robot Component",
        version="2.0",
        description="Mechanical assembly used in an industrial robotic system."
    ),

    Product(
        product_number="P-004",
        product_name="Precision Component",
        product_type="CNC Component",
        version="1.1",
        description="High-precision component manufactured using CNC machining."
    )

]


# =========================
# Components
# =========================

components = [

    Component(
        component_number="C-001",
        component_name="Aluminum Frame",
        material="Aluminum Alloy",
        specification="6061-T6, precision machined"
    ),

    Component(
        component_number="C-002",
        component_name="Mounting Bracket",
        material="Steel",
        specification="Stainless steel mounting bracket"
    ),

    Component(
        component_number="C-003",
        component_name="Industrial Fastener",
        material="Steel",
        specification="M8 high-strength fastener"
    ),

    Component(
        component_number="C-004",
        component_name="Sensor Housing",
        material="ABS Plastic",
        specification="Protective housing for industrial sensors"
    ),

    Component(
        component_number="C-005",
        component_name="Drive Gear",
        material="Hardened Steel",
        specification="Precision gear for robotic drive system"
    ),

    Component(
        component_number="C-006",
        component_name="Robot Joint",
        material="Aluminum Alloy",
        specification="High-precision robotic joint"
    ),

    Component(
        component_number="C-007",
        component_name="Motor Assembly",
        material="Copper and Steel",
        specification="Servo motor assembly"
    ),

    Component(
        component_number="C-008",
        component_name="Precision Shaft",
        material="Carbon Steel",
        specification="CNC machined precision shaft"
    )

]


# =========================
# Bill of Materials
# =========================

bom_records = [

    # Automotive Housing
    BOM(
        product_id=1,
        component_id=1,
        quantity=1,
        bom_type="eBOM"
    ),

    BOM(
        product_id=1,
        component_id=2,
        quantity=4,
        bom_type="eBOM"
    ),

    BOM(
        product_id=1,
        component_id=3,
        quantity=12,
        bom_type="eBOM"
    ),

    BOM(
        product_id=1,
        component_id=4,
        quantity=2,
        bom_type="eBOM"
    ),


    # Aluminum Component
    BOM(
        product_id=2,
        component_id=1,
        quantity=1,
        bom_type="eBOM"
    ),

    BOM(
        product_id=2,
        component_id=3,
        quantity=8,
        bom_type="eBOM"
    ),


    # Robot Assembly
    BOM(
        product_id=3,
        component_id=5,
        quantity=2,
        bom_type="eBOM"
    ),

    BOM(
        product_id=3,
        component_id=6,
        quantity=4,
        bom_type="eBOM"
    ),

    BOM(
        product_id=3,
        component_id=7,
        quantity=4,
        bom_type="eBOM"
    ),

    BOM(
        product_id=3,
        component_id=3,
        quantity=16,
        bom_type="eBOM"
    ),


    # Precision Component
    BOM(
        product_id=4,
        component_id=8,
        quantity=1,
        bom_type="eBOM"
    ),

    BOM(
        product_id=4,
        component_id=3,
        quantity=4,
        bom_type="eBOM"
    )

]


# =========================
# Insert Data
# =========================

with app.app_context():

    db.create_all()

    db.session.add_all(products)

    db.session.commit()

    db.session.add_all(components)

    db.session.commit()

    db.session.add_all(bom_records)

    db.session.commit()

    print("PDM/PLM data populated successfully!")