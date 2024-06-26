import React from 'react';
import { Switch, Text } from 'react-native'; 
import styled from 'styled-components/native';
import { useTheme } from './ThemeContext'; 

const SettingsScreen = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <Container isDarkTheme={isDarkTheme}>
      <Option>
        <OptionText>Change Password</OptionText>
      </Option>
      <Option>
        <OptionText>Privacy Policy</OptionText>
      </Option>
      <Option>
        <OptionText>Language</OptionText>
      </Option>
      <Option>
        <OptionText>Contact Us</OptionText>
      </Option>
      <Option>
        <OptionText>My Profile</OptionText>
      </Option>
      <Option>
        <OptionText>Theme</OptionText>
        <Switch onValueChange={toggleTheme} value={isDarkTheme} />
      </Option>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => (props.isDarkTheme ? '#333' : '#f8f8f8')};
`;

const Option = styled.View`
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const OptionText = styled.Text`
  font-size: 16px;
`;

export default SettingsScreen;
