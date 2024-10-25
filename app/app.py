from flask import Flask, render_template, request, redirect, url_for
from database import (
    save_user_data,
    save_internal_op,
    save_billing,
    save_remote,
    save_sepsis,
)

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index/index.html")


@app.route("/form")
def form():
    return render_template("form/form.html")


# @app.route("/save_form", methods=["post"])
# def save_form():
#     data = request.form
#     save_user_data(data)
#     return render_template("model_view/model_sepsis.html", user_data=data)


@app.route("/save_form", methods=["post"])
def save_form():
    data = request.form
    save_user_data(data)
    return render_template("model_view/info.html")


@app.route("/model_internal_operations")
def model_internal_operations():
    return render_template("model_view/model_internal_operations.html")


@app.route("/model_hospital_billing_system")
def model_hospital_billing_system():
    return render_template("model_view/model_hospital_billing_system.html")


@app.route("/model_remote_patient_monitoring")
def model_remote_patient_monitoring():
    return render_template("model_view/model_remote_patient_monitoring.html")


@app.route("/model_sepsis")
def model_sepsis():
    return render_template("model_view/model_sepsis.html")


@app.route("/internal_operations_results", methods=["post"])
def internal_operations_results():
    data = request.form
    save_internal_op(data)
    return redirect(url_for("model_hospital_billing_system"))


@app.route("/hospital_billing_system_results", methods=["post"])
def hospital_billing_system_results():
    data = request.form
    save_billing(data)
    return redirect(url_for("model_remote_patient_monitoring"))


@app.route("/remote_patient_monitoring_results", methods=["post"])
def remote_patient_monitoring_results():
    data = request.form
    save_remote(data)
    return redirect(url_for("model_sepsis"))


@app.route("/sepsis_results", methods=["post"])
def sepsis_results():
    data = request.form
    save_sepsis(data)
    return redirect(url_for("final_page"))


@app.route("/final_page")
def final_page():
    return render_template("model_view/final_page.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
