import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const IconComponent = ({
  name,
  size,
  color,
}: {
  name: string;
  size: number;
  color: string;
}) => {
  return (
    <>
      <Icon name={name} size={size} color={color} />
    </>
  );
};

export default IconComponent;
