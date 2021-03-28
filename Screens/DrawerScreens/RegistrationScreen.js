import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

const RegistrationScreen = () => {
  return(){
    <View style={styles.containerBackground} >
      <Text>RegisterScreen</Text>
    </View>
  }
}

export default RegistrationScreen;

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#00000040',
  }
});