import { Center, Flex, Input, ScaleFade, Text, useToast } from "@chakra-ui/react"
import { ChangeEvent, useEffect, useState } from "react"

import synonym from '../pages/data/synonym.json'

export default function Search({ value }: { value: string }) {
    const toast = useToast()
    const [query, setQuery] = useState<string>(value);
    const [result, setResult] = useState<string[]>([]);

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
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);


    };

    useEffect(() => {
        let found = false;
        synonym.forEach((list) => {
            list.forEach((word) => {
                if (!found && query == word) {
                    setResult(list);
                    found = true;
                }
            });
        });

        if (found == false) {
            if (query != "") setResult(["ไม่พบข้อมูล"]);
            else setResult([])
        }
    }, [query])

    return (

        <Flex
            w="100vw"
            maxW="100%"
            minH="100vh"
            bg="purple.200"
            align="center"
            justify="begin"
            pt="25vh"
            flexDir="column"
        >
            <ScaleFade in={true}>
                <Flex
                    mx="auto"
                    align="center"
                    justify="center"
                    h="20vh"
                    flexDir="column"

                >

                    <Text
                        fontSize="5xl"
                        color="black"
                    >
                        ค้นหาคำไวพจน์
                    </Text>
                    {/* <Text
                        fontSize="sm"
                        color="black"
                    >
                        จากคำไวพจน์ทั้งหมด 1142 คำ
                    </Text> */}
                </Flex>
                <Input
                    mx="auto"
                    w="80vw"
                    maxW="xl"
                    autoFocus
                    variant="outline"
                    placeholder="พิมพ์ข้อความที่นี่..."
                    size="md"
                    bg="gray.50"
                    onChange={handleInput}
                    color="black"
                />
                <Center>
                    <Text
                        my={2}
                        mx="auto"
                        fontSize="sm"
                        color="blue.700"
                    >
                        กดที่ข้อความเพื่อทำการคัดลอกข้อความ
                    </Text>
                </Center>
            </ScaleFade>
            <Flex
                ml="auto"
                mr="auto"
                pb="50px"
                align="center"
                justify="center"
                flexWrap="wrap"
                w="80vw"
                maxW="500px"
                gap={2}
            >
                {result.map((x) => {
                    return <Text bg="white" transition={"all"} px={3} py="0.5" rounded="md" _hover={
                        {
                            bg: "gray.100"
                        }
                    } cursor={"pointer"} onClick={() => {
                        copyText(x)
                    }}>{x}</Text>
                })}
            </Flex>


        </Flex>
    )
}
