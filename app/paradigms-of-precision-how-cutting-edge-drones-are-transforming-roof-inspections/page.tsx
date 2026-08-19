import type { Metadata } from "next";
import { BlogArticle } from "../blog/BlogArticle";
import { getBlogPost } from "../blog/posts";
const post = getBlogPost("paradigms-of-precision-how-cutting-edge-drones-are-transforming-roof-inspections")!;
export const metadata: Metadata = { title: `${post.title} - Arizona Commercial Property Inspections`, description: post.excerpt, openGraph: { title: post.title, description: post.excerpt, images: [] }, twitter: { title: post.title, description: post.excerpt, images: [] } };
export default function Page() { return <BlogArticle post={post} />; }
