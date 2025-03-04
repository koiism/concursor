import { COLLECTION_SLUGS } from '@/constants/collectionSlugs'
import type { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
  slug: COLLECTION_SLUGS.TAGS,
  labels: {
    singular: 'Tag',
    plural: 'Tags',
  },
  admin: {
    useAsTitle: 'name',
    group: 'Cursor Rules',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'count',
      type: 'number',
      defaultValue: 0,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'rules',
      type: 'join',
      collection: COLLECTION_SLUGS.RULES,
      on: 'tags',
      hasMany: true,
    },
    {
      name: 'packages',
      type: 'join',
      collection: COLLECTION_SLUGS.PACKAGES,
      on: 'tags',
      hasMany: true,
    },
  ],
}
