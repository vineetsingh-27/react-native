import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: "Vineet Singh",
            status: 'An android developer',
            imageUrl: 'https://avatars.githubusercontent.com/u/55322018?v=4'
        },
        {
            uid: 2,
            name: "Vivek Pandit",
            status: 'A backend developer',
            imageUrl: 'https://avatars.githubusercontent.com/u/70483415?v=4'
        },
        {
            uid: 3,
            name: "Tanmay Hole",
            status: 'A SAP developer',
            imageUrl: 'https://avatars.githubusercontent.com/u/43945311?v=4'
        },
        {
            uid: 4,
            name: "Shyam Yadav",
            status: 'An Web developer',
            imageUrl: 'https://avatars.githubusercontent.com/u/46707211?v=4'
        }
    ]
    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}>
                {contacts.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{
                                uri: imageUrl
                            }}
                            style={styles.cardImage}
                        />
                        <View>
                            <Text style={styles.cardName}>{name}</Text>
                            <Text style={styles.cardStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginTop:4,
        marginBottom:4
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        marginBottom:4,
        backgroundColor:'#283593',
        borderRadius:14,
        padding:6
    },
    cardImage: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight:14
    },
    cardName: {
        color:'#FFFFFF'
    },
    cardStatus: {
        color:'#FFFFFF'
    },
})