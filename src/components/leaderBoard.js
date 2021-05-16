import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import Leaderboard from 'react-native-leaderboard';
import firebase, { database } from 'firebase';


class leaderBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentWillMount() {
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
        this.getDataFromFirebase();
    }

    getDataFromFirebase() {

        firebase.database().ref('users').once('value', (data) => {
            this.setState({
                data: data.toJSON()
            });
        })

    }

    _alert = (title, body) => {
        Alert.alert(title, body,
            [{ text: 'OK', onPress: () => { } },],
            { cancelable: false }
        )
    }

    render() {

        return (

            <Leaderboard
                data={this.state.data}
                sortBy='highScore'
                labelBy='userName'
                rankStyle={{ color: 'black', fontWeight: 'bold' }}
                labelStyle={{ color: 'black', fontWeight: '100' }}
                scoreStyle={{ color: 'black', fontWeight: 'bold' }}
                onRowPress={(item, index) => {
                    if (item.category == 'history') {
                        this._alert(item.userName + " " + item.highScore + " ",
                            "Kategori: " + "Tarih")
                    }
                    else if (item.category == 'geo') {
                        this._alert(item.userName + " " + item.highScore + " ",
                            "Kategori: " + "Coğrafya")
                    }
                    else if (item.category == 'animals') {
                        this._alert(item.userName + " " + item.highScore + " ",
                            "Kategori: " + "Canlılar")
                    }
                    else if (item.category == 'general') {
                        this._alert(item.userName + " " + item.highScore + " ",
                            "Kategori: " + "Genel")
                    }

                }}
                evenRowColor='#f39c12'
                oddRowColor='#12f39c'>
            </Leaderboard>            

        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(11,69,84, 1)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 0.4,
        margin: 5,
        shadowColor: '#AAAAAA',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(8,126,139, 0.5)'
    },
    headetTextRight: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'right',
        margin: 10,
        textShadowColor: "black",
        textShadowRadius: 1
    }
});

export default leaderBoard;