import { StyleSheet, Text, TouchableOpacity } from "react-native";

const OptionsButton = ({ title }) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text>{ title }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F4C524',
        borderWidth: 1,
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
    }
})

export default OptionsButton;