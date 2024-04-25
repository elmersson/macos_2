'use client';

import * as React from 'react';
import { useSystem } from '@/hooks/useSystem';
const Hydration = () => {
  React.useEffect(() => {
    useSystem.persist.rehydrate();
  }, []);

  return null;
};

export default Hydration;
