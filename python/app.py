from flask import Flask, render_template, request
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/run_python', methods=['POST'])
def run_python():
    python_code = request.form['python_code']
    result = run_code(python_code)
    return result

def run_code(code):
    try:
        result = subprocess.check_output(['python', '-c', code], stderr=subprocess.STDOUT, text=True)
        return result
    except subprocess.CalledProcessError as e:
        return f"Error: {e.output}"

if __name__ == '__main__':
    app.run(debug=True)
