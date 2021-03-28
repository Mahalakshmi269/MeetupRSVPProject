//The third screen will have useful reports regarding the event. The reports you'll need to build are —

//Number of people in a given age range (13-18, 18-25 and 25+).
//Number of people by localities.
//Average group size of people attending the event (using guests count).
//Professionals & students count.
import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import data from './mockData.json'

const ReportsScreen = () => {

    let noOfPeople13to18 = 0;
    let noOfPeople18to25 = 0;
    let noOfPeopleMoreThan25 = 0;
    let n = data.length;
    for (let i = 0; i < n; i++){
      if(data[i].user_age >= 13 && data[i].user_age <= 18)
      {
        noOfPeople13to18++;
      }
      else if(data[i].user_age > 18 && data[i].user_age <= 25)
      {
        noOfPeople18to25++;
      }
      else if(data[i].user_age > 25){
        noOfPeopleMoreThan25++;
      }
    }

    let groupSize0 = 0;
    let groupSize1 = 0;
    let groupSize2 = 0;
    for (let i = 0; i < n; i++){
      if(data[i].no_of_guests == 0)
      {
        groupSize0++;
      }
      else if(data[i].no_of_guests == 1)
      {
        groupSize1++;
      }
      else if(data[i].no_of_guests == 2){
        groupSize2++;
      }
    }

    let professionalsCount = 0;
    let studentsCount = 0;
    for (let i = 0; i < n; i++){
      if(data[i].user_profession == "Employed")
      {
        professionalsCount++;
      }
      else 
      {
        studentsCount++;
      }
    }
  
    //Here progress bars used to display reports.
	return(){
		<View style={styles.container} >
			<Text style={styles.heading}>ReportsScreen</Text>  
      <Text style={styles.textStyle}>Number of people in a given age range reports</Text>
      <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F", width:"noOfPeople13to18" }}/>   
      </View>
      <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F", width:"noOfPeople18to25" }}/>   
      </View>
      <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F", width:"noOfPeopleMoreThan25"}}/>   
      </View>
      <Text style={styles.textStyle}>Average group size of people attending the event reports</Text>
      <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F", width:"groupSize0" }}/>   
      </View>
      <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F", width:"groupSize1" }}/>   
      </View>
      <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F", width:"groupSize2"}}/>   
      </View>
      <Text style={styles.textStyle}>Professionals and Students Count reports</Text>
      <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F", width:"professionalsCount" }}/>   
      </View>
      <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F", width:"studentsCount" }}/>   
      </View>
		</View>
	}
}

export default ReportsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 5,
    color: '#2196f3'
  },
  textStyle: {
    textAlign: 'left',
    fontSize: 16,
    marginVertical: 10,
    color: '#2196f3'
  },
  progressBar: {
    height: 20,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#0000FF',
   borderWidth: 2,
   borderRadius: 5,
   marginVertical: 5
  }

});