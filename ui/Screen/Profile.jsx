import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import {  Button } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, logout, updateProfile } from '../redux/action'
import mime from "mime"
import Loader from '../components/Loader'

const Profile = () => {
  const { user, loading } = useSelector(state => state.auth);
  const [name, setName] = useState(user.name);



  const dispatch = useDispatch()

  const submitHandler = async () => {
      const myForm = new FormData();
      myForm.append("name", name);
      await dispatch(updateProfile(myForm));
      dispatch(loadUser())
  }

  const logoutHandler = () => {
    dispatch(logout())
}
  return (
    loading ? <Loader /> : (
      <View
          style={{
              flex: 1,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
          }}
      >
          

          <View style={{ width: "70%" }}>
              <TextInput
                  style={Styles.input}
                  placeholder="Name"
                  value={name}
                  onChangeText={setName}
              />

          </View>

          <Button
              style={Styles.btn}
              onPress={submitHandler}
          >
              <Text style={{ color: "#fff" }}>Update</Text>
          </Button>

          <Button
              color='rgb(50,50,50)'
              onPress={() => navigation.navigate("changepassword")}
          >
              Change Password
          </Button>

          <Button
              color='rgb(50,50,50)'
              onPress={logoutHandler}
          >
              Logout
          </Button>

          {
              user.verified ? null : <Button
                  onPress={() => navigation.navigate("verify")}
              >
                  Verify
              </Button>
          }


      </View>
  )

            
  )
}

export default Profile

const Styles = StyleSheet.create({
  input: {
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "#b5b5b5",
      padding: 10,
      paddingLeft: 15,
      borderRadius: 5,
      marginVertical: 15,
      fontSize: 15,
  },
  btn: {
      backgroundColor: "#900",
      padding: 5,
      width: "70%",
  },
});