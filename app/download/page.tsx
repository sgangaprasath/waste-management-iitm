import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "blog/";
  const file = `${folder}academic.md`;
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
      <div>
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 pt-10 xl:pt-16 my-4 border-t border-gray-300">
          <div className="relative z-10 mx-auto max-w-3xl space-y-10 text-center">
            <h2 className="text-3xl font-bold lg:text-5xl">
              Fun posters/flyers for your event!
            </h2>
            <div className="flex flex-row items-center justify-between">
            <Link href={'/public/posters/Fun.png'} className="flex flex-col items-center justify-between">
              <button type="button" className="text-white bg-black hover:bg-rose-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 focus:outline-none">Fun poster</button>
            </Link>
            <Link href={'/public/posters/Festivals.png'} className="flex flex-col items-center justify-between">
              <button type="button" className="text-white bg-black hover:bg-rose-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 focus:outline-none">Festivals poster</button>
            </Link> 
            <Link href={'/public/posters/Conference.png'} className="flex flex-col items-center justify-between">
              <button type="button" className="text-white bg-black hover:bg-rose-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 focus:outline-none">Conference poster</button>
            </Link>
            <Link href={'/public/posters/Academic.png'} className="flex flex-col items-center justify-between">
              <button type="button" className="text-white bg-black hover:bg-rose-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 focus:outline-none">Academic Zone</button>
            </Link>
            <Link href={'/public/posters/Hostel.png'} className="flex flex-col items-center justify-between">
              <button type="button" className="text-white bg-black hover:bg-rose-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 focus:outline-none">Hostel Zone</button>
            </Link>
            <Link href={'/public/posters/Residential.png'} className="flex flex-col items-center justify-between">
              <button type="button" className="text-white bg-black hover:bg-rose-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 focus:outline-none">Residential Zone</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
