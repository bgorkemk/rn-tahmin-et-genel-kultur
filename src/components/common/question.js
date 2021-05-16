import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Question extends Component {

    render() {

        const { question, questionText } = styles;

        return (

            <View style={question}>
                <Text style={questionText}>{this.props.questionText}</Text>
            </View>

        )
    }

}

const styles = StyleSheet.create({
    question: {
        flex: 2,
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.3,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 1,
        borderRadius: 45,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    questionText: {
        margin: 5,
        fontSize: 30,
        color: 'white',
        textShadowColor: "black",
        textShadowRadius: 1,
        textAlign: 'center'        
    }
});

export default Question;