import { View } from 'react-native';
import { Button } from 'react-native-elements';
import useFormLogin from '../hooks/api/useFormLogin';

const formData = { username: 'nikke-nakke', password: 'salainen-sana' };

const LoginScreen = ({navigation}) => {
  const loginWithForm = useFormLogin();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Log in" onPress={() => loginWithForm(formData)}></Button>
      <Button title="Create a new account" onPress={() => {navigation.navigate('Register');}}></Button>
    </View>
  );
};

export default LoginScreen;
