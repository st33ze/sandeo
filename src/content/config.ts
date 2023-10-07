import { z, defineCollection } from 'astro:content';

const offer = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    icon: z.string(),
    headerBg: image().refine((img) => img.width >= 1080, {
      message: "Background image must be at least 1080px wide!",
    }),
    recap: z.array(z.string()),
  }),
});

export const collections = {
  'offer': offer,
}
