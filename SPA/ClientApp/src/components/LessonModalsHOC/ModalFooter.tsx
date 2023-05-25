import * as React from 'react';
import { Button, ModalFooter } from '@chakra-ui/react';
import { ButtonVariant } from '../../assets/theme/themeEnum';

export type ModalFooterProps = {
  isSubmitLoading: boolean;
  mutateFunction: () => void;
  onClose: () => void;
};

export function modalFooter(
  actionVariant = ButtonVariant.green,
  actionText = 'Подтвердить',
  closeText = 'Отмена'
) {
  const Component: React.FC<ModalFooterProps> = ({
    mutateFunction,
    onClose,
    isSubmitLoading,
  }) => {
    return (
      <ModalFooter>
        <Button
          isLoading={isSubmitLoading}
          variant={actionVariant}
          onClick={() => mutateFunction()}
        >
          {actionText}
        </Button>
        <Button variant="ghost" colorScheme="blue" onClick={onClose}>
          {closeText}
        </Button>
      </ModalFooter>
    );
  };
  return Component;
}
