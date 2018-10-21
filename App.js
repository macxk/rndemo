/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, TextInput, Text, View} from 'react-native';


type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={{padding:10}}>
        <TextInput
          style={{height:40}}
          placeholder="请输入.."
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10,fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}
