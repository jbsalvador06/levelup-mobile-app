import { StyleSheet, Text, View } from "react-native";

const Clock = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>11:30</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '25%',
        width: '80%',
        backgroundColor: '#F4C524',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 60
    }
});

export default Clock;