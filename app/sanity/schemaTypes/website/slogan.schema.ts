import { defineType, defineField } from 'sanity'

const sloganSchema = defineType({
  name: 'slogan',
  title: 'Слоган-секция',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок секции',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slogan',
      title: 'Текст слогана',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Фоновое изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slogan',
      media: 'backgroundImage',
    },
  },
})

export default sloganSchema
