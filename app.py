from flask import Flask, request, jsonify, send_file
import io
import pandas as pd

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process():
    file = request.files['file']
    options = request.form.getlist('options[]')
    df = pd.read_csv(file)

    if "deduplication" in options:
        df.drop_duplicates(inplace=True)

    # Placeholder logic for other services
    if "normalization" in options:
        df = df.applymap(lambda x: x.lower() if isinstance(x, str) else x)

    csv_io = io.StringIO()
    df.to_csv(csv_io, index=False)
    csv_io.seek(0)

    return send_file(io.BytesIO(csv_io.getvalue().encode()), mimetype='text/csv', as_attachment=True, download_name='processed.csv')

if __name__ == '__main__':
    app.run(debug=True)
