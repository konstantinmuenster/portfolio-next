import { useEffect, useState } from 'react';

export const useCurrentTimestamp = () => {
  const [currentTimestamp, setCurrentTimestamp] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours().toString();
    const minutes = date.getMinutes().toString();
    setCurrentTimestamp(
      `${hours.length === 1 ? '0' + hours : hours}:${
        minutes.length === 1 ? '0' + minutes : minutes
      }`
    );
  }, []);

  return currentTimestamp;
};
