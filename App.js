import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import IndexScreen from './src/screens/IndexScreen';
import {BlogProvider} from './src/context/BlogContext'

const navigtor= createStackNavigator({
  Index:IndexScreen
},{
  initialRouteName: 'Index',
  defaultNavigationOptions:{
    title:'Blog'
  }
})

const App= createAppContainer(navigtor) 

export default()=>{
  <BlogProvider>
    <App/>
  </BlogProvider>
  
}