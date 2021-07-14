import '../styles/globals.css'
import TransitionLayout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <TransitionLayout>
        <Component {...pageProps} />
    </TransitionLayout>
  )
}

export default MyApp
