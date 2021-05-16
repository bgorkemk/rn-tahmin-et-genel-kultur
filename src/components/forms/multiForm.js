import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import io from 'socket.io-client';
import { Actions } from 'react-native-router-flux';

const CONNECTION_IP_1 = "http://192.168.2.20:3000/rooms";
const CONNECTION_IP_2 = "http://192.168.1.37:3000/rooms";

class multi extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nick: '',
            roomname: '',
            usersInLobby: [],
            timer: 5,
            test: ''
        };
    }

    componentDidMount() {
        this.socket = io(CONNECTION_IP_2);

        this.socket.emit('joinRoom', {
            roomname: this.props.roomname,
            username: this.props.username,
            usersInLobby: this.state.usersInLobby
        })

        this.socket.on('joinSuccess', (data) => {
            this.setState({
                nick: data.username,
                roomname: data.roomname,
            })
        })

        this.socket.on('userJoined', (data) => {
            this.setState({
                usersInLobby: [...this.state.usersInLobby, data.username],
            });
        });

        this.socket.on('startGame', () => {
            this.countdown();
            this.setState({
                test: 'Başlıyor!'
            });
        })
    }
    leaveLobby() {
        this.socket.emit('disconnect', {});
        Actions.getNameForm({ multiPlayer: true });
    }
    
    startGame() {
        this.socket.emit('start', {
            roomname: this.props.roomname,
        });        
    }
    countdown() {
        var i = this.state.timer;

        myTimer = setInterval(() => {
            i--;
            this.setState({
                timer: i
            });
            if (this.state.timer <= 0) {
                clearInterval(myTimer)
                this.setState({
                    test: 'Basladı...',
                    timer: ''
                });
            }
        }, 1000);
    }
    render() {

        const { container, bottomWrapper, topWrapper, buttonStyle, buttonTextStyle } = styles;
        const users = this.state.usersInLobby.map(user =>
            <Text key={user} style={buttonTextStyle}>{user}</Text>
        );
        return (
            <View style={container}>
                <Text style={buttonTextStyle}>Oda Adı : {this.state.roomname} </Text>
                <Text style={buttonTextStyle}>{this.state.test} </Text>

                <View style={topWrapper}>
                    {users}
                </View>
                <View style={bottomWrapper}>
                    <Text style={buttonTextStyle}>{this.state.timer}</Text>

                    <TouchableOpacity
                        onPress={() => {
                            this.startGame();
                        }}>
                        <View style={buttonStyle}>
                            <Text style={buttonTextStyle}>
                                Oyunu Başlat
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.leaveLobby();
                        }}>
                        <View style={buttonStyle}>
                            <Text style={buttonTextStyle}>
                                Lobiden Ayrıl!
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
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
});

export default multi;
