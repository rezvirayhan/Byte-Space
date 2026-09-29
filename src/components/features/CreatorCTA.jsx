import React from 'react';
import l1 from '../../../public/assets/cat/l1.png';
import l2 from '../../../public/assets/cat/l2.png';
import l3 from '../../../public/assets/cat/l3.png';
import l4 from '../../../public/assets/cat/l4.png';
import r1 from '../../../public/assets/cat/r1.png';
import r2 from '../../../public/assets/cat/r2.png';
import r3 from '../../../public/assets/cat/r3.png';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const CreatorCTA = () => {
  return (
    <div className="relative w-full min-h-[600px] md:min-h-[650px] lg:min-h-[550px] bg-[#0042EC] overflow-hidden flex flex-col items-center justify-center text-center px-6 py-20 font-sans">
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
      />

      {/* Floating 3D Elements */}
      <div className="absolute top-0 -left-1 w-96 h-96 pointer-events-none select-none lg:block hidden">
        <img src={l1} alt="" />
      </div>

      <div className="absolute top-6 left-[14%] w-60 h-60 pointer-events-none select-none rotate-2 lg:block hidden">
        <img src={l2} alt="" />
      </div>

      <div className="absolute top-[16rem] left-0 w-40 pointer-events-none select-none lg:block hidden">
        <img src={l3} alt="" />
      </div>

      <div className="absolute -bottom-40 left-[1%] w-80 h-80 pointer-events-none select-none lg:block hidden">
        <img src={l4} alt="" />
      </div>

      <div className="absolute top-8 right-[7%] w-52 h-52 pointer-events-none select-none rotate-[10deg] lg:block hidden">
        <img src={r1} alt="" />
      </div>

      <div className="absolute top-8 -right-[2%] w-60 h-60 pointer-events-none select-none rotate-6 lg:block hidden">
        <img src={r2} alt="" />
      </div>

      <div className="absolute -bottom-32 right-4 w-80 h-80 pointer-events-none select-none lg:block hidden">
        <img src={r3} alt="" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-8xl mx-auto flex flex-col items-center text-center">
        <SectionTitle
          title="Unlock Your Potential as a "
          heading="Creator with ByteSpace"
          className="justify-center text-[#F5F5F6]"
        />

        <p className="font-satoshi font-normal text-sm sm:text-base md:text-lg text-[#F5F5F6] max-w-4xl mx-auto leading-relaxed mt-4 sm:mt-6">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>

        {/* Centered Button Section */}
        <div className="w-full flex justify-center items-center mt-10 sm:mt-14">
          <Button type="submit" className="rounded-full px-8 py-3.5 font-medium text-black">
            Join as Creator
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatorCTA;
