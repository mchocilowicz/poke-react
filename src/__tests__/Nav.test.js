import React from 'react'
import { shallow } from 'enzyme'
import Nav from '../Nav'

describe('Nav', () => {
  let wrapper

  beforeAll(() => wrapper = shallow(<Nav />))

  it('shout exists', () => {
    expect(wrapper.exists()).toBeTruthy();
  })
})
