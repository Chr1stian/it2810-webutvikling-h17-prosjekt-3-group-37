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
import "./../test/mock-localstorage.js";

//take snapshot of component
test("Component renders as expected", () => {
  const component = shallow(<Appointments />);
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test("Setting state in component and checking that state is equal to what we set", () => {
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
  
  //check if new state is the same as what we set
  expect(wrapper.instance().state).toMatchObject({
    ID: "8d4c43b0-eac3-4af3-bea0-1c2ebd4165cb",
    title: "Dette er første avtale",
    date: "10/10/2017",
    fromTime: "13:45",
    toTime: "14:00",
    place: "Gløshaugen"
  });
});