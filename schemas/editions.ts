import {DocumentPdfIcon} from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'editions',
  title: 'Editions',
  icon: DocumentPdfIcon,
  type: 'file',
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (rule) => rule.required(),
       
    }), 
    defineField({
        name: 'description',
        title: 'Description',
        type: 'string',
       
    }), 
  ]
})
