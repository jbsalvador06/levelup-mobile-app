import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FlashCards = ({ header, text }) => {
    return (
        <View style={styles.flashCards}>
            <View style={styles.flashCardContentContainer}>
                <View>
                    <Text style={styles.flashCardHeader}>{ header }</Text>
                </View>
                <View>
                    <Text numberOfLines={5} ellipsizeMode="tail" style={styles.flashCardContent}>{ text }</Text>
                </View>
            </View>
            <TouchableOpacity>
                <View style={styles.modifyButton}></View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    flashCards: {
        flexDirection: 'row',
        backgroundColor: '#F4C524',
        borderWidth: 1,
        width: '100%',
        height: '20%',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    flashCardContentContainer: {
        flexDirection: 'column',
    },
    flashCardHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    flashCardContent: {
        paddingBottom: 4,
    },
    modifyButton: {
        backgroundColor: '#81BBDC',
        height: '100%',
        width: 30,
        borderWidth: 1,
    }
})

export default FlashCards;