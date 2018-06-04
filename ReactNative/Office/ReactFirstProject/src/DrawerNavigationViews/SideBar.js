/*
import React from 'react';
import {
  AppRegistry,
  Image,
  StatusBar,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Linking,
  Dimensions,
  Platform
} from 'react-native';
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
  Button
} from 'native-base';
import Colors from '../../styles/android_styles/Colors';
import {Avatar} from 'react-native-elements';
import Constants from '../Util/Constants';
import AsyncStorageComponent from '../Util/AsyncStorageComponent';
import ProgressBar from '../customui/ProgressBar';
import HttpRequestCalls from '../services/HttpRequestCalls';
import globalConstants from '../../utils/Constants';
import { NavigationActions } from 'react-navigation';
import ServiceData from '../data/ServiceData';
import ColorSingleton from '../screenresolution/ColorSingleton';

const color = ColorSingleton.getInstance();
const { width, height } = Dimensions.get('window');

const loggedRoutes = [
  {
    routeName: 'Home',
    route: 'DrawerNavigation',

  }, {
    routeName: 'My Orders',
    route: 'MyOrdersList',

  }, {
    routeName: 'Delivery Address',
    route: 'DeliveryAddressList',

  },
  {
    routeName: 'FruitsGoGo Cash',
    route: 'FruitsGoGoCash',

  },
  {
    routeName: 'Feedback',
    route: 'Feedback',

  },
  {
    routeName: 'Logout',
    route: 'Login',
  }
];

const offersRoutes = [
  {
    routeName: 'Home',
    route: 'DrawerNavigation',

  }, {
    routeName: 'My Orders',
    route: 'MyOrdersList',

  }, {
    routeName: 'Delivery Address',
    route: 'DeliveryAddressList',

  },
  {
    routeName: 'FruitsGoGo Cash',
    route: 'FruitsGoGoCash',

  },
  {
    routeName: 'Offers',
    route: 'Offers',

  },
  {
    routeName: 'Feedback',
    route: 'Feedback',

  },
  {
    routeName: 'Logout',
    route: 'Login',
  }
];

const loggedOutRoutes = [
  {
    routeName: 'Home',
    route: 'DrawerNavigation',

  }, {
    routeName: 'My Orders',
    route: 'MyOrdersList',

  }, {
    routeName: 'Delivery Address',
    route: 'DeliveryAddressList',

  },
  {
    routeName: 'Offers',
    route: 'Offers',

  },
  {
    routeName: 'Feedback',
    route: 'Feedback',

  }
];

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Login' })
  ]
});

export default class SideBar extends React.Component {
  httpRequest = new HttpRequestCalls();
  storage = new AsyncStorageComponent();
  constants = new Constants();

  constructor(props) {
    super(props);
    var milliseconds = 0;
    this.state = {
      fullName: '',
      phonenumber: '',
      location: '',
      localStorageData: 'NotSaved',
      loading: false,
      userId: 0,
      imagePath: '',
      updateScreen: false,
      isSkipped: '',
      isUserLoggedIn: false,
      feedbackURL: '',
      redirectURL: '',
      privacyPolicyURL: '',
      promotionAlertOffers: '0'
    };
  }

  async componentWillMount() {
    //console.log('willMount');
    this.getGlobalDetails();
    const isLogIn = this.checkForLogin();
    //this.setState({ isUserLoggedIn: isLogIn });

  await this
      .storage
      .getArrayValue(this.storage.logindetails, function (storedObj) {

        if (storedObj !== null) {
          this.setState({ userId: storedObj[0].user_id });
          this.setState({ phonenumber: storedObj[0].phone_number });
                    this.getUserDetails();
        }
      }.bind(this));

      const promotion = await this.storage.getValue(this.storage.promotionAlertOffers);
   
    this.setState({ promotionAlertOffers : promotion }) 
  }

 async getGlobalDetails() {
   const response = await this
     .httpRequest
     .requestPost('', this.constants.globalDetailsRequestCode, this.constants.globalDetailsURL);

   if (response !== '') {
  //  console.log('globalres', response.redirection_url);
     this.setState({ feedbackURL: response.feedback_email });
     this.setState({ redirectURL: response.redirection_url });
     this.setState({ privacyPolicyURL: response.policy_url });
   }
}

 openGmail() {
 const url = this.state.feedbackURL;
 const commonHtml = `mailto:${url}`;
 Linking.openURL(commonHtml);
//console.log('commonHtml', commonHtml);
}

  async getUserDetails() {
    this.startLoading();
    const data = {
      userId: this.state.userId
    };
    const response = await this
      .httpRequest
      .requestPost(data, this.constants.userDetailsRequestCode, this.constants.loginUserDetailsURL);
    this.stopLoading();
    ////console.log('userDetails-Response--', response);
    if (response.success) {
      this.setState({
        fullName: response.data[0].first_name + ' ' + response.data[0].second_name
      });

   // const updatedDeliveryAddress = await this.storage.getValue(this.storage.deliveryAddress);
    const city = await this.storage.getValue(this.storage.city);
  //  console.log('sideBar city>>>', city);
    this.setState({ location: city.replace(/['"]+/g, '') });
      this.setState({ imagePath: response.data[0].user_img });
    } else {
      this.stopLoading();
      setTimeout(() => {
        Alert.alert('', response.message);
      }, 500);
    }
  }

  startLoading() {
    this.setState({ loading: true });
  }

  stopLoading() {
    this.setState({ loading: false });
    //console.log('StopLoading');
  }

  editBtnClicked() {
    if (this.state.userId === 0) {
      this.showAlert();
    } else {
      if ( ((new Date).getTime()) - this.milliseconds < 1000) {
         return;
    }

     this.milliseconds = ((new Date).getTime());
     this.props.navigation.navigate('EditProfile', { updateScreen: true });
   }
  }

  async SkipLogin() {
    await this.storage.setValue(this.storage.skipToHome, '');
    await this.storage.setObjectValue(this.storage.logindetails, null);
    await this.storage.setObjectValue(this.storage.loginSucess, '');
    await this.storage.setObjectValue(this.storage.addToCartList, '');
    await this.storage.setObjectValue(this.storage.city, '');
    await this.storage.setObjectValue(this.storage.deliveryAddress, '');
    this.props.navigation.dispatch(resetAction);
  }

  async checkLogin(data) {
    if ( ((new Date).getTime()) - this.milliseconds < 1000) {
       return;
    }

   this.milliseconds = ((new Date).getTime());
    let isLoggedIn = false;
    if (this.state.userId === 0) {
    if (data.routeName === 'Home') {
       isLoggedIn = true;
    } else if (data.routeName === 'Feedback') {
       isLoggedIn = false;
} else {
       isLoggedIn = false;
     }
    } else {
     isLoggedIn = true;
   }
   if (isLoggedIn) {
     if (data.routeName === 'Logout') {
       Alert.alert(
         '',
         'Are you sure you want to Logout?',
         [
            { text: 'Yes', onPress: () => this.SkipLogin() },
            { text: 'No', onDismiss: () => {} }
         ],
         { cancelable: false }
       )
     } else if (data.routeName === 'Feedback') {
       this.openGmail();
     } else {

       this.props.navigation.navigate(data.route, { updateScreen: true, isFrom: 'SideBar' })
     }
   } else {
     this.showAlert();
    }
 }
 showAlert() {
   this.storage.setValue(this.storage.loginSucess, 'login_fail');
   this.storage.setValue(this.storage.skipToHome, 'isSkipped');


   Alert.alert(
     '',
     'Please Login to continue',
     [
       { text: 'Yes', onPress: () => this.props.navigation.navigate('Login') },
{ text: 'No', onDismiss: () => {} }
     ],
     { cancelable: false }
   );
}

async checkForLogin(): boolean {
  await this.storage.getValue(this.storage.skipToHome).then((value) => { this.setState({ isSkipped: value }); });

  if (this.state.userId === 0) {
        this.setState({ isUserLoggedIn: false });
   } else {
      this.setState({ isUserLoggedIn: true });
  }
}

renderListValues() {
  console.log("promotion",this.state.promotionAlertOffers);

  if (this.state.userId > 0) {
  return (
    <List
      style={{ flex: 1 }}
      dataArray={this.state.promotionAlertOffers === "1" ? offersRoutes: loggedRoutes}
      renderRow={data => (
      <ListItem button onPress={() => this.checkLogin(data)}>
          <Text style={{ fontFamily: color.inputFontFamily }}>{data.routeName}</Text>
      </ListItem>
    )}
    />
   );
 }

   return (
     <List
       style={{ flex: 1 }}
       dataArray={loggedOutRoutes}
       renderRow={data => (
       <ListItem button onPress={() => this.checkLogin(data)}>
           <Text style={{ fontFamily: color.inputFontFamily }}>{data.routeName}</Text>
       </ListItem>
     )} />
    );
  }


  render() {
    //console.log('render continue');
    return (
      <Container>
        <ProgressBar isLoading={this.state.loading}/>
        <View style={styles.topViewContainer}>
        {
          this.state.imagePath !== ''?
          <Avatar
            large
            rounded
            containerStyle={styles.avatarContainer}
            source={{ uri: this.state.imagePath }}
            onPress={() => this.editBtnClicked()}/>
            :
            <Avatar
            large
            rounded
            containerStyle={styles.avatarContainer}
            source={require('../../images/ProfilePlaceHolder.png')}
            onPress={() => this.editBtnClicked()}
           />
        }

          <Text numberOfLines={1} style={styles.textProfileName}>{this.state.fullName}</Text>
          <Text numberOfLines={1} style={styles.textPhoneName}>{this.state.phonenumber}</Text>
          {
            this.state.location !== ''?

          <View style={styles.locationImageContainer}>
            <Image
              style={styles.image}
              source={require('../../images/location_marker.png')}/>
            <Text numberOfLines={1} style={styles.textPhoneName}>
              {this.state.location}</Text>
          </View>
          :null
        }
        </View>
        <Content>
          {this.renderListValues()}
        </Content>
        <View style={styles.footer}>
        <View style={styles.footercontent}>
        <Text numberOfLines={1} style={styles.poweredbystyle}>Version: 1.5</Text>
        <Text numberOfLines={1} style={styles.Powered_textfooter}>Powered By :</Text>
        <Text numberOfLines={1} style={styles.textfooter} onPress={() => { Linking.openURL(this.state.redirectURL); }}>DevRabbit IT Solutions Inc</Text>
        <Text numberOfLines={1} style={styles.linkfooter} onPress={() => { Linking.openURL(this.state.privacyPolicyURL); }} >Privacy Policy</Text>
        </View>
      </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  topViewContainer: {
    flexDirection: 'column',
    height: 220,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: Colors.green,
    alignItems: 'center',
    padding: 10
  },
  avatarContainer: {
    marginTop: 30,
    marginBottom: 5,
    justifyContent: 'center'
  },
Powered_textfooter: {
  fontSize: 14,
  color: Colors.green,
  paddingBottom: 3,
  alignSelf: 'center',
  marginTop: 5,
  fontFamily: color.titleFontFamily
},
  textProfileName: {
    fontSize: 16,
    color: Colors.white,
    marginLeft: 10,
    marginRight: 10,
    marginTop:5,
    fontFamily: color.titleFontFamily
  },
  textPhoneName: {
    fontSize: 16,
    color: Colors.white,
    marginLeft: 10,
    marginRight: 10,
    marginTop:5,
    fontFamily: color.inputFontFamily
  },
  textfooter: {
     fontSize: 15,
     color: Colors.green,
     paddingBottom: 5,
     alignSelf: 'center',
     textDecorationLine: 'underline',
     fontFamily: color.inputFontFamily
   },
   linkfooter: {
     fontSize: 15,
     color: Colors.green,
     alignSelf: 'center',
     textDecorationLine: 'underline',
     fontFamily: color.inputFontFamily
   },
   poweredbystyle: {
    backgroundColor: Colors.gray,
    fontSize: 15,
    color: Colors.white,
    paddingBottom: 3,
    paddingTop: 3,
    paddingRight: 3,
    paddingLeft: 15,
   alignItems: 'flex-start',
   fontFamily: color.inputFontFamily
   },
   poweredbyviewstyle: {
 backgroundColor: Colors.gray,
   flexDirection: 'column',
   flex: 1,
   marginBottom: 2,
   justifyContent: 'flex-end'
   },
 footercontent: {
 flexDirection: 'column',
 marginBottom: (Platform.OS === 'ios' && height === 812) ?20 : 3,
 justifyContent: 'flex-end',
 paddingTop: 10,
 paddingBottom: 10,
  backgroundColor: '#FFFFFF'
 },
 footer: {
 flexDirection: 'column',
 justifyContent: 'flex-end',

 },
  profileContainerView: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start'
  },
  profileEditView: {
    height: 40,
    width: 40,
    alignSelf: 'flex-end',
    backgroundColor: 'red'
  },
  image: {
    width: 20,
    height: 20,
    tintColor: Colors.white,
    marginTop: 5

  },
  locationImageContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center'
  }
});
*/