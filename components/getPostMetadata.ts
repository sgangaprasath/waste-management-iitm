import fs from "fs";
import path from 'path';
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";

const postsDirectory = path.join(process.cwd(), 'blog');

const getPostMetadata = (): PostMetadata[] => {
  const folder = "blog/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  
  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`blog/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      category: matterResult.data.category,
      author: matterResult.data.author,
      image: matterResult.data.image,
      desig: matterResult.data.desig,
      slug: fileName.replace(".md", ""),
    };
  });

  const updatedpost = posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return updatedpost;
};

export default getPostMetadata;
