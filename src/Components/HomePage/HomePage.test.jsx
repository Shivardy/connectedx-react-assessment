import { render } from '@testing-library/react';
import React from 'react';
import Homepage from './Homepage';

describe('<Homepage/>', () => {
  it('should render Homepage', () => {
    expect.assertions(2);
    const { getByText } = render(<Homepage />);
    expect(getByText(/homepage.intro/i)).not.toBeNull();
    expect(getByText(/homepage.subtext/i)).not.toBeNull();
  });
});
