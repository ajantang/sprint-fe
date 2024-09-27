"use client";

import Image from "next/image";
import classNames from "classnames";
import { FAVORITE_CLASSES } from "../constants/Favorite";

import {
  addFavoriteProduct,
  removeFavoriteProduct,
} from "@/lib/api-codeit-product";

const SRCS = ["/icons/ic_heart_empty_small.svg", "/icons/ic_heart_full.svg"];

export default function Favorite({
  type,
  myFavorite = 0,
  favoriteCount,
  objectId,
}) {
  const favoriteClass = classNames(
    "flex",
    "flex-row",
    "items-center",
    "border-box",
    FAVORITE_CLASSES[type].favorite
  );
  const favoriteCountClass = classNames(
    "flex",
    "flex-row",
    "items-center",
    "font-normal",
    "text-gray-500",
    FAVORITE_CLASSES[type].count
  );
  const heartImgFrameClass = classNames(
    "relative",
    FAVORITE_CLASSES[type].heart
  );
  const favoriteCountText = favoriteCount < 9999 ? favoriteCount : "9999+";

  // 임시로 함수 배열 형식으로 favorite 처리. 컴포넌트를 나누거나, 다른 방식으로 고려 중
  const TOOGLE_FAVORITE = [[], [addFavoriteProduct, removeFavoriteProduct]];

  const handleClickHeart = () => {
    TOOGLE_FAVORITE[Math.floor(Number(myFavorite) / 3)]
      [Number(myFavorite)](objectId)
      .then((data) => {
        myFavorite = data.isFavorite;
      });
  };

  return (
    <div className={favoriteClass}>
      <button onClick={handleClickHeart}>
        <div className={heartImgFrameClass}>
          <Image src={SRCS[Number(myFavorite)]} fill />
        </div>
      </button>
      <div className={favoriteCountClass}>{favoriteCountText}</div>
    </div>
  );
}
