import { defineType, defineField } from "sanity";

const heroSchema = defineType({
  name: "hero",
  title: "Главная секция",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок",
      type: "string",
      description:
        'Основной заголовок секции (например, "Ваша идеальная баня — от мечты до первых счастливых клиентов")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "backgroundMedia",
      title: "Фоновое изображение или видео",
      type: "object",
      description: "Основное фоновое изображение или видео для главной секции",
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
    defineField({
      name: "ctaButton",
      title: "Кнопка действия",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Текст кнопки",
          type: "string",
          description:
            'Текст на кнопке (например, "Записаться на консультацию")',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "link",
          title: "Ссылка",
          type: "string",
          description:
            'Куда ведет кнопка (например, "#contact" или полный URL)',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "backgroundImage",
    },
  },
});

export default heroSchema;
