import style from "@/components/layout/footer.module.css";

export function Footer() {
  const companyClass = `Text-lg Regular ${style["footer__text-extra"]} ${style["footer__text-extra--mobile"]}`;
  const textExtraClass = `Text-lg Regular ${style["footer__text-extra"]} ${style["footer__link-texts"]}`;

  return (
    <div className={style.footer}>
      <div className={style["footer__block"]}>
        <div className={companyClass}>©codeit - 2024</div>
        <div className={textExtraClass}>
          <a
            href="/privacy"
            target="_self"
            className={style["footer__link-text"]}
          >
            Privacy Policy
          </a>
          <a href="/faq" target="_self" className={style["footer__link-text"]}>
            FAQ
          </a>
        </div>
        <div className="footer__link-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <span>
              <img
                className={`${style["footer__link-icon"]} ${style["footer__facebook-icon"]}`}
                alt="페이스북 링크"
              />
            </span>
          </a>
          <a href="https://x.com/" target="_blank" rel="noreferrer">
            <span>
              <img
                className={`${style["footer__link-icon"]} ${style["footer__twitter-icon"]}`}
                alt="엑스 링크"
              />
            </span>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <span>
              <img
                className={`${style["footer__link-icon"]} ${style["footer__youtube-icon"]}`}
                alt="유튜브 링크"
              />
            </span>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <span>
              <img
                className={`${style["footer__link-icon"]} ${style["footer__instagram-icon"]}`}
                alt="인스타그램 링크"
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
