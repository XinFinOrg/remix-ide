var csjs = require('csjs-inject')

var css = csjs`
  .testTabView {}
  .infoBox  {
    margin: 5%;
  }
  .tests {}
  .testList {
    line-height: 2em;
    display: flex;
    flex-direction: column;
    margin: 5%;
    max-height: 300px;
    overflow-y: auto;

  }
  .container {
    margin: 2%;
    padding-bottom: 5%;
    max-height: 300px;
    overflow-y: auto;
  }
  .outputTitle {
    font-weight: bold;
    margin: 10px 0;
  }
  .summaryTitle {
    font-weight: bold;
  }
  .testPass {
  }
  .testLog {
    margin-bottom: 1%;
    border-radius: 4px;
    padding: 1% 1% 1% 5%;
  }
  .testFailure {
  }
  .testFailureSummary {
  }
  .buttons {
    margin: 5%;
    display: flex;
    align-items: center;
  }
  .runButton {
    white-space: nowrap;
  }
  .generateTestFile {
    margin-top: 20px;
    min-width: 100px
  }
  .title {
    font-size: 1.1em;
    font-weight: bold;
    margin-bottom: 1em;
  }
  .label {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
`
module.exports = css
