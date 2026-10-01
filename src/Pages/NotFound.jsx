import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Hero from '../components/ui/Hero';
import Footer from '../components/ui/Footer';

const NotFound = () => {
  return (
    <div>
      <div>
        <Hero className="min-h-screen flex items-center justify-center">
          <main className="relative z-10 w-full max-w-4xl mx-auto px-4 py-12 flex flex-col items-center justify-center text-center">
            <div className="relative flex flex-col items-center w-full">
              <h1
                className=" sm:text-[180px] md:text-[220px] lg:text-[480px] font-poppins font-extrabold leading-none tracking-tight select-none pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, #d8ff00 0%, #a2e000 50%, rgba(3, 66, 245, 0.1) 95%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                404
              </h1>

              <div className="relative -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-40 z-20 flex flex-col items-center text-center w-full">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight max-w-3xl mx-auto font-poppins text-white">
                  The page you are looking <br className="hidden sm:inline" />
                  for doesn’t exist
                </h2>

                <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[#E5E6E8] font-normal max-w-md mx-auto font-satoshi">
                  Try to use a correct url or go back to homepage to start again
                </p>

                <div className="mt-8">
                  <Link to="/">
                    <Button className="w-full sm:w-auto px-6 py-2.5 h-10 text-[#242528] bg-[#D8FF00] font-medium rounded-full hover:opacity-90 transition-opacity shrink-0">
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </Hero>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
