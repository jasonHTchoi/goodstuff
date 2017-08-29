//Profile Screen

import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };


  render() {
    return (
    <ScrollView>

      <View style = {styles.profilecon}>
        <View><Image source = {require('./Abhi.jpg')} style={styles.image} /></View>

        <View style = {{left:3}}>
          <View><Text style = {styles.profile}> Abhi Ramesh </Text></View>
            <View style = {{flex:1, flexDirection: 'row', paddingHorizontal: 4, left: 7}}>
              <View><Text style = {styles.desc}> Followers </Text></View>
              <View><Text style = {styles.desc}> Following </Text></View>
              <View><Text style = {styles.desc}> Hours Volunteered </Text></View>
            </View>
        </View>
      </View>

      <View>
          <View>
            <Text> Volunteered at local animal shelter </Text>
            <Text> SOMA, San Francisco, CA </Text>
            <Text> Hours committed: 15 </Text>
            <Image source = {require('./horizons.jpg')} style={styles.eventimg} />
            <TouchableOpacity style = {styles.button}><Text> See more </Text></TouchableOpacity>
          </View>

          <View>
            <Text> Volunteer at elderly care center </Text>
            <Text> Chinatown, San Francisco, CA </Text>
            <TouchableOpacity style = {styles.button}><Text> See more </Text></TouchableOpacity>
          </View>

          <View>
            <Text> Volunteer at elderly care center </Text>
            <Text> Oakloand, CA </Text>
            <TouchableOpacity style = {styles.button}><Text> See more </Text></TouchableOpacity>
          </View>

        </View>

    </ScrollView>

  );
  }
}


const styles = StyleSheet.create({
profilecon: {
  flexDirection: 'row',
  flex: 1,
},
image: {
  height: 90,
  width: 90,
  borderRadius: 45,
  left: 5,
  marginTop: 5,
  zIndex: 1,
},
profile: {
marginTop: 1,
left: 8,
// backgroundColor: '#fff',
fontSize: 30,
},

eventimg: {
  resizeMode: 'contain',
},

desc: {
  flex: 1,
  fontSize: 10,
  color: '#A5A5A5',
},

button: {
},

});
