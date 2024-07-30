import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 'preset',
      title: 'Preset ID',
      description: 'Set the active one as "main" (without quotes)',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Commission Status',
      type: 'string',
    }),
  ],
})
