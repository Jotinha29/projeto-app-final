import { Button, IButtonProps, Text } from 'native-base';
import React from 'react';

interface ButtonProps extends IButtonProps {
  title: string;
  variant?: 'solid' | 'outline';
}

const ButtonComponent: React.FC<ButtonProps> = ({
  title,
  variant = 'solid',
  ...rest
}) => {
  return (
    <Button
      {...rest}
      w={'full'}
      h={14}
      bg={variant === 'outline' ? 'transparent' : 'green.700'}
      borderColor={'green.500'}
      borderWidth={variant === 'outline' ? 1 : 0}
      rounded={'sm'}
      _pressed={{
        bg: variant === 'outline' ? 'gray.500' : 'green.500',
      }}
    >
      <Text
        color={variant === 'outline' ? 'green.500' : 'white'}
        fontFamily="heading"
        fontSize={'sm'}
      >
        {title}
      </Text>
    </Button>
  );
};

export default ButtonComponent;
