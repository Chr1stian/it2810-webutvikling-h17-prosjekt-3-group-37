import React from 'react'
/*Enzyme renders react in a jquery api-kind-of-type*/
import { shallow } from 'enzyme'
import NavBar from './../containers/NavBar.js'
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

test('NavBar component should render as expected', () => {
    const component = shallow(<NavBar />);
    const tree = toJson(component);
   //take snapshots to be noticed about changes tht might be unexpected
    expect(tree).toMatchSnapshot();
})
