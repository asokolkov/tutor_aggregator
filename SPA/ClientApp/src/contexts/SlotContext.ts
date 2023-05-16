import React from 'react';
import { SlotProps } from '../pages/sharedComponents/Slot/Slot';

type ContextProps = SlotProps & {
  timeRange: string;
};

export const SlotContext = React.createContext<ContextProps>(null);
