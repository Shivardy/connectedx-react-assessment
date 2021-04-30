export const initialState = {
  language: 'en',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'language':
      return { ...state, language: action.language };
    default:
      return state;
  }
};

export const getDateAndTime = (date, language) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return `${date.toLocaleDateString(
    language,
    options
  )}, ${date.toLocaleTimeString()}`;
};
