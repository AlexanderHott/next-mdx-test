import createMdx from "@next/mdx";
import rehypeRaw from "rehype-raw";
import remarkExpressiveCode from "remark-expressive-code";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const withMdx = createMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      // The nested array structure is required to pass options
      // to a remark plugin
      remarkExpressiveCode,
    ],
    rehypePlugins: [rehypeRaw],
  },
});

export default withMdx(nextConfig);
