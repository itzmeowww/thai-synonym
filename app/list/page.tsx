'use client'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import data from '@/app/data/synonym.json'
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copy";

const Page = () => {

    return (
        <div className="min-h-svh flex flex-col items-center justify-center gap-6 px-6 py-16">
            <Table className="max-w-5xl w-full my-6 mx-auto">
                <TableCaption>ตารางคำไวพจน์</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-25">คำศัพท์</TableHead>
                        <TableHead>คำไวพจน์</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data.map((group, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{group[0]}</TableCell>
                                <TableCell className="w-full flex gap-3 flex-wrap">
                                    {
                                        group.map((word, wordIndex) => (
                                            <Button key={`${index}-${wordIndex}`} variant="outline" onClick={() => copyToClipboard(word)}>
                                                {word}
                                            </Button>
                                        ))
                                    }
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    );
}

export default Page;