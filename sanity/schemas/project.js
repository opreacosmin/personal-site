export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'logoImage',
            title: 'Logo Image',
            type: 'image',
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'slug',
            title: 'Slug(doar apasa pe generate)',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90.
            }
        },
        {
            name: 'descriere',
            title: 'Descriere',
            type: 'string',
        },
        {
            name: 'details',
            title: 'Detalii',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'category',
            title: 'Categorie',
            type: 'string',
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string',
        },

    ]
}