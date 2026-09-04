from app import app
from database.models import db, BOM


with app.app_context():

    bom_records = BOM.query.all()

    for record in bom_records:

        # Automotive Housing
        if record.product_id == 1:

            if record.component_id == 1:
                record.manufacturing_stage = "Cutting & Machining"

            elif record.component_id == 2:
                record.manufacturing_stage = "Bracket Assembly"

            elif record.component_id == 3:
                record.manufacturing_stage = "Final Assembly"

            elif record.component_id == 4:
                record.manufacturing_stage = "Sensor Assembly"


        # Aluminum Component
        elif record.product_id == 2:

            if record.component_id == 1:
                record.manufacturing_stage = "Die Casting & Machining"

            elif record.component_id == 3:
                record.manufacturing_stage = "Final Assembly"


        # Robot Assembly
        elif record.product_id == 3:

            if record.component_id == 5:
                record.manufacturing_stage = "Gear Assembly"

            elif record.component_id == 6:
                record.manufacturing_stage = "Joint Assembly"

            elif record.component_id == 7:
                record.manufacturing_stage = "Motor Installation"

            elif record.component_id == 3:
                record.manufacturing_stage = "Final Assembly"


        # Precision Component
        elif record.product_id == 4:

            if record.component_id == 8:
                record.manufacturing_stage = "CNC Machining"

            elif record.component_id == 3:
                record.manufacturing_stage = "Final Assembly"


    db.session.commit()


    print("Manufacturing stages updated successfully!")