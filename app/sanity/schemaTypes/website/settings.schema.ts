import { defineType, defineField } from "sanity";

const settingsSchema = defineType({
  name: "settings",
  title: "Общие настройки",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Название сайта",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "favicon",
      title: "Миниатюрный логотип сайта",
      description:
        "Логотип, который будет использован в качестве иконки вкладки в браузере",
      type: "image",
      options: {
        hotspot: true,
        accept: "image/svg+xml,image/*", // Accept SVGs and other image formats
      },
    }),
    defineField({
      name: "email",
      title: "Контактный Email",
      type: "email",
    }),
    defineField({
      name: "phone",
      title: "Контактный номер телефона",
      type: "string",
    }),
    defineField({
      name: "logoHeader",
      title: "Логотип сайта в шапке",
      type: "image",
      options: {
        hotspot: true,
        accept: "image/svg+xml,image/*", // Accept SVGs and other image formats
      },
    }),
    defineField({
      name: "logoFooter",
      title: "Полноразмерный логотип сайта",
      type: "image",
      options: {
        hotspot: true,
        accept: "image/svg+xml,image/*", // Accept SVGs and other image formats
      },
    }),
    defineField({
      name: "siteDescription",
      title: "Описание сайта",
      type: "text",
      description: "Используется для SEO и соц. сетей",
    }),
    defineField({
      name: "socialMedia",
      title: "Социальные сети",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Платформа",
              type: "string",
              options: {
                list: [
                  { title: "Facebook", value: "facebook" },
                  { title: "Instagram", value: "instagram" },
                  { title: "Twitter", value: "twitter" },
                  { title: "YouTube", value: "youtube" },
                  // { title: "TikTok", value: "tiktok" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Другое", value: "other" },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "icon",
              title: "Своя иконка",
              type: "image",
              description: "Опциональная иконка для этой социальной сети",
              hidden: ({ parent }) => parent?.platform !== "other",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "siteName",
      media: "logo",
    },
  },
});

export default settingsSchema;
