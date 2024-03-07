import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'
import SectionHeading from './SectionHeading'
import { Ionicons } from '@expo/vector-icons';

const InformationCard = ({information}) => {
    return (
        <>
            <View style={styles.container}>
                <View style={{ margin: 20 }}>
                    <Text style={{ color: Colors.BLACK, fontWeight: 'bold', fontSize: 17 }}>{information.Title}</Text>
                    <Text style={{ fontSize: 13, marginTop: 10 }}>{information.Description}</Text>
                    <View style={{display:'flex', flexDirection:'row',marginTop:20, alignItems:'center', gap:7}}>
                        <Text>View all</Text>
                        <Ionicons name="arrow-forward" size={20} color={Colors.BLACK} />

                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        height: 150,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        borderColor: Colors.PRIMARY,
        borderWidth: 0.4

    }
})

export default InformationCard