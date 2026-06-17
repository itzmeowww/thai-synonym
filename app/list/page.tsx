import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Metadata } from "next";

import data from '@/app/data/synonym.json';
import { CopyButton } from "@/components/copy-button";

export const metadata: Metadata = {
    title: "รายการคำไวพจน์ทั้งหมด",
    description: "รายการคำไวพจน์ภาษาไทยทั้งหมด พร้อมคำที่มีความหมายเหมือนกัน",
}

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
                        data.sort((a, b) => a[0].localeCompare(b[0])).map((group, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{group[0]}</TableCell>
                                <TableCell className="w-full flex gap-3 flex-wrap">
                                    {
                                        group.map((word, wordIndex) => (
                                            <CopyButton key={`${index}-${wordIndex}`} word={word} />
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
