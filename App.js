import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import RestScreen from './src/screens/RestScreen';

const navi = createStackNavigator({
  Home: HomeScreen,
  Rest: RestScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'BusinessesSearch'
  }
})

export default createAppContainer(navi)