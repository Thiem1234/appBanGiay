import React,{Component} from 'react';

import { createAppContainer } from 'react-navigation';
import NavigationDrawer from './NavigationDrawer';

const AppContainer = createAppContainer(NavigationDrawer);
export default class App extends Component{
  render(){
    return(
          <AppContainer />
    );
  }
  
}
