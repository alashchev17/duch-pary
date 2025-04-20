import type { StructureResolver } from 'sanity/structure'
import { HashIcon, EarthGlobeIcon, CogIcon } from '@sanity/icons'
import { CUSTOM_STRUCTURED_SCHEMAS } from './schemaTypes'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Панель управления')
    .items([
      ...S.documentTypeListItems().filter((listItem) => !CUSTOM_STRUCTURED_SCHEMAS.includes(listItem.getId() ?? '')),
      S.listItem()
        .title('Веб-сайт')
        .id('website')
        .icon(() => {
          return <EarthGlobeIcon />
        })
        .child(
          S.list()
            .title('Секции')
            .items([
              S.listItem()
                .title('Главная')
                .id('hero')
                .icon(() => {
                  return <HashIcon />
                })
                .child(S.document().schemaType('hero').documentId('hero').title('Главная')),
              S.listItem()
                .title('Слоган-секция')
                .id('slogan')
                .icon(() => {
                  return <HashIcon />
                })
                .child(S.document().schemaType('slogan').documentId('slogan').title('Слоган-секция')),
              S.listItem()
                .title('Про нас')
                .id('about')
                .icon(() => {
                  return <HashIcon />
                })
                .child(S.document().schemaType('about').documentId('about').title('Про нас')),
              S.listItem()
                .title('Строительство')
                .id('construction')
                .icon(() => {
                  return <HashIcon />
                })
                .child(S.document().schemaType('construction').documentId('construction').title('Строительство')),
              S.listItem()
                .title('Портфолио')
                .id('portfolio')
                .icon(() => {
                  return <HashIcon />
                })
                .child(S.document().schemaType('portfolio').documentId('portfolio').title('Портфолио')),
              S.listItem()
                .title('Аксессуары')
                .id('accessories')
                .icon(() => {
                  return <HashIcon />
                })
                .child(S.document().schemaType('accessories').documentId('accessories').title('Аксессуары')),
              S.listItem()
                .title('Обучение')
                .id('training')
                .icon(() => {
                  return <HashIcon />
                })
                .child(S.document().schemaType('training').documentId('training').title('Обучение')),
              S.listItem()
                .title('Свяжитесь с нами')
                .id('contact')
                .icon(() => {
                  return <HashIcon />
                })
                .child(S.document().schemaType('contact').documentId('contact').title('Свяжитесь с нами')),
              S.divider(),
              S.listItem()
                .title('Общие настройки')
                .id('settings')
                .icon(() => {
                  return <CogIcon />
                })
                .child(S.document().schemaType('settings').documentId('settings').title('Общие настройки')),
            ])
        ),
    ])
