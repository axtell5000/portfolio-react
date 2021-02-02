export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string"
    },
    {
      name: "date",
      type: "datetime"
    },
    {
      name: "description",
      type: "text"
    },
    {
      title: "Site URL",
      name: "siteUrl",
      type: "url"
    },
    {
      title: "Github URL",
      name: "githubUrl",
      type: "url"
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: "tags",
      type: "array",
      of: [
        {
          type: "string"
        }
      ]
    }
  ]
}