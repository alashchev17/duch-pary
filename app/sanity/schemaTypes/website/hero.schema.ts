import { defineType, defineField } from 'sanity'

const heroSchema = defineType({
  name: 'hero',
  title: 'Главная секция',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      description: 'Основной заголовок секции (например, "Ваша идеальная баня — от мечты до первых счастливых клиентов")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Подзаголовок',
      type: 'text',
      description: 'Дополнительный текст под заголовком (необязательно)',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Фоновое изображение',
      type: 'image',
      description: 'Основное фоновое изображение для главной секции',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaButton',
      title: 'Кнопка действия',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Текст кнопки',
          type: 'string',
          description: 'Текст на кнопке (например, "Записаться на консультацию")',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'link',
          title: 'Ссылка',
          type: 'string',
          description: 'Куда ведет кнопка (например, "#contact" или полный URL)',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'backgroundImage',
    },
  },
})

export default heroSchema
