import { ChangeEvent, ReactNode, useRef } from 'react';
import { InputGroup } from '@chakra-ui/react';

type FileUploadProps = {
  accept?: string;
  multiple?: boolean;
  children?: ReactNode;
  onChange?: (event: ChangeEvent) => void;
};

export const FileUpload: React.FC<FileUploadProps> = ({
  accept,
  multiple,
  children,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => inputRef.current?.click();

  return (
    <InputGroup onClick={handleClick} justifyContent={'center'}>
      <input
        type={'file'}
        multiple={multiple || false}
        hidden
        accept={accept}
        onChange={(event) => onChange(event)}
        ref={(e) => {
          inputRef.current = e;
        }}
      />
      <>{children}</>
    </InputGroup>
  );
};
