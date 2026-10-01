import client1 from '../../../../public/assets/client/1.png';
import client2 from '../../../../public/assets/client/2.png';
import client3 from '../../../../public/assets/client/3.png';
import client4 from '../../../../public/assets/client/4.png';
import client5 from '../../../../public/assets/client/5.png';

const OurClients = () => {
  const clientLogos = [
    { id: 1, src: client1, alt: 'Client 1' },
    { id: 2, src: client2, alt: 'Client 2' },
    { id: 3, src: client3, alt: 'Client 3' },
    { id: 4, src: client4, alt: 'Client 4' },
    { id: 5, src: client5, alt: 'Client 5' },
  ];

  return (
    <div className="bg-[#F5F5F6] w-full py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1460px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:gap-20 items-center justify-items-center">
          {clientLogos.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center w-full h-16 sm:h-20 transition-opacity duration-300 opacity-80 hover:opacity-100"
            >
              <img
                src={typeof client.src === 'string' ? client.src : client.src.src}
                alt={client.alt}
                className="max-h-10 sm:max-h-12 md:max-h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
