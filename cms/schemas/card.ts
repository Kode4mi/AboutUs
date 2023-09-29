import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'card',
    title: 'Card',
    type: 'document',
    fields: [
        defineField({
            name: 'index',
            title: 'Index',
            type: 'number',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'description',
            type: 'array',
            title: 'Description',
            of: [{type: 'block'}],
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ]
});
