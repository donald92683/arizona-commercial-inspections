import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { blogPosts } from "./posts";

export const metadata: Metadata = {
  title: "Our Blog - Arizona Commercial Property Inspections",
  description: "Commercial property inspection insights from Arizona Commercial Property Inspections.",
};

export default function BlogPage() {
  return <>
    <SiteHeader />
    <main id="main-content" className="blogPage">
      <section className="blogHero"><div><h1>OUR BLOG</h1></div></section>
      <section className="blogList">{blogPosts.map((post) => <article key={post.slug}>
        <h2><Link href={`/${post.slug}/`} target="_blank" rel="noopener noreferrer">{post.title}</Link></h2>
        <p className="blogMeta">by <strong>Your Arizona Commercial Building Inspectors</strong> <span>|</span> {post.date} <span>|</span> Uncategorized</p>
        <p>{post.excerpt}...</p>
      </article>)}</section>
    </main>
    <SiteFooter />
  </>;
}
