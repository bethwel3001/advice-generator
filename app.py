
from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)

# List of funny/random advice
advice_list = [
    "Always carry a towel. Hitchhiker’s Guide wisdom applies to life too.",
    "Dance like nobody’s watching, unless you're in public.",
    "Never trust a taco that won’t stay upright.",
    "If life gives you lemons, make lemonade. Or throw them at someone.",
    "Procrastinate wisely. You’ll need something to do later."
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/get_advice', methods=['POST'])
def get_advice():
    # Randomly pick advice
    random_advice = random.choice(advice_list)
    return jsonify({"advice": random_advice})

if __name__ == '__main__':
    app.run(debug=True)
