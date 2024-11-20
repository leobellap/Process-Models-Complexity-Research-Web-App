from sqlalchemy import create_engine, text
import configparser
import time

config = configparser.ConfigParser()
config.read("config.ini")
conn_string = config.get("psql", "conn_string")

engine = create_engine(conn_string)


def save_user_data(user_data, retries=3, delay=1):
    for attempt in range(retries):
        try:
            with engine.connect() as conn:
                query = text(
                    "insert into users_data (age, gender, education, specialization, current_employer, current_position, experience, email) values (:age, :gender, :education, :specialization, :current_employer, :current_position, :experience, :email) RETURNING user_id"
                )
                result = conn.execute(
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
                user_id = result.fetchone()[0]
                conn.commit()
            return user_id

        except Exception as e:
            print(f"Attempt {attempt + 1} failed: {e}")
            if attempt < retries - 1:
                time.sleep(delay)
            else:
                raise


def save_internal_op(user_data, retries=3, delay=1):
    for attempt in range(retries):
        try:
            with engine.connect() as conn:
                query = text(
                    "INSERT INTO internal_op (user_id, event_rate, path_rate, understandability, correctness, usefulness, coordinates) "
                    "VALUES (:user_id, :event_rate, :path_rate, :understandability, :correctness, :usefulness, :coordinates)"
                )
                conn.execute(
                    query,
                    [
                        {
                            "user_id": user_data["user_id"],
                            "event_rate": user_data["event_rate"],
                            "path_rate": user_data["path_rate"],
                            "understandability": user_data["understandability"],
                            "correctness": user_data["correctness"],
                            "usefulness": user_data["usefulness"],
                            "coordinates": user_data["coordinates"],
                        }
                    ],
                )
                conn.commit()
            break
        except Exception as e:
            print(f"Attempt {attempt + 1} failed: {e}")
            if attempt < retries - 1:
                time.sleep(delay)
            else:
                raise


def save_billing(user_data, retries=3, delay=1):
    for attempt in range(retries):
        try:
            with engine.connect() as conn:
                query = text(
                    "INSERT INTO billing (user_id, event_rate, path_rate, understandability, correctness, usefulness, coordinates) "
                    "VALUES (:user_id, :event_rate, :path_rate, :understandability, :correctness, :usefulness, :coordinates)"
                )
                conn.execute(
                    query,
                    [
                        {
                            "user_id": user_data["user_id"],
                            "event_rate": user_data["event_rate"],
                            "path_rate": user_data["path_rate"],
                            "understandability": user_data["understandability"],
                            "correctness": user_data["correctness"],
                            "usefulness": user_data["usefulness"],
                            "coordinates": user_data["coordinates"],
                        }
                    ],
                )
                conn.commit()
            break
        except Exception as e:
            print(f"Attempt {attempt + 1} failed: {e}")
            if attempt < retries - 1:
                time.sleep(delay)
            else:
                raise


def save_remote(user_data, retries=3, delay=1):
    for attempt in range(retries):
        try:
            with engine.connect() as conn:
                query = text(
                    "INSERT INTO remote (user_id, event_rate, path_rate, understandability, correctness, usefulness, coordinates) "
                    "VALUES (:user_id, :event_rate, :path_rate, :understandability, :correctness, :usefulness, :coordinates)"
                )
                conn.execute(
                    query,
                    [
                        {
                            "user_id": user_data["user_id"],
                            "event_rate": user_data["event_rate"],
                            "path_rate": user_data["path_rate"],
                            "understandability": user_data["understandability"],
                            "correctness": user_data["correctness"],
                            "usefulness": user_data["usefulness"],
                            "coordinates": user_data["coordinates"],
                        }
                    ],
                )
                conn.commit()
            break
        except Exception as e:
            print(f"Attempt {attempt + 1} failed: {e}")
            if attempt < retries - 1:
                time.sleep(delay)
            else:
                raise


def save_sepsis(user_data, retries=3, delay=1):
    for attempt in range(retries):
        try:
            with engine.connect() as conn:
                query = text(
                    "INSERT INTO sepsis (user_id, event_rate, path_rate, understandability, correctness, usefulness, coordinates) "
                    "VALUES (:user_id, :event_rate, :path_rate, :understandability, :correctness, :usefulness, :coordinates)"
                )
                conn.execute(
                    query,
                    [
                        {
                            "user_id": user_data["user_id"],
                            "event_rate": user_data["event_rate"],
                            "path_rate": user_data["path_rate"],
                            "understandability": user_data["understandability"],
                            "correctness": user_data["correctness"],
                            "usefulness": user_data["usefulness"],
                            "coordinates": user_data["coordinates"],
                        }
                    ],
                )
                conn.commit()
            break
        except Exception as e:
            print(f"Attempt {attempt + 1} failed: {e}")
            if attempt < retries - 1:
                time.sleep(delay)
            else:
                raise
