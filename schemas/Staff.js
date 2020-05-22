export default {
  name: "staff",
  title: "Staff",
  type: "document",
  preview: {
    select: {
      title: "name"
    }
  },
  fields: [
    {
      name: "featuredStaff",
      title: "Featured Staff",
      type: "boolean"
    },
    {
      name: "image",
      title: "Image",
      type: "image"
    },
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string"
    }
  ]
};
