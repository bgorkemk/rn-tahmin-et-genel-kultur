import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as historyDataJson from './json/history.json';
import * as geoDataJson from './json/geo.json';
import * as animalsDataJson from './json/animals.json';
import * as generalDataJson from './json/general.json';


export const QuestionNumber = 10;

export const SCORE = 0;

export const historyData = historyDataJson;
export const geoData = geoDataJson;
export const animalsData = animalsDataJson;
export const generalData = generalDataJson;

class mainForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <View style={styles.container}>
        <View style={styles.topWrapper}>
          <TouchableOpacity style={styles.touchable}
            onPress={() => Actions.historyForm({Nick:this.props.mainFormNick, QuestionNumber: QuestionNumber, Score: SCORE, Data: historyData, askedQuestions: []})}>
            <View style={styles.history}>
              <Text style={styles.historyText}>Tarih</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchable}
            onPress={() => Actions.geoForm({Nick:this.props.mainFormNick, QuestionNumber: QuestionNumber, Score: SCORE, Data: geoData, askedQuestions: []})}>
            <View style={styles.geo}>
              <Text style={styles.geoText}>Coğrafya</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomWrapper}>
          <TouchableOpacity style={styles.touchable}
            onPress={() => Actions.animalForm({Nick:this.props.mainFormNick, QuestionNumber: QuestionNumber, Score: SCORE, Data: animalsData, askedQuestions: []})}>
            <View style={styles.animals}>
              <Text style={styles.animalsText}>Canlılar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchable}
            onPress={() => Actions.generalForm({Nick:this.props.mainFormNick, QuestionNumber: QuestionNumber, Score: SCORE, Data: generalData, askedQuestions: []})}>
            <View style={styles.space}>
              <Text style={styles.spaceText}>Genel</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  touchable: {
    flex: 1
  },
  topWrapper: {
    backgroundColor: '#34495e',
    flex: 2,
    flexDirection: 'row'
  },
  bottomWrapper: {
    backgroundColor: '#34495e',
    flex: 2,
    flexDirection: 'row'
  },
  history: {
    flex: 1,
    margin: 5,
    backgroundColor: "#FFD23F",
    alignItems: 'center',
    justifyContent: 'center'
  },
  historyText: {
    color: 'white',
    fontSize: 35,
    fontStyle: "normal",
    fontWeight: 'bold',
    textShadowColor: "black",
    textShadowRadius: 1,
    letterSpacing: 2,
  },
  geo: {
    flex: 1,
    margin: 5,
    backgroundColor: "#EE4266",
    alignItems: 'center',
    justifyContent: 'center'
  },
  geoText: {
    color: 'white',
    fontSize: 35,
    fontStyle: "normal",
    fontWeight: 'bold',
    textShadowColor: "black",
    textShadowRadius: 1,
    letterSpacing: 2,
  },
  animals: {
    flex: 1,
    margin: 5,
    backgroundColor: "#00D367",
    alignItems: 'center',
    justifyContent: 'center'
  },
  animalsText: {
    color: 'white',
    fontSize: 35,
    fontStyle: "normal",
    fontWeight: 'bold',
    textShadowColor: "black",
    textShadowRadius: 1,
    letterSpacing: 2,
  },
  space: {
    flex: 1,
    margin: 5,
    backgroundColor: "#087E8B",
    alignItems: 'center',
    justifyContent: 'center'
  },
  spaceText: {
    color: 'white',
    fontSize: 35,
    fontStyle: "normal",
    fontWeight: 'bold',
    textShadowColor: "black",
    textShadowRadius: 1,
    letterSpacing: 2,
  },
});

export default mainForm;