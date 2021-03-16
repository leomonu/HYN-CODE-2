import React from 'react';
import firebase from 'firebase';
import {View,Text,TouchableOpacity,TextInput,FlatList,StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements'
import MyHeader from '../components/MyHeader';
import db from '../config';

export default class VolenteerScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            requests:[]
        }
        this.requestedRef = null
    }
    getRequestedHelpList =()=>{
        this.requestRef = db.collection("requests")
        .onSnapshot((snapshot)=>{
          var requests = snapshot.docs.map(document => document.data());
          this.setState({
            requests : requests
          });
        })
      }

      componentDidMount(){
        this.getRequestedHelpList()
      }
    
      componentWillUnmount(){
        this.requestRef();
      }
    
      keyExtractor = (item, index) => index.toString()

      renderItem = ( {item, i} ) =>{
        return (
          <ListItem key = {i} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>
                {item.city}
            </ListItem.Title>
            <ListItem.Subtitle>
                {item.date}
            </ListItem.Subtitle>
            <Text style = {{fontSize : 15, color : 'grey'}}>{item.helpRequired}</Text>
        </ListItem.Content>
      </ListItem>
        )
      }
    
    render(){
        return(
            <View>
                <MyHeader
                    title = {'Volunteer'}
                />
                <View style={{flex:1}}>
          {
            this.state.requests.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>List Of All Requests</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.requests}
                renderItem={this.renderItem}
              />
            )
          }
        </View>

            </View>
        )

        
          
    }
}
const styles = StyleSheet.create({
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    }
  })