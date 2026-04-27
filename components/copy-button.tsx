"use client";

import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copy";

export const CopyButton = ({ word }: { word: string }) => (
    <Button variant="outline" onClick={() => copyToClipboard(word)}>
        {word}
    </Button>
);
