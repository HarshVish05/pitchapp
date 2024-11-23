import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`*[_type == 'startup' && defined(slug.current)]{
  _id, 
  title, 
  description, 
    author -> {
      _id, name, slug, bio, image
    }, 
    views,
    _createdAt, 
    slug, 
    category, 
    image
}
`)