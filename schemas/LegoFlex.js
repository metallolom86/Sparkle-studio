export default {
  name: 'legoFlex',
  title: 'LEGO: Panels',
  type: 'document',
  preview: {
    select: {
      title: 'internalName'
    }
  },
  fields: [
    {
      name: 'internalName',
      title: 'Internal Name',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'panels',
      title: 'Panels',
      validation: Rule => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'bitImagePanel'
            },
            {
              type: 'bitTextPanel'
            }
          ]
        }
      ]
    }
  ]
}
