
import React from 'react';
import BorderBeam from '../components/BorderBeam';
import Image from 'next/image';


const DemoAbout: React.FC = () => {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between relative rounded-3xl p-7 border border-gray-700/70 bg-black">
      <BorderBeam size={150} duration={12} />
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime="2020-03-16" className="text-gray-300">October 21, 2024</time>
        <a
          href="https://github.com/SikandarJODD"
          className="relative z-10 rounded-full bg-transparent px-3 py-1.5 font-medium text-gray-200 border border-gray-100"
        >
          PCMC
        </a>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-200 group-hover:text-gray-50">
          <a href="/">
            <span className="absolute inset-0"></span>
            Bhagyoday Engineering
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">
        I have led many big projects, creating custom solutions that focus on safety, accuracy, and being eco-friendly. I have worked in different areas, from bringing electricity to villages to building modern commercial spaces.
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <Image
          src=""
          alt="bhide"
          className="h-10 w-10 rounded-full bg-gray-50"
        />
        <div className="text-sm leading-5">
          <p className="font-semibold text-white">
            <a href="https://github.com/SikandarJODD">
              <span className="absolute inset-0"></span>
              Sudhir Thakare
            </a>
          </p>
          <p className="text-gray-200">Owner and CEO</p>
        </div>
      </div>
    </article>
  );
};

export default DemoAbout;
