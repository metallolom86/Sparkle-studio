export default {
  name: "productCategories",
  title: "Product Categories",
  description:
    "Categories of products that appear on the outward facing Sparkle Stories store.",
  type: "document",
  preview: {
    select: {
      title: "title"
    }
  },
  fields: [
    {
      name: "title",
      title: "Category Title",
      validation: Rule => Rule.required(),
      type: "string"
    },
    {
      name: "slug",
      title: "Category Slug",
      validation: Rule => Rule.required(),
      type: "slug",
      options: {
        source: "title"
      }
    },
    {
      name: "logo",
      title: "Thumbnail Image",
      validation: Rule => Rule.required(),
      type: "image"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    }
  ]
};
