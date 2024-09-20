"use client";

import Link from "next/link";
import classNames from "classnames";

import Profile from "@/app/components/Profile";
import { PROFILE_H40 } from "../constants/Profile";

import style from "./header-user.module.css";

function BtnLogin() {
  const btnSignInClass = classNames(
    "w-btn-sign-in",
    "h-btn-sign-in",
    "object-cover",
    style["btn-login"]
  );

  return (
    <Link href="/login" target="_self">
      <button className={btnSignInClass} />
    </Link>
  );
}

export function HeaderUser() {
  const tempIsSignin = false;

  const handleProfileClick = () => {
    alert("아직 구현되지 않은 기능입니다");
  };

  const result = tempIsSignin ? (
    <Profile type={PROFILE_H40} onClick={handleProfileClick} />
  ) : (
    <BtnLogin />
  );

  return result;
}
