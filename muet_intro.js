// MuetIntroApp/MuetIntro/App.js

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textBlock}>
        <Text style={styles.fancyText}>Mehran University of Engineering and Technology ranked 1st in Province of Sindh and 2nd amongst Public Sector Engineering Universities in Pakistan, this year by HEC. Mehran UET aims to promote technological change and sustainable development through higher education, research and outreach.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db', // Background color of the entire screen
  },
  textBlock: {
    backgroundColor: '#2c3e50', // Background color of the text block
    padding: 20,
    borderRadius: 10,
  },
  fancyText: {
    fontSize: 20, // Reduced font size
    fontWeight: 'bold',
    color: '#e74c3c', // Red text color
    textTransform: 'uppercase',
    letterSpacing: 2,
    textAlign: 'center',
    fontFamily: 'cursive', // You can replace this with a different font
  },
});
