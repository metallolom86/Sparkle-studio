export default {
  name: 'aboutPageSettings',
  title: 'About Page Settings',
  type: 'document',
  preview: {
    select: {
      title: 'heroHeadline'
    }
  },
  fields: [
    {
      name: 'jumbotronImage',
      title: 'Jumbotron Image',
      type: 'file'
    },
    {
      name: 'jumbotronText',
      title: 'Jumbotron Text',
      type: 'string'
    },
    {
      name: 'jumbotronSubtext',
      title: 'Jumbotron Subtext',
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
      name: 'introTitle',
      title: 'Intro Title',
      type: 'string'
    },
    {
      name: 'introSubtext',
      title: 'Intro Subtext',
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
      name: 'teamTitle',
      title: 'Team Title',
      type: 'string'
    },
    {
      name: 'teamSubtext',
      title: 'Team Subtext',
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
      name: 'teamBackground',
      title: 'Team Background',
      type: 'file'
    },
    {
      name: 'trialBanner',
      title: 'Trial Banner',
      type: 'reference',
      to: [
        {
          type: 'trialBanner'
        }
      ]
    },
    {
      name: 'staff',
      title: 'Staff',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'staff'
            }
          ]
        }
      ]
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
      type: 'string'
    },
    {
      name: 'heroBackgroundImage',
      title: 'Hero Background Image',
      validation: Rule => Rule.required(),
      type: 'image'
    },
    {
      name: 'introSubhead',
      title: 'Intro Subhead',
      type: 'string'
    },
    {
      name: 'introHeadline',
      title: 'Intro Headline',
      type: 'string'
    },
    {
      name: 'introCopy',
      title: 'Intro Copy',
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
      name: 'introTestimonial',
      title: 'Intro Testimonial',
      validation: Rule => Rule.required(),
      type: 'text'
    },
    {
      name: 'introTestimonialAuthorName',
      title: 'Intro Testimonial: Author Name',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'introTestimonialAuthorHomeState',
      title: 'Intro Testimonial: Author Home State',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'marketingSectionSubhead',
      title: 'Marketing Section Subhead',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'marketingSectionHeadline',
      title: 'Marketing Section Headline',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'marketingSectionCopy',
      title: 'Marketing Section Copy',
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
      name: 'marketingSectionBackgroundImage',
      title: 'Marketing Section Background Image',
      validation: Rule => Rule.required(),
      type: 'image'
    },
    {
      name: 'marketingSectionBackgroundImageMobile',
      title: 'Marketing Section Background Image Mobile',
      validation: Rule => Rule.required(),
      type: 'image'
    },
    {
      name: 'teamSubhead',
      title: 'Team Subhead',
      type: 'string'
    },
    {
      name: 'teamHeadline',
      title: 'Team Headline',
      type: 'string'
    },
    {
      name: 'leadership',
      title: 'Leadership',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'staff'
            }
          ]
        }
      ]
    },
    {
      name: 'team',
      title: 'Team',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'staff'
            }
          ]
        }
      ]
    },
    {
      name: 'marketingRotator',
      title: 'Marketing Rotator',
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
    }
  ]
}
