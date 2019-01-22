var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));_this.









    handleClick = function (e) {
      var ourNumber = [].concat(_toConsumableArray(_this.state.allPressedButtons));
      var ourFirstNumber = [].concat(_toConsumableArray(_this.state.currentValue));
      var lastIndexOfOperatorPlus = ourNumber.lastIndexOf("+");
      var lastIndexOfOperatorMinus = ourNumber.lastIndexOf("-");
      var lastIndexOfOperatorMal = ourNumber.lastIndexOf("*");
      var lastIndexOfOperatorDiv = ourNumber.lastIndexOf("/");

      var highestNumber = [
      lastIndexOfOperatorDiv,
      lastIndexOfOperatorMal,
      lastIndexOfOperatorMinus,
      lastIndexOfOperatorPlus].
      sort(function (a, b) {return a - b;});
      console.log(/[\+\/\*\-]/ in ourNumber);

      if (e.target.value === ".") {
        if (!ourNumber.join("").match(/[\+\/\*\-]/)) {
          if (!ourNumber.includes(".")) {
            ourNumber.push(String(e.target.value));
          }
        } else if (ourNumber.join("").match(/[\+\/\*\-]/)) {
          var ourNumberSlice = ourNumber.slice(highestNumber[3]).join("");
          if (!ourNumberSlice.includes(".")) {
            ourNumber.push(String(e.target.value));
          }
        }
      } else if (e.target.value !== "." || e.target.value !== "0") {
        ourNumber.push(String(e.target.value));
      }

      for (var x = 0; x < ourNumber.length; x++) {
        while (ourNumber[0] === "0" && ourNumber[1] === "0") {
          ourNumber.shift();
        }
      }

      for (var _x = 0; _x < ourFirstNumber.length; _x++) {
        while (ourFirstNumber[0] === "0" && ourFirstNumber[1] === "0") {
          ourFirstNumber.shift();
        }
      }

      for (var _x2 = 0; _x2 < ourNumber.length; _x2++) {
        if (
        isNaN(ourNumber[_x2]) &&
        ourNumber[_x2 + 1] === "0" &&
        ourNumber[_x2 + 2] === "0")
        {
          ourNumber.splice(_x2 + 1, 1);
        }
      }

      for (var _x3 = 0; _x3 < ourFirstNumber.length; _x3++) {
        if (
        isNaN(ourFirstNumber[_x3]) &&
        ourFirstNumber[_x3 + 1] === "0" &&
        ourFirstNumber[_x3 + 2] === "0")
        {
          ourFirstNumber.splice(_x3 + 1, 1);
        }
      }

      for (var _x4 = 0; _x4 < ourNumber.length; _x4++) {
        if (ourNumber[_x4] === "." && ourNumber[_x4 + 1] === ".") {
          ourNumber.splice(_x4 + 1, 1);
        }
      }

      for (var _x5 = 0; _x5 < ourFirstNumber.length; _x5++) {
        if (ourFirstNumber[_x5] === "." && ourFirstNumber[_x5 + 1] === ".") {
          ourFirstNumber.splice(_x5 + 1, 1);
        }
      }

      _this.setState({
        currentValue: ourFirstNumber.join(""),
        allPressedButtons: ourNumber.join("") });

    };_this.
    handleReset = function (e) {return (
        _this.setState({
          currentValue: [],
          previousValue: 0,
          allPressedButtons: 0,
          result: 0 }));};_this.


    handleMath = function (e) {
      var ourNumber = [].concat(_toConsumableArray(_this.state.allPressedButtons));
      if (!isNaN(ourNumber[ourNumber.length - 1])) {
        ourNumber.push(String(e.target.value));
      } else {
        ourNumber[ourNumber.length - 1] = String(e.target.value);
      }

      _this.setState({
        allPressedButtons: ourNumber.join("") });

    };_this.

    handleResult = function () {
      var allPressedButtonsWithResultOnly = [];
      console.log(_typeof(_this.state.allPressedButtons[0]));
      var myResult = eval(_this.state.allPressedButtons);
      allPressedButtonsWithResultOnly.push(String(myResult));
      _this.setState(_defineProperty({
        allPressedButtons: [] }, "allPressedButtons",
      allPressedButtonsWithResultOnly));

    };_this.state = { currentValue: [], previousValue: [], allPressedButtons: [], ourFirstNumber: [] };return _this;}_createClass(App, [{ key: "render", value: function render()

    {
      return (
        React.createElement("div", { id: "box", className: "container" },
          React.createElement("div", { className: "row justify-content-center" },
            React.createElement("div", { className: " calcBox border border-dark justify-content-center" },
              React.createElement("div", { className: "col-md" },
                React.createElement("h4", { className: "text-center" }, "Javascript Calculator")),

              React.createElement("div", { className: "row justify-content-center" },
                React.createElement("div", { className: "col-md" },
                  React.createElement("form", { name: "calc" },
                    React.createElement("input", {
                      type: "text",
                      id: "display",
                      className: "screen ",
                      name: "result",
                      value: this.state.allPressedButtons,
                      readOnly: true })))),





              React.createElement("div", { className: "row justify-content-center" },
                React.createElement("div", { className: "col-md" },
                  React.createElement("button", {
                      onClick: this.handleClick,
                      className: "btn btn-info",
                      value: "7",
                      key: "7",
                      id: "seven" }, "7"),



                  React.createElement("button", {
                      onClick: this.handleClick,
                      className: "btn btn-info",
                      value: "8",
                      key: "8",
                      id: "eight" }, "8"),



                  React.createElement("button", {
                      onClick: this.handleClick,
                      className: "btn btn-info",
                      value: "9",
                      key: "9",
                      id: "nine" }, "9"),



                  React.createElement("button", {
                      onClick: this.handleMath,
                      className: "btn btn-info",
                      value: "*",
                      key: "X",
                      id: "multiply" }, "x"))),






              React.createElement("div", { className: "row justify-content-center" },
                React.createElement("div", { className: "col-md" },
                  React.createElement("button", {
                      onClick: this.handleClick,
                      className: "btn btn-info",
                      value: "4",
                      key: "4",
                      id: "four" }, "4"),



                  React.createElement("button", {
                      onClick: this.handleClick,
                      className: "btn btn-info",
                      value: "5",
                      key: "5",
                      id: "five" }, "5"),



                  React.createElement("button", {
                      onClick: this.handleClick,
                      className: "btn btn-info",
                      value: "6",
                      key: "6",
                      id: "six" }, "6"),



                  React.createElement("button", {
                      onClick: this.handleMath,
                      className: "btn btn-info",
                      value: "-",
                      key: "minus",
                      id: "subtract" }, "-"))),






              React.createElement("div", { className: "row justify-content-center" },
                React.createElement("div", { className: "col-md" },
                  React.createElement("button", {
                      onClick: this.handleClick,
                      className: "btn btn-info",
                      value: "1",
                      key: "1",
                      id: "one" }, "1"),



                  React.createElement("button", {
                      onClick: this.handleClick,
                      className: "btn btn-info",
                      value: "2",
                      key: "2",
                      id: "two" }, "2"),



                  React.createElement("button", {
                      onClick: this.handleClick,
                      className: "btn btn-info",
                      value: "3",
                      key: "3",
                      id: "three" }, "3"),



                  React.createElement("button", {
                      onClick: this.handleMath,
                      className: "btn btn-info",
                      value: "+",
                      key: "plus",
                      id: "add" }, "+"))),





              React.createElement("div", { className: "row justify-content-center" },
                React.createElement("div", { className: "col-md" },
                  React.createElement("button", {
                      onClick: this.handleClick,
                      className: "btn btn-info",
                      value: "0",
                      key: "0",
                      id: "zero" }, "0"),



                  React.createElement("button", {
                      onClick: this.handleClick,
                      className: "btn btn-info",
                      value: ".",
                      key: "decimal",
                      id: "decimal" }, "."),



                  React.createElement("button", {
                      onClick: this.handleResult,
                      className: "btn btn-success",
                      value: "=",
                      key: "equals",
                      id: "equals" }, "="),



                  React.createElement("button", {
                      onClick: this.handleMath,
                      className: "btn btn-info",
                      value: "/",
                      key: "/",
                      id: "divide" }, "/"))),





              React.createElement("div", { className: "row justify-content-center " },
                React.createElement("div", { className: "col-md" },
                  React.createElement("button", {
                      onClick: this.handleReset,
                      className: "btn btn-danger",
                      value: "clear",
                      key: "clear",
                      id: "clear" }, "AC")))),







            React.createElement("div", { className: "row" },
              React.createElement("div", { className: "col-md" },
                React.createElement("footer", null,
                  React.createElement("p", { className: "text-center" }, "Written by ", React.createElement("a", { href: "https://github.com/londonjob", target: "_blank" }, "londonjob"))))))));






    } }]);return App;}(React.Component);



ReactDOM.render(React.createElement(App, null), document.getElementById("root"));