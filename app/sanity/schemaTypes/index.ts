import { type SchemaTypeDefinition } from 'sanity'

import heroSchema from './website/hero.schema'
import sloganSchema from './website/slogan.schema'
import aboutSchema from './website/about.schema'
import constructionSchema from './website/construction.schema'
import portfolioSchema from './website/portfolio.schema'
import accessoriesSchema from './website/accessories.schema'
import trainingSchema from './website/training.schema'
import contactSchema from './website/contact.schema'
import settingsSchema from './website/settings.schema'

export type RootSchema = {
  types: SchemaTypeDefinition[]
}

export const schema: RootSchema = {
  types: [
    // website
    heroSchema,
    sloganSchema,
    aboutSchema,
    constructionSchema,
    portfolioSchema,
    accessoriesSchema,
    trainingSchema,
    contactSchema,
    settingsSchema,
  ],
}

export const CUSTOM_STRUCTURED_SCHEMAS = [
  'hero',
  'slogan',
  'about',
  'construction',
  'portfolio',
  'accessories',
  'training',
  'contact',
  'settings'
]
