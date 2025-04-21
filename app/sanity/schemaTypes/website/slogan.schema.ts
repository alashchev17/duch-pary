import { defineType, defineField } from "sanity";

const sloganSchema = defineType({
  name: "slogan",
  title: "Слоган-секция",
  type: "document",
  fields: [
    defineField({
      name: "slogan",
      title: "Текст слогана",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "backgroundMedia",
      title: "Фоновое изображение или видео",
      type: "object",
      description: "Основное фоновое изображение или видео для секции слогана",
      fields: [
        {
          name: "type",
          title: "Тип медиа",
          type: "string",
          options: {
            list: [
              { title: "Изображение", value: "image" },
              { title: "Видео", value: "video" },
            ],
            layout: "radio",
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: "image",
          title: "Изображение",
          type: "image",
          options: { hotspot: true },
          hidden: ({ parent }) => parent?.type !== "image",
        },
        {
          name: "video",
          title: "Видео",
          type: "file",
          options: { accept: "video/*" },
          hidden: ({ parent }) => parent?.type !== "video",
        },
        {
          name: "alt",
          title: "Альтернативный текст",
          type: "string",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slogan",
      media: "backgroundImage",
    },
  },
});

export default sloganSchema;
