import { Image, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const HUD = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileContainer}>
                <Image source={require('../assets/me-portrait-6.png')} style={styles.profileIcon}/>
            </View>
            <View style={styles.innerProfileContainer}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold'}}>TheJeddi</Text>
                </View>
                <View>
                    <View style={styles.progressBar}>
                        <View style={styles.progressBarFill}></View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FBECB2',
        width: '100%',
        height: '15%',
        padding: 10,
        justifyContent: "flex-start",
        borderBottomWidth: 1,
    },
    profileContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#F4C524',
        width: 100,
        height: '100%',
        paddingHorizontal: 5,
        marginRight: '5%',
    },
    profileIcon: {
        height: '80%',
        width: '100%',
        resizeMode: 'cover',
    },
    innerProfileContainer: {
        flexDirection: "column",
        justifyContent: "space-around"
    },
    progressBar: {
        borderWidth: 1,
        backgroundColor: '#F4C524',
        height: 20,
        width: 260,
    },
    progressBarFill: {
        backgroundColor: '#85FF98',
        width: '80%',
        height: '100%',
        borderRightWidth: 1
    }
});

export default HUD;