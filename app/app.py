from flask import Flask, render_template, request
from database import save_user_data

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index/index.html")


@app.route("/form")
def form():
    return render_template("form/form.html")


@app.route("/apply", methods=["post"])
def apply_data():
    data = request.form
    # save_user_data(data)
    return render_template("model_view/model.html", user_data=data)


@app.route("/model")
def model():
    return render_template("model_view/model.html")


@app.route("/model_results", methods=["post"])
def results():
    data = request.form
    return data
