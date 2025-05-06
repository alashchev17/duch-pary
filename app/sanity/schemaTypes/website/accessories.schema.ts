import { defineType, defineField } from "sanity";

const accessoriesSchema = defineType({
  name: "accessories",
  title: "Аксессуары",
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
      validation: (Rule) => Rule.required(),
      type: "text",
    }),
    defineField({
      name: "slogan",
      title: "Слоган секции",
      type: "string",
    }),
    defineField({
      name: "cardImages",
      title: "Фотографии аксессуаров",
      type: "array",
      of: [
        {
          type: "image",
          preview: {
            select: {
              title: "title",
              media: "image",
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.min(3)
          .max(9)
          .required()
          .error("Должно быть от 3 до 9 карточек с аксессуарами"),
    }),
    defineField({
      name: "perks",
      title: "Преимущества",
      description:
        "Сконфигурируйте текста карточек преимуществ, которые будут отображены сразу под аксессуарами",
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
          name: "visible",
          title: "Должны ли отображаться карточки преимуществ?",
          type: "boolean",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "first",
          title: "Первое текстовое поле",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "second",
          title: "Второе текстовое поле",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "third",
          title: "Третье текстовое поле",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "cards.0.image",
    },
  },
});

export default accessoriesSchema;
