import { useTranslations } from "next-intl";
import "@/styles/arc.css";
import { TiArrowDownOutline } from "react-icons/ti";

const Arc = () => {
  const t = useTranslations();

  return (
    <div
      id="games-list"
      style={{
        transition: "all 1s cubic-bezier(0.65, 0, 0.35, 1)",
      }}
      className="arc-wrapper w-[170px] relative select-none aspect-square mx-auto outline-4 outline-primary my-10 outline z-[1] rounded-full -outline-offset-[24px] hover:-outline-offset-[16px]"
    >
      <span
        style={{
          transition: "all 1s cubic-bezier(0.65, 0, 0.35, 1)",
        }}
        className="arc-icon absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl animate-pulse z-0 text-foreground"
      >
        <TiArrowDownOutline />
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlLang="en"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 500 500"
        className="max-w-[80vmin]"
      >
        <title>{t("navbar.exploreGames")}</title>
        <defs>
          <path
            id="textcircle"
            d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
            transform="rotate(12,250,250)"
          />
        </defs>
        <g className="textcircle">
          <text textLength="940">
            <textPath
              xlinkHref="#textcircle"
              aria-label="CSS & SVG are awesome"
              textLength="940"
              className="text-foreground font-extrabold"
            >
              {t("landing.exploreGames")}
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};

export default Arc;
