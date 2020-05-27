export default {
  name: "legoTestimonialSlider",
  title: "LEGO: Testimonial Slider",
  description: "Slider with user's feedback",
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
      name: "style",
      title: "Style",
      type: "reference",
      to: [
        {
          type: "products"
        },
        {
          type: "series"
        },
        {
          type: "blogCategory"
        },
        {
          type: "age"
        },
        {
          type: "topic"
        },
        {
          type: "productCategories"
        },
        {
          type: "collection"
        },
        {
          type: "story"
        },
        {
          type: "characters"
        },
        {
          type: "blogPost"
        },
        {
          type: "contributor"
        },
        {
          type: "season"
        },
        {
          type: "blogSettings"
        },
        {
          type: "homeScreenFeatures"
        },
        {
          type: "storeSettings"
        },
        {
          type: "marketingHomepageSettings"
        },
        {
          type: "marketingBanner"
        },
        {
          type: "appDownloadBanner"
        },
        {
          type: "featureBanner"
        },
        {
          type: "trialBanner"
        },
        {
          type: "aboutPageSettings"
        },
        {
          type: "staff"
        },
        {
          type: "fAQ"
        },
        {
          type: "fAQCategories"
        },
        {
          type: "fAQSettings"
        },
        {
          type: "contactPageSettings"
        },
        {
          type: "mobileSettings"
        },
        {
          type: "textPageTemplate"
        },
        {
          type: "giftSubscription"
        },
        {
          type: "promoSubscriptions"
        },
        {
          type: "promoCodes"
        },
        {
          type: "seriesSettings"
        },
        {
          type: "collectionSettings"
        },
        {
          type: "blogTextAndMedia"
        },
        {
          type: "landingPageGiftSubscriptions"
        },
        {
          type: "landingPageSlide"
        },
        {
          type: "landingPageCampaignPage"
        },
        {
          type: "landingPageStory"
        },
        {
          type: "marketingHomepageHeroSlides"
        },
        {
          type: "featuredTestimonials"
        },
        {
          type: "homepageSampleStories"
        },
        {
          type: "legoFeaturedCollection"
        },
        {
          type: "legoItemsGrid"
        },
        {
          type: "legoPage"
        },
        {
          type: "metadata"
        },
        {
          type: "legoPromoBanner"
        },
        {
          type: "legoTestimonial"
        },
        {
          type: "style"
        },
        {
          type: "color"
        },
        {
          type: "legoMarketingHero"
        },
        {
          type: "bitTextPanel"
        },
        {
          type: "bitImagePanel"
        },
        {
          type: "legoPanels"
        },
        {
          type: "legoSignup"
        },
        {
          type: "legoMarketingContent"
        },
        {
          type: "legoSimpleHeader"
        },
        {
          type: "legoSimpleText"
        },
        {
          type: "legoTeam"
        },
        {
          type: "legoAudioStories"
        },
        {
          type: "legoFreeItemsGrid"
        },
        {
          type: "legoTestimonialSlider"
        },
        {
          type: "legoAppInfo"
        },
        {
          type: "legoMarketingHeroFooter"
        },
        {
          type: "audioStoryItem"
        },
        {
          type: "legoMarketingHeroSlider"
        },
        {
          type: "successCancelationDialog"
        },
        {
          type: "test1"
        }
      ]
    },
    {
      name: "legOs",
      title: "LEGOs",
      validation: Rule => Rule.required(),
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "legoMarketingHero"
            },
            {
              type: "legoTestimonial"
            }
          ]
        }
      ]
    },
    {
      name: "autoplaySpeed",
      title: "Autoplay speed",
      type: "number"
    },
    {
      name: "autoplay",
      title: "Autoplay",
      validation: Rule => Rule.required(),
      type: "boolean"
    },
    {
      name: "dots",
      title: "Dots",
      type: "boolean"
    },
    {
      name: "infinite",
      title: "Infinite",
      validation: Rule => Rule.required(),
      type: "boolean"
    },
    {
      name: "speed",
      title: "Speed",
      validation: Rule => Rule.required(),
      type: "number"
    },
    {
      name: "slidesToShow",
      title: "Slides to show",
      validation: Rule => Rule.required(),
      type: "number"
    },
    {
      name: "slidesToScroll",
      title: "Slides to scroll",
      type: "number"
    },
    {
      name: "fade",
      title: "Fade",
      validation: Rule => Rule.required(),
      type: "boolean"
    }
  ]
};
