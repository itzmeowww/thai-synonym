'use client'
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { SearchIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState } from "react"
import { lookup } from "@/lib/synonym"
import { CopyButton } from "@/components/copy-button"

export function SearchBox() {
  const [search, setSearch] = useState("")
  const result = search ? lookup(search) : null

  return (
    <div className="flex flex-col gap-4 w-full max-w-lg items-center">
      <InputGroup>
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
      <div className="w-full flex flex-row gap-2 justify-center flex-wrap">
        {result === null ? null : result.length === 0 ? (
          <span className="text-gray-500 dark:text-gray-300">ไม่พบคำไวพจน์สำหรับคำนี้</span>
        ) : (
          result.map((word) => <CopyButton key={word} word={word} />)
        )}
      </div>
    </div>
  )
}
