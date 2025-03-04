import { COLLECTION_SLUGS } from '@/constants/collectionSlugs'
import type { CollectionConfig } from 'payload'

export const AdminUsers: CollectionConfig = {
  slug: COLLECTION_SLUGS.ADMIN_USERS,
  labels: {
    singular: '管理员',
    plural: '管理员',
  },
  admin: {
    useAsTitle: 'email',
    group: '用户数据',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
