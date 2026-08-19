import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { blogPosts, type BlogPost } from "./posts";

export function BlogArticle({ post }: { post: BlogPost }) {
  return <>
    <SiteHeader />
    <main className="blogArticlePage">
      <article className="blogArticle">
        <h1>{post.title}</h1>
        <p className="blogMeta">by <strong>Your Arizona Commercial Building Inspectors</strong> <span>|</span> {post.date} <span>|</span> Uncategorized</p>
        {post.sections.map((section, index) => <section key={`${post.slug}-${index}`}>
          {section.heading && <h2>{section.heading}</h2>}
          {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
        </section>)}
      </article>
      <aside className="recentPosts"><h2>Recent Posts</h2>{blogPosts.map((item) => <Link href={`/${item.slug}/`} key={item.slug}>{item.title}</Link>)}</aside>
    </main>
    <SiteFooter />
  </>;
}
