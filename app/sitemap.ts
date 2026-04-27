import type { MetadataRoute } from 'next'
import data from '@/app/data/synonym.json'

const BASE_URL = 'https://thai-synonym.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const words = Array.from(new Set(data.flat()))

  const lastModified = new Date()

  const wordPages: MetadataRoute.Sitemap = words.map((word) => ({
    url: `${BASE_URL}/${encodeURIComponent(word)}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/list`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...wordPages,
  ]
}
