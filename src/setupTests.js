
import '@testing-library/jest-dom/extend-expect';

// Mock translation utils
jest.mock('react-i18next', () => ({
  Trans: ({ children }) => children,
  useTranslation: () => ({ t: (key) => key }),
}));
