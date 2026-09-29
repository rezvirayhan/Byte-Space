import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      role: 'Enthusiastic Learner',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      category: 'learner',
      rating: 5,
      content:
        'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.',
      badge: 'Verified Student',
      highlight: 'Transformed my approach to learning',
    },
    {
      id: 1,
      name: 'Sarah M.',
      role: 'Enthusiastic Learner',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      category: 'learner',
      rating: 5,
      content:
        'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.',
      badge: 'Verified Student',
      highlight: 'Transformed my approach to learning',
    },
    {
      id: 1,
      name: 'Sarah M.',
      role: 'Enthusiastic Learner',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      category: 'learner',
      rating: 5,
      content:
        'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.',
      badge: 'Verified Student',
      highlight: 'Transformed my approach to learning',
    },
  ];

  return (
    <div className="relative bg-[#FAFAFA] text-slate-800 min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans selection:bg-[#d0fc01] selection:text-black">
      {/* 1. Bottom Left - Soft Blue Soft Glow */}
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full z-0 opacity-70 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(186, 210, 255, 0.75) 0%, rgba(186, 210, 255, 0) 70%)',
        }}
      />

      {/* 2. Top Center - Vibrant Lime Green Orb */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full z-0 opacity-80 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(223, 255, 60, 0.85) 0%, rgba(223, 255, 60, 0) 70%)',
        }}
      />

      {/* 3. Top Right - Large Lime Yellow Soft Glow */}
      <div
        className="pointer-events-none absolute -top-10 -right-20 w-[700px] h-[700px] rounded-full z-0 opacity-75 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(235, 255, 120, 0.75) 0%, rgba(235, 255, 120, 0) 70%)',
        }}
      />

      <div className="max-w-[1460px] mx-auto relative z-10 space-y-12 md:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-6 space-y-4">
            <SectionTitle
              title="Discover What Our "
              heading="Community Is Saying"
              className="  justify-center"
            />
          </div>

          <div className="lg:col-span-6 space-y-6 lg:pt-2 font-satoshi">
            <p className=" sm:text-[19px] text-[#4F4F4F] leading-relaxed font-normal">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what
              we do. Hear directly from those who have experienced the transformative journey of
              learning and creating on our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-16 pt-4">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="group relative bg-white  rounded-2xl p-6 sm:p-8 flex flex-col justify-between  "
            >
              <div className=" items-center gap-4 ">
                <div className="relative">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-20 h-20 rounded-full object-cover ring-2 ring-slate-100"
                  />
                </div>

                <div className=" min-w-0">
                  <h4 className="text-base font-poppins font-bold text-slate-900 truncate flex items-center gap-2 mt-3">
                    {review.name}
                  </h4>
                  <p className="text-lg  text-[#003BE2] font-satoshi  mt-1">{review.role}</p>
                </div>
              </div>
              <div>
                <p className="text-[#4F4F4F]  sm:text-[20px] leading-[170%] mb-8 font-normal font-satoshi mt-5 ">
                  "{review.content}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
