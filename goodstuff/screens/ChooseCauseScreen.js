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

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import { Font } from 'expo';

import {
  Button,
  Divider,
  FormLabel,
  FormInput,
  Grid,
  Row,
  Col
} from 'react-native-elements';

import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';

export default class ChooseCauseScreen extends React.Component {
  static navigationOptions = {
    title: 'Choose Cause',
  };

  state = {
      fontLoaded: false,
    };

  async componentDidMount() {
    await Font.loadAsync({
      'ubuntumono-bold': require('../assets/fonts/UbuntuMono-Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.background}>
        <View>
        {
          this.state.fontLoaded
            ? (
                <Text style={styles.choose}>
                  CHOOSE YOUR BRANDS
                </Text>
              )
            : null
        }
        </View>
        <ScrollView style={styles.outer}>
          <Grid>
          <Col containerStyle={styles.col3}>
          <Row containerStyle={styles.row3}>
            <TouchableOpacity>
              <Image style={styles.logo}
                source={require('../storelogos/adidas.png')}
              />
            </TouchableOpacity>
          </Row>
          <Row containerStyle={styles.row3}><Image style={styles.logo}
            source={require('../storelogos/allbirds.jpg')}
          /></Row>
          <Row containerStyle={styles.row3}><Image style={styles.logo}
            source={require('../storelogos/DisneyStore.png')}
          /></Row>
          <Row containerStyle={styles.row3}><Image style={styles.logo}
            source={require('../storelogos/HITFIT.png')}
          /></Row>
          </Col>
          <Col containerStyle={styles.col3}>
          <Row containerStyle={styles.row3}><Image style={styles.logo}
            source={require('../storelogos/HM.jpg')}
          /></Row>
          <Row containerStyle={styles.row3}><Image style={styles.logo}
            source={require('../storelogos/starbucks.jpg')}
          /></Row>
          <Row containerStyle={styles.row3}><Image style={styles.logo}
            source={require('../storelogos/toysrus.jpg')}
          /></Row>
          <Row containerStyle={styles.row3}><Image style={styles.logo}
            source={require('../storelogos/UNIQLO.png')}
          /></Row>
          </Col>
          <Col containerStyle={styles.col3}>
          <Row containerStyle={styles.row3}><Image style={styles.logo}
            source={require('../storelogos/f21.jpg')}
          /></Row>
          <Row containerStyle={styles.row3}><Image style={styles.logo}
            source={require('../storelogos/bbb.png')}
          /></Row>
          <Row containerStyle={styles.row3}><Image style={styles.logo}
            source={require('../storelogos/ck.png')}
          /></Row>
          <Row containerStyle={styles.row3}><Image style={styles.logo}
            source={require('../storelogos/nike.jpg')}
          /></Row>
          </Col>

          </Grid>
        </ScrollView>
        <Button
          title='next'
          backgroundColor='#FF686B'
          buttonStyle={{
            height: 40,
            width: 100,
            alignSelf: 'center',
            overflow: 'hidden',
            borderRadius: 10,
            marginBottom: 20,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  choose: {
    fontFamily: 'ubuntumono-bold',
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 30,
  },
  logo:{
    width: 80,
    height: 80,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 5,
  },
  outer:{
    backgroundColor: '#A5FFD6',
    margin: 30,
    marginTop: 30,
    marginBottom: 30,
  },
  column: {
    backgroundColor: 'white',
  },
  col2: {
    backgroundColor: 'red',
  },
  col3: {
    backgroundColor: '#A5FFD6',
  },
    background: {
    backgroundColor: '#A5FFD6',
    flex: 1,
    display: 'flex',
  },
  logocon: {
    alignSelf: 'center',
  },
  watermelon: {
    height: 120,
    width: 120,
  },
  formbox: {
    backgroundColor: 'white',
    flex: 1,
    margin: 30,
    marginBottom: 10,
    marginTop: 10,
    display: 'flex',
  },
  forminner: {
    backgroundColor: 'white',
    flex: 1,
    marginBottom: 20,
    display: 'flex',
  },
  poptext: {
    fontSize: 10,
    color: '#4F4F4F',
    marginTop: 10,
    textAlign: 'center',
  },
  poptextcon: {
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'red',
  },
  imgcon: {
    backgroundColor: 'skyblue',
    flex: 0.4,
  },
  titlecon: {
    backgroundColor: 'white',
    flex: 0.3,
  },
  text: {
    fontSize: 15,
    fontFamily: 'ubuntumono-regular',
    color: '#4F4F4F',
    textAlign: 'center',
    marginTop: 15,
  },
  datetext: {
    fontSize: 8,
    fontFamily: 'ubuntumono-regular',
    color: '#4F4F4F',
    textAlign: 'center',

  },
  datecon: {
    marginTop: 8,

  },
  buttoncon: {
    marginBottom: 40,
    marginTop: 10,

  },
  divider: {
    backgroundColor: '#f6f6f6',
    height: 15,

  },
  details: {
    fontFamily: 'ubuntumono-regular',
    fontSize: 8,
    color: '#808080',
    marginTop: 6,
    marginLeft: 6,

  },
  description: {
    fontFamily: 'ubuntumono-regular',
    fontSize: 10,
    color: '#808080',
    marginTop: 6,
    marginLeft: 6,
  },
  imgcon3: {
    backgroundColor: 'white',
    flex: 0.3,
  },
  img: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
