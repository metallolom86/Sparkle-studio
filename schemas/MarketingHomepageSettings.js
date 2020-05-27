export default {
  name: "marketingHomepageSettings",
  title: "Marketing Homepage Settings",
  type: "document",
  preview: {
    select: {
      title: "title"
    }
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "alertBannerCopy",
      title: "Alert Banner Copy",
      type: "string"
    },
    {
      name: "alertBannerColor",
      title: "Alert Banner Color",
      type: "string",
      options: {
        list: ["Orange", "Teal"],
        layout: "dropdown"
      }
    },
    {
      name: "alertBannerStartDate",
      title: "Alert Banner Start Date",
      type: "datetime"
    },
    {
      name: "alertBannerEndDate",
      title: "Alert Banner End Date",
      type: "datetime"
    },
    {
      name: "heroSlides",
      title: "Hero Slides",
      validation: Rule => Rule.required(),
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "marketingHomepageHeroSlides"
            }
          ]
        }
      ]
    },
    {
      name: "jumbotronImage",
      title: "Jumbotron Image",
      type: "file"
    },
    {
      name: "video",
      title: "Jumbotron Video",
      type: "url"
    },
    {
      name: "jumbotronVideoPoster",
      title: "Jumbotron Video Poster",
      type: "file"
    },
    {
      name: "jumbotronTitle",
      title: "Jumbotron Title",
      type: "string"
    },
    {
      name: "jumbotronSubtext",
      title: "Jumbotron Subtext",
      type: "array",
      of: [
        {
          type: "block"
        },
        {
          type: "image"
        }
      ]
    },
    {
      name: "jumbotronButtonText",
      title: "Jumbotron Button Text",
      type: "string"
    },
    {
      name: "jumbotronButtonUrl",
      title: "Jumbotron Button Url",
      type: "url"
    },
    {
      name: "marketingBanner",
      title: "Marketing Banner",
      type: "reference",
      to: [
        {
          type: "appDownloadBanner"
        },
        {
          type: "marketingBanner"
        },
        {
          type: "marketingHomepageSettings"
        }
      ]
    },
    {
      name: "trialBanner",
      title: "Trial Banner",
      type: "reference",
      to: [
        {
          type: "marketingHomepageSettings"
        }
      ]
    },
    {
      name: "featureBanner",
      title: "Feature Banner",
      type: "reference",
      to: [
        {
          type: "featureBanner"
        },
        {
          type: "marketingHomepageSettings"
        }
      ]
    },
    {
      name: "appDownloadBanner",
      title: "App Download Banner",
      type: "reference",
      to: [
        {
          type: "appDownloadBanner"
        },
        {
          type: "marketingHomepageSettings"
        }
      ]
    },
    {
      name: "featuredStory",
      title: "Featured Story",
      type: "reference",
      to: [
        {
          type: "story"
        }
      ]
    },
    {
      name: "featuredStoryDescription",
      title: "Featured Story Description",
      type: "array",
      of: [
        {
          type: "block"
        },
        {
          type: "image"
        }
      ]
    },
    {
      name: "left50BannerCta",
      title: "Left 50% Banner CTA",
      validation: Rule => Rule.required(),
      type: "array",
      of: [
        {
          type: "block"
        },
        {
          type: "image"
        }
      ]
    },
    {
      name: "right50BannerCta",
      title: "Right 50% Banner CTA",
      validation: Rule => Rule.required(),
      type: "array",
      of: [
        {
          type: "block"
        },
        {
          type: "image"
        }
      ]
    },
    {
      name: "sampleStoriesSubhead",
      title: "Sample Stories: Subhead",
      type: "string"
    },
    {
      name: "sampleStoriesHeadline",
      title: "Sample Stories: Headline",
      type: "string"
    },
    {
      name: "sampleStories",
      title: "Sample Stories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "homepageSampleStories"
            }
          ]
        }
      ]
    },
    {
      name: "marketingBanner1",
      title: "Marketing Banner 1",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "marketingBanner"
            }
          ]
        }
      ]
    },
    {
      name: "sampleBlogPostsSubhead",
      title: "Sample Blog Posts: Subhead",
      type: "string"
    },
    {
      name: "sampleBlogPostsHeadline",
      title: "Sample Blog Posts: Headline",
      type: "string"
    },
    {
      name: "featuredCrafts",
      title: "Featured Crafts",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "blogPost"
            }
          ]
        }
      ]
    },
    {
      name: "featuredRecipes",
      title: "Featured Recipes",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "blogPost"
            }
          ]
        }
      ]
    },
    {
      name: "featuredActivities",
      title: "Featured Activities",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "blogPost"
            }
          ]
        }
      ]
    },
    {
      name: "testimonialsSectionTitle",
      title: "Testimonials Section Title",
      type: "string"
    },
    {
      name: "featuredTestimonials",
      title: "Featured Testimonials",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "featuredTestimonials"
            }
          ]
        }
      ]
    },
    {
      name: "marketingBanner2",
      title: "Marketing Banner 2",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "marketingBanner"
            }
          ]
        }
      ]
    }
  ]
};
