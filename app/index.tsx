import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

function TestScreen(): React.JSX.Element {
  return (
    <View>
      <Text>Home page</Text>
      <Link href="/page_test">Page test</Link>
    </View>
  );
}

export default TestScreen;
