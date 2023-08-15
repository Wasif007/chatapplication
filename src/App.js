import React from "react";
import { Box, VStack, Container, Button, Input, HStack } from "@chakra-ui/react";
import MessageComp from "./Components/MessageComp";
function App() {
  return (
    <Box bg={"red.100"}>
      <Container h={"100vh"} bg={"white"}>
        <VStack h={"full"} padding={"2"}>
          <Button w={"full"} colorScheme={"red"}>Sign Out</Button>
          <VStack width={"full"} height={"full"} overflowY={"auto"}>
            <MessageComp message={"Hello"}/>
            <MessageComp message={"Hello"} user="me"/>
            <MessageComp message={"Hello"}/>
            <MessageComp message={"Hello"}/>
            <MessageComp message={"Hello"} user="me"/>
            <MessageComp message={"Hello"}/>
            <MessageComp message={"Hello"}/>
            <MessageComp message={"Hello"} user="me"/>
            <MessageComp message={"Hello"}/> <MessageComp message={"Hello"}/>
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
      </Container>
    </Box>
  );
}

export default App;
