import BlogLeftRightbar from "@/components/blogs/BlogLeftRightbar";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import React from "react";
import Link from "next/link";
export const metadata = {
  title: "Blog Sidebar Right || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <Header2 />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <div className="heading text-center">Blog Sidebar Right</div>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>
                  <i className="icon-arrow-right" />
                </li>
                <li>Fashion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <BlogLeftRightbar />

      <Footer1 />
    </>
  );
}
