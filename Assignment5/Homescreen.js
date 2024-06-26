import React from 'react';
import { StatusBar, FlatList } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from './ThemeContext'; // Adjust the import path accordingly

const transactions = [
  { id: '1', title: 'Grocery Shopping', amount: '- $88', category: 'Shopping', image: require('./assets/grocery.png') },
  { id: '2', title: 'Apple Store', amount: '- $5.99', category: 'Entertainment', image: require('./assets/apple.png') },
  { id: '3', title: 'Spotify', amount: '- $12.99', category: 'Music', image: require('./assets/spotify.png') },
];

const HomeScreen = () => {
  const { isDarkTheme } = useTheme();

  return (
    <Container isDarkTheme={isDarkTheme}>
      <StatusBar
        backgroundColor={isDarkTheme ? '#333' : '#f8f8f8'}
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
      />
      <HeaderContainer>
        <ProfileSection>
          <ProfileImage source={require('./assets/Profile.png')} />
          <HeaderTextContainer>
            <WelcomeText isDarkTheme={isDarkTheme}>Welcome back,</WelcomeText>
            <UsernameText isDarkTheme={isDarkTheme}>Benson Otti</UsernameText>
          </HeaderTextContainer>
        </ProfileSection>
        <SearchButton>
          <Icon name="search" size={30} color={isDarkTheme ? '#fff' : '#000'} />
        </SearchButton>
      </HeaderContainer>
      <Card>
        <CardBackground source={require('./assets/card-background.png')}>
          <CardContent>
            <CardTopSection>
              <CardIcon source={require('./assets/card-chip.png')} />
              <ExpiryDate isDarkTheme={isDarkTheme}>Expiry Date: 24/2000</ExpiryDate>
            </CardTopSection>
            <CardMiddleSection>
              <CardNumber isDarkTheme={isDarkTheme}>4562 1122 4595 7852</CardNumber>
            </CardMiddleSection>
            <CardBottomSection>
              <CardDetails>
                <CardHolderName isDarkTheme={isDarkTheme}>Benson Otti</CardHolderName>
                <Spacer />
                <MastercardLogo source={require('./assets/mastercard.png')} />
              </CardDetails>
            </CardBottomSection>
          </CardContent>
        </CardBackground>
      </Card>
      <IconSection>
        <IconItem>
          <Icon name="arrow-upward" size={30} color={isDarkTheme ? '#fff' : '#000'} />
          <IconText isDarkTheme={isDarkTheme}>Sent</IconText>
        </IconItem>
        <IconItem>
          <Icon name="arrow-downward" size={30} color={isDarkTheme ? '#fff' : '#000'} />
          <IconText isDarkTheme={isDarkTheme}>Receive</IconText>
        </IconItem>
        <IconItem>
          <Icon name="attach-money" size={30} color={isDarkTheme ? '#fff' : '#000'} />
          <IconText isDarkTheme={isDarkTheme}>Loan</IconText>
        </IconItem>
        <IconItem>
          <Icon name="cloud-upload" size={30} color={isDarkTheme ? '#fff' : '#000'} />
          <IconText isDarkTheme={isDarkTheme}>Topup</IconText>
        </IconItem>
      </IconSection>
      <TransactionHeader>
        <TransactionTitle isDarkTheme={isDarkTheme}>Transactions</TransactionTitle>
        <SeeAllButton isDarkTheme={isDarkTheme}>See All</SeeAllButton>
      </TransactionHeader>
      <TransactionList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TransactionItem isDarkTheme={isDarkTheme}>
            {item.image && <TransactionImage source={item.image} />}
            <TransactionDetails>
              <TransactionTextContainer>
                <TransactionTitle isDarkTheme={isDarkTheme}>{item.title}</TransactionTitle>
                <TransactionAmount isDarkTheme={isDarkTheme} amount={item.amount}>{item.amount}</TransactionAmount>
              </TransactionTextContainer>
              <TransactionCategory isDarkTheme={isDarkTheme}>{item.category}</TransactionCategory>
            </TransactionDetails>
          </TransactionItem>
        )}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => (props.isDarkTheme ? '#333' : '#f8f8f8')};
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ProfileSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;

const HeaderTextContainer = styled.View`
  flex-direction: column;
`;

const WelcomeText = styled.Text`
  font-size: 18px;
  color: ${(props) => (props.isDarkTheme ? '#aaa' : '#555')};
`;

const UsernameText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => (props.isDarkTheme ? '#fff' : '#000')};
`;

const SearchButton = styled.View`
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 2px;
  elevation: 3;
  padding: 10px;
  border-radius: 50px;
`;

const Card = styled.View`
  width: 100%;
  height: 200px;
  background-color: transparent;
  border-radius: 15px;
  margin-bottom: 20px;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  overflow: hidden;
`;

const CardBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const CardContent = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: space-between;
`;

const CardTopSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CardMiddleSection = styled.View`
  justify-content: center;
  align-items: center;
`;

const CardBottomSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CardNumber = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

const CardHolderName = styled.Text`
  font-size: 16px;
  color: #fff;
`;

const CardDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ExpiryDate = styled.Text`
  font-size: 14px;
  color: #fff;
`;

const CardIcon = styled.Image`
  width: 40px;
  height: 40px;
  resize-mode: contain;
`;

const MastercardLogo = styled.Image`
  width: 50px;
  height: 30px;
  resize-mode: contain;
`;

const Spacer = styled.View`
  flex: 1;
`;

const IconSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
`;

const IconItem = styled.View`
  align-items: center;
`;

const IconText = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  color: ${(props) => (props.isDarkTheme ? '#fff' : '#000')};
`;

const TransactionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const SeeAllButton = styled.Text`
  font-size: 16px;
  color: ${(props) => (props.isDarkTheme ? '#87cefa' : '#0000ff')}; /* Light blue or blue color */
`;

const TransactionList = styled(FlatList)`
  margin-top: 20px;
`;

const TransactionItem = styled.View`
  background-color: ${(props) => (props.isDarkTheme ? '#444' : '#fff')};
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  flex-direction: row;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
  elevation: 3;
`;

const TransactionImage = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  resize-mode: contain;
  padding: 5px;
`;

const TransactionDetails = styled.View`
  flex: 1;
`;

const TransactionTextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const TransactionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.isDarkTheme ? '#fff' : '#000')};
`;

const TransactionAmount = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.amount.startsWith('-') ? '#ff0000' : props.isDarkTheme ? '#fff' : '#000')};
`;

const TransactionCategory = styled.Text`
  font-size: 14px;
  color: ${(props) => (props.isDarkTheme ? '#aaa' : '#555')};
`;

export default HomeScreen;
