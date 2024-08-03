from sqlalchemy import create_engine, text

engine = create_engine(
    "postgresql://itmo_survey_owner:fQAk7mM9FIpZ@ep-weathered-sun-a28zxzts.eu-central-1.aws.neon.tech/itmo_survey?sslmode=require"
)

with engine.connect() as conn:
    result = conn.execute(text("select * from users_data"))
    print(result.all())


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
