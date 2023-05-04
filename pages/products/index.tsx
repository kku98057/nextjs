import type { AppProps } from "next/app";
import Card from "../../components/card";
import UseAxios from "../../hooks/useAxios";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { GetProductResult } from "../../types";
import { GetStaticProps, NextPage } from "next";
import { Product } from "../../types";
import Lists from "../../components/Lists";
import Head from "next/head";
import Link from "next/link";

const ProductPage: NextPage<{ products: Product[] }> = ({ products }: any) => {
  return (
    <>
      <Head>
        <title>프로덕트</title>
      </Head>
      <section>
        <div className="container w-full m-auto max-w-7xl mt-[30px]">
          <Lists>
            {products.map((li: any, idx: number) => (
              <Card key={`${li.id}`}>
                <Link href="/products/[id]" as={`/products/${li.id}`}>
                  <div className="flex flex-col items-center justify-center gap-7">
                    <div className="w-full">
                      <img
                        src={li.image_link}
                        alt={li.image_link}
                        className="w-full"
                      />
                    </div>
                    <div className="datas">
                      <h3 className="text-sm text-center h-[40px]">
                        {li.name}
                      </h3>
                      <div className="flex items-center justify-between mt-[15px]">
                        <span>{li.brand}</span>
                        <span>${li.price}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </Lists>
        </div>
      </section>
    </>
  );
};

export default ProductPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await UseAxios();
  return {
    props: {
      products: data,
    },
  };
};

{
  /* [
  {
    "id": 495,
    "brand": "maybelline",
    "name": "Maybelline Face Studio Master Hi-Light Light Booster Bronzer",
    "price": "14.99",
    "price_sign": null,
    "currency": null,
    "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png",
    "product_link": "https://well.ca/products/maybelline-face-studio-master_88837.html",
    "website_link": "https://well.ca",
    "description": "Maybelline Face Studio Master Hi-Light Light Boosting bronzer formula has an expert \nbalance of shade + shimmer illuminator for natural glow. Skin goes \nsoft-lit with zero glitz.\n\n\t\tFor Best Results: Brush over all shades in palette and gently sweep over \ncheekbones, brow bones, and temples, or anywhere light naturally touches\n the face.\n\n\t\t\n\t\n\n                    ",
    "rating": 5.0,
    "category": null,
    "product_type": "bronzer",
    "tag_list": [
      
    ],
    "created_at": "2016-10-01T18:36:15.012Z",
    "updated_at": "2017-12-23T21:08:50.624Z",
    "product_api_url": "http://makeup-api.herokuapp.com/api/v1/products/495.json",
    "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/495/original/open-uri20171223-4-9hrto4?1514063330",
    "product_colors": [
      
    ]
  }
  ] 
   */
}
