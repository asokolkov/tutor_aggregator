import React from 'react';
import { SlotProps } from '../Slot';

type ContextProps = SlotProps & {
  timeRange: string;
};

export const SlotContext = React.createContext<ContextProps>(null);
