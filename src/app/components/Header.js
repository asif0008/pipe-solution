import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-primary h-[4rem] my-auto'>
        <div className='container-size flex flex-col md:flex-row items-center justify-between h-full text-white font-medium'>
           <Link href="/">
               <h4>Logo</h4>
           </Link>
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
