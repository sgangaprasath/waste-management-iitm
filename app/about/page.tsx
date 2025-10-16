import fs from "fs";
import Image from "next/image";
import Markdown from "markdown-to-jsx";
import ReactMarkdown from 'react-markdown';
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "blog/";
  const file = `${folder}about.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="max-w-5xl mt-32">
      <article className="prose prose-stone max-w-none scroll-smooth dark:prose-invert">
        <ReactMarkdown>
        {/* <Markdown> */}
          {post.content}
        {/* </Markdown> */}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default PostPage;
