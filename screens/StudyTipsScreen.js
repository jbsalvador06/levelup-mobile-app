import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

// Components
import Clock from "../components/Clock";
import StudyTips from "../components/StudyTips";

const StudyTipsScreen = ({ navigation }) => {
    return (
        <View style={styles.constainer}>
            <Clock />
            <View style={styles.tipsContainer}>
                <View style={styles.tipsNavContainer}>
                    <Text>Study Tips</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.insideTipsContainer}>
                    <StudyTips header={'Tip #1'} text={'This is a tip'} />
                    <StudyTips header={'Tip #2'} text={'This is a tip'} />
                    <StudyTips header={'Tip #3'} text={'This is a tip'} />
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        backgroundColor: '#F8BDEB',
        height: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tipsContainer: {
        backgroundColor: '#FBECB2',
        height: '65%',
        width: '95%',
        borderWidth: 1,
        flex: 1
    },
    tipsNavContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
    },
    insideTipsContainer: {
        height: '50%',
        width: '100%',
        padding: 15,
        alignSelf: 'center',
        flex: 1,
    }
})

export default StudyTipsScreen;