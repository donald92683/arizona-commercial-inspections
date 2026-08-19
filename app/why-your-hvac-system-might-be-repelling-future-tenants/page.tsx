import type { Metadata } from "next";
import { BlogArticle } from "../blog/BlogArticle";
import { getBlogPost } from "../blog/posts";
const post = getBlogPost("why-your-hvac-system-might-be-repelling-future-tenants")!;
export const metadata: Metadata = { title: `${post.title} - Arizona Commercial Property Inspections`, description: post.excerpt, openGraph: { title: post.title, description: post.excerpt, images: [] }, twitter: { title: post.title, description: post.excerpt, images: [] } };
export default function Page() { return <BlogArticle post={post} />; }
