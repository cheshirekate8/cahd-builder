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
    <a {...linkProps}>
      {text}
    </a>
  );
};

export default Link;
