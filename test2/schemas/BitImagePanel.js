export default {
  name: 'BitImagePanel',
  title: 'Bit: Image Panel',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      validation: Rule => Rule.required(),
      type: 'image'
    }
  ]
}
