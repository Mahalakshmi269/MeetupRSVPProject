import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

const ReportsScreen = () => {
	return(){
		<View style={styles.containerBackground} >
			<Text>ReportsScreen</Text>
		</View>
	}
}

export default ReportsScreen;

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#00000040',
  }
});