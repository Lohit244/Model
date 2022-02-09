/**
 * A Mongoose schema for a blog post.
 * @param title - The title of the blog post.
 * @param author - The author of the blog post.
 * @param content - The content of the blog post.
 * @param category - The category of the blog post. Belongs to -{
 * * Media Report
 * * Site Report
 * * Editorial
 * }
 * @param createdAt - The time of blog post
 * @param tags - The tags of the blog post
 * @param thumbnail - The url of the thumbnail for the blog post
 * @param likes - The number of likes for the blog post
 * @returns None
 */
const blogSchema = {

  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: false,
    default: Date.now(),
  },
  tags: {
    type: Array,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  }
}


module.exports = blogSchema
