import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 'category',
      title: 'Category Name',
      type: 'string',
    }),
    defineField({
      name: 'portfolio',
      title: 'Portfolio Item',
      type: 'array',
      of: [
        defineField({
          name: 'images',
          title: 'Image / GIF',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'source',
              title: 'Source',
              type: 'image',
            }),
          ],
        }),
        defineField({
          name: 'video',
          title: 'Video',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'source',
              title: 'Source',
              type: 'file',
            }),
          ],
        }),
      ],
    }),
  ],
})
