import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const MuetPast = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        // Import JSON data directly
        const jsonData = require('./muet_maths.json'); // Adjust the import path based on your project structure

        console.log('JSON Data:', jsonData);

        if (jsonData.length > 0) {
          setJsonData(jsonData);
        } else {
          console.warn('No data found in the JSON file.');
        }
      } catch (error) {
        console.error('Error reading JSON file:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.heading}>Data from JSON:</Text>
      {jsonData.map((data, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text>{`Question ${index + 1}: ${data.Question}`}</Text>
          <Text>{`Option A: ${data.OptionA}`}</Text>
          <Text>{`Option B: ${data.OptionB}`}</Text>
          <Text>{`Option C: ${data.OptionC}`}</Text>
          <Text>{`Option D: ${data.OptionD}`}</Text>
          <Text>{`Correct Option: ${data.CorrectOption}`}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'flex-start', // Align content to the left
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  questionContainer: {
    marginBottom: 20,
  },
});

export default MuetPast;
