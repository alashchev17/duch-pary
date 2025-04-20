import { defineType, defineField } from 'sanity'

const contactSchema = defineType({
  name: 'contact',
  title: 'Свяжитесь с нами',
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
    }),
    defineField({
      name: 'email',
      title: 'Электронная почта',
      type: 'string',
      validation: (Rule) =>
        Rule.required().regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, {
          name: 'email',
          invert: false,
        }).error('Неверный формат email адреса'),
    }),
    defineField({
      name: 'phone',
      title: 'Номер телефона',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Адрес',
      type: 'text',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Социальные сети',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Платформа',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'TikTok', value: 'tiktok' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Другое', value: 'other' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Своя иконка',
              type: 'image',
              description: 'Опциональная иконка для этой социальной сети',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'mapLocation',
      title: 'Местоположение на карте',
      type: 'object',
      fields: [
        defineField({
          name: 'latitude',
          title: 'Широта',
          type: 'number',
        }),
        defineField({
          name: 'longitude',
          title: 'Долгота',
          type: 'number',
        }),
        defineField({
          name: 'zoom',
          title: 'Уровень масштабирования',
          type: 'number',
          initialValue: 15,
        }),
      ],
    }),
    defineField({
      name: 'contactImage',
      title: 'Изображение контактной секции',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'workingHours',
      title: 'Часы работы',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'days',
              title: 'Дни',
              type: 'string',
              description: 'например, "Понедельник - Пятница"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'hours',
              title: 'Часы',
              type: 'string',
              description: 'например, "9:00 - 18:00"',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'email',
      media: 'contactImage',
    },
  },
})

export default contactSchema
