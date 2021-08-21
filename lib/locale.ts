import isServer from './isServer'

const getLocale = () => {
  if (!isServer()) {
    return localStorage.getItem('locale');
  }
}

export default getLocale;