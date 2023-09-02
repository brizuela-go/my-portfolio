const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Project Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 40 },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          type: "object",
          name: "technology",
          title: "Technology",
          fields: [
            { type: "string", name: "name", title: "Name" },
            { type: "url", name: "url", title: "URL" },
            { type: "image", name: "image", title: "Image" },
          ],
        },
      ],
    },
  ],
};

export default project;
