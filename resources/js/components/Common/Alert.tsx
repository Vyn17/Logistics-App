import React from 'react';
import clsx from 'clsx';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

interface AlertProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
  actions?: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  message,
  dismissible = false,
  onDismiss,
  className,
  actions
}) => {
  const typeConfig = {
    success: {
      container: 'bg-green-50 border-green-200',
      icon: CheckCircleIcon,
      iconColor: 'text-green-400',
      titleColor: 'text-green-800',
      messageColor: 'text-green-700',
      dismissColor: 'text-green-500 hover:text-green-600'
    },
    error: {
      container: 'bg-red-50 border-red-200',
      icon: ExclamationCircleIcon,
      iconColor: 'text-red-400',
      titleColor: 'text-red-800',
      messageColor: 'text-red-700',
      dismissColor: 'text-red-500 hover:text-red-600'
    },
    warning: {
      container: 'bg-yellow-50 border-yellow-200',
      icon: ExclamationTriangleIcon,
      iconColor: 'text-yellow-400',
      titleColor: 'text-yellow-800',
      messageColor: 'text-yellow-700',
      dismissColor: 'text-yellow-500 hover:text-yellow-600'
    },
    info: {
      container: 'bg-blue-50 border-blue-200',
      icon: InformationCircleIcon,
      iconColor: 'text-blue-400',
      titleColor: 'text-blue-800',
      messageColor: 'text-blue-700',
      dismissColor: 'text-blue-500 hover:text-blue-600'
    }
  };
  
  const config = typeConfig[type];
  const IconComponent = config.icon;
  
  return (
    <div className={clsx(
      'rounded-md border p-4',
      config.container,
      className
    )}>
      <div className="flex">
        <div className="flex-shrink-0">
          <IconComponent className={clsx('h-5 w-5', config.iconColor)} />
        </div>
        
        <div className="ml-3 flex-1">
          {title && (
            <h3 className={clsx('text-sm font-medium', config.titleColor)}>
              {title}
            </h3>
          )}
          
          <div className={clsx(
            'text-sm',
            config.messageColor,
            title ? 'mt-2' : ''
          )}>
            {message}
          </div>
          
          {actions && (
            <div className="mt-4">
              {actions}
            </div>
          )}
        </div>
        
        {dismissible && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                onClick={onDismiss}
                className={clsx(
                  'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2',
                  config.dismissColor
                )}
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;
