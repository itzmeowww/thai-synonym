
import {
    Flex, Text, useToast,
    Divider
} from "@chakra-ui/react";
import { Nav } from "../components/Nav";


import synonym from './data/synonym.json'

export default function List() {
    const toast = useToast()

    const copyText = (text: string) => {
        if (window.navigator && window.navigator.clipboard) window.navigator.clipboard.writeText(text).then(() => {
            toast({
                title: 'คัดลอกแล้ว',
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
        })
    }


    return (
        <Flex fontFamily="body"
            w="100vw"
            maxW="100%"
            minH="100vh"
            align="center"
            justify="begin"
            flexDir="column"
            pb={12}
        >
            <Nav />
            <Flex mt="24" flexDir="column" maxW="4xl" gap="3" px="4">
                {synonym.map((gr) => {
                    return <>
                        <Flex gap={2} flexWrap="wrap">{gr.map((x) => {
                            return <Text cursor="pointer" onClick={() => {
                                copyText(x)
                            }}>{x}</Text>
                        })}
                        </Flex>
                        <Divider />
                    </>
                })}




            </Flex>


        </Flex >
    )
}

