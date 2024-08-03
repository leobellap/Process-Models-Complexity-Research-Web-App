from sqlalchemy import create_engine, text
import configparser

config = configparser.ConfigParser()
config.read("config.ini")
conn_string = config.get("psql", "conn_string")

engine = create_engine(conn_string)


def save_user_data(user_data):
    with engine.connect() as conn:
        query = text(
            "insert into users_data (age, gender, education, specialization, current_employer, current_position, experience) values (:age, :gender, :education, :specialization, :current_employer, :current_position, :experience)"
        )
        conn.execute(
            query,
            [
                {
                    "age": user_data["age"],
                    "gender": user_data["gender"],
                    "education": user_data["education"],
                    "specialization": user_data["specialization"],
                    "current_employer": user_data["current_employer"],
                    "current_position": user_data["current_position"],
                    "experience": user_data["experience"],
                }
            ],
        )
        conn.commit()
