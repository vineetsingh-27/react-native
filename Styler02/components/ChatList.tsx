import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ChatList() {
    const chatImageUrl = [
        {
            uid: 1,
            imageUrl: 'https://media.licdn.com/dms/image/D4D03AQGB75SeSRvgdQ/profile-displayphoto-shrink_800_800/0/1669186401601?e=1701302400&v=beta&t=u4iB_5fCCrD_XJj-zd-5YzaM8wbB85iqJNw-BfNlMSQ',
        },
        {
            uid: 2,
            imageUrl: 'https://media.licdn.com/dms/image/D4D03AQHRodEbOnSCXQ/profile-displayphoto-shrink_100_100/0/1679510494659?e=1701302400&v=beta&t=jOgJ5ve_-N-gUFrOmBE-29xoymwxVpUL7NzM-wwqMvg',
        },
        {
            uid: 3,
            imageUrl: 'https://media.licdn.com/dms/image/D5603AQGw3aLyQucETA/profile-displayphoto-shrink_100_100/0/1682489375130?e=1701302400&v=beta&t=_pApo4hPezpfw6_Ov4WOUP44p_fuL1a-cnNUSTAfRz0',
        },
        {
            uid: 4,
            imageUrl: 'https://media.licdn.com/dms/image/D5603AQHPxPrtVsmvAQ/profile-displayphoto-shrink_100_100/0/1684585550776?e=1701302400&v=beta&t=jOCkpf9FNZOJ8kssLiItInOMWEUeG83VjYwlB__-YQs',
        },
        {
            uid: 5,
            imageUrl: 'https://media.licdn.com/dms/image/D4D35AQFpQAaXkOKC0Q/profile-framedphoto-shrink_100_100/0/1692008923331?e=1696158000&v=beta&t=M_7uFSTA2iymWzfuOaF8fOIc1tjeXs4sZ-nmh11jkCQ',
        },
        {
            uid: 6,
            imageUrl: 'https://media.licdn.com/dms/image/D4D35AQFlojhQOdpCSQ/profile-framedphoto-shrink_100_100/0/1691945165985?e=1696158000&v=beta&t=OEyAVenhzP9__4JveEpPBmU3O5J94RSj5jbsfAJyJF0',
        },
        {
            uid: 7,
            imageUrl: 'https://media.licdn.com/dms/image/D4D03AQHKky3MTy8V_Q/profile-displayphoto-shrink_100_100/0/1670653428129?e=1701302400&v=beta&t=ZdousmNiIcgi1Jm4eb_3d_Z-MVp3YUxXk27uiy9MxqE',
        },
        {
            uid: 8,
            imageUrl: 'https://media.licdn.com/dms/image/D4D03AQGqDZ4jfMwLqA/profile-displayphoto-shrink_100_100/0/1694076008683?e=1701302400&v=beta&t=sXknwFjihB3M_uwq4lQUVuKdsF-mqu08OsgtjOzaQyc',
        },

    ]
    return (
        <View>
            <Text style={styles.headingText}>ChatList</Text>
            <ScrollView style={styles.container}
            horizontal={true}
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}>
                {chatImageUrl.map(({ uid, imageUrl }) => (
                    <View key={uid} style={styles.chatCardCircular}>
                        <Image
                            source={{
                                uri: imageUrl
                            }}
                            style={styles.chatImageCard}
                        />
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
        paddingHorizontal: 8,
        marginTop:8
    },
    container:{
        paddingHorizontal: 16,
        paddingVertical:12,
        marginTop:4,
        marginBottom:4
    },
    chatCardCircular: {
        margin:8
    },
    chatImageCard:{
        width: 60,
        height: 60,
        borderRadius:30
    }
})