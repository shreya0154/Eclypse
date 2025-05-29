
import HeroVideo from '../components/HeroVideo';
import Gallery from '../components/Gallery';
import ProductDetail from '../components/ProductDetails';
import ProductDetailsAccordion from '../components/ProductDetailsAccordion';
import Footer from '../components/Footer';
import CustomerReview from '../components/CustomerReview';


const Home = () => {
  

  return (

<>
    <div className="relative bg-black text-white">
          {/* <Navbar /> */}
          <div className="text-8xl p-10 pr-0">Eclypse<span className='font-thin'>®</span></div>
          <HeroVideo />
          

          <div id="about" className="flex flex-col gap-5 p-20 items-start">
            <section className="text-4xl max-w-4xl text-left">
                Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
            </section>

            <a
                href="/about-page"
                className="mt-4 inline-flex items-center px-4 py-2 text-lg font-medium text-white border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
                Learn more about Eclypse
                <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            </a>
        </div>

            <Gallery/>

            <ProductDetail/>
            <ProductDetailsAccordion/>
            <CustomerReview/>
            <Footer/>

        </div>


    </>
  );
};






export default Home;
