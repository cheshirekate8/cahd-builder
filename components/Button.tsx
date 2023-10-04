import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="h-12 md:h-16 px-8 md:px-10 pt-1 bg-white border-white border-solid rounded-full border-4 text-black hover:bg-black hover:text-white flex items-center text-base md:text-2xl transition-all	duration-300 ease-in-out"
    >
      {label}
    </button>
  );
};

export default Button;
