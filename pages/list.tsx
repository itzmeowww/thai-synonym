
import {
    Flex, Text, useToast,
    Table,
    Tbody,
    Tr,
    Td,
    TableCaption,
    TableContainer,
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
            pt="24"
        >
            <Nav />
            <TableContainer>
                <Table variant='simple' size={"md"} maxW="4xl">
                    <TableCaption>ตารางคำไวพจน์</TableCaption>

                    <Tbody>
                        {synonym.map((gr) => {
                            return <>
                                <Tr>
                                    <Td>{gr[0]}</Td>
                                    <Td as={Flex} gap={2} flexWrap={"wrap"}>
                                        {gr.map((x) => {
                                            return <Text onClick={() => {
                                                copyText(x)

                                            }} cursor={"pointer"}>{x}</Text>

                                        })}
                                    </Td>
                                </Tr>
                            </>
                        })}

                    </Tbody>
                </Table>
            </TableContainer>



        </Flex >
    )
}

