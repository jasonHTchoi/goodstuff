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

import { Button, Divider } from 'react-native-elements';

import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';



export default class SingleEventScreen extends React.Component {
  static navigationOptions = {
    title: 'Event',
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
    return (
      <View style={styles.container}>
        <View style={styles.imgcon}>
        <Image style={styles.img}
        source={require('../pug.jpg')}
      />
        </View>
        <View style={styles.titlecon}>
        <View>
        {
          this.state.fontLoaded ? (
            <Text style={styles.text}>
            DOG-WALKING AT SPCA
            </Text>
            ) : null
          }
        </View>
        <View style={styles.datecon}>
        {
          this.state.fontLoaded ? (
            <Text style={styles.datetext}>
            Saturday September 2 03:00 PM
            </Text>
            ) : null
          }
        </View>
        <View style={styles.buttoncon}>
        <Button
        raised
        icon={{name: 'favorite'}}
        title='SIGN UP'
        backgroundColor='#84DCC6'
        buttonStyle={{
          height: 30,
          width: 120,
          alignSelf: 'center',
        }}
        onPress={() => {
      this.popupDialog.show();
    }}
        />

        </View>
        </View>
        <View style={styles.divider}>
        {
          this.state.fontLoaded ? (
            <Text style={styles.details}>
            INFORMATION
            </Text>
            ) : null
          }
        </View>

        <View style={styles.imgcon3}>
        {
          this.state.fontLoaded ? (
        <Text style={styles.description}>
        {`Help our shelter dogs get their much-needed love and exercise!

          They need you.
          We need you.
          You can make a difference.

As the largest animal welfare organization on the West Coast, the San Francisco SPCA relies on the assistance of caring, hardworking volunteers in all our programs.

You can help us reach our goal to end animal abandonment in San Francisco by 2020.`}
        </Text>
      ) : null
    }
        </View>
        <PopupDialog
        width={250}
        height={200}
    dialogTitle={<DialogTitle title="Signed Up" />}
    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
  >
    <View style={styles.poptextcon}>
    <Text style={styles.poptext}>
    {`
      Thank you for signing up!

      A confirmation email has been sent to you and the event organizers.

      Keep doing good you care about and getting stuff you like!`}
    </Text>

    </View>
  </PopupDialog>

      </View>


    );
  }
}

const styles = StyleSheet.create({
  poptext: {
    fontSize: 10,
    color: '#4F4F4F',
    marginTop: 20,
    textAlign: 'center',
  },
  poptextcon: {
    justifyContent: 'center',
  },
  container: {
    flex: 1,
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
    marginTop: 15,

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
