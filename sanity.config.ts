/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {
  apiVersion,
  dataset,
  DRAFT_MODE_ROUTE,
  previewSecretId,
  projectId,
} from 'lib/sanity.api'
import { previewDocumentNode } from 'plugins/previewPane'
import { settingsPlugin, settingsStructure } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
// import {scheduledPublishing} from '@sanity/scheduled-publishing'
import { previewUrl } from 'sanity-plugin-iframe-pane/preview-url'
import authorType from 'schemas/author'
import postType from 'schemas/post'
import settingsType from 'schemas/settings'
// import categoryType from 'schemas/category'
import tagtype from 'schemas/tag'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Idealistic world studio'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [authorType, postType, tagtype, settingsType],
  },
  plugins: [
    deskTool({
      structure: settingsStructure(settingsType),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode(),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    settingsPlugin({ type: settingsType.name }),
    // Add the "Open preview" action
    previewUrl({
      base: DRAFT_MODE_ROUTE,
      urlSecretId: previewSecretId,
      matchTypes: [postType.name, settingsType.name],
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    //schedule plugin
    // scheduledPublishing(),
    colorInput(),

  ],
})
