import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Clock = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.text}>11:30</Text>
            </TouchableOpacity>
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