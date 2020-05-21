export default {
  name: 'bitImagePanel',
  title: 'Bit: Image Panel',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      validation: Rule => Rule.required(),
      type: 'image'
    }
  ]
}
