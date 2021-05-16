import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Header extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          interval: this.props.headerInterval          
        }

      }


    render() {

        const { header, headerTextLeft, headerTextCenter, headetTextRight } = styles;

        return (

            <View style={header}>
                <Text style={headerTextLeft}>{this.props.headerMain}</Text>
                <Text style={headerTextCenter}>{this.props.headerText}</Text>
                <Text style={headetTextRight}
                    onPress={() => { 
                        clearInterval(this.props.headerInterval);                  
                        Actions.menuForm();
                    }}>Ana Sayfa</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    header: {
        flex: 0.5,
        margin: 10,
        shadowColor: '#AAAAAA',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#da8c10'
    },
    headerTextCenter: {
        flex: 2,
        fontSize: 45,
        color: 'white',
        textAlign: 'left',
        marginLeft: 10,

        textShadowColor: "black",
        textShadowRadius: 1,
        fontWeight : 'bold'
    },
    headerTextLeft: {
        flex: 2,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left',
        margin: 10,
        textShadowColor: "black",
        textShadowRadius: 1
    },
    headetTextRight: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'right',
        margin: 10,
        textShadowColor: "black",
        textShadowRadius: 1
    }
});

export default Header;