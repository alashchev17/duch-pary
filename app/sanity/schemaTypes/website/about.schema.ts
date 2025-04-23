import { defineType, defineField } from "sanity";

const aboutSchema = defineType({
  name: "about",
  title: "Про нас",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок секции",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Описание",
      type: "text",
      description: 'Основной текст раздела "Про нас"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Изображение",
      description: "Изображение для секции",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "features",
      title: "Преимущества",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Название преимущества",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Описание преимущества",
              type: "text",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0",
    },
  },
});

export default aboutSchema;
