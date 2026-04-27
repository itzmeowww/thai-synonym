import { toast } from "sonner"

export const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => toast.success("คัดลอกข้อความแล้ว"))
    .catch(() => toast.error("คัดลอกไม่สำเร็จ"))
}
