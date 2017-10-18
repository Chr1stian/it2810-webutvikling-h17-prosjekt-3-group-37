//import "jsdom-global/register"; //at the top of file , even  , before importing react
//import raf from "./../test/tempPolyfills";
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
import TodoItem from "./../components/TodoItem.js";

import "./../test/mock-localstorage.js";

test("Component renders without crashing", () => {
  const component = shallow(<Todo />);
  //console.log(component);
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test("Checking if a div is being rendered", () => {
  const wrapper = shallow(<Todo />);
  expect(wrapper.type()).toEqual("div");
});

test("Attempting to render child", () => {
  const wrapper = shallow(<Todo />);
  try {
      const todoitem = shallow(<TodoItem />);
  }
  catch (e) {
    console.log("couldnt render todoitem");
    return undefined;
  }
  //console.log(wrapper.instance().props);
  console.log(wrapper.instance().state);
  wrapper.instance().setState({title: "title", text: "string"});
  console.log("Trying to run a function from the component");
  console.log(wrapper.instance().state);
  //wrapper.setProps({title: 'Dette er første avtale'});
  //expect(wrapper.contains('Dette er første avtale')).to.equal(true);
});