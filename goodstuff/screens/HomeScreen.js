import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  ProgressViewIOS,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import { Font } from 'expo';

import { Button, Divider } from 'react-native-elements';

import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';

import { List, ListItem, ListView } from 'react-native-elements';

import ProgressBarClassic from 'react-native-progress-bar-classic';



export default class RewardsScreen extends React.Component {
  static navigationOptions = {
    title: 'Rewards',
  };

  state = {
      fontLoaded: false,
    };

  async componentDidMount() {
    await Font.loadAsync({
      'ubuntumono-regular': require('../assets/fonts/UbuntuMono-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  };

  render() {
    return (
      <ScrollView>
      <List>
      <TouchableOpacity>

      <ListItem
        Avatar
        title='   20% off select items'
        subtitle={
          <View>
          <View style={styles.bar}>
          <ProgressViewIOS
          progressTintColor='#ff686b'
          progress={0.3}
          width={200}/>
          </View>
          <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>Adidas</Text>
          <Text style={styles.ratingText}>Valid for 6 months</Text>
          </View>
          </View>
        }
        avatar={require('../storelogos/adidas.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => {
    this.popupDialog.show();
  }}>
      <ListItem
        Avatar
        title='   25% off select shoes'
        subtitle={
          <View>
          <View style={styles.bar}>
          <ProgressViewIOS
          progressTintColor='#84DCC6'
          progress={1}
          width={200}/>
          </View>
          <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>Allbirds</Text>
          <Text style={styles.ratingText}>Valid for 6 months</Text>
          </View>
          </View>
        }
        avatar={require('../storelogos/allbirds.jpg')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <ListItem
        Avatar
        title='   20% off select items'
        subtitle={
          <View>
          <View style={styles.bar}>
          <ProgressViewIOS
          progressTintColor='#ff686b'
          progress={0.3}
          width={200}/>
          </View>
          <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>Disney Store</Text>
          <Text style={styles.ratingText}>Valid for 6 months</Text>
          </View>
          </View>
        }
        avatar={require('../storelogos/disney.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <ListItem
        Avatar
        title='   20% off select items'
        subtitle={
          <View>
          <View style={styles.bar}>
          <ProgressViewIOS
          progressTintColor='#ff686b'
          progress={0.3}
          width={200}/>
          </View>
          <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>Disney Store</Text>
          <Text style={styles.ratingText}>Valid for 6 months</Text>
          </View>
          </View>
        }
        avatar={require('../storelogos/disney.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <ListItem
        Avatar
        title='   20% off select items'
        subtitle={
          <View>
          <View style={styles.bar}>
          <ProgressViewIOS
          progressTintColor='#ff686b'
          progress={0.3}
          width={200}/>
          </View>
          <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>Disney Store</Text>
          <Text style={styles.ratingText}>Valid for 6 months</Text>
          </View>
          </View>
        }
        avatar={require('../storelogos/disney.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <ListItem
        Avatar
        title='   20% off select items'
        subtitle={
          <View>
          <View style={styles.bar}>
          <ProgressViewIOS
          progressTintColor='#ff686b'
          progress={0.3}
          width={200}/>
          </View>
          <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>Disney Store</Text>
          <Text style={styles.ratingText}>Valid for 6 months</Text>
          </View>
          </View>
        }
        avatar={require('../storelogos/disney.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <ListItem
        Avatar
        title='   20% off select items'
        subtitle={
          <View>
          <View style={styles.bar}>
          <ProgressViewIOS
          progressTintColor='#ff686b'
          progress={0.3}
          width={200}/>
          </View>
          <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>Disney Store</Text>
          <Text style={styles.ratingText}>Valid for 6 months</Text>
          </View>
          </View>
        }
        avatar={require('../storelogos/disney.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <ListItem
        Avatar
        title='   20% off select items'
        subtitle={
          <View>
          <View style={styles.bar}>
          <ProgressViewIOS
          progressTintColor='#ff686b'
          progress={0.3}
          width={200}/>
          </View>
          <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>Disney Store</Text>
          <Text style={styles.ratingText}>Valid for 6 months</Text>
          </View>
          </View>
        }
        avatar={require('../storelogos/disney.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <ListItem
        Avatar
        title='   20% off select items'
        subtitle={
          <View>
          <View style={styles.bar}>
          <ProgressViewIOS
          progressTintColor='#ff686b'
          progress={0.3}
          width={200}/>
          </View>
          <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>Disney Store</Text>
          <Text style={styles.ratingText}>Valid for 6 months</Text>
          </View>
          </View>
        }
        avatar={require('../storelogos/disney.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <ListItem
        Avatar
        title='   20% off select items'
        subtitle={
          <View>
          <View style={styles.bar}>
          <ProgressViewIOS
          progressTintColor='#ff686b'
          progress={0.3}
          width={200}/>
          </View>
          <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>Disney Store</Text>
          <Text style={styles.ratingText}>Valid for 6 months</Text>
          </View>
          </View>
        }
        avatar={require('../storelogos/disney.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <ListItem
        Avatar
        title='   20% off select items'
        subtitle={
          <View>
          <View style={styles.bar}>
          <ProgressViewIOS
          progressTintColor='#ff686b'
          progress={0.3}
          width={200}/>
          </View>
          <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>Disney Store</Text>
          <Text style={styles.ratingText}>Valid for 6 months</Text>
          </View>
          </View>
        }
        avatar={require('../storelogos/disney.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <ListItem
        Avatar
        title='   20% off select items'
        subtitle={
          <View>
          <View style={styles.bar}>
          <ProgressViewIOS
          progressTintColor='#ff686b'
          progress={0.3}
          width={200}/>
          </View>
          <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>Disney Store</Text>
          <Text style={styles.ratingText}>Valid for 6 months</Text>
          </View>
          </View>
        }
        avatar={require('../storelogos/disney.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <ListItem
        Avatar
        title='   20% off select items'
        subtitle={
          <View>
          <View style={styles.bar}>
          <ProgressViewIOS
          progressTintColor='#ff686b'
          progress={0.3}
          width={200}/>
          </View>
          <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>Disney Store</Text>
          <Text style={styles.ratingText}>Valid for 6 months</Text>
          </View>
          </View>
        }
        avatar={require('../storelogos/disney.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <ListItem
        Avatar
        title='   20% off select items'
        subtitle={
          <View>
          <View style={styles.bar}>
          <ProgressViewIOS
          progressTintColor='#ff686b'
          progress={0.3}
          width={200}/>
          </View>
          <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>Disney Store</Text>
          <Text style={styles.ratingText}>Valid for 6 months</Text>
          </View>
          </View>
        }
        avatar={require('../storelogos/disney.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <ListItem
        Avatar
        title='   20% off select items'
        subtitle={
          <View>
          <View style={styles.bar}>
          <ProgressViewIOS
          progressTintColor='#ff686b'
          progress={0.3}
          width={200}/>
          </View>
          <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>Disney Store</Text>
          <Text style={styles.ratingText}>Valid for 6 months</Text>
          </View>
          </View>
        }
        avatar={require('../storelogos/disney.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <ListItem
        Avatar
        title='   20% off select items'
        subtitle={
          <View>
          <View style={styles.bar}>
          <ProgressViewIOS
          progressTintColor='#ff686b'
          progress={0.3}
          width={200}/>
          </View>
          <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>Disney Store</Text>
          <Text style={styles.ratingText}>Valid for 6 months</Text>
          </View>
          </View>
        }
        avatar={require('../storelogos/disney.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <ListItem
        Avatar
        title='   20% off select items'
        subtitle={
          <View>
          <View style={styles.bar}>
          <ProgressViewIOS
          progressTintColor='#ff686b'
          progress={0.3}
          width={200}/>
          </View>
          <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>Disney Store</Text>
          <Text style={styles.ratingText}>Valid for 6 months</Text>
          </View>
          </View>
        }
        avatar={require('../storelogos/disney.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <ListItem
        Avatar
        title='   20% off select items'
        subtitle={
          <View>
          <View style={styles.bar}>
          <ProgressViewIOS
          progressTintColor='#ff686b'
          progress={0.3}
          width={200}/>
          </View>
          <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>Disney Store</Text>
          <Text style={styles.ratingText}>Valid for 6 months</Text>
          </View>
          </View>
        }
        avatar={require('../storelogos/disney.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <ListItem
        Avatar
        title='   20% off select items'
        subtitle={
          <View>
          <View style={styles.bar}>
          <ProgressViewIOS
          progressTintColor='#ff686b'
          progress={0.3}
          width={200}/>
          </View>
          <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>Disney Store</Text>
          <Text style={styles.ratingText}>Valid for 6 months</Text>
          </View>
          </View>
        }
        avatar={require('../storelogos/disney.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <ListItem
        Avatar
        title='   20% off select items'
        subtitle={
          <View>
          <View style={styles.bar}>
          <ProgressViewIOS
          progressTintColor='#ff686b'
          progress={0.3}
          width={200}/>
          </View>
          <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>Disney Store</Text>
          <Text style={styles.ratingText}>Valid for 6 months</Text>
          </View>
          </View>
        }
        avatar={require('../storelogos/disney.png')}
      />
      </TouchableOpacity>

   </List>
   <PopupDialog
   width={250}
   height={150}
dialogTitle={<DialogTitle title="Reward Redeemed" />}
ref={(popupDialog) => { this.popupDialog = popupDialog; }}
>
<View style={styles.poptextcon}>
<Text style={styles.poptext}>
{`Yay!
  You just got 25% off a brand you like for being a good person.
  How cool is that?
 `}
</Text>

</View>
</PopupDialog>

      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  bar: {
    paddingLeft: 20,
    paddingTop: 5,
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    fontSize: 10,
    color: 'grey'
  },
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
