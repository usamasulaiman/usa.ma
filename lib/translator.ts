import getLocale from './locale';

const t = (text) => {
  console.log('type translation text', typeof text);
  if (typeof text !== 'object') return text;
  const locale = getLocale();
  if (text[locale]) return text[locale];
  return text.default
}

export default t;