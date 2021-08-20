import './App.css';
import {useTranslation, Trans} from "react-i18next";
import { languages } from './i18n-config';

function App() {
    const { t, i18n } = useTranslation();
  return (
    <div className="App">
        <header>
            <div>
                {Object.keys(languages).map(lngCode => (
                    <button key={lngCode} type="submit" onClick={() => i18n.changeLanguage(lngCode)}>
                        {languages[lngCode].nativeName}
                    </button>
                ))}
            </div>
            <Trans i18nKey="header.title">
                Header content here
            </Trans>
        </header>
        <nav>
            {t('navigation.title')}
        </nav>
        <section>
            {t('section.placeholder')}
        </section>
        <aside>
            {t('aside.placeholder')}
        </aside>
        <footer>
            {t('footer.placeholder')}
        </footer>
    </div>
  );
}

export default App;
