from flask import Flask, render_template, request, jsonify
from database import save_user_data

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/form")
def form():
    return render_template("form.html")


@app.route("/apply", methods=["post"])
def apply_data():
    data = request.form
    save_user_data(data)
    return render_template("info.html")


@app.route("/info")
def info():
    return render_template("ingo.html")
