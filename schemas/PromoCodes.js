export default {
  name: 'promoCodes',
  title: 'Promo Codes',
  type: 'document',
  preview: {
    select: {
      title: 'code'
    }
  },
  fields: [
    {
      name: 'code',
      title: 'Coupon Code',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'trialLength',
      title: 'Trial Length',
      validation: Rule => Rule.required(),
      type: 'number'
    }
  ]
}
