import React from 'react';

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {  year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('pt-BR', options);
};

const DateComponent: React.FC = () => {
  const today = new Date();
  return (
    <div className='text-white text-base lg:text-lg'>
      {formatDate(today)}
    </div>
  );
};

export default DateComponent;
