export type SlotInputValuesProps = {
  startTime: string;
  endTime: string;
  price: number;
  isOnline: boolean;
};

export function useFormikValues() {
  const initValues: SlotInputValuesProps = {
    startTime: '',
    endTime: '',
    price: 0,
    isOnline: false,
  };

  return { initValues };
}
