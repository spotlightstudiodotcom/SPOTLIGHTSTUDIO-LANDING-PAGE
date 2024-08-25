export const Card = {
  name: 'card',
  title: 'Card',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
    },
    {
      name: 'mobile',
      title: 'Mobile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};