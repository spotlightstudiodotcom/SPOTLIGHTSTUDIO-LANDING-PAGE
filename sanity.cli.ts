/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({ api: { projectId, dataset } })
export const client = createClient({
    projectId: projectId,
    dataset: dataset,
    useCdn: true,
    apiVersion: '2023-05-03',
  })
  
  const builder = imageUrlBuilder(client)
  
  export function urlFor(source: SanityImageSource) {
    return builder.image(source)
  }
  