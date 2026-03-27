import { MetadataRoute } from 'next';
import { PROJECTS } from '@/utils/dummyData';

const BASE_URL = 'https://kdmconstruction.in'; // Change to actual production domain

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/projects',
    '/services',
    '/gallery',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const dynamicProjectRoutes = PROJECTS.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicProjectRoutes];
}
