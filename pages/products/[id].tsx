import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Product } from "../../types";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";

const PorductDetail: NextPage<{ items: Product[] }> = ({ items }: any) => {
  const [stars, setStars]: any = useState([]);

  useEffect(() => {
    setStars(() => {
      return [...Array(Math.floor(items.rating))].map((item, idx) => ({
        id: idx,
      }));
    });
  }, [items.rating]);

  return (
    <div className="">
      <div className="flex flex-col">
        <Image
          src={items.image_link}
          alt={items.name}
          width={400}
          height={400}
        ></Image>
        <span>{items.name}</span>

        <div>
          <span>
            가격 ${new Intl.NumberFormat("es-US").format(items.price)}
          </span>
          {items.rating ? (
            <span className="flex items-center">
              평점
              {stars?.map((item: number, idx: number) => (
                <span key={`${item}_${idx}`}>
                  <AiFillStar />
                </span>
              ))}
              {items.rating}점
            </span>
          ) : (
            ""
          )}
        </div>
        <span>{items.description}</span>
      </div>
    </div>
  );
};
export default PorductDetail;
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.params;
  const { data } = await axios.get(
    `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
  );

  return {
    props: {
      items: data,
    },
  };
};
