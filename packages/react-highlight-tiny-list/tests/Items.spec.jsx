import React from 'react';
import { shallow } from 'enzyme';
import array from '../../../mocks/array.json';
import Items from '../src/Items.jsx';

describe('Items component', () => {
  let output;

  it('renders correctly', () => {
    output = shallow(
      <div>
        <Items
          items={array}
          query=""
        />
      </div>,
    );
    expect(output.children('Items').length).toBe(1);
  });

  it('renders nothing view', () => {
    const text = 'test';
    output = shallow(
      <Items
        items={array}
        query=""
        nothingView={text}
      />,
    );
    expect(output.text()).toBe(text);
  });

  it('renders one item', () => {
    const text = 'Archive';
    output = shallow(
      <Items
        items={array}
        query={text}
        nothingView="nothing"
      />,
    );
    expect(output.text()).toBe(text);
  });

  it('renders two items', () => {
    const text = 'a';
    output = shallow(
      <Items
        items={array}
        query={text}
        nothingView="nothing"
      />,
    );
    expect(output.find('a').length).toBe(2);
  });

  it('highlights the search phrase', () => {
    const text = 'Arc';
    output = shallow(
      <Items
        items={array}
        query={text}
        nothingView="nothing"
      />,
    );
    expect(output.find('b').text()).toBe(text);
  });
});
