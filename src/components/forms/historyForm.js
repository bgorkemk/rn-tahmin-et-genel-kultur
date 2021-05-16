import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, AsyncStorage } from 'react-native';
import Question from '../common/question';
import Header from '../common/header';
import { Actions } from 'react-native-router-flux';
import firebase, { database } from 'firebase';



class historyForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      category: 'history',
      question: '',
      answer: '',
      answer_given: (Number)(0),
      timer: 20,
      array: this.props.Data,
      interval: '',
      score: '',
      question_number: this.props.QuestionNumber,
      nick: this.props.Nick,
      askedQuestions: this.props.askedQuestions
    }

    this.getArray = this.getArray.bind(this);
    this.timerStart = this.timerStart.bind(this);
  }

  componentDidMount() {

    var config = {
      apiKey: "AIzaSyDQ3Oy3unJqD8PocG8Rm0QZuxqVJbteccY",
      authDomain: "tahminet-dce91.firebaseapp.com",
      databaseURL: "https://tahminet-dce91.firebaseio.com",
      projectId: "tahminet-dce91",
      storageBucket: "tahminet-dce91.appspot.com",
      messagingSenderId: "374893317743"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    let number = (Number)(this.props.QuestionNumber);
    let score = (Number)(this.props.Score);

    number -= 1;

    this.setState({
      score: score,
      question_number: number
    })

    if (this.state.question_number === 0) {

      firebase.database().ref('users').push(
        {
          highScore: score,
          userName: this.state.nick,
          category: this.state.category
        }
      ).then(() => {
      }).catch((err) => {
      });

      Alert.alert(
        'Bu kategorideki sorular bitti.',
        'İsim: ' + this.state.nick + ' Puan: ' + score,
        [
          {
            text: 'Tamam!', onPress: () => {
              this.exitCurrentCategory();
            }
          }
        ],
        { cancelable: false }
      )
    }

    this.timerStart();
    this.getArray();
  }


  exitCurrentCategory() {
    clearInterval(this.state.interval);
    Actions.menuForm();
  }

  getArray() {
    let array = this.props.Data;
    let selectedQuestionArray = [];
    selectedQuestionArray = this.props.askedQuestions;
    let arrayLength = Object.keys(array).length;
    arrayLength = arrayLength - 2;
    let selectedQuestion = Math.floor(Math.random() * (arrayLength + 1));


    if (Object(selectedQuestionArray).indexOf(selectedQuestion) >= 0) {
      this.getArray();
    }
    else {
      selectedQuestionArray.push((Number)(selectedQuestion));

      this.setState({
        array: array,
        question: array[selectedQuestion].question,
        answer: array[selectedQuestion].answer,
        askedQuestions: selectedQuestionArray
      });

    }

  }

  timerStart() {
    let timer_new = this.state.timer;
    this.state.interval = setInterval(() => {

      timer_new--;

      this.setState({
        timer: timer_new
      });

      if (this.state.timer === 0) {
        clearInterval(this.state.interval);
        this.calculateScores();
      }
    }, 1000);

  }

  controlAnswer() {
    let difference = 0;
    difference = Math.abs(this.state.answer - this.state.answer_given);
    return difference.toFixed(0);
  }

  calculateScores() {
    let difference = this.controlAnswer();
    let score = this.state.score;
    if (this.state.answer_given == 0) {
      score -= 50;
      this.setState({
        score: score
      });
      Alert.alert(
        'Önce tahmin etmelisin!',
        'Cevap girmediğin için -50 Puan',
        [
          { text: 'Devam!', onPress: () => { Actions.historyForm({ QuestionNumber: this.state.question_number, Score: this.state.score, Nick: this.state.nick, Data: this.state.array, askedQuestions: this.state.askedQuestions }) } }
        ],
        { cancelable: false }
      )
    }
    else {
      if (difference == 0) {
        score += 100;
        this.setState({
          score: score
        });
        Alert.alert(
          'Mükemmel!',
          'Tahminin doğru! +100 Puan',
          [
            { text: 'Devam!', onPress: () => { Actions.historyForm({ QuestionNumber: this.state.question_number, Score: this.state.score, Nick: this.state.nick, Data: this.state.array, askedQuestions: this.state.askedQuestions }) } }
          ],
          { cancelable: false }
        )
      }
      else {
        if (difference <= 25) {
          score += (25 - difference);
          this.setState({
            score: score
          });
          Alert.alert(
            'Tebrikler Yakın Cevap, Doğru Cevap: ' + this.state.answer + ' Senin Cevabın: ' + this.state.answer_given,
            'Cevabın ' + difference + ' fark ile yaklaşık!' + ' + ' + (25 - difference) + ' puan',
            [
              { text: 'Devam!', onPress: () => { Actions.historyForm({ QuestionNumber: this.state.question_number, Score: this.state.score, Nick: this.state.nick, Data: this.state.array, askedQuestions: this.state.askedQuestions }) } }
            ],
            { cancelable: false }
          )
        }
        else {
          score -= 5;
          this.setState({
            score: score
          });
          Alert.alert(
            'Malesef Doğru Cevap: ' + this.state.answer + ' Senin Cevabın: ' + this.state.answer_given,
            'Cevabı ' + difference + ' farkla kaçırdın! -5 Puan',
            [
              { text: 'Devam!', onPress: () => { Actions.historyForm({ QuestionNumber: this.state.question_number, Score: this.state.score, Nick: this.state.nick, Data: this.state.array, askedQuestions: this.state.askedQuestions }) } }
            ],
            { cancelable: false }
          )
        }
      }
    }
  }

  render() {

    const { container, question, answer, inputStyle, buttonStyle, buttonTextStyle, touchable } = styles;

    return (

      <View style={container}>

        <Header headerText={this.state.timer}
          headerMain='Tarih'
          headerInterval={this.state.interval}>
        </Header>

        <View style={question}>
          <Question questionText={this.state.question}></Question>
        </View>

        <View style={answer}>
          <TextInput
            placeholder='Cevap Giriniz'
            placeholderTextColor='rgba(255, 255, 255, 0.2)'
            underlineColorAndroid='transparent'
            autoFocus={false}
            maxLength={15}
            style={inputStyle}
            keyboardType='numeric'
            onChangeText={(answer_given) => this.setState({ answer_given })}
            value={this.state.answer_given} />
        </View>

        <TouchableOpacity style={touchable}
          onPress={() => {
            clearInterval(this.state.interval);
            this.calculateScores()
          }}>
          <View style={buttonStyle}>
            <Text style={buttonTextStyle}>
              Tahmin Et!
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10
  },
  buttonStyle: {
    flex: 0.6,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#AAAAAA',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#da8c10'
  },
  buttonTextStyle: {
    margin: 5,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: "black",
    textShadowRadius: 1,
    textAlign: 'center',
    letterSpacing: 4
  },
  container: {
    flex: 1,
    backgroundColor: '#34495e',
  },
  question: {
    flex: 2
  },
  optionTop: {
    flex: 1,
    backgroundColor: 'white'
  },
  answer: {
    backgroundColor: '#f39c12',
    flex: 1.2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f39c12',
    marginTop: 100,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: "black",
    textShadowRadius: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: "black",
    textShadowRadius: 1,
    textAlign: 'center',
    letterSpacing: 2
  }

});

export default historyForm;