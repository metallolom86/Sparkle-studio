export default {
  name: '6XwpTaSiiI2Ak2Ww0oi6qa',
  title: 'Blog Category',
  description: 'e.g. “Nature School” or “Sparkle Crafts”',
  type: 'document',
  preview: {
    select: {
      title: 'name'
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Category Title',
      validation: Rule => Rule.required(),
      hidden: true,
      type: 'text'
    },
    {
      name: 'name',
      title: 'Name',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      validation: Rule => Rule.required(),
      type: 'slug',
      options: {
        source: 'name'
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image'
        }
      ]
    },
    {
      name: 'icon',
      title: 'Catgory Icon',
      type: 'file'
    },
    {
      name: 'categoryIconSvg',
      title: 'Category Icon Svg',
      hidden: true,
      type: 'file'
    },
    {
      name: 'categoryIconIos',
      title: 'Category Icon IOS',
      hidden: true,
      type: 'image'
    },
    {
      name: 'showInSidebar',
      title: 'Show in Sidebar',
      validation: Rule => Rule.required(),
      type: 'boolean'
    }
  ]
}
