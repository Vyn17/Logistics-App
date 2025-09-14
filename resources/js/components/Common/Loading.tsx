import React from 'react';
import clsx from 'clsx';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'gray' | 'white';
  className?: string;
  text?: string;
  overlay?: boolean;
}

const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  color = 'blue',
  className,
  text,
  overlay = false
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12'
  };
  
  const colorClasses = {
    blue: 'text-blue-600',
    gray: 'text-gray-600',
    white: 'text-white'
  };
  
  const spinner = (
    <div className={clsx(
      'animate-spin',
      sizeClasses[size],
      colorClasses[color],
      className
    )}>
      <svg
        className="w-full h-full"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          className="opacity-25"
        />
        <path
          d="m100-10A12,12 0 0,1 12,2"
          fill="currentColor"
          className="opacity-75"
        />
      </svg>
    </div>
  );
  
  if (overlay) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 flex flex-col items-center space-y-4 shadow-xl">
          {spinner}
          {text && (
            <p className="text-gray-700 text-sm font-medium">{text}</p>
          )}
        </div>
      </div>
    );
  }
  
  if (text) {
    return (
      <div className="flex items-center space-x-3">
        {spinner}
        <span className={clsx('text-sm font-medium', colorClasses[color])}>
          {text}
        </span>
      </div>
    );
  }
  
  return spinner;
};

export default Loading;
