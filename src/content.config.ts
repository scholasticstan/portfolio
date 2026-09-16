import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    accent: z.string().default('#7c9cff'),
  }),
});

export const collections = { projects };
