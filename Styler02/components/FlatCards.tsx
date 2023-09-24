import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
            <Text style={styles.cardText}>Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text style={styles.cardText}>Green</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text style={styles.cardText}>Blue</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8,
  },
  container:{
    flex:1,
    flexDirection: 'row',
    padding:8,
  },
  card:{
    justifyContent:'center',
    alignItems:'center',
    width:100,
    height:100,
    borderRadius:4,
    margin:8,
  },
  cardText:{
    color:'#f6f6f6',
  },
  cardOne:{
    backgroundColor:'#EF5354',
  },
  cardTwo:{
    backgroundColor:'#00E676',
  },
  cardThree:{
    backgroundColor:'#2979FF',
  },
});
