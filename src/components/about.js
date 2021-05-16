import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';



class about extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }


    render() {

        const { header, headetTextRight, container, wrapper, wrapperHeaderText, wrapperText } = styles;

        return (


            <View style={container}>

                <View style={header}>
                    <Text style={headetTextRight}
                        onPress={() => {
                            Actions.menuForm();
                        }}>Ana Sayfa</Text>
                </View>

                <View style={wrapper}>
                    <Text style={wrapperHeaderText}>
                        Nasıl Oynanır?
                    </Text>
                    <Text style={wrapperText}>
                        Seçtiğin kategori doğrultusunda gelen soruda istenilen cevabı sadece sayı girerek tahmin etmelisin!
                    </Text>
                    <Text style={wrapperText}>
                        Her kategoride 10 soru sonrası verdiğin cevaplara göre puanın hesaplanır.
                    </Text>
                    <Text style={wrapperText}>
                        Soruları dikkatli oku! Senden kilometre, santimetre, yükseklik ve boyutlar farklı birimlerde istenilebilir!
                    </Text>
                    <Text style={wrapperHeaderText}>
                        Puanlama Sistemi
                    </Text>
                    <Text style={wrapperText}>
                        Bir sorudan alınabilecek maksimum puan 100 Puan'dır.
                    </Text>
                    <Text style={wrapperText}>
                        Bir sorudan alınabilecek minimum puan -50 Puan'dır.
                    </Text>
                    <Text style={wrapperText}>
                        Doğru cevaba Maksimum 25 farkla yaklaştığınızda cevabın tahmine olan farkı +(25-Fark) Puan'dır.
                    </Text>
                    <Text style={wrapperText}>
                        Örnek doğru cevap 1800, cevabın 1820, aldığın puan 25-20 = 5 puan,
                        Örnek doğru cevap 1800, cevabın 1801, aldığın puan 25-1 = 24 puan,
                    </Text>
                    <Text style={wrapperText}>
                        Bir soruya cevap vermeden Tahmin Et'e tıklarsan yada süre bitiminde cevap vermediysen -50 Puan.
                    </Text>
                    
                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#34495e',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 0.1,
        margin: 5,
        shadowColor: '#AAAAAA',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#da8c10'
    },
    headetTextRight: {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        margin: 10,
        textShadowColor: "black",
        textShadowRadius: 1
    },
    wrapper: {
        flex: 1
    },
    wrapperHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        margin: 10,
    },
    wrapperText: {
        fontSize: 15,
        fontWeight: '100',
        color: 'white',
        textAlign: 'center',
        margin: 10,
    }
});

export default about;