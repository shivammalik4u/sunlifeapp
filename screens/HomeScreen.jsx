import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import TabsNavigation from '../Navigations/TabsNavigation'
import SectionHeading from '../components/SectionHeading'
import ForYou from '../components/ForYou'
import forYou from '../data/forYou'
import JourneyCard from '../components/JourneyCard'
import ConnectFitnessTracker from '../components/ConnectFitnessTracker'
import MarketingCards from '../components/MarketingCards'
import marketing from '../data/marketing'
import BookNowCard from '../components/BookNowCard'
import bookNow from '../data/bookNow'
import WellnessScreen from './WellnessScreen'
import WelnessTools from '../components/WellnessTools'
import SocialMediaCard from '../components/SocialMediaCard'
import socialPost from '../data/socialPost'
import Colors from '../utils/Colors'
import DashboardScreen from './DashboardScreen'
import { Ionicons } from '@expo/vector-icons';


const HomeScreen = () => {
  return (
    <View>
      <Header title={'Hi User!'} />
      <View style={styles.input}>
                <Ionicons name="search" size={20} color={Colors.GRAY} />
                <TextInput placeholder='Search' style={{ width: '100%' }} />
            </View>
      <ScrollView style={{ padding: 7, backgroundColor: Colors.WHITE }} nestedScrollEnabled={true}>
        <SectionHeading heading={'Dashboard'} />
        <DashboardScreen/>

        <SectionHeading heading={'Next up for you'} seeAll={false} />
        <ForYou forYou={forYou} />
        <SectionHeading heading={'Next up for you'} seeAll={false} />
        <JourneyCard />
        <ConnectFitnessTracker />
        <SectionHeading heading={'Get more, Healthier'} seeAll={false} />
        <BookNowCard bookNow={bookNow} />
        <MarketingCards marketing={marketing} />
        <SectionHeading heading={'Health Shorts'} seeAll={false} />
        <SocialMediaCard socialPost={socialPost} />
        <SectionHeading heading={'Your Welness Tools'} seeAll={false} />
        <WelnessTools />

      </ScrollView>
    </View>
  )
}



const styles = StyleSheet.create({
  input: {
      backgroundColor: Colors.WHITE,
      height: 45,
      padding: 6,
      borderRadius: 99,
      marginTop: 10,
      paddingHorizontal: 20,
      display: 'flex',
      flexDirection: 'row',
      gap: 7,
      alignItems: 'center',
      borderWidth: 0.4,
      borderColor: Colors.PRIMARY,
      marginHorizontal:10
  },
  iconContainer: {
      position: 'relative',
      marginRight: 3,
  },
  badge: {
      backgroundColor: Colors.PRIMARY,
      borderRadius: 99,
      paddingHorizontal: 5,
      paddingVertical: 3,
      position: 'absolute',
      top: -7,
      right: 0
  },
  badgeText: {
      color: 'white',
      fontSize: 12,
  },
})

export default HomeScreen