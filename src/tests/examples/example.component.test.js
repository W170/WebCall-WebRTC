// ComponentName.test.js
import React from 'react'
import { shallow } from 'enzyme'
import ExampleComponent from '../../components/examples/example.component'

describe('ExampleComponent', () => {
  it('should render my component', () => {
    const wrapper = shallow(<ExampleComponent />)

    expect(wrapper.getElements()).toMatchSnapshot()
  })
})
