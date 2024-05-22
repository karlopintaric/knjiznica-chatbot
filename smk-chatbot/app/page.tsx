import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";
import Chatbot from "./components/chatbase"

export default function Home() {
  return (
    <>
  <header className="header is-hidden is-scrolled">
    <Chatbot />
    <div className="header__container">
      <div className="row">
        <div className="col-xs-12">
          <div className="header__sub">
            <nav id="sub-nav-header" className="header__sub-nav">
              <ul id="sub-menu-header" className="header__sub-nav__items">
                <li
                  id="menu-item-483"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-483"
                >
                  <a href="https://smk.mef.unizg.hr/o-nama/">O nama</a>
                </li>
                <li
                  id="menu-item-356"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-356"
                >
                  <a href="https://smk.mef.unizg.hr/kontakt/">Kontakt</a>
                </li>
              </ul>
            </nav>
            <div className="header__lang ">
              <div className="header__lang__icon">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="22.75"
                    y1="16.75"
                    x2="1.75"
                    y2="16.75"
                    stroke="#00417e"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="22.75"
                    y1="9.75"
                    x2="1.75"
                    y2="9.75"
                    stroke="#00417e"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16.5 12.25C16.5 15.5306 15.9282 18.4531 15.0432 20.5181C14.5999 21.5524 14.0978 22.3256 13.5911 22.8256C13.0887 23.3214 12.6367 23.5 12.25 23.5C11.8633 23.5 11.4113 23.3214 10.9089 22.8256C10.4022 22.3256 9.90011 21.5524 9.45683 20.5181C8.57182 18.4531 8 15.5306 8 12.25C8 8.96944 8.57182 6.0469 9.45683 3.98186C9.90011 2.94756 10.4022 2.17444 10.9089 1.67441C11.4113 1.17863 11.8633 1 12.25 1C12.6367 1 13.0887 1.17863 13.5911 1.67441C14.0978 2.17444 14.5999 2.94756 15.0432 3.98186C15.9282 6.0469 16.5 8.96944 16.5 12.25Z"
                    stroke="#00417e"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12.25"
                    cy="12.25"
                    r="11.25"
                    stroke="#00417e"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="header__lang__container">
                <div className="header__lang__links" data-swup={1}>
                  <a
                    className="header__lang__link  header__lang__link--active "
                    href="https://smk.mef.unizg.hr"
                  >
                    hr
                  </a>
                  <a
                    className="header__lang__link "
                    href="https://smk.mef.unizg.hr/en/"
                  >
                    en
                  </a>
                </div>
              </div>
            </div>
            <div className="header__accessibility">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#00417e"
                  fillRule="evenodd"
                  d="M22.133 24.667l-2.666 1.6-3.467-5.6-3.333 5.6-2.667-1.6 4.533-7.467v-3.067L7.867 12.8l.666-3.067L16 11.2l7.6-1.467.667 3.067-6.667 1.333V17.2l4.533 7.467zM16 4.933c1.333 0 2.4 1.067 2.4 2.4 0 1.334-1.067 2.4-2.4 2.4s-2.4-1.066-2.4-2.4c0-1.333 1.067-2.4 2.4-2.4zm0-4.8C7.333.133.133 7.333.133 16 .133 24.667 7.2 31.867 16 31.867c8.667 0 15.867-7.067 15.867-15.867C31.867 7.333 24.667.133 16 .133z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="accessibility">
              <div className="accessibility__container">
                <div className="accessibility__font accessibility__option">
                  <span className="accessibility__text">Veličina fonta</span>
                  <div>
                    <span className="accessibility__button" />
                  </div>
                </div>
                <div className="accessibility__grayscale accessibility__option">
                  <span className="accessibility__text">Sivi ton</span>
                  <label className="accessibility__label">
                    <input
                      type="checkbox"
                      className="accessibility__checkbox"
                    />
                    <span className="accessibility__slider" />
                  </label>
                </div>
                <div className="accessibility__negative-contrast accessibility__option">
                  <span className="accessibility__text">Kontrast</span>
                  <label className="accessibility__label">
                    <input
                      type="checkbox"
                      className="accessibility__checkbox"
                    />
                    <span className="accessibility__slider" />
                  </label>
                </div>
                <div className="accessibility__dyslexia accessibility__option">
                  <span className="accessibility__text">Disleksija</span>
                  <label className="accessibility__label">
                    <input
                      type="checkbox"
                      className="accessibility__checkbox"
                    />
                    <span className="accessibility__slider" />
                  </label>
                </div>
                <div className="accessibility__links accessibility__option">
                  <span className="accessibility__text">
                    Podcrtaj <br /> poveznice
                  </span>
                  <label className="accessibility__label">
                    <input
                      type="checkbox"
                      className="accessibility__checkbox"
                    />
                    <span className="accessibility__slider" />
                  </label>
                </div>
                <div className="accessibility__save__container">
                  <button type="button" className="accessibility__save button">
                    Zapamti
                  </button>
                </div>
              </div>
            </div>
            <div className="header__dark">
              <span className="dark-icon">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22.65 22.68"
                >
                  <path
                    d="M11,0a11.48,11.48,0,1,0,.33,0Zm.31,1.05v20.6a10.3,10.3,0,0,1,0-20.6Z"
                    transform="translate(-0.01 0)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="header__main">
        <div className="row middle-xs">
          <div className="col-xs-5 col-sm-6 col-md-3 col-lg-4">
            <div className="header__logo">
              <a href="https://mef.unizg.hr/" target="_blank">
                <img
                  className="lazy entered loaded"
                  data-src="https://smk.mef.unizg.hr/app/uploads/2023/07/sveuciliste-u-zg-logo.svg"
                  data-ll-status="loaded"
                  src="https://smk.mef.unizg.hr/app/uploads/2023/07/sveuciliste-u-zg-logo.svg"
                />
              </a>
              <a href="https://mef.unizg.hr/" target="_blank">
                <img
                  className="lazy entered loaded"
                  data-src="https://smk.mef.unizg.hr/app/uploads/2023/07/mef-logo.svg"
                  data-ll-status="loaded"
                  src="https://smk.mef.unizg.hr/app/uploads/2023/07/mef-logo.svg"
                />
              </a>
              <a href="https://smk.mef.unizg.hr">
                <h1>
                  <p>Središnja</p>
                  <p>medicinska</p>
                  <p>knjižnica</p>
                </h1>
              </a>
            </div>
          </div>
          <div className="col-xs-7 col-sm-6 col-md-9 col-lg-8">
            <div className="header__main__content">
              <div id="sidebar" className="header__menu">
                <ul id="header-menu" className="header__items">
                  <li
                    id="menu-item-16"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-16"
                  >
                    <span />
                    <a
                      href="https://smk.mef.unizg.hr/usluge/"
                      style={{
                        opacity: 1,
                        transform: "translateX(0px) translateZ(0px)"
                      }}
                    >
                      Usluge
                    </a>
                    <ul className="sub-menu" style={{ height: 322 }}>
                      <li
                        id="menu-item-146"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-146"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/usluge/posudba-knjiga/">
                          Posudba knjiga
                        </a>
                      </li>
                      <li
                        id="menu-item-145"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-145"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/usluge/dostava-clanaka/">
                          Dostava članaka
                        </a>
                      </li>
                      <li
                        id="menu-item-506"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-506"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/usluge/pretrazivanje-baza-podataka/">
                          Pretraživanje baza podataka
                        </a>
                      </li>
                      <li
                        id="menu-item-144"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-144"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/usluge/bibliometrijske-usluge/">
                          Bibliometrijske usluge&nbsp;
                        </a>
                      </li>
                      <li
                        id="menu-item-143"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-143"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/usluge/podrska-u-objavljivanju/">
                          Podrška u objavljivanju&nbsp;
                        </a>
                      </li>
                      <li
                        id="menu-item-142"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-142"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/usluge/edukacija/">
                          Edukacija
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-328"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-328"
                  >
                    <span />
                    <a
                      href="https://smk.mef.unizg.hr/izvori/"
                      style={{
                        opacity: 1,
                        transform: "translateX(0px) translateZ(0px)"
                      }}
                    >
                      Izvori
                    </a>
                    <ul className="sub-menu" style={{ height: 322 }}>
                      <li
                        id="menu-item-394"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-394"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/izvori/katalozi-i-trazilice/">
                          Katalozi i tražilice
                        </a>
                      </li>
                      <li
                        id="menu-item-393"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-393"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/izvori/e-casopisi-e-knjige/">
                          E-časopisi, e-knjige
                        </a>
                      </li>
                      <li
                        id="menu-item-392"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-392"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/izvori/baze-podataka/">
                          Baze podataka
                        </a>
                      </li>
                      <li
                        id="menu-item-395"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-395"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/izvori/tiskani-casopisi/">
                          Tiskani časopisi
                        </a>
                      </li>
                      <li
                        id="menu-item-397"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-397"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/izvori/repozitorij/">
                          Repozitorij
                        </a>
                      </li>
                      <li
                        id="menu-item-396"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-396"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/izvori/turnitin/">
                          Turnitin
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-480"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-480"
                  >
                    <span />
                    <a
                      href="https://smk.mef.unizg.hr/studenti/"
                      style={{
                        opacity: 1,
                        transform: "translateX(0px) translateZ(0px)"
                      }}
                    >
                      Studenti
                    </a>
                    <ul className="sub-menu" style={{ height: 322 }}>
                      <li
                        id="menu-item-485"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-485"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/studenti/posudba-knjiga/">
                          Posudba knjiga
                        </a>
                      </li>
                      <li
                        id="menu-item-486"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-486"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/studenti/prostor-za-ucenje/">
                          Prostor za učenje
                        </a>
                      </li>
                      <li
                        id="menu-item-493"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-493"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/studenti/literatura/">
                          Literatura
                        </a>
                      </li>
                      <li
                        id="menu-item-488"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-488"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/studenti/tutorijali/">
                          Tutorijali
                        </a>
                      </li>
                      <li
                        id="menu-item-489"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-489"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/studenti/diplomski-rad/">
                          Diplomski rad
                        </a>
                      </li>
                      <li
                        id="menu-item-491"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-491"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/studenti/poslijediplomski-studiji/">
                          Poslijediplomski studiji
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-481"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-481"
                  >
                    <span />
                    <a
                      href="https://smk.mef.unizg.hr/lijecnici-znanstvenici-nastavnici/"
                      style={{
                        opacity: 1,
                        transform: "translateX(0px) translateZ(0px)"
                      }}
                    >
                      Nastavnici
                    </a>
                    <ul className="sub-menu" style={{ height: 322 }}>
                      <li
                        id="menu-item-494"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-494"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/lijecnici-znanstvenici-nastavnici/pristup-literaturi/">
                          Pristup literaturi
                        </a>
                      </li>
                      <li
                        id="menu-item-495"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-495"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/lijecnici-znanstvenici-nastavnici/bibliometrijske-analize-i-potvrde/">
                          Bibliometrijske analize i potvrde
                        </a>
                      </li>
                      <li
                        id="menu-item-496"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-496"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/lijecnici-znanstvenici-nastavnici/pretrazivanje-baza-podataka/">
                          Pretraživanje baza podataka
                        </a>
                      </li>
                      <li
                        id="menu-item-503"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-503"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/lijecnici-znanstvenici-nastavnici/podrska-u-objavljivanju/">
                          Podrška u objavljivanju
                        </a>
                      </li>
                      <li
                        id="menu-item-498"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-498"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/lijecnici-znanstvenici-nastavnici/upravljanje-istrazivackim-podacima/">
                          Upravljanje istraživačkim podacima
                        </a>
                      </li>
                      <li
                        id="menu-item-499"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-499"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/lijecnici-znanstvenici-nastavnici/autorska-prava-i-otvoreni-pristup/">
                          Autorska prava i otvoreni pristup
                        </a>
                      </li>
                      <li
                        id="menu-item-500"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-500"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/lijecnici-znanstvenici-nastavnici/autorski-profili-u-bazama-podataka/">
                          Autorski profili u bazama podataka
                        </a>
                      </li>
                      <li
                        id="menu-item-501"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-501"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/lijecnici-znanstvenici-nastavnici/radionice/">
                          Radionice
                        </a>
                      </li>
                      <li
                        id="menu-item-502"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-502"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/lijecnici-znanstvenici-nastavnici/sastanak-s-knjiznicarkom/">
                          Sastanak s knjižničar(k)om
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-327"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-327"
                  >
                    <span />
                    <a
                      href="https://smk.mef.unizg.hr/dogadanja/"
                      style={{
                        opacity: 1,
                        transform: "translateX(0px) translateZ(0px)"
                      }}
                    >
                      Događanja
                    </a>
                    <ul className="sub-menu" style={{ height: 322 }}>
                      <li
                        id="menu-item-411"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-411"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/dogadanja/edukacije/">
                          Edukacije
                        </a>
                      </li>
                      <li
                        id="menu-item-414"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-414"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/dogadanja/micc/">
                          MICC
                        </a>
                      </li>
                      <li
                        id="menu-item-418"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-418"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/dogadanja/pubmet/">
                          PUBMET
                        </a>
                      </li>
                      <li
                        id="menu-item-421"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-421"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/dogadanja/noc-knjige/">
                          Noć knjige
                        </a>
                      </li>
                      <li
                        id="menu-item-422"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-422"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/novosti/">Novosti</a>
                      </li>
                      <li
                        id="menu-item-425"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425"
                      >
                        <span />
                        <a href="https://smk.mef.unizg.hr/dogadanja/razno/">
                          Razno
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-482"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-482"
                  >
                    <span />
                    <a
                      href="https://smk.mef.unizg.hr/cesta-pitanja/"
                      style={{
                        opacity: 1,
                        transform: "translateX(0px) translateZ(0px)"
                      }}
                    >
                      Česta pitanja
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header__search__icon" style={{ opacity: 1 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M10.012 19.996c2.135 0 4.196-.688 5.914-1.965L21.914 24 24 21.912l-5.963-5.994C21.3 11.47 20.343 5.207 15.902 1.94 11.46-1.328 5.202-.37 1.938 4.077-1.326 8.523-.37 14.787 4.073 18.055c1.718 1.277 3.804 1.94 5.939 1.94zm0-17.024c3.877 0 7.018 3.144 7.018 7.025 0 3.882-3.14 7.05-7.018 7.05-3.878 0-7.044-3.168-7.044-7.05 0-3.881 3.166-7.025 7.044-7.025z"
                  />
                </svg>
              </div>
              <form
                action="https://smk.mef.unizg.hr/pretraga/"
                className="header__search"
                style={{
                  opacity: 0,
                  transform: "translateX(50px) translateZ(0px)"
                }}
              >
                <button type="submit" className="header__search__button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#fff"
                      d="M10.012 19.996c2.135 0 4.196-.688 5.914-1.965L21.914 24 24 21.912l-5.963-5.994C21.3 11.47 20.343 5.207 15.902 1.94 11.46-1.328 5.202-.37 1.938 4.077-1.326 8.523-.37 14.787 4.073 18.055c1.718 1.277 3.804 1.94 5.939 1.94zm0-17.024c3.877 0 7.018 3.144 7.018 7.025 0 3.882-3.14 7.05-7.018 7.05-3.878 0-7.044-3.168-7.044-7.05 0-3.881 3.166-7.025 7.044-7.025z"
                    />
                  </svg>
                </button>
                <div className="header__search__form">
                  <input
                    type="text"
                    name="pojam"
                    placeholder="Pretražite"
                    autoComplete="off"
                    pattern=".{3,}"
                    title="Minimalno 3 znaka"
                    required
                    className="header__search__term"
                  />
                </div>
                <div className="header__search__close"></div>
              </form>
              <div className="hamburger">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path className="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />
                  <path className="line--2" d="M0 50h99" />
                  <path className="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />
                </svg>
              </div>
              <nav id="sub-nav-header" className="header__sub-nav">
                <ul id="sub-menu-header" className="header__sub-nav__items">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-483">
                    <a href="https://smk.mef.unizg.hr/o-nama/">O nama</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-356">
                    <a href="https://smk.mef.unizg.hr/kontakt/">Kontakt</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header__scroll">
      <div className="header__scroll__indicator" style={{ width: "8.2519%" }} />
    </div>
  </header>
  <main id="main" data-swup={0}>
    <div className="page">
      <section
        className="notification"
        date-attr="15.05.2024."
        data-sticky-wrap="true"
      >
        <div className="row">
          <div className="col-xs-12">
            <div className="notification__content">
              <div className="notification__dot"></div>
              <p style={{ fontSize: 20, textAlign: "center" }}>
                MICC 2024 (Ne)moguća misija: učinkovito korištenje istraživačkih
                resursa – 4. 6. 2024.
              </p>
              <p style={{ fontSize: 20, textAlign: "center" }}>
                <a href="https://smk.mef.unizg.hr/dogadanja/micc//">
                  OBJAVLJEN PROGRAM KONFERENCIJE!
                </a>
              </p>
              <div className="notification__close"></div>
            </div>
          </div>
        </div>
      </section>
      <div id="content">
        <section
          className="block-search-tabs block-search-tabs--img lazy entered loaded"
          data-bg="https://smk.mef.unizg.hr/app/uploads/2023/08/knjige-high-min-scaled.jpg"
          data-ll-status="loaded"
          style={{
            backgroundImage:
              'url("https://smk.mef.unizg.hr/app/uploads/2023/08/knjige-high-min-scaled.jpg")'
          }}
        >
          <div className="row">
            <div className="col-xs-12">
              <div className="tabs">
                <div className="tabs__items__container tabs__items__container--green">
                  <div className="tabs__items tabs__items--green">
                    <a
                      className="tabs__items__item tabs__items__item--green  is-active "
                      href="#pubmed"
                    >
                      PubMed
                    </a>
                    <a
                      className="tabs__items__item tabs__items__item--green "
                      href="#katalog-knjiznice"
                    >
                      Katalog knjižnice
                    </a>
                    <a
                      className="tabs__items__item tabs__items__item--green "
                      href="#repozitorij-dr-med"
                    >
                      Repozitorij Dr Med
                    </a>
                  </div>
                </div>
                <div className="tabs__panes tabs__panes--green">
                  <div
                    id="pubmed"
                    className="tabs__pane"
                    style={{ display: "block" }}
                  >
                    <div className="tabs__content">
                      <p>Pronađi članke uključene u PubMed:</p>
                    </div>
                    <form
                      target="_blank"
                      action="https://pubmed.ncbi.nlm.nih.gov//?term"
                      method="get"
                      className="tabs__form"
                    >
                      <input
                        className="tabs__form__input"
                        type="text"
                        name="term"
                        required
                      />
                      <input
                        className="tabs__form__submit"
                        type="submit"
                        defaultValue=""
                      />
                    </form>
                  </div>
                  <div id="katalog-knjiznice" className="tabs__pane">
                    <div className="tabs__content">
                      <p>
                        Pretraži tiskanu građu u{" "}
                        <a
                          href="http://zag.nsk.hr/mf"
                          target="_blank"
                          rel="noopener"
                        >
                          fondu SMK-a
                        </a>
                      </p>
                      <p>&nbsp;</p>
                      <p>
                        Produži posudbu{" "}
                        <a
                          href="http://katalog.nsk.hr/F?func=file&file_name=login-session&con_lng=ZAG"
                          target="_blank"
                          rel="noopener"
                        >
                          online
                        </a>
                      </p>
                    </div>
                  </div>
                  <div id="repozitorij-dr-med" className="tabs__pane">
                    <div className="tabs__content">
                      <p>
                        Pronađi radove djelatnika i studenata MF-a u{" "}
                        <a
                          href="https://repozitorij.mef.unizg.hr/"
                          target="_blank"
                          rel="noopener"
                        >
                          institucijskom repozitoriju
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="top-news">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div
                className="top-news__content animate-fade-slide element-animated"
                style={{
                  opacity: 1,
                  transform: "translateY(0px) translateZ(0px)"
                }}
              >
                <a href="https://smk.mef.unizg.hr/studenti/">
                  <div
                    className="top-news__img lazy entered loaded"
                    data-bg="https://smk.mef.unizg.hr/app/uploads/2023/10/smk-web-studenti-1920-1079-final.jpg"
                    data-ll-status="loaded"
                    style={{
                      backgroundImage:
                        'url("https://smk.mef.unizg.hr/app/uploads/2023/10/smk-web-studenti-1920-1079-final.jpg")'
                    }}
                  />
                  <h3 className="top-news__title">Studenti</h3>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div
                className="top-news__content animate-fade-slide element-animated"
                style={{
                  opacity: 1,
                  transform: "translateY(0px) translateZ(0px)"
                }}
              >
                <a href="https://smk.mef.unizg.hr/lijecnici-znanstvenici-nastavnici/">
                  <div
                    className="top-news__img lazy entered loaded"
                    data-bg="https://smk.mef.unizg.hr/app/uploads/2023/10/smk-web-profesori-1920-1079-final.jpg"
                    data-ll-status="loaded"
                    style={{
                      backgroundImage:
                        'url("https://smk.mef.unizg.hr/app/uploads/2023/10/smk-web-profesori-1920-1079-final.jpg")'
                    }}
                  />
                  <h3 className="top-news__title">
                    Liječnici, znanstvenici, nastavnici
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="block-links  block-links--color ">
          <div className="row">
            <div className="col-xs-12 col-md-9 swiper-container">
              <div className="block-links__wrapper  swiper-wrapper">
                <div className="block-links__container swiper-slide">
                  <a
                    className=" block-links__card animate-fade-slide "
                    href="https://smk.mef.unizg.hr/studenti/posudba-knjiga/"
                    style={{ height: 98 }}
                  >
                    <div className="block-links__content">
                      <h3 className="block-links__content__title  block-links__content__title--normal ">
                        Posudba knjiga
                      </h3>
                    </div>
                  </a>
                  <a
                    className=" block-links__card animate-fade-slide "
                    href="https://smk.mef.unizg.hr/lijecnici-znanstvenici-nastavnici/pretrazivanje-baza-podataka/"
                    style={{ height: 98 }}
                  >
                    <div className="block-links__content">
                      <h3 className="block-links__content__title  block-links__content__title--normal ">
                        Pretraživanje baza podataka
                      </h3>
                    </div>
                  </a>
                </div>
                <div className="block-links__container swiper-slide">
                  <a
                    className=" block-links__card animate-fade-slide "
                    href="https://smk.mef.unizg.hr/usluge/dostava-clanaka/"
                    style={{ height: 98 }}
                  >
                    <div className="block-links__content">
                      <h3 className="block-links__content__title  block-links__content__title--normal ">
                        Dostava članaka
                      </h3>
                    </div>
                  </a>
                  <a
                    className=" block-links__card animate-fade-slide "
                    href="https://smk.mef.unizg.hr/lijecnici-znanstvenici-nastavnici/podrska-u-objavljivanju/"
                    style={{ height: 98 }}
                  >
                    <div className="block-links__content">
                      <h3 className="block-links__content__title  block-links__content__title--normal ">
                        Podrška u objavljivanju
                      </h3>
                    </div>
                  </a>
                </div>
                <div className="block-links__container swiper-slide">
                  <a
                    className=" block-links__card animate-fade-slide "
                    href="https://smk.mef.unizg.hr/lijecnici-znanstvenici-nastavnici/bibliometrijske-analize-i-potvrde/"
                    style={{ height: 98 }}
                  >
                    <div className="block-links__content">
                      <h3 className="block-links__content__title  block-links__content__title--normal ">
                        Bibliometrijske analize i potvrde
                      </h3>
                    </div>
                  </a>
                  <a
                    className=" block-links__card animate-fade-slide "
                    href="https://smk.mef.unizg.hr/kontakt/"
                    style={{ height: 98 }}
                  >
                    <div className="block-links__content">
                      <h3 className="block-links__content__title  block-links__content__title--normal ">
                        Kontakt
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="block-news news">
          <div className="row">
            <div className="col-xs-12">
              <h3 className="block-news__title title animate-underline">
                Novosti
              </h3>
            </div>
          </div>
          <div className="row block-news__row">
            <div className="col-xs-12 col-sm-6 col-md-4 ">
              <a
                className="news__link animate-fade-slide"
                href="https://smk.mef.unizg.hr/2024/05/15/micc-2024-nemoguca-misija-ucinkovito-koristenje-istrazivackih-resursa/"
              >
                <div className="news__img__container">
                  <div
                    className="news__img lazy"
                    data-bg="https://smk.mef.unizg.hr/app/uploads/2024/04/micc24a-1-1024x486.jpg"
                  />
                </div>
                <div className="news__content">
                  <div className="news__info">
                    <span className="news__cat"></span>
                    <span className="news__date">15. 5. 2024.</span>
                  </div>
                  <h4 className="news__title">
                    MICC 2024 – (Ne)moguća misija: učinkovito korištenje
                    istraživačkih resursa &nbsp;
                  </h4>
                </div>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 ">
              <a
                className="news__link animate-fade-slide"
                href="https://smk.mef.unizg.hr/2024/05/02/objava-radova-u-otvorenom-pristupu-bez-troskova-objave-u-casopisima-emerald/"
              >
                <div className="news__img__container">
                  <div
                    className="news__img lazy"
                    data-bg="https://smk.mef.unizg.hr/app/uploads/2024/05/emerald.png"
                  />
                </div>
                <div className="news__content">
                  <div className="news__info">
                    <span className="news__cat">
                      Izvori
                      <span className="news__separator">/</span>
                    </span>
                    <span className="news__date">2. 5. 2024.</span>
                  </div>
                  <h4 className="news__title">
                    Objava radova u otvorenom pristupu bez troškova objave u
                    časopisima Emerald
                  </h4>
                </div>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 ">
              <a
                className="news__link animate-fade-slide"
                href="https://smk.mef.unizg.hr/2024/05/02/objava-radova-u-otvorenom-pristupu-bez-troskova-objave-u-casopisima-royal-society-of-chemistry-rsc/"
              >
                <div className="news__img__container">
                  <div
                    className="news__img lazy"
                    data-bg="https://smk.mef.unizg.hr/app/uploads/2024/02/503072-rsc-365691-1024x683.jpg"
                  />
                </div>
                <div className="news__content">
                  <div className="news__info">
                    <span className="news__cat">
                      Izvori
                      <span className="news__separator">/</span>
                    </span>
                    <span className="news__date">2. 5. 2024.</span>
                  </div>
                  <h4 className="news__title">
                    Objava radova u otvorenom pristupu bez troškova objave u
                    časopisima Royal Society of Chemistry (RSC)
                  </h4>
                </div>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 ">
              <a
                className="news__link animate-fade-slide"
                href="https://smk.mef.unizg.hr/2024/04/22/noc-knjige-2024/"
              >
                <div className="news__img__container">
                  <div
                    className="news__img lazy"
                    data-bg="https://smk.mef.unizg.hr/app/uploads/2024/04/noc-knjige2024-1024x538.jpg"
                  />
                </div>
                <div className="news__content">
                  <div className="news__info">
                    <span className="news__cat">
                      Noć knjige
                      <span className="news__separator">/</span>
                    </span>
                    <span className="news__date">22. 4. 2024.</span>
                  </div>
                  <h4 className="news__title">Noć knjige 2024.</h4>
                </div>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 ">
              <a
                className="news__link animate-fade-slide"
                href="https://smk.mef.unizg.hr/2024/04/22/webinar-o-radu-sa-sustavom-turnitin-2/"
              >
                <div className="news__img__container">
                  <div
                    className="news__img lazy"
                    data-bg="https://smk.mef.unizg.hr/app/uploads/2024/02/turnitin-tm-logo.png"
                  />
                </div>
                <div className="news__content">
                  <div className="news__info">
                    <span className="news__cat">
                      Izvori, Nastavnici
                      <span className="news__separator">/</span>
                    </span>
                    <span className="news__date">22. 4. 2024.</span>
                  </div>
                  <h4 className="news__title">
                    Webinar o radu sa sustavom Turnitin, 26. 4. 2024.
                  </h4>
                </div>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 ">
              <a
                className="news__link animate-fade-slide"
                href="https://smk.mef.unizg.hr/2024/03/29/american-chemical-society-acs-pretplata-i-mogucnost-objave-oa-radova-bez-troskova/"
              >
                <div className="news__img__container">
                  <div
                    className="news__img lazy"
                    data-bg="https://smk.mef.unizg.hr/app/uploads/2024/03/acs-3-1024x564.jpg"
                  />
                </div>
                <div className="news__content">
                  <div className="news__info">
                    <span className="news__cat">
                      Izvori, Nastavnici
                      <span className="news__separator">/</span>
                    </span>
                    <span className="news__date">29. 3. 2024.</span>
                  </div>
                  <h4 className="news__title">
                    American Chemical Society (ACS) – pretplata i mogućnost
                    objave OA radova bez troškova
                  </h4>
                </div>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 ">
              <a
                className="news__link animate-fade-slide"
                href="https://smk.mef.unizg.hr/2024/03/26/novi-ciklus-radionica-sredisnje-medicinske-knjiznice-u-travnju-i-svibnju/"
              >
                <div className="news__img__container">
                  <div
                    className="news__img lazy"
                    data-bg="https://smk.mef.unizg.hr/app/uploads/2023/12/fortytwo-mdu-53qrvr4-unsplash-1-1024x684.jpg"
                  />
                </div>
                <div className="news__content">
                  <div className="news__info">
                    <span className="news__cat">
                      Edukacije, Nastavnici, Studenti
                      <span className="news__separator">/</span>
                    </span>
                    <span className="news__date">26. 3. 2024.</span>
                  </div>
                  <h4 className="news__title">
                    Novi ciklus radionica Središnje medicinske knjižnice u
                    travnju i svibnju
                  </h4>
                </div>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 ">
              <a
                className="news__link animate-fade-slide"
                href="https://smk.mef.unizg.hr/2024/03/20/taylor-francis-ebooks-probni-pristup/"
              >
                <div className="news__img__container">
                  <div
                    className="news__img lazy"
                    data-bg="https://smk.mef.unizg.hr/app/uploads/2024/03/tf.jpeg"
                  />
                </div>
                <div className="news__content">
                  <div className="news__info">
                    <span className="news__cat">
                      Izvori
                      <span className="news__separator">/</span>
                    </span>
                    <span className="news__date">20. 3. 2024.</span>
                  </div>
                  <h4 className="news__title">
                    Taylor &amp; Francis eBooks – probni pristup
                  </h4>
                </div>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 ">
              <a
                className="news__link animate-fade-slide"
                href="https://smk.mef.unizg.hr/2024/03/05/webinar-o-radu-sa-sustavom-turnitin/"
              >
                <div className="news__img__container">
                  <div
                    className="news__img lazy"
                    data-bg="https://smk.mef.unizg.hr/app/uploads/2024/02/turnitin-tm-logo.png"
                  />
                </div>
                <div className="news__content">
                  <div className="news__info">
                    <span className="news__cat">
                      Izvori, Nastavnici
                      <span className="news__separator">/</span>
                    </span>
                    <span className="news__date">5. 3. 2024.</span>
                  </div>
                  <h4 className="news__title">
                    Webinar o radu sa sustavom Turnitin
                  </h4>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-4 col-md-offset-4">
              <div className="button-content animate-fade-slide">
                <a className="button" href="https://smk.mef.unizg.hr/novosti/">
                  Sve novosti
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="locations">
          <div className="row">
            <div className="col-md-3 col--align-middle col-xs-12">
              <h2 className="locations__title title animate-underline">
                Lokacije knjižnica
              </h2>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6 animate-fade-slide locations__itemContainer">
                <a
                  href="https://maps.app.goo.gl/MBiiY3FpLy7E5TQM6"
                  target="_blank"
                >
                  <div className="locations__item">
                    <div className="locations__container">
                      <div className="locations__icon">
                        <svg
                          fill="#ffffff"
                          height="50px"
                          width="50px"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 297 297"
                          xmlSpace="preserve"
                          stroke="#ffffff"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                              {" "}
                              <path d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645 c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645 C259.253,49.703,209.57,0,148.5,0z M148.5,272.689c-22.049-21.366-90.243-93.029-90.243-161.892 c0-49.784,40.483-90.287,90.243-90.287s90.243,40.503,90.243,90.287C238.743,179.659,170.549,251.322,148.5,272.689z" />{" "}
                              <path d="M148.5,59.183c-28.273,0-51.274,23.154-51.274,51.614c0,28.461,23.001,51.614,51.274,51.614 c28.273,0,51.274-23.153,51.274-51.614C199.774,82.337,176.773,59.183,148.5,59.183z M148.5,141.901 c-16.964,0-30.765-13.953-30.765-31.104c0-17.15,13.801-31.104,30.765-31.104c16.964,0,30.765,13.953,30.765,31.104 C179.265,127.948,165.464,141.901,148.5,141.901z" />{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </div>
                      <div className="locations__content">
                        <span className="locations__number">
                          Središnja medicinska knjižnica
                        </span>
                        <span className="locations__txt">
                          Šalata 3b (prizemlje)
                        </span>
                        <span className="locations__txt__label">
                          RADNO VRIJEME:
                        </span>
                        <span className="locations__txt__values">
                          <p>
                            ponedjeljak – četvrtak: 8:00 – 19:00
                            <br />
                            petak: 8:00 – 17:00
                          </p>
                        </span>
                        <span className="locations__txt__label">TELEFON</span>
                        <span className="locations__txt__values">
                          01 4566 745
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xs-12 col-sm-6 animate-fade-slide locations__itemContainer">
                <a
                  href="https://maps.app.goo.gl/jw5pty2phyJi9Aba6"
                  target="_blank"
                >
                  <div className="locations__item">
                    <div className="locations__container">
                      <div className="locations__icon">
                        <svg
                          fill="#ffffff"
                          height="50px"
                          width="50px"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 297 297"
                          xmlSpace="preserve"
                          stroke="#ffffff"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                              {" "}
                              <path d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645 c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645 C259.253,49.703,209.57,0,148.5,0z M148.5,272.689c-22.049-21.366-90.243-93.029-90.243-161.892 c0-49.784,40.483-90.287,90.243-90.287s90.243,40.503,90.243,90.287C238.743,179.659,170.549,251.322,148.5,272.689z" />{" "}
                              <path d="M148.5,59.183c-28.273,0-51.274,23.154-51.274,51.614c0,28.461,23.001,51.614,51.274,51.614 c28.273,0,51.274-23.153,51.274-51.614C199.774,82.337,176.773,59.183,148.5,59.183z M148.5,141.901 c-16.964,0-30.765-13.953-30.765-31.104c0-17.15,13.801-31.104,30.765-31.104c16.964,0,30.765,13.953,30.765,31.104 C179.265,127.948,165.464,141.901,148.5,141.901z" />{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </div>
                      <div className="locations__content">
                        <span className="locations__number">
                          Medicinska knjižnica Rebro
                        </span>
                        <span className="locations__txt">
                          Kišpatićeva 12 (Edukacijski centar Zapad)
                        </span>
                        <span className="locations__txt__label">
                          RADNO VRIJEME:
                        </span>
                        <span className="locations__txt__values">
                          <p>
                            ponedjeljak – četvrtak: 8:00 – 17:00
                            <br />
                            petak: 8:00 – 15:00
                          </p>
                        </span>
                        <span className="locations__txt__label">TELEFON</span>
                        <span className="locations__txt__values">
                          01 2342 255, 01 2342 259
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
  <footer className="footer">
    <div className="footer__content">
      <div className="row bottom-sm">
        <div className="col-xs-12 col-md-9">
          <div className="footer__accordion">
            <span className="footer__accordion__text">Poveznice</span>
            <span className="footer__accordion__arrow footer__accordion__arrow--first" />
          </div>
          <div className="footer__links">
            <div className="footer__links__content">
              <a
                className="footer__links__link link-hover"
                href="https://mef.unizg.hr/en/"
                target="_blank"
              >
                University of Zagreb School of Medicine
              </a>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-3">
          <div className="footer__social">
            <a
              href="https://www.facebook.com/smknjiznica/"
              className="footer__social__icon footer__social__icon--facebook"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#00417E"
                  d="M22.674 0H1.326C.974 0 .637.14.388.388.14.638 0 .974 0 1.326v21.348c0 .352.14.689.388.938.25.248.586.388.938.388h11.49v-9.292H9.692v-3.626h3.126V8.415c0-3.1 1.896-4.79 4.659-4.79.934-.001 1.868.046 2.798.141v3.242h-1.921c-1.513 0-1.795.716-1.795 1.765v2.31h3.59l-.469 3.625h-3.121V24h6.116c.352 0 .689-.14.938-.388.248-.249.388-.586.388-.938V1.326c0-.352-.14-.689-.388-.938C23.362.14 23.026 0 22.674 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>
  );
}
