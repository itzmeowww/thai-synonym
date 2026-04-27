import { ImageResponse } from 'next/og'
import { lookup } from '@/lib/synonym'
import { readFile } from 'fs/promises'
import path from 'path'

const SIZE = { width: 1200, height: 630 }
const fontsDir = path.join(process.cwd(), 'public/fonts')
const imagesDir = path.join(process.cwd(), 'public/images')

export const generateStaticParams = async () => {
  const { default: data } = await import('@/app/data/synonym.json')
  const words = new Set(data.flat())
  return Array.from(words).map((word) => ({ q: word }))
}

const toArrayBuffer = (buf: Buffer): ArrayBuffer => {
  const ab = new ArrayBuffer(buf.byteLength)
  new Uint8Array(ab).set(buf)
  return ab
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ q: string }> }
) {
  const { q: rawWord } = await params
  const word = decodeURIComponent(rawWord)
  const synonyms = lookup(word)

  if (synonyms.length === 0) {
    return new Response(null, { status: 404 })
  }

  const displaySynonyms = synonyms.slice(0, 8)

  const [fontRegularBuf, fontBoldBuf, logoBuf] = await Promise.all([
    readFile(path.join(fontsDir, 'GoogleSans-Regular.ttf')),
    readFile(path.join(fontsDir, 'GoogleSans-Bold.ttf')),
    readFile(path.join(imagesDir, 'icons/icon-192x192.png')),
  ])

  const fontRegular = toArrayBuffer(fontRegularBuf)
  const fontBold = toArrayBuffer(fontBoldBuf)
  const logoBase64 = `data:image/png;base64,${logoBuf.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#bbf7d0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '"Google Sans", sans-serif',
          position: 'relative',
          padding: '60px',
        }}
      >
        {/* Logo top-left */}
        <div
          style={{
            position: 'absolute',
            top: '48px',
            left: '56px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Logo"
            src={logoBase64}
            width={52}
            height={52}
            style={{ borderRadius: '12px' }}
          />
          <span style={{ fontSize: '22px', fontWeight: 700, color: '#000' }}>
            ค้นหาคำไวพจน์
          </span>
        </div>


        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            fontSize: '26px',
            color: '#166534',
            fontWeight: 400,
          }}
        >
          คำไวพจน์ของ
        </div>
        {/* Main word */}
        <div
          style={{
            display: 'flex',
            fontSize: '100px',
            fontWeight: 700,
            color: '#000',
            marginBottom: '44px',
            letterSpacing: '-2px',
          }}
        >
          {word}
        </div>


        {/* Synonym pills */}
        {displaySynonyms.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
              maxWidth: '960px',
            }}
          >
            {displaySynonyms.map((s) => (
              <div
                key={s}
                style={{
                  display: 'flex',
                  background: '#fff',
                  border: '2px solid #000',
                  borderRadius: '9999px',
                  padding: '8px 28px',
                  fontSize: '30px',
                  fontWeight: 400,
                  color: '#000',
                }}
              >
                {s}
              </div>
            ))}
            {synonyms.length > 8 && (
              <div
                style={{
                  display: 'flex',
                  background: 'transparent',
                  border: '2px solid #166534',
                  borderRadius: '9999px',
                  padding: '8px 28px',
                  fontSize: '30px',
                  fontWeight: 400,
                  color: '#166534',
                }}
              >
                +{synonyms.length - 8} อื่น ๆ
              </div>
            )}
          </div>
        )}
      </div>
    ),
    {
      ...SIZE,
      fonts: [
        {
          name: 'Google Sans',
          data: fontRegular,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Google Sans',
          data: fontBold,
          weight: 700,
          style: 'normal',
        },
      ],
    }
  )
}
