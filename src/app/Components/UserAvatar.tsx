import { Image, IImageProps } from 'native-base';
import React from 'react';

interface UserAvatarProps extends IImageProps {
  size: number;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ size, ...rest }) => {
  return (
    <Image
      w={size}
      h={size}
      rounded="full"
      borderWidth={2}
      borderColor="gray.400"
      {...rest}
    />
  );
};

export default UserAvatar;
