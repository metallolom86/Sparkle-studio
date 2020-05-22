export default {
  name: "topic",
  title: "Topic",
  description: "Topics under which stories can be categorized.",
  type: "document",
  preview: {
    select: {
      title: "title"
    }
  },
  fields: [
    {
      name: "title",
      title: "Topic Title",
      validation: Rule => Rule.required(),
      type: "string"
    },
    {
      name: "slug",
      title: "Topic Slug",
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
