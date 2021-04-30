import { render } from '@testing-library/react';
import React from 'react';
import Content1 from './Content1';

describe('<Content1/>', () => {
  it('should render Content1', () => {
    expect.assertions(2);
    const { getByText } = render(<Content1 />);
    expect(getByText(/content1.intro/i)).not.toBeNull();
    expect(getByText(/content1.time/i)).not.toBeNull();
  });
});
