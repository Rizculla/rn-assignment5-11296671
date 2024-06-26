import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import MyCardsScreen from './MyCardsScreen';
import StatisticsScreen from './StatisticsScreen';
import SettingsScreen from './SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeProvider } from './ThemeContext';
import statisticsIcon from './assets/statistics-icon.png';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let iconComponent;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
                iconComponent = <Icon name={iconName} size={size} color={color} />;
              } else if (route.name === 'MyCards') {
                iconName = focused ? 'credit-card' : 'credit-card-outline';
                iconComponent = <Icon name={iconName} size={size} color={color} />;
              } else if (route.name === 'Statistics') {
                iconComponent = (
                  <Image
                    source={statisticsIcon}
                    style={{ width: size, height: size, tintColor: color }}
                  />
                );
              } else if (route.name === 'Settings') {
                iconName = focused ? 'cog' : 'cog-outline';
                iconComponent = <Icon name={iconName} size={size} color={color} />;
              }

              return iconComponent;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }} 
          />
          <Tab.Screen
            name="MyCards"
            component={MyCardsScreen}
            options={{ headerShown: false }} 
          />
          <Tab.Screen
            name="Statistics"
            component={StatisticsScreen}
            options={{ headerShown: false }} 
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ headerShown: true }} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
