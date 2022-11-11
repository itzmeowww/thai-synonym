
import { Center, Flex, Input, ScaleFade, Text, useToast, Image, Box } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Nav } from "../components/Nav";
import Search from "../components/Search";
import synonym from './data/synonym.json'

export default function Home({ title }: { title: string }) {


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
                <Search value={title} />
                <Footer />

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