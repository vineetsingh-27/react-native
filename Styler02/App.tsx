import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
import ChatList from './components/ChatList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <ChatList/>
          <FlatCard />
          <ElevatedCards/>
          <FancyCard/>
          <ContactList/>
          <ActionCard/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
