import React from 'react'
import {HStack,Text,Avatar} from "@chakra-ui/react"
const MessageComp = ({message,uri,user="other"}) => {
    return (
        <HStack alignSelf={user==="me"?"flex-end":"flex-start"} bg={"gray.200"} borderRadius={"base"} paddingY={"2"} paddingX={user==="me"?"2":"4"}>
            {
                user==="other" && <Avatar src={uri}/>
            }
            <Text>{message}</Text>
            {
                user==="me" && <Avatar  src={uri}/>
            }
            
        </HStack>
    )
}

export default MessageComp
