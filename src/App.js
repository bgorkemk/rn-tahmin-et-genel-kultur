import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import MenuForm from './components/menuForm';
import PlayGame from './components/playGame';
import MainForm from './components/mainForm';
import HistoryForm from './components/forms/historyForm';
import GeoForm from './components/forms/geoForm';
import AnimalForm from './components/forms/animalForm';
import GeneralForm from './components/forms/generalForm';
import GetNameForm from './components/forms/getNameForm';
import LeaderBoard from './components/leaderBoard';
import About from './components/about';
import MultiForm from './components/forms/multiForm';
 
export default class App extends Component {

  render() {

    return (
      <Router titleStyle={{ color: '#e87b79', textAlign: 'left', flex: 1 }}>
        <Scene key="root">
          <Scene
            key="menuForm"
            component={MenuForm}
            hideNavBar="true"
            initial>
          </Scene>
          <Scene
            key="playGame"
            component={PlayGame}
            hideNavBar="true">
          </Scene>
          <Scene
            key="mainForm"
            component={MainForm}
            hideNavBar="true">
          </Scene>
          <Scene
            key="aboutForm"
            component={About}
            hideNavBar="true">
          </Scene>
          <Scene
            key="getNameForm"
            component={GetNameForm}
            hideNavBar="true"
            >
          </Scene>
          <Scene
            key="historyForm"
            component={HistoryForm}
            hideNavBar="true"
            title="Tarih">
          </Scene>
          <Scene
            key="geoForm"
            component={GeoForm}
            hideNavBar="true"
            title="Coğrafya">
          </Scene>
          <Scene
            key="animalForm"
            component={AnimalForm}
            hideNavBar="true"
            title="Hayvanlar">
          </Scene>
          <Scene
            key="generalForm"
            component={GeneralForm}
            hideNavBar="true"
            title="Hayvanlar">
          </Scene>
          <Scene
            key="leaderBoard"
            component={LeaderBoard}
            hideNavBar="true"
            title="Puan Tablosu">
          </Scene>  
          <Scene
            key="multiForm"
            component={MultiForm}
            hideNavBar="true"
            title="multitester">
          </Scene>         
        </Scene>
      </Router>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

