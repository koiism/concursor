import { COLLECTION_SLUGS } from '@/constants/collectionSlugs'
import type { CollectionConfig } from 'payload'

export const Packages: CollectionConfig = {
  slug: COLLECTION_SLUGS.PACKAGES,
  labels: {
    singular: '集合',
    plural: '集合',
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
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'rules',
      type: 'relationship',
      relationTo: COLLECTION_SLUGS.RULES,
      hasMany: true,
    },
    {
      name: 'private',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: COLLECTION_SLUGS.TAGS,
      hasMany: true,
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          // 这里可以添加自动从rules中收集tags的逻辑
        ],
      },
    },
  ],
}
