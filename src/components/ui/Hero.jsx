import { Link } from 'react-router-dom';
import Images from '../../images';

const Hero = ({
  title,
  subtitle,
  children,
  showGrid = true,
  className = '',
  navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'Creators', href: '/creator-profile' },
  ],
}) => {
  return (
    <div
      className={`relative bg-[#0244fb] text-white font-sans overflow-hidden select-none flex flex-col justify-between ${className}`}
    >
      {showGrid && (
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      )}

      <nav className="relative z-20 flex items-center justify-between px-6 py-6 max-w-7xl w-full mx-auto">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img
            src={Images.navlogo}
            alt="ByteSpace Logo"
            className="h-6 sm:h-7 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              className="hover:text-blue-200 transition-colors font-satoshi"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm font-medium font-satoshi">
          <Link to="/signin" className="hover:text-blue-200 transition-colors">
            Sign In
          </Link>
          <Link to="/join" className="hover:text-blue-200 transition-colors">
            Join Us
          </Link>
          <Link
            to="/cart"
            className="p-2 text-white hover:text-[#dfff00] transition-colors"
            aria-label="Cart"
          ></Link>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-4 pb-[10px]">
        {(title || subtitle) && (
          <div className="space-y-4 text-center">
            {title && (
              <h1 className="text-3xl sm:text-5xl lg:text-7xl tracking-tight leading-tight max-w-4xl text-white font-poppins font-bold mx-auto">
                {title}
              </h1>
            )}

            {subtitle && (
              <p className="mt-4 text-sm sm:text-lg text-[#E5E6E8] font-poppins font-normal max-w-2xl lg:max-w-3xl mx-auto px-2">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children && <div className="mt-4">{children}</div>}
      </main>
    </div>
  );
};

export default Hero;
