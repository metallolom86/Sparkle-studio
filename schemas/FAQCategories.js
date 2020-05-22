export default {
  name: "fAQCategories",
  title: "FAQ Categories",
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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title"
      }
    },
    {
      name: "description",
      title: "Description",
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
      name: "faq",
      title: "FAQ",
      hidden: true,
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "fAQ"
            }
          ]
        }
      ]
    }
  ]
};
