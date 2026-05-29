import { MetadataRoute } from 'next';
import { universities } from '../data/universities';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Use public app URL environment variable, fallback to Render free tier host
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://eas-tuition.onrender.com';

  const universityUrls = universities.map((u) => ({
    url: `${baseUrl}/universities/${u.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    ...universityUrls,
  ];
}
