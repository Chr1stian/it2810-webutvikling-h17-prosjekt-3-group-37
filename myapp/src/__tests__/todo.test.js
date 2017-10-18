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

//takes snapshot of component
test("Component renders without crashing", () => {
  const component = shallow(<Todo />);
  //console.log(component);
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

//check what html are being rendered, not really useful but was first test written
test("Checking if a div is being rendered", () => {
  const wrapper = shallow(<Todo />);
  expect(wrapper.type()).toEqual("div");
});

test("Checking if new item in todolist is added to list", () => {
  const wrapper = shallow(<Todo />);
  try {
    const todoitem = shallow(<TodoItem />);
  } catch (e) {
    return undefined;
  } finally {
    const todo = {
      ID: "8d4c43b0-eac3-4af3-bea0-1c2ebd4165cb",
      title: "Dette er en tittel",
      text: "Dette er teksten",
      finished: false
    };
    wrapper.instance().setState(todo);
    expect(wrapper.instance().state).toMatchObject(todo);
  }
});
