// @ts-nocheck
import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields: import("contentlayer/source-files").ComputedFields = {
  slug: {
    type: "string",
    resolve: (topic: { _raw: { flattenedPath: any } }) => `/topics/${topic._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (topic: { _raw: { flattenedPath: string } }) =>
      topic._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

const Topic = defineDocumentType(() => ({
  name: "Topic",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the topic",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the topic",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the topic",
      required: true,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "topics",
  documentTypes: [Topic],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node: { children: string | any[] }) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          },
          onVisitHighlightedLine(node: { properties: { className: string[] } }) {
            node.properties.className.push("line--highlighted")
          },
          onVisitHighlightedWord(node: { properties: { className: string[] } }) {
            node.properties.className = ["word--highlighted"]
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
})
