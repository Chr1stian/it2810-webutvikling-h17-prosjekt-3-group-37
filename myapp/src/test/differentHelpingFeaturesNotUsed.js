import "jsdom-global/register"; //at the top of file , even  , before importing react
import raf from "./tempPolyfills";
import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
//prevent errors from style rendering
import getMuiTheme from "material-ui/styles/getMuiTheme";
//mocking localstorage in tests
import "./mock-localstorage";

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
// Make toJson functions available in all test files without importing
global.toJson = toJson;

// Fail tests on any warning
console.error = message => {
   throw new Error(message);
};

// Render material-ui
navigator.__defineGetter__("userAgent", function() {
  return "foo"; // customized user agent
});

navigator.userAgent; // 'foo'