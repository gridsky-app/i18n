import locales from './locales.json'

export default defineI18nLocale(async locale => {
    return locales
})