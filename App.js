import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartingScreen from './screens/StartingScreen';
import BeginScreen from './screens/BeginScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreenOP from './screens/LoginScreenOP';
import PaymentScreen1 from './screens/PaymentScreen1';
import PaymentScreen2 from './screens/PaymentScreen2';
import VregisterScreen1 from './screens/VregisterScreen1';
import VregisterScreen2 from './screens/VregisterScreen2';
import QRcodesScreen1 from './screens/QRcodesScreen1';
import QRcodesScreen2 from './screens/QRcodesScreen2';
import QRcodesScreen3 from './screens/QRcodesScreen3';
import PaymentAmount from './screens/PaymentAmount';
import PaymentStatus from './screens/PaymentStatus';
import OpQrScreen1 from './screens/OpQrScreen1';
import ResentTiket14 from './screens/ResentTiket14';
import OpQrScreen3 from './screens/OpQrScreen3';
import OpQrScreen2 from './screens/OpQrScreen2';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Vregister' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartingScreen" component={StartingScreen} />
        <Stack.Screen name="Begin" component={BeginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="OPLogin" component={LoginScreenOP} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Payment1" component={PaymentScreen1} />
        <Stack.Screen name="Payment2" component={PaymentScreen2} />
        <Stack.Screen name="Vregister" component={VregisterScreen1} />
        <Stack.Screen name="QRcodes1" component={QRcodesScreen1} />
        <Stack.Screen name="QRcodes2" component={QRcodesScreen2} />
        <Stack.Screen name="QRcodes3" component={QRcodesScreen3} />
        <Stack.Screen name="vregister1" component={VregisterScreen2} />
        <Stack.Screen name="OpQrpage" component={OpQrScreen1} />
        <Stack.Screen name="ResentTicket" component={ResentTiket14} />
        <Stack.Screen name="qr3" component={OpQrScreen3} />
        <Stack.Screen name="PaymentAmount" component={PaymentAmount} />
        <Stack.Screen name="PaymentStatus" component={PaymentStatus} />
        <Stack.Screen name="qr2" component={OpQrScreen2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


