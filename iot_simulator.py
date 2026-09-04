from datetime import datetime
import random

from database.models import db, SensorData


def generate_sensor_data():

    for machine_id in range(1, 6):

        # Normal operating values

        temperature = round(
            random.uniform(60, 80),
            2
        )

        vibration = round(
            random.uniform(2, 5),
            2
        )

        pressure = round(
            random.uniform(75, 90),
            2
        )

        operating_hours = round(
            random.uniform(1000, 2000),
            2
        )


        # Simulated abnormal conditions

        if machine_id == 2:

            # High temperature

            temperature = round(
                random.uniform(86, 95),
                2
            )


        elif machine_id == 3:

            # High vibration

            vibration = round(
                random.uniform(6.5, 8),
                2
            )


        elif machine_id == 4:

            # High pressure

            pressure = round(
                random.uniform(96, 105),
                2
            )


        sensor = SensorData(

            machine_id=machine_id,

            temperature=temperature,

            vibration=vibration,

            pressure=pressure,

            operating_hours=operating_hours,

            recorded_at=datetime.now().strftime(
                "%Y-%m-%d %H:%M:%S"
            )

        )


        db.session.add(sensor)


    db.session.commit()


    print(
        "Simulated IoT sensor data generated successfully!"
    )


# Allow manual execution

if __name__ == "__main__":

    from app import app

    with app.app_context():

        generate_sensor_data()