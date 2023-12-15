import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Clock from "../components/Clock";
import FlashCards from "../components/FlashCards";

const FlashCardScreen = ({ navigation }) => {
    return (
        <View style={styles.constainer}>
            <Clock />
            <View style={styles.flashCardContainer}>
                <View style={styles.flashCardNavContainer}>
                    <Text>Flash Cards</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.insideFlashCardContainer}>
                    <FlashCards header={'Flash Card #1'} text={'Random fact'}/>
                    <FlashCards header={'Flash Card #2'} text={'Random fact'}/>
                    <FlashCards header={'Flash Card #3'} text={'Random fact'}/>
                    <FlashCards header={'Flash Card #4'} text={'Random fact'}/>
                </ScrollView>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    constainer: {
        backgroundColor: '#F8BDEB',
        height: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flashCardContainer: {
        backgroundColor: '#FBECB2',
        height: '65%',
        width: '95%',
        borderWidth: 1,
        flex: 1
    },
    flashCardNavContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
    },
    insideFlashCardContainer: {
        height: '50%',
        width: '100%',
        padding: 15,
        alignSelf: 'center',
        flex: 1,
    }
})

export default FlashCardScreen;