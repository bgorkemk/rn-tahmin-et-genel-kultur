import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';


class getANameMulti extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nick: ''
        }

    }

    controlName(data) {
        if (data == ' ' || data == '' || data == '  ' || data == '   ') {
            Alert.alert(
                'İsim alanı boş bırakılamaz.',
                'Lütfen bir isim girin.',
                [
                    {
                        text: 'Tamam!', onPress: () => {
                            Actions.multiname();
                        }
                    }
                ],
                { cancelable: false }
            )
        }
        else {
            Actions.multi();
        }
    }


    render() {

        return (
            <View style={styles.container}>

                <View style={styles.topWrapper}>
                    <TextInput
                        placeholder='İsim Giriniz'
                        placeholderTextColor='rgba(255, 255, 255, 0.2)'
                        underlineColorAndroid='transparent'
                        autoFocus={true}
                        maxLength={15}
                        style={styles.inputStyle}
                        keyboardType='default'
                        onChangeText={(nick) => this.setState({ nick })}
                        value={this.state.nick} />
                </View>


                <View style={styles.bottomWrapper}>
                    <TouchableOpacity
                        onPress={() => {
                            this.controlName(this.state.nick);
                        }}>
                        <View style={styles.buttonStyle}>
                            <Text style={styles.buttonTextStyle}>
                                Onayla
                        </Text>
                        </View>
                    </TouchableOpacity>

                </View>



            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#34495e',
        flex: 1
    },
    topWrapper: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomWrapper: {
        marginLeft: 5,
        marginRight: 5,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle: {
        backgroundColor: '#f39c12',
        width: 350,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#f39c12',
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: "black",
        textShadowRadius: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        letterSpacing: 2
    },
    buttonStyle: {
        backgroundColor: '#da8c10',
        width: 500,
        height: 75,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#da8c10',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextStyle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: "black",
        textShadowRadius: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        letterSpacing: 3
    }
});

export default getANameMulti;