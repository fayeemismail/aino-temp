import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

export const blogImageUrl = (rawUrl: string, width: number = 1200) =>
  `${rawUrl}?w=${width}&auto=format&q=100&fit=max`;