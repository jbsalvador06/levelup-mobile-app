import { TouchableOpacity } from "react-native";
import { Button, StyleSheet, Text, View } from "react-native";

const Timer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>25:00</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 24, fontWeight: '400'}}>START</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: '80%',
        backgroundColor: '#F4C524',
        borderWidth: 1,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    text: {
        fontSize: 60
    },
    button: {
        backgroundColor: '#FBECB2',
        borderWidth: 2,
        height: 'auto',
        width: 'auto',
        padding: 4,
    }
})

export default Timer;