from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/form")
def form():
    return render_template("form.html")


@app.route("/info")
def info():
    return render_template("ingo.html")
