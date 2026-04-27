'use client'
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { SearchIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState } from "react"
import { lookup } from "@/lib/synonym"
import { Button } from "@/components/ui/button"
import { copyToClipboard } from "@/lib/copy"


export default function Page() {
  const [search, setSearch] = useState("")

  const result = search ? lookup(search) : null


  const renderResult = () => {
    if (result === null) return null
    if (result.length === 0) {
      return <span className="text-gray-500 dark:text-gray-300">ไม่พบคำไวพจน์สำหรับคำนี้</span>
    }
    return result.map((word) => (
      <Button
        key={word}
        variant="outline"
        onClick={() => copyToClipboard(word)}
      >
        {word}
      </Button>
    ))
  }
  return (
    <div className="flex flex-col items-center justify-top min-h-svh px-6 bg-white dark:bg-black py-16 gap-6 lg:gap-12">
      <h1 className="text-4xl lg:text-5xl text-center mt-36">
        ค้นหาคำไวพจน์
      </h1>
      <div className="flex flex-col gap-4 w-full max-w-lg items-center">
        <InputGroup >
          <InputGroupInput
            placeholder="ค้นหาคำไวพจน์ที่คุณต้องการ"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <InputGroupAddon>
            <HugeiconsIcon icon={SearchIcon} className="w-5 h-5" />
          </InputGroupAddon>
        </InputGroup>
        {result && result.length > 0 && (
          <span className="text-sm text-gray-500 dark:text-gray-300">กดที่ข้อความเพื่อทำการคัดลอกข้อความ</span>
        )}
        <div className="w-full flex flex-row gap-2 justify-center">
          {renderResult()}
        </div>
      </div>
    </div>
  )
}
