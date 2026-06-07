import { MetadataRoute } from 'next'
import { DATA } from '@/data/resume'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = DATA.url

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/certificates`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
