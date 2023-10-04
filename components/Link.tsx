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
    <div className='text-base md:text-2xl transition-all	duration-300 ease-in-out inline-block relative group mb-2 underline underline-offset-2 decoration-transparent hover:decoration-white'>
      <a {...linkProps} className=''>
        {text}
      </a>
    </div>
  );
};

export default Link;


