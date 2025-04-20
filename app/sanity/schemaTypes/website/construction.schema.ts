import { defineType, defineField } from 'sanity'

const constructionSchema = defineType({
  name: 'construction',
  title: 'Строительство',
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
      title: 'Описание',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'process',
      title: 'Процесс строительства',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Название этапа',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Описание этапа',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Изображение этапа',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
    },
  },
})

export default constructionSchema
