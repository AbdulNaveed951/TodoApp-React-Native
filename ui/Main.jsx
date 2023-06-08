
import React, {useEffect} from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from './Screen/Home'
import Login from './Screen/Login'
import Footer from './Components/Footer';
import Profile from './Screen/Profile'
import Register from './Screen/Register'
import Camera from './Screen/Cameracomp.jsx'
import ForgetPassword from './Screen/ForgetPassword'
import ResetPassword from './Screen/ResetPassword'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './redux/action';
import ChangePassword from './Screen/ChangePassword';
import Loader from './components/Loader'
import Verify from './Screen/Verify'



const Stack = createNativeStackNavigator()
const Main = () => {
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(loadUser())

}, [dispatch])
 const { isAuthenticated, loading } = useSelector((state) => state.auth)
  return (
   

      loading ? <Loader /> :
  <NavigationContainer>
    <Stack.Navigator initialRouteName={isAuthenticated ? "home" : "login"}> 
       {/* <Stack.Navigator initialRouteName="login" > */}
       <Stack.Screen name='home' component={Home}  options={{headerShown:false}} />
       <Stack.Screen name='login' component={Login} options={{headerShown:false}}  />
       <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
       <Stack.Screen name='camera' component={Camera} options={{ headerShown: false }} />
       <Stack.Screen name='profile' component={Profile} />
       <Stack.Screen name='forgetpassword' component={ForgetPassword} options={{ headerShown: false }} />
       <Stack.Screen name='resetpassword' component={ResetPassword} options={{ headerShown: false }} />
       <Stack.Screen name='changepassword' component={ChangePassword} options={{ headerShown: false }} />
       <Stack.Screen name='verify' component={Verify} options={{ headerShown: false }} />
       </Stack.Navigator>
       <Footer />
  {isAuthenticated && <Footer />}
  </NavigationContainer>
  )
}

export default Main