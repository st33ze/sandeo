import { z, defineCollection } from 'astro:content';

const offer = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    icon: z.string(),
    cldID: z.string(),
    recap: z.array(z.string()),
  }),
});

export const collections = {
  'offer': offer,
}
