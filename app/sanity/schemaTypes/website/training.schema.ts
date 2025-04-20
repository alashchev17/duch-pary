import { defineType, defineField } from 'sanity'

const trainingSchema = defineType({
  name: 'training',
  title: 'Обучение',
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
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slogan',
      title: 'Слоган секции',
      type: 'string',
    }),
    defineField({
      name: 'programs',
      title: 'Учебные программы',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Название программы',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Краткое описание программы',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Изображение программы',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(2),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})

export default trainingSchema
