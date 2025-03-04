import { COLLECTION_SLUGS } from '@/constants/collectionSlugs'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: COLLECTION_SLUGS.USERS,
  labels: {
    singular: '用户',
    plural: '用户',
  },
  admin: {
    useAsTitle: 'email',
    group: '用户数据',
  },
  auth: true,
  fields: [
    {
      name: 'avatar',
      type: 'upload',
      relationTo: COLLECTION_SLUGS.MEDIA,
    },
    {
      name: 'personalPage',
      type: 'text',
    },
    {
      name: 'createdRules',
      type: 'join',
      collection: COLLECTION_SLUGS.RULES,
      on: 'creator',
      hasMany: true,
    },
    {
      name: 'favoriteRules',
      type: 'join',
      collection: COLLECTION_SLUGS.FAVORITES,
      on: 'user',
      hasMany: true,
    }
  ],
}
