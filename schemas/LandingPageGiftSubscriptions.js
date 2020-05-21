export default {
  name: 'landingPageGiftSubscriptions',
  title: 'Landing Page - Gift Subscriptions',
  description:
    'Page for customers to send a free gift subscription to an email address. Also includes a Landing Page Slide Show reference',
  type: 'document',
  preview: {
    select: {
      title: 'headline'
    }
  },
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      validation: Rule => Rule.required(),
      type: 'slug',
      options: {
        source: 'headline'
      }
    },
    {
      name: 'headline',
      title: 'Headline',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'subhead',
      title: 'Subhead',
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
      name: 'giftSubscriptionCode',
      title: 'Gift Subscription Code',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'headline2',
      title: 'Headline 2',
      type: 'string'
    },
    {
      name: 'subhead2',
      title: 'Subhead 2',
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
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'landingPageSlide'
            }
          ]
        }
      ]
    },
    {
      name: 'footerCopy',
      title: 'Footer Copy',
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
      name: 'footerCtaCopy',
      title: 'Footer CTA Copy',
      type: 'string'
    },
    {
      name: 'footerCtaUrl',
      title: 'Footer CTA URL',
      type: 'url'
    }
  ]
}
