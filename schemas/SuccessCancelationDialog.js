export default {
  name: "successCancelationDialog",
  title: "Success Cancelation Dialog",
  description: "Text fields for cancellation's dialog ",
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
      name: "info",
      title: "info",
      type: "string"
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image"
    },
    {
      name: "successSurveyInfo",
      title: "Success Survey Info",
      type: "string"
    },
    {
      name: "slug",
      title: "slug",
      type: "string"
    }
  ]
};
