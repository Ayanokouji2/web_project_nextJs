export default function Footer() {
    return (
        <footer className="border-t h-[20rem] grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-7 px-12">
            <div className='flex flex-col items-center text-left'>
                <h2 className='text-xl font-bold text-center text-gray-100'>Customer Care</h2>
                <p>Contact Us</p>
                <p>FAQ</p>
                <p>Returns & Exchange</p>
                <p>Shipping  Handling</p>
                <p>Damage or Defected Items</p>
            </div>
            <div className='flex flex-col items-center text-left'>
                <h2 className='text-xl font-bold text-center text-gray-100'>Inside Grace Eleyae</h2>
                <p>About Us</p>
                <p>Why Sattin</p>
                <p>Careers</p>
                <p>WholeSale</p>
                <p>GE Magzine</p>
            </div>
            <div className='flex flex-col items-center text-left'>
                <h2 className='text-xl font-bold text-center text-gray-100'>My Account</h2>
                <p>Sign in/ Register</p>
                <p>My Wishlist</p>
                <p>My cart</p>
                <p>My Payment</p>
                <p>My Courses</p>
            </div>
            <div className='flex flex-col items-center text-left'>
                <h2 className='text-xl font-bold text-center text-gray-100'>Top Searches</h2>
                <p>Web Development</p>
                <p>Backend Development</p>
                <p>FrontEnd Development</p>
                <p>AI/ML</p>
                <p>Database</p>
            </div>
           
        </footer>
    );
}
