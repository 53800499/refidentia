/** @format */

import Link from "next/link";
import BlogCard from "./blogCard";
import { blogData } from "../../../mocks/Home/blogData";
import SectionTitle from "@/components/common/sectionTitle";
import Button from "@/components/ui/button";
import ButtonArrow from "@/components/ui/buttonArrow";
import { BLOGS } from "@/constants/wording";

const Blogs = () => {
  const blogs = blogData;
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-x-3 gap-y-5">
          <SectionTitle
            subTitle={BLOGS.SUBTITLE}
            description={BLOGS.DESCRIPTION}>
            {BLOGS.TITLE}
          </SectionTitle>
          <Button
            asChild
            size="lg"
            className="py-1.5 pr-1.5 pl-6 max-sm:w-full">
            <Link href={"/blog"}>
              <span className="w-full text-center">{BLOGS.VIEW_MORE}</span>
              <ButtonArrow />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 pt-11 sm:grid-cols-2 sm:pt-14 lg:grid-cols-3 lg:pt-16">
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
