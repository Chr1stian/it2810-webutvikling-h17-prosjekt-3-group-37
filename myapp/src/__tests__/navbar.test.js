import React from "react";
//Import Enzyme with shallow to test component as a unit
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
//Importing component that will be tested
import NavBar from './../containers/NavBar.js'

//takes snapshot of component
test('NavBar component should render as expected', () => {
    const component = shallow(<NavBar />);
    const tree = toJson(component);
   //take snapshots to be noticed about changes tht might be unexpected
    expect(tree).toMatchSnapshot();
})
