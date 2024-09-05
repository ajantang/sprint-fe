import Link from "next/link";

import { Nav, NavItem } from "@/components/ui/Nav";
import Profile from "@/components/ui/Profile";

import style from "@/components/layout/header.module.css";

export function Header() {
  const tempIsSignin = false;

  const handleProfileClick = () => {
    alert("아직 구현되지 않은 기능입니다");
  };

  return (
    <div className={style.header}>
      {/* <a className={header__btn-home-frame" href="/" target="_self">
        <span>
          <img className={header__img-home" alt="홈 버튼" />
        </span>
      </a> */}
      <Link className={style["header__btn-home-frame"]} href="/">
        <img className={style["header__img-home"]} alt="홈 버튼" />
      </Link>
      <Nav>
        <NavItem linkto="/freeBoard">자유게시판</NavItem>
        <NavItem linkto="/fleaMarket">중고마켓</NavItem>
      </Nav>
      {tempIsSignin ? (
        <Profile onClick={handleProfileClick} />
      ) : (
        <Link
          className={style["header__btn-login-frame"]}
          href="/login"
          target="_self"
        >
          <span>
            <img className={style["header__img-login"]} alt="로그인 버튼" />
          </span>
        </Link>
      )}
    </div>
  );
}

export default Header;
