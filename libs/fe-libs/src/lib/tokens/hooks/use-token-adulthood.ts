import { useState } from 'react';
import { TokenAdulthoodType } from '@saku-monsters/shared';

export function useTokenAdulthood() {
  const [adulthood, setAdulthood] = useState<TokenAdulthoodType>(
    TokenAdulthoodType.Adult
  );
  const notSelectedAdulthood =
    adulthood === TokenAdulthoodType.Adult
      ? TokenAdulthoodType.Baby
      : TokenAdulthoodType.Adult;

  function toggleAdulthood() {
    setAdulthood((previousAdulthood) => {
      if (previousAdulthood === TokenAdulthoodType.Adult) {
        return TokenAdulthoodType.Baby;
      }
      return TokenAdulthoodType.Adult;
    });
  }

  return {
    adulthood,
    notSelectedAdulthood,
    toggleAdulthood,
  };
}
