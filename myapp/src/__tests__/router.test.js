import "jsdom-global/register"; //at the top of file , even  , before importing react
//prevent errors from style rendering
import getMuiTheme from "material-ui/styles/getMuiTheme";
import raf from "./../test/tempPolyfills";

import React from "react";
//Import Enzyme with shallow to test component as a unit
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
//Importing component that will be tested
import Router from "./../containers/Router.js";

// Render material-ui
navigator.__defineGetter__("userAgent", function() {
  return "foo"; // customized user agent
});

navigator.userAgent; // 'foo'

test("Component renders as expected", () => {
  const component = shallow(<Router />);
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});