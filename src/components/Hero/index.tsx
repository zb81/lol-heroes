import { Hero } from "../../types";
import style from "./Hero.module.css";
import copySvg from "../../assets/copy.svg";


const HeroItem = (props: Hero & { onCopy: (text: string) => void }) => {
  return (
    <div className={style.wrapper}>
      <a
        href={`https://101.qq.com/#/hero-detail?heroid=${props.heroId}`}
        target="_blank"
      >
        <img
          className={style.pic}
          src={`https://game.gtimg.cn/images/lol/act/img/skinloading/${props.heroId}000.jpg`}
          alt={props.name}
        />
      </a>
      <p className={style.name}>{props.name}</p>
      <p className={style.name}>
        {props.alias}
        <button
          className={style.btn}
          onClick={() => props.onCopy(props.alias)}
          title="Copy"
        >
          <img src={copySvg} alt="" />
        </button>
      </p>
    </div>
  );
};
export default HeroItem;
