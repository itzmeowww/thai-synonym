
import { Center, Flex, Input, ScaleFade, Text, useToast, Image, Box } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { Nav } from "../components/Nav";
import synonym from './data/synonym.json'

export default function Home({ title }: { title: string }) {
    const router = useRouter()
    const { q } = router.query
    const temp = q ? Array.isArray(q) ? q[0] : q : ""
    const [query, setQuery] = useState<string>(temp);
    const [result, setResult] = useState<string[]>([]);

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
        <>
            <Head>
                <title>ค้นหาคำไวพจน์ {title}</title>
            </Head>
            <Flex fontFamily="body"
                w="100vw"
                maxW="100%"
                minH="100vh"
                align="center"
                justify="begin"
                flexDir="column"

            >
                <Nav />
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
                                fontSize="6xl"
                                color="black"
                            >
                                ค้นหาคำไวพจน์
                            </Text>
                        </Flex>
                        <Input
                            w="80vw" maxW="500px"
                            autoFocus
                            variant="outline"
                            placeholder="พิมพ์ข้อความที่นี่..."
                            size="md"
                            bg="gray.50"
                            onChange={handleInput}
                            value={query}
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
                            return <Text bg="white" px={3} py="0.5" rounded="md" cursor={"pointer"} onClick={() => {
                                copyText(x)
                            }}>{x}</Text>
                        })}
                    </Flex>


                </Flex>
                <Flex w="100vw"
                    height="12"
                    bg="purple.300"
                    maxW="100%" align="center" justify="center">
                    <Text fontFamily="body">
                        <Link href="https://github.com/itzmeowww/thai-synonym#contributing">
                            Contribute on Github
                        </Link>
                    </Text>
                </Flex>

            </Flex >
        </>
    )
}

export async function getStaticPaths() {
    const paths = synonym.map((x) => ({
        params: { q: x[0] },
    }))
    return { paths, fallback: false }
}
export async function getStaticProps({ params }: { params: { q: string } }) {

    return { props: { title: params.q } }
}