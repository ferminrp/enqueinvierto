import { defineCollection, z } from 'astro:content';

const glossaryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    icon: z.string(),
    summary: z.string(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    difficulty: z.enum(['Principiante', 'Intermedio', 'Avanzado']).optional(),
    readingTime: z.number().optional(),
  }),
});

export const collections = {
  glossary: glossaryCollection,
}; 