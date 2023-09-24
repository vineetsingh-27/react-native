import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in Javascript 21 ES-12
                    </Text>
                    </View>
                    <Image
                        source={{
                            uri: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1200'
                        }}
                        style={styles.cardImage}
                    />
                    <View style={styles.bodyContainer}>
                        <Text numberOfLines={2}>
                            JavaScript is a versatile and widely-used programming language that allows developers to add dynamic behavior and interactivity to web applications.
                            It is primarily executed in web browsers and is an essential component of modern web development, enabling client-side scripting and enhancing user experiences.
                        </Text>
                    </View>
                    <View style={styles.footerContainer}>
                        <TouchableOpacity onPress={() => openWebsite('https://hiteshchoudhary.com/')}>
                            <Text style={styles.socialLinks}>Read more</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => openWebsite('https://hiteshchoudhary.com/')}>
                            <Text style={styles.socialLinks}>Follow me</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    )
}

export default ActionCard;

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card: {
        backgroundColor:'#FB8C00',
        marginVertical:12,
        marginHorizontal:16,
        borderRadius:6
    },
    elevatedCard: {
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor: '#333',
        shadowOpacity:0.4
    },
    headingContainer: {
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText: {
        fontSize:22,
        fontWeight:'600'
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding:10
    },
    footerContainer: {
        padding:8,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    socialLinks:{
        fontSize:18,
        backgroundColor:'#ffffff',
        paddingHorizontal:20,
        paddingVertical:12,
        borderRadius:6
    }
})