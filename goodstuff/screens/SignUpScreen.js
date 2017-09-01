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
} from 'react-native-elements';

import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';

import SquareGrid from "react-native-square-grid";

import {
  StackNavigator,
} from 'react-navigation';

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
  };

  state = {
      fontLoaded: false,
    };

  async componentDidMount() {
    await Font.loadAsync({
      'ubuntumono-regular': require('../assets/fonts/UbuntuMono-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }



  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.background}>
        <View style={styles.logocon}>
        <Image style={styles.watermelon}
          source={require('../goodstuff_transparent.png')}
        />
        </View>
        <View style={styles.formbox}>
          <View style={styles.forminner}>
            <FormLabel>Username</FormLabel>
            <FormInput/>
            <FormLabel>Email</FormLabel>
            <FormInput/>
            <FormLabel>Password</FormLabel>
            <FormInput
              secureTextEntry={true}/>

          </View>
        </View>
        <View style={styles.buttoncon}>
          <Button
            title='do good. get stuff.'
            backgroundColor='#FF686B'
            buttonStyle={{
              height: 40,
              width: 150,
              alignSelf: 'center',
              overflow: 'hidden',
              borderRadius: 10,
            }}
            onPress={() =>
          navigate('ChooseCause')
        }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
