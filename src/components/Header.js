import "../assets/styles/header.css";
import tempProfileImg from "../assets/images/ic_profile40.svg";

export function Header() {
  const tempIsSignin = true;
  // const tempProfileImg = "../assets/images/ic_profile40.svg";

  return (
    <header>
      <a className="header__btn-home-frame" href="/" target="_self">
        <span>
          <img className="header__img-home" alt="홈 버튼" />
        </span>
      </a>
      <nav className="header__navi">
        <ul className="header__list">
          <li className="Text-2lg Bold header__list-item">자유게시판</li>
          <li className="Text-2lg Bold header__list-item">중고마켓</li>
        </ul>
      </nav>
      {tempIsSignin ? (
        <img
          className="header__btn-profile"
          src={tempProfileImg}
          alt="프로필 그림"
        />
      ) : (
        <a className="header__btn-login-frame" href="/login" target="_self">
          <span>
            <img className="header__img-login" alt="로그인 버튼" />
          </span>
        </a>
      )}
    </header>
  );
}

export default Header;
