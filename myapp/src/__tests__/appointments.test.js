import React from "react";
//Import Enzyme with shallow to test component as a unit
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
//Importing component that will be tested
import Appointments from "./../containers/Appointments.js";

//Since localstorage is saved in the browser this mocks the data 
global.window = {};
import localStorage from "mock-local-storage";
window.localStorage = global.localStorage;

test("Component renders as expected", () => {
  const component = shallow(<Appointments />);
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});