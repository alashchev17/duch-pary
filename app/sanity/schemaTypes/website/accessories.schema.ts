import { defineType, defineField } from 'sanity'

const accessoriesSchema = defineType({
  name: 'accessories',
  title: 'Аксессуары',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок секции',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание секции',
      validation: (Rule) => Rule.required(),
      type: 'text',
    }),
    defineField({
      name: 'slogan',
      title: 'Слоган секции',
      type: 'string',
    }),
    defineField({
      name: 'cards',
      title: 'Карточки с аксессуарами',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Изображение аксессуара',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required().error('Изображение обязательно'),
            }),
            defineField({
              name: 'title',
              title: 'Заголовок карточки',
              type: 'string',
              validation: (Rule) => Rule.required().error('Заголовок обязателен'),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(3).max(9).required().error('Должно быть от 3 до 9 карточек с аксессуарами'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'cards.0.image',
    },
  },
})

export default accessoriesSchema
