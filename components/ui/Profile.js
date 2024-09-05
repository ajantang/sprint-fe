import style from "@/components/ui/profile.module.css";
import tempProfileImg from "@/public/images/ic_profile40.svg";

export function Profile({ onClick }) {
  const clickProfile = () => onClick();

  return (
    <a>
      <span>
        <img
          className={style["header__btn-profile"]}
          src={tempProfileImg}
          onClick={clickProfile}
          alt="프로필 그림"
        />
      </span>
    </a>
  );
}

export default Profile;
