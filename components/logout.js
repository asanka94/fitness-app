// Main.js
import React from 'react'
import { StyleSheet, Platform, Image, Text, View , Button} from 'react-native'
import firebase from '../config/firebase'


export default class Main extends React.Component {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }

  handleLogout() {
    firebase.auth().signOut().then(function() {
      this.props.navigation.navigate('SignUp')
    }).catch(function(error) {
      // An error happened.
    });
  }

render() {
    const { currentUser } = this.state
    return (
        <View style={styles.container}>
            <Text>
            Hi {currentUser && currentUser.email}!
            </Text>
            <Button title="logout" onPress={this.handleLogout} />
        </View>
        )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})