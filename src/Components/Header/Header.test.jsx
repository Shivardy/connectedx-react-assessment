import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from '../AppContextProvider';
import Header from './Header';

describe('<Header/>', () => {
  it('should render Header', () => {
    expect.assertions(4);
    const { getByText, getByTestId } = render(
      <AppContextProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AppContextProvider>
    );
    expect(getByTestId('display-time')).not.toBeNull();
    expect(getByText(/Home/i)).not.toBeNull();
    expect(getByText(/Content1/i)).not.toBeNull();
    expect(getByText(/React JS/i)).not.toBeNull();
  });
});
