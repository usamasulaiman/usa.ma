import '../styles/globals.css'
import Wrapper from '../components/Wrapper'

function Usama({ Component, pageProps }) {
  return <Wrapper><Component {...pageProps} /></Wrapper>
}

export default Usama
