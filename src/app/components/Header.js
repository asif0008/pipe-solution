import Link from 'next/link';
import About from '../about/page';
import Contact from '../contact/page';
import Products from '../products/page';
import Quality from '../quality/page';
import Resources from '../resources/page';
import Home from './Home'

const Header = () => {
  return (
    <header className='bg-primary h-[4rem] my-auto'>
        <div className='container-size flex flex-col md:flex-row items-center justify-between h-full text-white font-medium'>
            <h4>Logo</h4>
            <nav className='container-size flex items-center justify-center gap-2 md:gap-[1.5rem]'>
                <Link href="/">Home</Link>  
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/products">Products</Link>
                <Link href="/quality">Quality</Link>
                <Link href="/resources">Resources</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header
