import { defineType, defineField } from "sanity";

const portfolioSchema = defineType({
  name: "portfolio",
  title: "Портфолио",
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
      title: "Описание секции",
      type: "text",
    }),
    defineField({
      name: "mediaItems",
      title: "Медиа материалы",
      type: "array",
      of: [
        {
          type: "image",
          title: "Изображение",
          options: {
            hotspot: true,
          },
        },
        {
          type: "file",
          name: "video",
          title: "Видео",
          options: {
            accept: "video/*",
          },
        },
      ],
      validation: (Rule) =>
        Rule.min(3)
          .max(9)
          .required()
          .error("Должно быть от 3 до 9 медиа-материалов"),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mediaItems.0",
    },
  },
});

export default portfolioSchema;
