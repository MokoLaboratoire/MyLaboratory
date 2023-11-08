import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

function TestScreen(): React.JSX.Element {
  return (
    <View>
      <Text>Page test</Text>
      <Link href="/">Home</Link>
    </View>
  );
}

export default TestScreen;
