import { BookIcon, LinkIcon, DocumentTextIcon, DocumentPdfIcon} from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'


import authorType from './author'
import tagType from './tag'
// import categoryType from './category'

export default defineType({
  name: 'post',
  title: 'Post',
  icon: BookIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
            { title: 'Fancy Quote', value: 'fancy-quote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'numbered' },
            { title: 'Checkbox', value: 'checkbox' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                icon: LinkIcon,
                fields: [
                  {
                    name: 'Enter Link',
                    type: 'url',
                    validation: (Rule) =>
                      Rule.uri({
                        allowRelative: false,
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Image caption',
              description: 'Caption displayed below the image.',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility.',
            },
          ],
        },
        {
          type: 'object',
          name: 'audio',
          title: 'Audio',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'file',
              title: 'Audio File',
              type: 'file',
              options: {
                accept: 'audio/*',
              },
              validation: (rule) => rule.required(),
            },
          ],
        },
        {
          type: "object",
          name: "embeddedFile",
          title: "File",
          icon: DocumentPdfIcon,
          fields: [
            {
              name: "file",
              type: "file",
              title: "File Attachment",
              validation: (rule) => rule.required(),
            },
            {
              name: "fileName",
              type: "string",
              title: "File Name",
            },
            {
              name: "shouldRenderPdf",
              type: "boolean",
              title: "Render PDF",
              description: "If the file is a PDF, display it on the page.",
              initialValue: true,
            },
            {
              name: "pdfHeight",
              type: "number",
              title: "PDF Display Height",
              description:
                "Height for the PDF display, leave empty for auto scaling.",
              hidden: ({ parent }) => !parent?.shouldRenderPdf,
              validation: (rule) => rule.max(5000).min(50),
            },
          ],
        },
      ],
    }),
    
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: authorType.name }],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: tagType.name }] }],
    }),
    
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      date: 'date',
      media: 'coverImage',
    },
    prepare({ title, media, author, date }) {
      const subtitles = [
        author && `by ${author}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})
