import { Text, Flex } from "@chakra-ui/react";
import Link from "next/link";


export default function Footer() {
    return (
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
    )
}
