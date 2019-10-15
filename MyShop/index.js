/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NavigationDrawer from './NavigationDrawer';
import AppNavigator from './AppNavigator';
import ProductScreen from './screens/ProductScreen';
//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => NavigationDrawer);
//AppRegistry.registerComponent(appName, () => ProductScreen);