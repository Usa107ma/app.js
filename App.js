import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Muet_Home from './Muet_Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Muet_Home" component={Muet_Home}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <ImageBackground
      source={require('./Background3.jpg')}
      style={styles.container}
    >
      <View style={styles.blockContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.block, styles.muetBlock, { width: screenWidth * 0.4, height: screenHeight * 0.2 }]}
            onPress={() => navigation.navigate('Muet_Home')}
          >
            <Text style={styles.blockText}>MUET</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.block, styles.nedBlock, { width: screenWidth * 0.4, height: screenHeight * 0.2 }]}
            onPress={() => navigation.navigate('')}
          >
            <Text style={styles.blockText}>NED</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.block, styles.fastBlock, { width: screenWidth * 0.4, height: screenHeight * 0.2 }]}
            onPress={() => navigation.navigate('')}
          >
            <Text style={styles.blockText}>FAST</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.block, styles.ibaBlock, { width: screenWidth * 0.4, height: screenHeight * 0.2 }]}
            onPress={() => navigation.navigate('')}
          >
            <Text style={styles.blockText}>IBA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  block: {
    padding: 30,
    borderRadius: 20,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  muetBlock: {
    backgroundColor: '#3498db',
  },
  nedBlock: {
    backgroundColor: '#e74c3c',
  },
  fastBlock: {
    backgroundColor: '#2ecc71',
  },
  ibaBlock: {
    backgroundColor: '#f39c12',
  },
});

export default App;
