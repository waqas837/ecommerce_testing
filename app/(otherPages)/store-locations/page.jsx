import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import StoreLocations from "@/components/othersPages/StoreLocations";
import React from "react";

export const metadata = {
  title: "Store Locations || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <Header2 />
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Store locations</div>
        </div>
      </div>

      <StoreLocations />
      <Footer1 />
    </>
  );
}
