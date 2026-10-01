import Images from '../../utils';
import Button from './Button';

const Footer = () => {
  const columnOneLinks = [
    { label: 'Featured Courses', href: '#' },
    { label: 'Featured Categories', href: '#' },
    { label: 'Business', href: '#' },
    { label: 'IT', href: '#' },
    { label: 'Design', href: '#' },
  ];

  const columnTwoLinks = [
    { label: 'Development', href: '#' },
    { label: 'Marketing', href: '#' },
    { label: 'Photography', href: '#' },
    { label: 'Finance', href: '#' },
    { label: 'Sport', href: '#' },
  ];

  const columnThreeLinks = [
    { label: 'Become a Creator', href: '#' },
    { label: 'Affiliate Program', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Help', href: '#' },
    { label: 'About', href: '#' },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="w-full bg-white text-gray-800 border-t border-gray-200 py-10 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-[1460px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
          <div className="w-full lg:max-w-xl xl:max-w-2xl flex flex-col justify-between">
            <div>
              <img
                src={Images.Logo}
                alt="Company Logo"
                className="h-10 sm:h-11 w-auto object-contain"
              />

              <div className="space-y-4 mt-6">
                <p className="text-base font-satoshi text-[#242528] leading-relaxed">
                  Stay up to date with our latest features and releases by joining our newsletter.
                </p>
                <p className="text-sm font-satoshi text-gray-600 leading-relaxed">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates
                  from our company.
                </p>
              </div>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center w-full"
            >
              <div className="w-full sm:w-80 md:w-96">
                <input
                  type="email"
                  required
                  className="w-full font-satoshi border border-[#CED0D3] px-5 py-3 rounded-full text-[#242528] focus:outline-none focus:border-gray-500 transition-colors placeholder:text-gray-400"
                  placeholder="Enter your email"
                />
              </div>

              <div className="w-full sm:w-auto">
                <Button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 text-[#242528] font-medium rounded-full hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-auto flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 pt-4 lg:pt-0">
              <div>
                <ul className="space-y-3 text-base font-satoshi font-normal">
                  {columnOneLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[#242528] hover:text-black hover:underline transition-colors block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="space-y-3 text-base font-satoshi font-normal">
                  {columnTwoLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[#242528] hover:text-black hover:underline transition-colors block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <ul className="space-y-3 text-base font-satoshi font-normal">
                  {columnThreeLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[#242528] hover:text-black hover:underline transition-colors block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-12 lg:mt-16 border-[#CED0D3]" />

        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 pt-8 text-sm">
          <p className="font-satoshi font-normal text-[#242528] text-center sm:text-left">
            © {new Date().getFullYear()} ByteSpace. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center sm:justify-end gap-6 text-[#242528] font-satoshi">
            <a href="#" className="hover:underline transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:underline transition-colors">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
