// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
const projectName = "Java-Calculator";
function calc(val1, val2, operator, minusSign) {
  switch (operator) {
    case "+":
      return minusSign ? val1 + -val2 : val1 + val2;
    case "-":
      return val1 - val2;
    case "x":
      return minusSign ? val1 * -val2 : val1 * val2;
    case "/":
      return minusSign ? val1 / -val2 : val1 / val2;
    default:
      return;}

}
const opButtons = [{ id: "add", value: "+" }, { id: "subtract", value: "-" }, { id: "multiply", value: "x" }, { id: "divide", value: "/" }];
const numButtons = [{
  id: "zero",
  value: 0 },

{
  id: "one",
  value: 1 },

{
  id: "two",
  value: 2 },

{
  id: "three",
  value: 3 },

{
  id: "four",
  value: 4 },

{
  id: "five",
  value: 5 },

{
  id: "six",
  value: 6 },

{
  id: "seven",
  value: 7 },

{
  id: "eight",
  value: 8 },

{
  id: "nine",
  value: 9 }];



const Display = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "display", className: "display" }, /*#__PURE__*/React.createElement("p", null, props.value)));

};
//export default Display
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbuttons: numButtons,
      opbuttons: opButtons,
      numValue: 0.0,
      operatorUsed: false,
      isValDecimal: false,
      outCome: 0,
      curOperator: '',
      minusFlag: false };

    this.handleNumButtonClick = this.handleNumButtonClick.bind(this);
    this.handleClearButtonClick = this.handleClearButtonClick.bind(this);
    this.handleOperatorButtonClick = this.handleOperatorButtonClick.bind(this);
    this.handleDecimalClick = this.handleDecimalClick.bind(this);
    this.handleEqualsClick = this.handleEqualsClick.bind(this);
    //  this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleNumButtonClick(e) {
    this.setState(
    prevState => {
      if (!this.state.isValDecimal) {
        return {
          numValue: !this.state.operatorUsed && prevState.numValue ? parseFloat(prevState.numValue.toString() + e.toString()) : e,

          operatorUsed: false };
      } else if (this.state.isValDecimal) {
        return {
          numValue: prevState.numValue.toString().includes(".") ? prevState.numValue.toString() + e.toString() : prevState.numValue.toString() + "." + e.toString(),

          operatorUsed: false };

      }
    });

  }
  handleClearButtonClick() {
    this.setState(() =>
    {return {
        numValue: 0,
        isValDecimal: false,
        curOperator: '',
        outCome: 0,
        operatorUsed: false };

    });
  }
  handleOperatorButtonClick(t) {
    //alert(this.state.minusFlag.toString())
    this.setState(prevState => {
      return {
        operatorUsed: true, //so that the display/screen clears and a new new value start to appear
        isValDecimal: false, //so that the next digit does'nt start with a decimal
        //  curOperator:t.target.value,
        curOperator: t.target.value === "-" && this.state.operatorUsed ? prevState.curOperator : t.target.value,
        minusFlag: t.target.value === "-" && this.state.operatorUsed ? true : false,
        //outCome: !this.state.curOperator?12:prevState.outCome+this.state.numValue
        outCome: !this.state.curOperator ? this.state.numValue :
        !this.state.operatorUsed ? calc(parseFloat(prevState.outCome), parseFloat(this.state.numValue), this.state.curOperator, this.state.minusFlag) :

        this.state.numValue };



    });
  }
  handleEqualsClick() {
    this.setState(prevState => {
      return {
        numValue: this.state.outCome ?
        calc(parseFloat(this.state.outCome), parseFloat(this.state.numValue), this.state.curOperator, this.state.minusFlag) :

        this.state.numValue,

        curOperator: "" };

    });

  }
  handleDecimalClick() {
    this.setState(prevState => {
      return {
        isValDecimal: true,
        numValue: !this.state.numValue.toString().includes(".") ? this.state.numValue.toString() + "." : this.state.numValue.toString() };
    });}
  render() {
    const renderedButtons = this.state.numbuttons.map(itm => {return /*#__PURE__*/React.createElement("button", { key: itm.id, id: itm.id, value: itm.value, onClick: e => this.handleNumButtonClick(e.target.value), className: itm.id }, itm.value);});
    const opRenderedButtons = this.state.opbuttons.map(item => {return /*#__PURE__*/React.createElement("button", { key: item.id, id: item.id, value: item.value, onClick: this.handleOperatorButtonClick, className: item.id },
      item.value);
    });
    return /*#__PURE__*/(
      React.createElement("div", { className: "calcbody" }, /*#__PURE__*/
      React.createElement(Display, { value: this.state.numValue }), /*#__PURE__*/
      React.createElement("div", { className: "numbuttonsarea" },
      renderedButtons,
      opRenderedButtons, /*#__PURE__*/

      React.createElement("button", { id: "decimal", onClick: this.handleDecimalClick, className: "decimal" }, "."), /*#__PURE__*/
      React.createElement("button", { id: "equals", className: "equals", onClick: this.handleEqualsClick }, "="), /*#__PURE__*/
      React.createElement("button", { id: "clear", className: "clear", onClick: this.handleClearButtonClick }, "AC"))));







  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));