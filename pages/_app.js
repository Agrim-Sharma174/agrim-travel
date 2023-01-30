import '@/styles/globals.css'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'

const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: 'z-50',
  delay: 100,
});

//Adding router
//This will start the progress bar when the route changes
Router.events.on("routeChangeStart", progress.start);
//This will end the progress bar when the route changes
Router.events.on("routeChangeComplete", progress.finish);
//This will end the progress bar when the route changes any error occurs
Router.events.on("routeChangeError", progress.finish);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
