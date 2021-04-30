import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../AppContextProvider';

const Footer = () => {
  const { i18n, t } = useTranslation();
  const {dispatch} = useAppContext();
  const handleOnChange = (event) => {
    const {target:{value}} = event;
    i18n.changeLanguage(value);
    dispatch({ type: 'language', language: value })
  };
  
  return ( 
    <footer data-testid='footer'>
        <div>
          <label htmlFor="language">{t('common.changeLanguage')}</label>
          <select name="language" id="language" onChange={handleOnChange}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
      </footer>
   );
}
 
export default Footer;
