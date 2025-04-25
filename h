        <label id="pri" for="principal">Principal: </label>
        <input type="number" id="principal"> <br>
        <label id="int" for="interest rate">Interest Rate as % (e.g 7.9): </label>
        <input type="number" id="interest rate"> <br>
        <label id="num" for="numYears">Number of Years: </label>
        <input type="number" id="numYears"> <br>
        <label id="mon" for="monPayment">Monthly Payment:</label>
        <input type="number" id="monPayment"> <br>
        <button onclick="doMath()">Calculate</button>
        <button onclick="reset()">Reset</button>
        <pre id="output"></pre>