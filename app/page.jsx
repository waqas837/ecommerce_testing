import Features from "@/components/common/Features";
import ShopGram from "@/components/common/ShopGram";
import Testimonials from "@/components/common/Testimonials";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Brands from "@/components/homes/home-1/Brands";

import Categories from "@/components/homes/home-1/Categories";

import Hero from "@/components/homes/home-1/Hero";
import Lookbook from "@/components/homes/home-1/Lookbook";
import Marquee from "@/components/homes/home-1/Marquee";
import Products from "@/components/homes/home-1/Products";

export const metadata = {
  title: "Home 1 || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function Home() {
  return (
    <>
      <Topbar1 />
      <Header1 />
      <Hero />
      <Marquee />
      <Categories />
      <Products />
      <Lookbook />
      <Testimonials />
      <Brands />
      <ShopGram />
      <Features />
      <Footer1 />
    </>
  );
}
