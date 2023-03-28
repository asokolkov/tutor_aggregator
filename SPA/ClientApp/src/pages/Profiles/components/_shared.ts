export interface ProfilePageProps {
  isDisabled?: boolean;
  isRequired?: boolean;
  name: string;
  tooltip: {
    type: TooltipType;
    label: string;
  };
}

export enum TooltipType {
  Info,
  Lock,
}
