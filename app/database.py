from sqlalchemy import create_engine, text
import configparser

config = configparser.ConfigParser()
config.read("config.ini")
conn_string = config.get("psql", "conn_string")

engine = create_engine(conn_string)


def save_user_data(user_data):
    with engine.connect() as conn:
        query = text(
            "insert into users_data (age, gender, education, specialization, current_employer, current_position, experience, email) values (:age, :gender, :education, :specialization, :current_employer, :current_position, :experience, :email)"
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
                    "email": user_data["email"],
                }
            ],
        )
        conn.commit()


def save_internal_op(user_data):
    with engine.connect() as conn:
        query = text(
            "INSERT INTO internal_op (acting_rate, path_rate, understandability, correctness, usefulness) "
            "VALUES (:acting_rate, :path_rate, :understandability, :correctness, :usefulness)"
        )
        conn.execute(
            query,
            [
                {
                    "acting_rate": user_data["acting_rate"],
                    "path_rate": user_data["path_rate"],
                    "understandability": user_data["understandability"],
                    "correctness": user_data["correctness"],
                    "usefulness": user_data["usefulness"],
                }
            ],
        )
        conn.commit()


def save_billing(user_data):
    with engine.connect() as conn:
        query = text(
            "INSERT INTO billing (acting_rate, path_rate, understandability, correctness, usefulness) "
            "VALUES (:acting_rate, :path_rate, :understandability, :correctness, :usefulness)"
        )
        conn.execute(
            query,
            [
                {
                    "acting_rate": user_data["acting_rate"],
                    "path_rate": user_data["path_rate"],
                    "understandability": user_data["understandability"],
                    "correctness": user_data["correctness"],
                    "usefulness": user_data["usefulness"],
                }
            ],
        )
        conn.commit()


def save_remote(user_data):
    with engine.connect() as conn:
        query = text(
            "INSERT INTO remote (acting_rate, path_rate, understandability, correctness, usefulness) "
            "VALUES (:acting_rate, :path_rate, :understandability, :correctness, :usefulness)"
        )
        conn.execute(
            query,
            [
                {
                    "acting_rate": user_data["acting_rate"],
                    "path_rate": user_data["path_rate"],
                    "understandability": user_data["understandability"],
                    "correctness": user_data["correctness"],
                    "usefulness": user_data["usefulness"],
                }
            ],
        )
        conn.commit()


def save_sepsis(user_data):
    with engine.connect() as conn:
        query = text(
            "INSERT INTO sepsis (acting_rate, path_rate, understandability, correctness, usefulness) "
            "VALUES (:acting_rate, :path_rate, :understandability, :correctness, :usefulness)"
        )
        conn.execute(
            query,
            [
                {
                    "acting_rate": user_data["acting_rate"],
                    "path_rate": user_data["path_rate"],
                    "understandability": user_data["understandability"],
                    "correctness": user_data["correctness"],
                    "usefulness": user_data["usefulness"],
                }
            ],
        )
        conn.commit()
