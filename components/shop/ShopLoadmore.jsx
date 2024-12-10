"use client";
import { layouts, sortingOptions } from "@/data/shop";
import ProductGrid from "./ProductGrid";
import { useState } from "react";
import { products1 } from "@/data/products";
import ShopFilter from "./ShopFilter";
import Sorting from "./Sorting";

export default function ShopLoadmore() {
  const [gridItems, setGridItems] = useState(4);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [allproducts, setAllproducts] = useState([...products1]);
  const [products, setProducts] = useState([]);
  const [finalSorted, setFinalSorted] = useState([]);
  const handleLoad = () => {
    setLoading(true);
    setTimeout(() => {
      setAllproducts((pre) => [...pre, ...products1.slice(0, 12)]);
      setLoading(false);
      setLoaded(true);
    }, 1000);
  };
  return (
    <>
      <section className="flat-spacing-2">
        <div className="container">
          <div className="tf-shop-control grid-3 align-items-center">
            <div className="tf-control-filter">
              <a
                href="#filterShop"
                data-bs-toggle="offcanvas"
                aria-controls="offcanvasLeft"
                className="tf-btn-filter"
              >
                <span className="icon icon-filter" />
                <span className="text">Filter</span>
              </a>
            </div>
            <ul className="tf-control-layout d-flex justify-content-center">
              {layouts.map((layout, index) => (
                <li
                  key={index}
                  className={`tf-view-layout-switch ${layout.className} ${
                    gridItems == layout.dataValueGrid ? "active" : ""
                  }`}
                  onClick={() => setGridItems(layout.dataValueGrid)}
                >
                  <div className="item">
                    <span className={`icon ${layout.iconClass}`} />
                  </div>
                </li>
              ))}
            </ul>
            <div className="tf-control-sorting d-flex justify-content-end">
              <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
                <Sorting setFinalSorted={setFinalSorted} products={products} />
              </div>
            </div>
          </div>
          <div className="wrapper-control-shop">
            <div className="meta-filter-shop" />
            <ProductGrid allproducts={finalSorted} gridItems={gridItems} />
            {/* pagination */}
            <div className="tf-pagination-wrap view-more-button text-center tf-pagination-btn">
              {!loaded && (
                <button
                  className={`tf-btn-loading tf-loading-default animate-hover-btn btn-loadmore ${
                    loading ? "loading" : ""
                  } `}
                  onClick={() => handleLoad()}
                >
                  <span className="text">Load more</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      <ShopFilter products={allproducts} setProducts={setProducts} />
    </>
  );
}
