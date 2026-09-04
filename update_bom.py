import sqlite3
import os

DATABASE = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "instance",
    "smartfactory.db"
)

connection = sqlite3.connect(DATABASE)
cursor = connection.cursor()

cursor.execute("""
    ALTER TABLE bom
    ADD COLUMN manufacturing_stage TEXT
""")

connection.commit()
connection.close()

print("BOM table updated successfully!")