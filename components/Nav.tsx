import { Flex, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'

export const Nav = () => {
    return (
        <Flex w="100%" h="14" bg="purple.400" shadow="md" zIndex="10" pos="fixed">
            <Flex px={4} maxW="4xl" w="100%" align={"center"} justify="space-between" mx="auto" fontSize="lg" color="white">
                <Link href="/">
                    <Flex align="center" gap="3">
                        <Image src="./images/icons/icon-192x192.png" w={8} h={8}></Image>
                        <Text >
                            ค้นหาคำไวพจน์
                        </Text>
                    </Flex>
                </Link>
                <Link href="/list" >ตารางคำไวพจน์</Link>
            </Flex>
        </Flex >
    )
}
