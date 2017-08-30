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

<View style={styles.header}>
      <View style = {styles.profilecon}>
        <View>
          <Image
           style={styles.image} source = {require('./Abhi.jpg')} />
        </View>

        <View style = {{left:3}}>
            <View style={{left:6}}><Text style = {styles.profile}> Abhi Ramesh </Text></View>
            <View style = {{flex:1, flexDirection: 'row',  left: 17}}>
              <View><Text style = {styles.desc}>  Followers </Text></View>
              <View><Text style = {styles.desc}>    Following </Text></View>
              <View><Text style = {styles.desc}>   Total Hours </Text></View>
            </View>

            <View style={styles.counter}>
              <TouchableOpacity><Text style={{fontSize: 15, color: '#507DDC' }}>      514 </Text></TouchableOpacity>
              <TouchableOpacity><Text style={{fontSize: 15, color: '#507DDC' }}>    351 </Text></TouchableOpacity>
              <TouchableOpacity><Text style={{fontSize: 15, color: '#507DDC' }}>     32 </Text></TouchableOpacity>
            </View>

        </View>
      </View>

      <View></View>
</View>


      <View>
          <View>
            <View style={styles.feed}>
              <Text style={{fontSize: 10}}> Volunteered 15 hours at </Text>
              <TouchableOpacity><Text style={{color:'#507DDC', fontSize: 10}}> Horizons School of Technology </Text></TouchableOpacity>
            </View>

            <TouchableOpacity><Text style={{color:'#999A9C', fontSize: 10}}> SOMA, San Francisco, CA </Text></TouchableOpacity>
              <Image
                  style={styles.eventimg}
                  source = {require('./horizons.jpg')} />
                <TouchableOpacity style = {styles.button}>
                  <Text style={{color:'#507DDC', fontSize: 10}}> See more </Text>
                  </TouchableOpacity>
                  <Text></Text>
                  <Text></Text>
          </View>

          <View>
            <View style={styles.feed}>
              <Text style={{fontSize: 10}}> Volunteered 15 hours at </Text>
              <TouchableOpacity><Text style={{color:'#507DDC', fontSize: 10}}> Horizons School of Technology </Text></TouchableOpacity>
            </View>

            <TouchableOpacity><Text style={{color:'#999A9C', fontSize: 10}}> SOMA, San Francisco, CA </Text></TouchableOpacity>
              <Image
                  style={styles.eventimg}
                  source = {require('./horizons.jpg')} />
                <TouchableOpacity style = {styles.button}>
                  <Text style={{color:'#507DDC', fontSize: 10}}> See more </Text>
                  </TouchableOpacity>
                  <Text></Text>
                  <Text></Text>
          </View>

          <View>
            <View style={styles.feed}>
              <Text style={{fontSize: 10}}> Volunteered 15 hours at </Text>
              <TouchableOpacity><Text style={{color:'#507DDC', fontSize: 10}}> Horizons School of Technology </Text></TouchableOpacity>
            </View>

            <TouchableOpacity><Text style={{color:'#999A9C', fontSize: 10}}> SOMA, San Francisco, CA </Text></TouchableOpacity>
              <Image
                  style={styles.eventimg}
                  source = {require('./horizons.jpg')} />
                <TouchableOpacity style = {styles.button}>
                  <Text style={{color:'#507DDC', fontSize: 10}}> See more </Text>
                  </TouchableOpacity>
                  <Text></Text>
                  <Text></Text>
          </View>


          <View>
            <View style={styles.feed}>
              <Text style={{fontSize: 10}}> Volunteered 15 hours at </Text>
              <TouchableOpacity><Text style={{color:'#507DDC', fontSize: 10}}> Horizons School of Technology </Text></TouchableOpacity>
            </View>

            <TouchableOpacity><Text style={{color:'#999A9C', fontSize: 10}}> SOMA, San Francisco, CA </Text></TouchableOpacity>
              <Image
                  style={styles.eventimg}
                  source = {require('./horizons.jpg')} />
                <TouchableOpacity style = {styles.button}>
                  <Text style={{color:'#507DDC', fontSize: 10}}> See more </Text>
                  </TouchableOpacity>
                  <Text></Text>
                  <Text></Text>
          </View>



        </View>

    </ScrollView>

  );
  }
}


const styles = StyleSheet.create({
  //header formatting:
header: {
  backgroundColor: '#f4fffe',
  marginBottom: 10,
},
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
  marginBottom: 5,
  zIndex: 1,
},
desc: {
  top: 8,
  flex: 1,
  fontSize: 10,
  color: '#A5A5A5',
  flexDirection: 'row',
  justifyContent: 'space-around',
},
profile: {
marginTop: 1,
left: 8,
top: 5,
// backgroundColor: '#fff',
fontSize: 30,
},
counter: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'flex-start',
bottom: 20,
},

//body formatting:
eventimg: {
  alignSelf: 'stretch',
  flex:1 ,
  width: 350,
  height: 250,
  top: 5,
},
feed: {
  flexDirection: 'row',
},

button: {
},

});
