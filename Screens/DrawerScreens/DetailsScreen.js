import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

const DetailsScreen = () => {
	return(){
		<View style={styles.containerBackground} >
			<Text>DetailsScreen</Text>
		</View>
	}
}

export default DetailsScreen;

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#00000040',
  }
});