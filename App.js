import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';

const BackgroundImage = () => {
  const [showImage, setShowImage] = useState(true);
  const [showHello, setShowHello] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
      setShowHello(true); // Display Hello, World! after image disappears
    }, 1200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showImage && (
        <ImageBackground
          source={require('./assets/Images/fyp-logo.png')}
          style={styles.background}
        />
      )}

      {showHello && <HelloWorld />}
    </>
  );
};

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const imageWidth = Dimensions.get('screen').width; // Using screen dimensions
const imageHeight = Dimensions.get('screen').height; // Using screen dimensions

const styles = StyleSheet.create({
  background: {
    width: imageWidth,
    height: imageHeight,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default BackgroundImage;
