from flask import Flask, render_template

app = Flask(__name__, template_folder='.')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/homeclient')
def homeclient():
    return render_template('homeclient.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/register')
def other():
    return render_template('register.html')

if __name__ == '__main__':
    app.run(debug=True)