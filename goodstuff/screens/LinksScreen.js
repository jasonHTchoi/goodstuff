//Discover Screen
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
    title: 'Discover',
  };


  render() {
    return (
    <ScrollView>


      <View>

        <View>
          <View style={styles.volun}>
            <View>
              <Image
                source = {require('./user.png')}
                style={styles.user} />
            </View>

            <View>
              <View style={styles.feed}>
                <Text style={{fontSize: 10}}> Darwish needs 15 hrs of help at</Text>
                <Text></Text>
                <TouchableOpacity><Text style={{color:'#507DDC', fontSize: 10}}> SPCA SF </Text></TouchableOpacity>
            </View>
              <TouchableOpacity><Text style={{color:'#999A9C', fontSize: 10}}> SOMA, San Francisco, CA </Text></TouchableOpacity>
            </View>
          </View>

          <View>
            <Image
                style={styles.eventimg}
                source = {require('./SPCA.jpg')} />
              <TouchableOpacity style = {styles.button}>
                <Text style={{color:'#507DDC', fontSize: 10}}> Will, Daniel and 10 others are volunteering </Text>
                </TouchableOpacity>
                <Text></Text>
                <Text></Text>
          </View>
        </View>

        <View>
          <View style={styles.volun}>
            <View>
              <Image
                source = {require('./user.png')}
                style={styles.user} />
            </View>

            <View>
              <View style={styles.feed}>
                <Text style={{fontSize: 10}}> Darwish needs 15 hrs of help at</Text>
                <Text></Text>
                <TouchableOpacity><Text style={{color:'#507DDC', fontSize: 10}}> SPCA SF </Text></TouchableOpacity>
            </View>
              <TouchableOpacity><Text style={{color:'#999A9C', fontSize: 10}}> SOMA, San Francisco, CA </Text></TouchableOpacity>
            </View>
          </View>

          <View>
            <Image
                style={styles.eventimg}
                source = {require('./SPCA.jpg')} />
              <TouchableOpacity style = {styles.button}>
                <Text style={{color:'#507DDC', fontSize: 10}}> Will, Daniel and 10 others are volunteering </Text>
                </TouchableOpacity>
                <Text></Text>
                <Text></Text>
          </View>
        </View>


        <View>
          <View style={styles.volun}>
            <View>
              <Image
                source = {require('./user.png')}
                style={styles.user} />
            </View>

            <View>
              <View style={styles.feed}>
                <Text style={{fontSize: 10}}> Darwish needs 15 hrs of help at</Text>
                <Text></Text>
                <TouchableOpacity><Text style={{color:'#507DDC', fontSize: 10}}> SPCA SF </Text></TouchableOpacity>
            </View>
              <TouchableOpacity><Text style={{color:'#999A9C', fontSize: 10}}> SOMA, San Francisco, CA </Text></TouchableOpacity>
            </View>
          </View>

          <View>
            <Image
                style={styles.eventimg}
                source = {require('./SPCA.jpg')} />
              <TouchableOpacity style = {styles.button}>
                <Text style={{color:'#507DDC', fontSize: 10}}> Will, Daniel and 10 others are volunteering </Text>
                </TouchableOpacity>
                <Text></Text>
                <Text></Text>
          </View>
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
user: {
  borderRadius: 15,
  height:30,
  width:30,

},
volun: {
  flexDirection: 'row',
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
