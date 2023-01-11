import './App.css';
import Header from '@4trans/shared/header/Header'
import { useI18nContext } from './i18n/context';
import { t, Trans } from "@lingui/macro";
import { LocaleEnum } from './i18n/types';


function App() {
  
  const { locale, setLocale } = useI18nContext();

  return (
    <div className="App">
      <Header title={t({id: "application.name", message: "Klientská Zona"})}></Header>
      <Trans id="application.localized">Lokalizováno</Trans>
      <select value={locale} onChange={(e) => setLocale(e.target.value as LocaleEnum)}>
        <option value={LocaleEnum.English}>English</option>
        <option value={LocaleEnum.Czech}>Czech</option>
      </select>
    </div>
  );
}

export default App;
