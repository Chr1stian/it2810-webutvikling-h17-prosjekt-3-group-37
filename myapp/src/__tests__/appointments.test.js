import React from "react";
//Import Enzyme with shallow to test component as a unit
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
//Importing component that will be tested
import Appointments from "./../containers/Appointments.js";
//might not need to import this one

//Since localstorage is saved in the browser this mocks the data
import "./../test/mock-localstorage.js";

test("Component renders as expected", () => {
  const component = shallow(<Appointments />);
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test("Setting state and checking if state is what is set", () => {
  const wrapper = shallow(<Appointments />);
  //hardcoding ID since it will produce a different one every time
  wrapper.instance().setState({
    ID: "8d4c43b0-eac3-4af3-bea0-1c2ebd4165cb",
    title: "Dette er første avtale",
    date: "10/10/2017",
    fromTime: "13:45",
    toTime: "14:00",
    place: "Gløshaugen"
  });
  expect(wrapper.instance().state).toMatchObject({
    ID: "8d4c43b0-eac3-4af3-bea0-1c2ebd4165cb",
    title: "Dette er første avtale",
    date: "10/10/2017",
    fromTime: "13:45",
    toTime: "14:00",
    place: "Gløshaugen"
  });
});

test("new test not in use atm", () => {
  const wrapper = shallow(<Appointments />);
  //console.log(wrapper.instance().props);
  //console.log(wrapper.instance().state);
  //console.log("Trying to run a function from the component");
  wrapper.instance().componentWillMount();
  //console.log(wrapper.instance().state);
  //wrapper.setProps({title: 'Dette er første avtale'});
  //expect(wrapper.contains('Dette er første avtale')).to.equal(true);
});
