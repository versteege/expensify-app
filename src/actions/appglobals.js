// Actions
export const setLocale = ({ locale = 'nl' } = {}) => ({
    type: 'SET_LOCALE',
    locale
});

export const getLocale = () => ({
    type: 'GET_LOCALE'
});
