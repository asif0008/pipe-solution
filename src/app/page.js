import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'  
import Head from 'next/head'

export default function Main() {
  return (
    <>
    <Head>
      <title>Pipe Solution</title>
    </Head>
    <Header />
    <Home />
    <Footer />
    </>
  );
}
