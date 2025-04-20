import { defineType, defineField } from 'sanity'

const settingsSchema = defineType({
  name: 'settings',
  title: 'Общие настройки',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Название сайта',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Логотип сайта',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'favicon',
      title: 'Иконка сайта (Favicon)',
      type: 'image',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Описание сайта',
      type: 'text',
      description: 'Используется для SEO и соц. сетей',
    }),
    defineField({
      name: 'defaultSocialImage',
      title: 'Изображение для соц. сетей',
      type: 'image',
      description: 'Изображение по умолчанию для соц. сетей',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'headerNav',
      title: 'Навигация в шапке',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Текст ссылки',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
              description: 'Может быть внутренней ссылкой (например, "#about") или внешним URL',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'footerNav',
      title: 'Навигация в подвале',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Текст ссылки',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'footerText',
      title: 'Текст в подвале',
      type: 'text',
      description: 'Копирайт или дополнительная информация в подвале',
    }),
    defineField({
      name: 'googleAnalyticsId',
      title: 'ID Google Analytics',
      type: 'string',
    }),
    defineField({
      name: 'metaTags',
      title: 'Дополнительные мета-теги',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Имя/свойство мета-тега',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'content',
              title: 'Содержимое мета-тега',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
      media: 'logo',
    },
  },
})

export default settingsSchema
