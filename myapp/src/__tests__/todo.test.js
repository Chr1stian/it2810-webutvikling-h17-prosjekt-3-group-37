//import "jsdom-global/register"; //at the top of file , even  , before importing react
//import raf from "./../testSetup/tempPolyfills";
//setup file for testing to avoid duplicate code.
//import setupTest from './../testSetup/setupTest.js';
import React from "react";
//Import Enzyme with necessary functions to test component as a unit
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
Enzyme.configure({ adapter: new Adapter() });
import { shallow, mount, render } from "enzyme";
import toJson from "enzyme-to-json";
//Importing component that will be tested
import Todo from "./../containers/Todo.js";
import "./../test/mock-localstorage.js";

test("Component renders without crashing", () => {
  const component = shallow(<Todo />);
  //console.log(component);
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

describe("another test in same file", () => {
  const wrapper = shallow(<Todo />);
  it("renders the correct html", () => {
    expect(wrapper.type()).toEqual("div");
  });
  it("has working functions to add todos", () => {
    //console.log("todo");
    //console.log(wrapper.instance());
    wrapper.instance();
  });
});
