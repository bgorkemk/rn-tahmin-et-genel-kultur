import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, BackHandler, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Image123 from './images/123.png'

class menuForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { container, topWrapper, imageStyle, bottomWrapper, touchable, buttonWrapper, buttonText, buttonK, buttonP, buttonH, buttonC } = styles;


    return (
      <View style={container}>

        <View style={topWrapper}>
          <Image
            style={imageStyle}
            source={Image123}>
          </Image>
        </View>

        <View style={bottomWrapper}>
          <TouchableOpacity style={touchable}
            onPress={() => { Actions.playGame() }}>
            <View style={buttonK}>
              <Text style={buttonText}>Oyuna Başla</Text>
            </View>
          </TouchableOpacity>
         
          <TouchableOpacity style={touchable}
            onPress={() => { Actions.leaderBoard() }}>
            <View style={buttonP}>
              <Text style={buttonText}>Puan Tablosu</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={touchable}
            onPress={() => { Actions.aboutForm() }}>
            <View style={buttonH}>
              <Text style={buttonText}>Hakkında</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={touchable}
            onPress={() => { BackHandler.exitApp() }}>
            <View style={buttonC}>
              <Text style={buttonText}>Çıkış</Text>
            </View>
          </TouchableOpacity>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  backGroundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#34495e',
    flex: 1,
  },
  topWrapper: {
    flex: 2
  },
  imageStyle: {
    flex: 1,
    margin: 50,
    width: null,
    height: null
  },
  bottomWrapper: {
    flex: 3
  },
  touchable: {
    flex: 1
  },
  buttonK: {
    flex: 0.8,
    marginLeft: 45,
    marginRight: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#f39c12',
    backgroundColor: '#f39c12'
  },
  buttonP: {
    flex: 0.8,
    marginLeft: 45,
    marginRight: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#da8c10',
    backgroundColor: '#da8c10'
  },
  buttonH: {
    flex: 0.8,
    marginLeft: 45,
    marginRight: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#c27c0e',
    backgroundColor: '#c27c0e'
  },
  buttonC: {
    flex: 0.8,
    marginLeft: 45,
    marginRight: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#aa6d0c',
    backgroundColor: '#aa6d0c'
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: 'bold',
    textShadowColor: "black",
    textShadowRadius: 1,
    letterSpacing: 4
  }
});

export default menuForm;