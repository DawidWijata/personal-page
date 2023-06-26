import us from './lang/us.json';
import pl from './lang/pl.json';

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'us',
    availableLocales: ['pl', 'us'],
    fallbackLocale: 'us',
    messages: { pl, us },
}))