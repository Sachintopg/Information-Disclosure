import os
from flask import Flask, render_template
from dotenv import load_dotenv

# Load .env variables
load_dotenv()
FLAG = os.getenv("FLAG")

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/flag')
def flag():
    return f"Flag: {FLAG}"  # Expose the flag (for CTF challenge)

if __name__ == "__main__":
    app.run(debug=True)
