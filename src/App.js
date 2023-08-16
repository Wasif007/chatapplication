import React, { useEffect, useState } from "react";
import { Box, VStack, Container, Button, Input, HStack } from "@chakra-ui/react";
import MessageComp from "./Components/MessageComp";
import {getAuth,GoogleAuthProvider,onAuthStateChanged,signInWithPopup} from "firebase/auth";
import app from "./Components/firebase"

//Creating auth with app as argument from firbase file
const auth=getAuth(app);
const loggingInFunction=()=>{
  //Provider
  const provider=new GoogleAuthProvider();
  //Sign in with pop with auth and provider
  signInWithPopup(auth,provider);
}


function App() {
  useEffect(() => {
    const settingAuth=onAuthStateChanged(auth,(data)=>{
      setUser(data);
    })
    return()=>{
      settingAuth();
    }

  }, []);
 const [user,setUser]=useState(false);
  return (
    // Box with background Red
    <Box bg={"red.100"}>
      {
        user?(
          // First container to have all vstacks and hstacks
        <Container h={"100vh"} bg={"white"}>
          {/* One Vstack is for logout and messages bar */}
          <VStack h={"full"} padding={"2"}>
            <Button w={"full"} colorScheme={"red"}>Sign Out</Button>
            {/* This Vstack is for messaging portion */}
            <VStack width={"full"} height={"full"} overflowY={"auto"}>
            <MessageComp message={"Hello"}/>
              <MessageComp message={"Hello"} user="me"/>
              <MessageComp message={"Hello"}/>
            </VStack>
            <form style={{ width: "99%" }}>
              <HStack>
                <Input bg={"white"} placeholder="Enter a Message..." />
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
