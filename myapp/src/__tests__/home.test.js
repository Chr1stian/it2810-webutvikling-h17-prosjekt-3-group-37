import React from 'react'
/*Enzyme renders react in a jquery api-kind-of-type*/
import { shallow } from 'enzyme'
import Home from './../containers/Home.js'
import InfoWidget from './../containers/InfoWidget.js';
import HomeNavigation from './../containers/HomeNavigation.js';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

test('Home component should render as expected', () => {
    const component = shallow(<Home />);
    const tree = toJson(component);
    //console.log(tree);
    //renders expected containers
    expect(component.contains(<InfoWidget />)).toBe(true);
    expect(component.contains(<HomeNavigation />)).toBe(true);
    //take snapshots to be noticed about changes tht might be unexpected
    expect(tree).toMatchSnapshot();
})
