import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { StackNavigator } from './presentation/routes/StackNavigator';

function App() {

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
