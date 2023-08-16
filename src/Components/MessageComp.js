import React from 'react'
import {HStack,Text,Avatar} from "@chakra-ui/react"
const MessageComp = ({text,url,uid}) => {
    return (
        <HStack alignSelf={uid==="me"?"flex-end":"flex-start"} bg={"gray.200"} borderRadius={"base"} paddingY={"2"} paddingX={uid==="me"?"2":"4"}>
            {
                uid==="other" && <Avatar src={url}/>
            }
            <Text>{text}</Text>
            {
                uid==="me" && <Avatar  src={url}/>
            }
            
        </HStack>
    )
}

export default MessageComp
