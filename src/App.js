import React, { useEffect, useState } from "react";
import { Box, VStack, Container, Button, Input, HStack } from "@chakra-ui/react";
import MessageComp from "./Components/MessageComp";
import {getAuth,GoogleAuthProvider,onAuthStateChanged,signInWithPopup, signOut} from "firebase/auth";
import app from "./Components/firebase"
import {addDoc, orderBy,query,collection,getFirestore, serverTimestamp,onSnapshot} from "firebase/firestore"

//Creating auth with app as argument from firbase file
const auth=getAuth(app);
//Getting FireStore
const getFireeStore=getFirestore(app);

//logging in function
const loggingInFunction=()=>{
  //Provider
  const provider=new GoogleAuthProvider();
  //Sign in with pop with auth and provider
  signInWithPopup(auth,provider);
}

//logging out function
const loggingOutFunction=()=>{
  signOut(auth);
}
function App() {
  //Setting auth once mounted component
  useEffect(() => {
    const settingAuth=onAuthStateChanged(auth,(data)=>{
     
      setUser(data);
    })
    onSnapshot(collection(getFireeStore,"Messages"),(snap)=>{
     setMessageArray( snap.docs.map((item)=>{
        let id =item.id;
        return {id,...item.data()};
      }));
    })
    return()=>{
      settingAuth();
    }

  }, []);
  //Use state hook used to set user once data is mounted via useEffect
 const [user,setUser]=useState(false);
 //Setting message useState as it is typed in app
 const [messageTyped,setMessageTyped]=useState("");
 //Messages array to be displayed in the tag
 const [messageArray,setMessageArray]=useState([]);
//Query for Ascending order of collection from firebase

 //Submit of message function it will be used to save message in firebase to show chat
const onSubmitHandlerFunction=async(e)=>{
  e.preventDefault();

  try {
    await addDoc(collection(getFireeStore,"Messages"),{
    text:messageTyped,
    uid:user.uid,
    url:user.photoURL,
    createdAt:serverTimestamp()
    
  });
  setMessageTyped("");
  } catch (error) {
    alert(error);
  }
  
  }
  return (
    // Box with background Red
    <Box bg={"red.100"}>
      {
        user?(
          // First container to have all vstacks and hstacks
        <Container h={"100vh"} bg={"white"}>
          {/* One Vstack is for logout and messages bar */}
          <VStack h={"full"} padding={"2"}>
            <Button w={"full"} onClick={loggingOutFunction} colorScheme={"red"}>Sign Out</Button>
            {/* This Vstack is for messaging portion */}
            <VStack width={"full"} height={"full"} overflowY={"auto"}>
              {
                messageArray.map((item)=>(<MessageComp key={item.id}
                text={item.text} uid={item.uid===user.uid?"me":"other"} url={item.url}
                />))
              }
            
             
            </VStack>
            <form style={{ width: "99%" }} onSubmit={onSubmitHandlerFunction}>
              <HStack>
                <Input bg={"white"} value={messageTyped} onChange={(e)=>(setMessageTyped(e.target.value))}placeholder="Enter a Message..." />
                <Button type="submit" colorScheme={"purple"}>Send</Button>
              </HStack>
            </form>
  
          </VStack>
        </Container>):(
        <VStack bg="white" justifyContent={"center"} h="100vh">
          <Button onClick={loggingInFunction} colorScheme={"purple"}>
            Sign In With Google
          </Button>
        </VStack>
      )
      
      }
      </Box>
  );
}

export default App;
