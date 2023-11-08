import React from 'react';
import { Stack } from 'expo-router';

function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="Home" />
      <Stack.Screen name="page_test" />
    </Stack>
  );
}
