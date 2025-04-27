import { defineType, defineField } from "sanity";

const contactSchema = defineType({
  name: "contact",
  title: "Свяжитесь с нами",
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
      title: "Описание секции",
      type: "text",
    }),
    defineField({
      name: "contactImage",
      title: "Изображение контактной секции",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "contactImage",
    },
  },
});

export default contactSchema;
