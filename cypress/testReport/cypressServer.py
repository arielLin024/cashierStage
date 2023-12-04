# coding:utf-8 
from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def home():
    return ('this is ServerReplyURL')


@app.route('/run-tests-and-generate-report', methods=["GET", "POST"])
def RunCypress():
    """
    接收資料
    """
    # 判斷接收的結果
    if request.method == "POST":
        # 執行cypress指令
        return "Run Cypress"

    elif request.method == "GET":
        return "這裡是get頁面"

if __name__=="__main__":
    app.run(host='127.0.0.1', port=2060, debug=True)