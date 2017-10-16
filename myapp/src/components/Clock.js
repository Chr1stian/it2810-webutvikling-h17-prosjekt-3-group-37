//This is a component from https://codepen.io/michaelkoelewijn/pen/XjVvGW

import React from 'react';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Clock = function (_React$Component) {
    _inherits(Clock, _React$Component);

    function Clock() {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

        _this.state = _this.getDate();

        return _this;
    }

    Clock.prototype.getDate = function getDate() {
        var newDate = new Date();
        var date = {};
        date.hours = newDate.getHours();
        date.minutes = newDate.getMinutes();
        date.seconds = newDate.getSeconds();
        return date;
    };

    Clock.prototype.updateDate = function updateDate() {
        this.setState(this.getDate());
    };

    Clock.prototype.updateClock = function updateClock() {
        var angleSeconds = this.state.seconds * 60 / 10;
        var angleMinutes = this.state.minutes * 6;
        var angleHours = this.state.hours / 12 * 360;
        document.getElementById('js-seconds').style.transform = "translate(-50%, -100%) rotate(" + angleSeconds + "deg)";
        document.getElementById('js-minutes').style.transform = "translate(-50%, -100%) rotate(" + angleMinutes + "deg)";
        document.getElementById('js-hours').style.transform = "translate(-50%, -100%) rotate(" + angleHours + "deg)";
    };

    Clock.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        this.updateClock();
        var timeInterval = setInterval(function () {
            if(document.getElementById('js-seconds') == null){
              clearInterval(timeInterval)
            }else{
              _this2.updateDate();
              _this2.updateClock();
            }
        }, 1000);

    };

    Clock.prototype.componentWillUnmount = function componentWillUnmount() {

        clearInterval(this.timeInterval);
    };

    Clock.prototype.intervalTest = function intervalTest() {
      this.updateDate();
      this.updateClock();
    };

    Clock.prototype.render = function render() {
        return React.createElement(
            "div",
            { className: "c-clock" },
            React.createElement("div", { id: "js-hours", className: "c-clock__tick c-clock__tick--hours" }),
            React.createElement("div", { id: "js-minutes", className: "c-clock__tick c-clock__tick--minutes" }),
            React.createElement("div", { id: "js-seconds", className: "c-clock__tick c-clock__tick--seconds" })
        );
    };

    return Clock;
}(React.Component);

export default Clock;
