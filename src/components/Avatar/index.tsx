import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

type AvatarProps = {
  urlImage: string;
}

export function Avatar({ urlImage }: AvatarProps) {
  return (
    <Image
      source={{ uri:`${urlImage}` }}
      style={styles.avatar}
    />
  )
}