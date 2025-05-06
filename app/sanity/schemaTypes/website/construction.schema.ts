import { defineType, defineField } from "sanity";

const constructionSchema = defineType({
  name: "construction",
  title: "Строительство",
  type: "document",
  fields: [
    // Language field required for document internationalization
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "process",
      title: "Процесс строительства",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
    // Language field required for document internationalization
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
            defineField({
              name: "title",
              title: "Название этапа",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Описание этапа",
              type: "text",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "backgroundMedia",
              title: "Фоновое изображение или видео этапа",
              type: "object",
              fields: [
    // Language field required for document internationalization
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
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
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0",
    },
  },
});

export default constructionSchema;
