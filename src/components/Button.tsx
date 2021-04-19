import React from 'react';
import styled from '@emotion/native';
import {GestureResponderEvent} from 'react-native';

const ButtonContainer = styled.TouchableOpacity`
  background-color: black;
  width: 100%;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;
`;

const ButtonText = styled.Text`
  color: white;
`;

type ButtonProps = {
  title: String;
  onPress?: (event: GestureResponderEvent) => void;
};

export const Button: React.FC<ButtonProps> = ({title, onPress}) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);
