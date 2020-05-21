export default {
  name: 'landingPageCampaignPage',
  title: 'Landing Page - Campaign Page',
  type: 'document',
  preview: {
    select: {
      title: 'heroHeadline'
    }
  },
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      validation: Rule => Rule.required(),
      type: 'slug',
      options: {
        source: 'heroHeadline'
      }
    },
    {
      name: 'pageTitle',
      title: 'Page Title',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      validation: Rule => Rule.required(),
      type: 'image'
    },
    {
      name: 'heroSubhead',
      title: 'Hero Subhead',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'heroHeadline',
      title: 'Hero Headline',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'heroParagraph',
      title: 'Hero Paragraph',
      validation: Rule => Rule.required(),
      type: 'text'
    },
    {
      name: 'heroCtaLabel',
      title: 'Hero CTA Label',
      type: 'string'
    },
    {
      name: 'heroCtaUrl',
      title: 'Hero CTA URL',
      type: 'string'
    },
    {
      name: 'heroCtaNote',
      title: 'Hero CTA Note',
      type: 'string'
    },
    {
      name: 'subhead',
      title: 'Subhead',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'headline',
      title: 'Headline',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'stories',
      title: 'Stories',
      validation: Rule => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'landingPageStory'
            }
          ]
        }
      ]
    },
    {
      name: 'notice',
      title: 'Notice',
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
      validation: Rule => Rule.required(),
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
      validation: Rule => Rule.required(),
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
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'footerCtaUrl',
      title: 'Footer CTA URL',
      validation: Rule => Rule.required(),
      type: 'url'
    },
    {
      name: 'socialTitle',
      title: 'Social Title',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'socialDescription',
      title: 'Social Description',
      validation: Rule => Rule.required(),
      type: 'text'
    },
    {
      name: 'socialThumbnail',
      title: 'Social Thumbnail',
      validation: Rule => Rule.required(),
      type: 'image'
    }
  ]
}
