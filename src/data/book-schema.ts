import z from "zod";

export const bookSchema = z.object({
  title: z.string(),
  author: z.string(),
  why: z.string(),
  tags: z.array(z.string()),
  thumbnail: z.string().optional(),
  yearRange: z.string(),
  strength: z.enum(["should_read", "can_read", "must_read"]),
});

export type Book = z.infer<typeof bookSchema>;


