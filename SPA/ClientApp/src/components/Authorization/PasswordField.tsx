import { FormControl, FormLabel, IconButton, Input, InputGroup, InputProps, InputRightElement, useDisclosure, useMergeRefs } from '@chakra-ui/react';
import * as React from 'react';
import { GoEye, GoEyeClosed } from "react-icons/go";

export const PasswordField = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { isOpen, onToggle } = useDisclosure()
    const inputRef = React.useRef<HTMLInputElement>(null)
    const mergeRef = useMergeRefs(inputRef, ref)
    const onClickReveal = () => {
        onToggle()
        if (inputRef.current) {
            inputRef.current.focus({ preventScroll: true })
        }
    }

    return (
        <FormControl>
            <FormLabel htmlFor="password">Пароль</FormLabel>
            <InputGroup>
                <InputRightElement>
                    <IconButton
                        variant="link"
                        aria-label={isOpen ? 'Скрыть пароль' : 'Показать пароль'}
                        icon={isOpen ? <GoEyeClosed /> : <GoEye />}
                        onClick={onClickReveal}
                    />
                </InputRightElement>
                <Input
                    id="password"
                    ref={mergeRef}
                    placeholder="Введите пароль"
                    name="password"
                    type={isOpen ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    {...props}
                />
            </InputGroup>
        </FormControl>
    )
})

PasswordField.displayName = 'PasswordField'