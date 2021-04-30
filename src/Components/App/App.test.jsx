import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from '../AppContextProvider';
import App from './App';

const renderApp = () =>
  render(
    <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContextProvider>
  );

describe('<App/>', () => {
  it('should render App', () => {
    expect.assertions(4);
    const { getByTestId } = renderApp();
    expect(getByTestId('app-container')).not.toBeNull();
    expect(getByTestId('header')).not.toBeNull();
    expect(getByTestId('footer')).not.toBeNull();
    expect(getByTestId('homepage')).not.toBeNull();
  });

  it('should render Content1 when route changed to /content1', () => {
    expect.assertions(1);
    const { getByTestId, getByText } = renderApp();
    fireEvent.click(getByText('Content1'));

    expect(getByTestId('content1')).not.toBeNull();
  });
});
