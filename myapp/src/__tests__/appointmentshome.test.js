import React from "react";
//Import Enzyme with shallow to test component as a unit
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
//Importing component that will be tested
import AppointmentsHome from "./../components/AppointmentsHome.js";
import "./../test/mock-localstorage.js";

//take snapshot of component
test("Component renders as expected", () => {
  const component = shallow(<AppointmentsHome />);
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test("testing if short string are shortened or stays the same, should stay the same", () => {
  const component = shallow(<AppointmentsHome />);
  const string = "abcdefghijklmnopqrstuvwxyz";
  var newString = "";
  //formats new string if it is to long, if not it stays the same
  newString = component.instance().formatString(string);
  expect(newString).toBe(string);
})

test("testing if too long string are shortened", () => {
  const component = shallow(<AppointmentsHome />);
  const string = "abcdefghijklmnopqrstuvwxyz";
  var newString = "";
  //this makes string above 50 chars and therefore to long
  for (var i = 0; i < 2; i++) {
    newString = newString + string;
  }
  component.instance().formatString(newString);
  expect(newString).not.toBe(string);
})
