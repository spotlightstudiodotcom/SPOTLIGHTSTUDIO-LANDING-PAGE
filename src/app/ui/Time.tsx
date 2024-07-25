import { useState, useEffect } from 'react';

const BrazilianTime = () => {
  const [time, setTime] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });
      const options: Intl.DateTimeFormatOptions = {
        timeZoneName: 'short',
        hour: 'numeric',
        minute: 'numeric',
      };
      const formattedTime = new Date(date).toLocaleTimeString('en-US', options);
      setTime(`BRASIL, RN ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="text-center text-base font-bold text-black lg:text-start lg:text-lg">
      <p>{time}</p>
    </div>
  );
};

export default BrazilianTime;
