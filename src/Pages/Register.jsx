import Images from '../images';
import { AuthInputField } from './../components/ui/AuthInputField';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="relative bg-[#0550FE] text-white font-sans overflow-x-hidden  flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 select-none">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center items-center">
        <div className="w-full mb-10 text-left">
          <div className="mb-6">
            <Link to='/'>
              <img className="w-10 h-10 object-contain" src={Images.helfLogo} alt="Logo" />
            </Link>
          </div>
          <h2 className="text-[#F5F5F6] font-semibold text-2xl sm:text-3xl font-poppins">
            Sign up and come in
          </h2>
          <p className="text-[#F5F5F6] font-normal mt-3 max-w-2xl text-base font-poppins opacity-90 leading-relaxed">
            The registration process is straightforward, uncomplicated, and efficient, allowing
            users to sign up quickly, easily, and at no cost.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="w-full flex justify-center items-center">
            <img src={Images.authImage} alt="Register Illustration" className=" object-contain" />
          </div>

          <div className="w-full bg-white text-gray-800 rounded-2xl p-8  lg:pl-14 lg:pr-14 lg:pb-4 lg:pl-10 lg:pt-10 shadow-2xl flex flex-col justify-between">
            <div>
              <span className="text-base font-satoshi  text-[#003BE2]">Create Account</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-satoshi mt-2 text-gray-900 mb-8 leading-tight">
                Welcome to ByteSpace
              </h1>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <AuthInputField label="Full Name" type="text" placeholder="Jamie Davis" />
                </div>
                <div>
                  <AuthInputField label="Email" type="email" placeholder="designer@example.com" />
                </div>
                <div>
                  <AuthInputField label="Password" type="password" placeholder="********" />
                </div>

                <div className="flex justify-end pt-2">
                  <Button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 text-[#242528] font-medium rounded-full hover:opacity-90 transition-opacity"
                  >
                    Continue
                  </Button>
                </div>
              </form>
            </div>

            <div className="text-center font-satoshi mt-36 pt-4 border-t border-gray-100 text-base text-[#4B4C53]">
              Already have an account?{' '}
              <a
                href="/login"
                className="text-[#003BE2] font-satoshi text-base font-semibold hover:underline transition-colors"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
