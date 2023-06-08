// import { View, Text, SafeAreaView, Platform, StatusBar,StyleSheet, useAlert , TouchableOpacity, TextInput, ScrollView} from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { useNavigation } from '@react-navigation/native';
// import Task from '../Components/Task';
// import Icon from "react-native-vector-icons/Entypo"
// import { Dialog, Button } from "react-native-paper"
// import { useDispatch, useSelector } from 'react-redux';

// const Home = ({navigation}) => {

//   // const dispatch  = useDispatch()
//   // const {  user } = useSelector(state => state.user);
//   // const {  tasks, loading , success, error } = useSelector(state => state.tasks);
  
//   const [openDialog, setOpenDialog] = useState(false);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   // console.log(tasks)
//   const hideDialog = () =>
//   {
//     setOpenDialog(!openDialog)
//   }
  
//   const addTaskHandler = async () => {
//     // await dispatch(addTask(title, description));
//     // dispatch(loadUser());
// }
//   console.log(addTaskHandler)
// //   useEffect(() => {
// //     if (error) {
// //         alert(error);
// //         dispatch({ type: "clearError" });
// //         dispatch({ type: "clearError" });
// //     }
// //     if (message) {
// //       alert(message)
// //       dispatch({ type: "clearMessage" });
// //   }
   
// // }, [alert, error,  dispatch, message])
// // useEffect(() => {
// // //   if (error) {
// //     alert(error);
// //     dispatch(clearErrors());
// //   }

// //   if (success) {
// //     alert.success("Product Created Successfully");
// //     dispatch({ type: NEW_PRODUCT_RESET });
// //   }
// // }, [dispatch, alert, error, history, success]);

  
//   const Tasks=[
//       {title: "Task 1" , description: "Sample Task 1 ", completed: false , _id: "this is id no 1"},
//       {title: "Task 2" , description: "Sample Task 2 ", completed: false , _id: "this is id no 2"},
 
//     ];
//   return (
//   <>
//   <View  >
//     <ScrollView>
//       {/* <Text onPress={()=>navigation.navigate("login")}>Home</Text> */}
//     <SafeAreaView ><Text style={styles.heading} >All Task </Text>
   

//     {Tasks.map((item) => (
//                             <Task key={item._id} title={item.title} description={item.description} status={item.completed} taskId={item._id} />
//                         ))}

// <TouchableOpacity style={styles.addBtn} onPress={hideDialog}>
// <Icon name='add-to-list' size={20} color="#900" />

// </TouchableOpacity>
//     </SafeAreaView>
//     </ScrollView>
//     </View>
//     <Dialog visible={openDialog} onDismiss={hideDialog}>
//     <Dialog.Title>ADD A TASK</Dialog.Title>
//     <Dialog.Content>
//     <TextInput
//                         style={styles.input}
//                         placeholder="Title"
//                         value={title}
//                         onChangeText={setTitle}
                       
//                     />
//                       <TextInput
//                         style={styles.input}
//                         placeholder="Description"
//                         value={description}
//                         onChangeText={setDescription}
                       
//                     />
//                       <View style={{ flexDirection: "row", alignItems: "center" }}>
//                         <TouchableOpacity onPress={hideDialog} >
//                             <Text>CANCEL</Text>
//                         </TouchableOpacity>
//                         <Button onPress={addTaskHandler}
//                             color="#900"
//                            >
//                             ADD
//                         </Button>
//                     </View>
//     </Dialog.Content>
//     </Dialog>
//     </>
  
//   )
// }

// export default Home

// const styles = StyleSheet.create({
//     heading: {
//         fontSize: 28,
//         textAlign: "center",
//         marginTop: 55,
//         marginBottom: 20,
//         color: "#fff",
//         backgroundColor: "#474747",
//     },
//     addBtn: {
//         backgroundColor: "#fff",
//         width: 150,
//         height: 50,
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 100,
//         alignSelf: "center",
//         marginVertical: 20,
//         elevation: 5,
//     },
//     input: {
//         backgroundColor: "#fff",
//         borderWidth: 1,
//         borderColor: "#b5b5b5",
//         padding: 10,
//         paddingLeft: 15,
//         borderRadius: 5,
//         marginVertical: 15,
//         fontSize: 15,
//     }
// })






















import { View, Text, SafeAreaView, Platform, StatusBar, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Task from "../Components/Task"
import Icon from "react-native-vector-icons/Entypo"
import { Dialog, Button } from "react-native-paper"
import { useDispatch, useSelector } from 'react-redux'
import { addTask, loadUser } from '../redux/action'

const Home = ({ navigation }) => {

    const dispatch = useDispatch();

    const { user  } = useSelector(state => state.auth);
    const { loading, message, error } = useSelector(state => state.message)
      

    
    const [openDialog, setOpenDialog] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const hideDialog = () => {
        setOpenDialog(!openDialog)
    }

    // const addTaskHandler =  () => {
    //     dispatch(addTask({title : title, description : description}));
       
        
    // }


    const addTaskHandler = async () => {
        await dispatch(addTask(title, description));
        dispatch(loadUser());
    }
    console.log(addTaskHandler)

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch({ type: "clearError" });
            dispatch({ type: "clearError" });
        }
        if (message) {
            alert(message)
            dispatch({ type: "clearMessage" });
        }
      
    }, [alert, error, message, dispatch])



    return (

        <>
            <View style={{ backgroundColor: "#fff", flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>

                <ScrollView>
                    <SafeAreaView>
                        <Text style={styles.heading}>All Tasks</Text>

                        {user && user.tasks.map((item) => (
                            <Task key={item._id} title={item.title} description={item.description} status={item.completed} taskId={item._id} />
                        ))}


                        <TouchableOpacity style={styles.addBtn} onPress={hideDialog}>

                            <Icon name='add-to-list' size={20} color="#900" />


                        </TouchableOpacity>


                    </SafeAreaView>

                </ScrollView>
            </View>
            <Dialog visible={openDialog} onDismiss={hideDialog} >
                <Dialog.Title>ADD A TASK</Dialog.Title>
                <Dialog.Content>
                    <TextInput
                        style={styles.input}
                        placeholder="Title"
                        value={title}
                        onChangeText={setTitle}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Description"
                        value={description}
                        onChangeText={setDescription}
                    />

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity onPress={hideDialog} >
                            <Text>CANCEL</Text>
                        </TouchableOpacity>
                        <Button
                            onPress={addTaskHandler}
                            color="#900"
                            disabled={!title || !description || loading}
                        >
                            ADD
                        </Button>
                    </View>
                </Dialog.Content>
            </Dialog>

        </>
    )
}

export default Home

const styles = StyleSheet.create({
    heading: {
        fontSize: 28,
        textAlign: "center",
        marginTop: 25,
        marginBottom: 20,
        color: "#fff",
        backgroundColor: "#474747",
    },
    addBtn: {
        backgroundColor: "#fff",
        width: 150,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        alignSelf: "center",
        marginVertical: 20,
        elevation: 5,
    },
    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#b5b5b5",
        padding: 10,
        paddingLeft: 15,
        borderRadius: 5,
        marginVertical: 15,
        fontSize: 15,
    }
})