import React from "react";
import { Box,VStack,Container, Button, Input, HStack } from "@chakra-ui/react";
function App() {
  return (
  <Box bg={"red.100"}>
    <Container h={"100vh"} bg={"white"}>
     <VStack h={"full"} bg={"blue.100"}>
      <Button w={"full"} colorScheme={"red"}>Sign Out</Button>
      <VStack width={"full"} height={"full"} bg={"purple.100"}>

      </VStack>
      <form>
        <HStack>
          <Input bg={"white"}/>
          <Button type="submit" colorScheme={"purple"}>Send</Button>
        </HStack>
      </form>
      
     </VStack>
    </Container>
  </Box>
  );
}

export default App;
