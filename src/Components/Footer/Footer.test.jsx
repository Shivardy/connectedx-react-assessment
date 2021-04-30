import { render } from '@testing-library/react';
import React from 'react';
import { AppContextProvider } from '../AppContextProvider';
import Footer from './Footer';

describe('<Footer/>', () => {
  it('should render Footer', () => {
    expect.assertions(2);
    const { getByText, getByTestId } = render(
      <AppContextProvider>
          <Footer />
      </AppContextProvider>
    );
    expect(getByTestId('footer')).not.toBeNull();
    expect(getByText(/common.changeLanguage/i)).not.toBeNull();
  });
});
