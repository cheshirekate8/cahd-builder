import React from 'react';

interface LinkProps {
  to: string;
  text: string;
}

const Link: React.FC<LinkProps> = ({ to, text }) => {
  const linkProps: any = {
    href: to
  };

  return (
    <div className='h-12 md:h-16 px-8 md:px-10 pt-1 bg-white border-white border-solid rounded-full border-4 text-black hover:bg-black hover:text-white flex items-center text-base md:text-2xl transition-all	duration-300 ease-in-out'>
      <a {...linkProps} className=''>
        {text}
      </a>
    </div>
  );
};

export default Link;
