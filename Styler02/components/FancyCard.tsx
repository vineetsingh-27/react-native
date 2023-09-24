import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card,styles.cardElevation]}>
        <Image
        source={{
            uri: 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1200'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink city, Jaipur</Text>
            <Text style={styles.cardDescription}>Hawa Mahal is a historic palace in Jaipur, India, known for its distinctive honeycomb-like structure and latticed windows.</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        width:350,
        height:360,
        borderRadius:6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevation:{
        backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:8
    },
    cardTitle:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:8
    },
    cardLabel:{
        fontSize:18,
        marginBottom:8
    },
    cardDescription:{
        fontSize:14,
        marginBottom:8,
        color:'#616161'
    },
    cardFooter:{
        color:'#757575'
    }
})