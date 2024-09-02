"use client";
import scss from "./Footer.module.scss";
import { BsGithub } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.discription}>
            <p>
              MK-11 — уникальный сайт, предоставляющий увлекательную информацию
              обо всех персонажах Mortal Kombat 11. Здесь вы сможете узнать все
              подробности о ваших любимых героях: их история, цели и многое
              другое.
            </p>
          </div>

          <div className={scss.homebtn}>
            <a href="https://github.com/AsimMahmudov/">
              <button>
                <BsGithub />
              </button>
            </a>
            <a href="https://www.instagram.com/asim_mah05/">
              <button>
                <GrInstagram />
              </button>
            </a>
            <a href="https://t.me/MahmudovAsim">
              <button>
                <BsTelegram />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
