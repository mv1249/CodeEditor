from flask import Flask, render_template

app = Flask(__name__)


# home template


@app.route('/')
def home():
    return render_template('home.html')

# instructions template


@app.route('/instructions')
def instructions():
    return render_template('instructions.html')


# python template


@app.route('/python')
def python():
    return render_template('python.html')


# java template


@app.route('/java')
def java():
    return render_template('java.html')


# CPP template

@app.route('/cpp')
def cpp():
    return render_template('cpp.html')


if __name__ == "__main__":
    app.run(debug=True)
