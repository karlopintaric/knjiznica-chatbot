import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";
import Chatbot from "./components/chatbase"

export default function Home() {
  return (
    <>
    <Chatbot />
  <div id="cmplz-cookiebanner-container">
    <div
      className="cmplz-cookiebanner cmplz-hidden banner-1 optin cmplz-bottom-right cmplz-categories-type-save-preferences"
      aria-modal="true"
      data-nosnippet="true"
      role="dialog"
      aria-live="polite"
      aria-labelledby="cmplz-header-1-optin"
      aria-describedby="cmplz-message-1-optin"
    >
      <div className="cmplz-header">
        <div className="cmplz-logo" />
        <div className="cmplz-title" id="cmplz-header-1-optin">
          Upravljanje kolačićima
        </div>
        <div
          className="cmplz-close"
          tabIndex={0}
          role="button"
          aria-label="close-dialog"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="times"
            className="svg-inline--fa fa-times fa-w-11"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
          >
            <path
              fill="currentColor"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            />
          </svg>
        </div>
      </div>
      <div className="cmplz-divider cmplz-divider-header" />
      <div className="cmplz-body">
        <div className="cmplz-message" id="cmplz-message-1-optin">
          To provide the best experiences, we use technologies like cookies to
          store and/or access device information. Consenting to these
          technologies will allow us to process data such as browsing behavior
          or unique IDs on this site. Not consenting or withdrawing consent, may
          adversely affect certain features and functions.
        </div>
        {/* categories start */}
        <div className="cmplz-categories">
          <details className="cmplz-category cmplz-functional">
            <summary>
              <span className="cmplz-category-header">
                <span className="cmplz-category-title">Functional</span>
                <span className="cmplz-always-active">
                  <span className="cmplz-banner-checkbox">
                    <input
                      type="checkbox"
                      id="cmplz-functional-optin"
                      data-category="cmplz_functional"
                      className="cmplz-consent-checkbox cmplz-functional"
                      size={40}
                      defaultValue={1}
                    />
                    <label
                      className="cmplz-label"
                      htmlFor="cmplz-functional-optin"
                      tabIndex={0}
                    >
                      <span className="screen-reader-text">Functional</span>
                    </label>
                  </span>
                  Always active{" "}
                </span>
                <span className="cmplz-icon cmplz-open">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    height={18}
                  >
                    <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                  </svg>
                </span>
              </span>
            </summary>
            <div className="cmplz-description">
              <span className="cmplz-description-functional">
                The technical storage or access is strictly necessary for the
                legitimate purpose of enabling the use of a specific service
                explicitly requested by the subscriber or user, or for the sole
                purpose of carrying out the transmission of a communication over
                an electronic communications network.
              </span>
            </div>
          </details>
          <details className="cmplz-category cmplz-preferences">
            <summary>
              <span className="cmplz-category-header">
                <span className="cmplz-category-title">Preferences</span>
                <span className="cmplz-banner-checkbox">
                  <input
                    type="checkbox"
                    id="cmplz-preferences-optin"
                    data-category="cmplz_preferences"
                    className="cmplz-consent-checkbox cmplz-preferences"
                    size={40}
                    defaultValue={1}
                  />
                  <label
                    className="cmplz-label"
                    htmlFor="cmplz-preferences-optin"
                    tabIndex={0}
                  >
                    <span className="screen-reader-text">Preferences</span>
                  </label>
                </span>
                <span className="cmplz-icon cmplz-open">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    height={18}
                  >
                    <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                  </svg>
                </span>
              </span>
            </summary>
            <div className="cmplz-description">
              <span className="cmplz-description-preferences">
                The technical storage or access is necessary for the legitimate
                purpose of storing preferences that are not requested by the
                subscriber or user.
              </span>
            </div>
          </details>
          <details className="cmplz-category cmplz-statistics">
            <summary>
              <span className="cmplz-category-header">
                <span className="cmplz-category-title">Statistics</span>
                <span className="cmplz-banner-checkbox">
                  <input
                    type="checkbox"
                    id="cmplz-statistics-optin"
                    data-category="cmplz_statistics"
                    className="cmplz-consent-checkbox cmplz-statistics"
                    size={40}
                    defaultValue={1}
                  />
                  <label
                    className="cmplz-label"
                    htmlFor="cmplz-statistics-optin"
                    tabIndex={0}
                  >
                    <span className="screen-reader-text">Statistics</span>
                  </label>
                </span>
                <span className="cmplz-icon cmplz-open">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    height={18}
                  >
                    <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                  </svg>
                </span>
              </span>
            </summary>
            <div className="cmplz-description">
              <span className="cmplz-description-statistics">
                The technical storage or access that is used exclusively for
                statistical purposes.
              </span>
              <span className="cmplz-description-statistics-anonymous">
                The technical storage or access that is used exclusively for
                anonymous statistical purposes. Without a subpoena, voluntary
                compliance on the part of your Internet Service Provider, or
                additional records from a third party, information stored or
                retrieved for this purpose alone cannot usually be used to
                identify you.
              </span>
            </div>
          </details>
          <details className="cmplz-category cmplz-marketing">
            <summary>
              <span className="cmplz-category-header">
                <span className="cmplz-category-title">Marketing</span>
                <span className="cmplz-banner-checkbox">
                  <input
                    type="checkbox"
                    id="cmplz-marketing-optin"
                    data-category="cmplz_marketing"
                    className="cmplz-consent-checkbox cmplz-marketing"
                    size={40}
                    defaultValue={1}
                  />
                  <label
                    className="cmplz-label"
                    htmlFor="cmplz-marketing-optin"
                    tabIndex={0}
                  >
                    <span className="screen-reader-text">Marketing</span>
                  </label>
                </span>
                <span className="cmplz-icon cmplz-open">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    height={18}
                  >
                    <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                  </svg>
                </span>
              </span>
            </summary>
            <div className="cmplz-description">
              <span className="cmplz-description-marketing">
                The technical storage or access is required to create user
                profiles to send advertising, or to track the user on a website
                or across several websites for similar marketing purposes.
              </span>
            </div>
          </details>
        </div>
        {/* categories end */}
      </div>
      <div className="cmplz-links cmplz-information">
        <a
          className="cmplz-link cmplz-manage-options cookie-statement"
          href="#"
          data-relative_url="#cmplz-manage-consent-container"
        >
          Manage options
        </a>
        <a
          className="cmplz-link cmplz-manage-third-parties cookie-statement"
          href="#"
          data-relative_url="#cmplz-cookies-overview"
        >
          Manage services
        </a>
        <a
          className="cmplz-link cmplz-manage-vendors tcf cookie-statement"
          href="#"
          data-relative_url="#cmplz-tcf-wrapper"
        >
          Manage vendors
        </a>
        <a
          className="cmplz-link cmplz-external cmplz-read-more-purposes tcf"
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://cookiedatabase.org/tcf/purposes/"
        >
          Read more about these purposes
        </a>
      </div>
      <div className="cmplz-divider cmplz-footer" />
      <div className="cmplz-buttons">
        <button className="cmplz-btn cmplz-accept">Accept</button>
        <button className="cmplz-btn cmplz-deny">Deny</button>
        <button className="cmplz-btn cmplz-view-preferences">
          View preferences
        </button>
        <button className="cmplz-btn cmplz-save-preferences">
          Save preferences
        </button>
        <a
          className="cmplz-btn cmplz-manage-options tcf cookie-statement"
          href="#"
          data-relative_url="#cmplz-manage-consent-container"
        >
          View preferences
        </a>
      </div>
      <div className="cmplz-links cmplz-documents">
        <a
          className="cmplz-link cookie-statement"
          href="#"
          data-relative_url=""
        >
          {"{"}title{"}"}
        </a>
        <a
          className="cmplz-link privacy-statement"
          href="#"
          data-relative_url=""
        >
          {"{"}title{"}"}
        </a>
        <a className="cmplz-link impressum" href="#" data-relative_url="">
          {"{"}title{"}"}
        </a>
      </div>
    </div>
  </div>
  <header className="header">
    <div className="header__container">
      <div className="row">
        <div className="col-xs-12">
          <div className="header__sub">
            <nav id="sub-nav-header" className="header__sub-nav">
              <ul id="sub-menu-header" className="header__sub-nav__items">
                <li
                  id="menu-item-425442"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-425442"
                >
                  <a
                    rel="privacy-policy"
                    href="https://www.snz.unizg.hr/kontakt/"
                  >
                    Kontakt
                  </a>
                </li>
                <li
                  id="menu-item-425443"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-425443"
                >
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://mail.snz.hr/owa"
                  >
                    Webmail
                  </a>
                </li>
                <li
                  id="menu-item-425734"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425734"
                >
                  <a href="https://www.snz.unizg.hr/e-publikacije/">
                    E-publikacije
                  </a>
                </li>
                <li
                  id="menu-item-425444"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-425444"
                >
                  <a
                    target="_blank"
                    rel="noopener"
                    href="http://raspored.mef.hr/appointments"
                  >
                    Dvorane
                  </a>
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
                    href="https://www.snz.unizg.hr/ustroj/knjiznica-andrija-stampar/"
                  >
                    hr
                  </a>
                  <a
                    className="header__lang__link "
                    href="https://www.snz.unizg.hr/en/organization/andrija-stampar-library/"
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
          <div className="col-xs-5 col-sm-6 col-md-3 col-lg-5">
            <a className="header__logo" href="https://www.snz.unizg.hr">
              <img
                className="lazy entered loaded"
                data-src="https://www.snz.unizg.hr/app/uploads/2023/06/sveuciliste-u-zg-logo.svg"
                data-ll-status="loaded"
                src="https://www.snz.unizg.hr/app/uploads/2023/06/sveuciliste-u-zg-logo.svg"
              />
              <img
                className="lazy entered loaded"
                data-src="https://www.snz.unizg.hr/app/uploads/2023/06/mef-logo.svg"
                data-ll-status="loaded"
                src="https://www.snz.unizg.hr/app/uploads/2023/06/mef-logo.svg"
              />
              <img
                className="lazy entered loaded"
                data-src="https://www.snz.unizg.hr/app/uploads/2023/06/stamapar-logo-zgrada.svg"
                data-ll-status="loaded"
                src="https://www.snz.unizg.hr/app/uploads/2023/06/stamapar-logo-zgrada.svg"
              />
              <h1>
                <p>Škola narodnog zdravlja</p>
                <p>Andrija Štampar</p>
              </h1>
            </a>
          </div>
          <div className="col-xs-7 col-sm-6 col-md-9 col-lg-7">
            <div className="header__main__content">
              <div id="sidebar" className="header__menu">
                <ul id="header-menu" className="header__items">
                  <li
                    id="menu-item-425410"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425410"
                  >
                    <span />
                    <a
                      href="https://www.snz.unizg.hr/novosti/"
                      style={{
                        opacity: 1,
                        transform: "translateX(0px) translateZ(0px)"
                      }}
                    >
                      Novosti
                    </a>
                  </li>
                  <li
                    id="menu-item-425411"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-425411"
                  >
                    <span />
                    <a
                      href="https://www.snz.unizg.hr/o-nama/"
                      style={{
                        opacity: 1,
                        transform: "translateX(0px) translateZ(0px)"
                      }}
                    >
                      O nama
                    </a>
                    <ul className="sub-menu" style={{ height: 274 }}>
                      <li
                        id="menu-item-425412"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425412"
                      >
                        <span />
                        <a href="https://www.snz.unizg.hr/o-nama/misija/">
                          Misija
                        </a>
                      </li>
                      <li
                        id="menu-item-425413"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425413"
                      >
                        <span />
                        <a href="https://www.snz.unizg.hr/o-nama/povijest-skole/">
                          Povijest škole
                        </a>
                      </li>
                      <li
                        id="menu-item-425414"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425414"
                      >
                        <span />
                        <a href="https://www.snz.unizg.hr/o-nama/memorijalna-zbirka-andrija-stampar/">
                          Memorijalna zbirka Andrija Štampar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-425415"
                    className="menu-item menu-item-type-post_type menu-item-object-page current-page-ancestor current-menu-ancestor current-menu-parent current-page-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-425415"
                  >
                    <span />
                    <a
                      href="https://www.snz.unizg.hr/ustroj/"
                      style={{
                        opacity: 1,
                        transform: "translateX(0px) translateZ(0px)"
                      }}
                    >
                      Ustroj
                    </a>
                    <ul className="sub-menu" style={{ height: 274 }}>
                      <li
                        id="menu-item-425416"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425416"
                      >
                        <span />
                        <a href="https://www.snz.unizg.hr/ustroj/uprava-i-tajnistvo/">
                          Uprava i tajništvo
                        </a>
                      </li>
                      <li
                        id="menu-item-425764"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425764"
                      >
                        <span />
                        <a href="https://www.snz.unizg.hr/ustroj/katedre/">
                          Katedre
                        </a>
                      </li>
                      <li
                        id="menu-item-425763"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425763"
                      >
                        <span />
                        <a href="https://www.snz.unizg.hr/ustroj/zavodi-i-odsjeci/">
                          Zavodi i odsjeci
                        </a>
                      </li>
                      <li
                        id="menu-item-425423"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425423"
                      >
                        <span />
                        <a href="https://www.snz.unizg.hr/ustroj/suradni-centar-szo-za-pracenje-epidemije-hiv-a/">
                          Suradni centar SZO za praćenje epidemije HIV-a
                        </a>
                      </li>
                      <li
                        id="menu-item-425762"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425762"
                      >
                        <span />
                        <a href="https://www.snz.unizg.hr/ustroj/centri/">
                          Centri
                        </a>
                      </li>
                      <li
                        id="menu-item-425426"
                        className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-425400 current_page_item menu-item-425426"
                      >
                        <span />
                        <a
                          href="https://www.snz.unizg.hr/ustroj/knjiznica-andrija-stampar/"
                          aria-current="page"
                        >
                          Knjižnica Andrija Štampar
                        </a>
                      </li>
                      <li
                        id="menu-item-425427"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425427"
                      >
                        <span />
                        <a href="https://www.snz.unizg.hr/ustroj/dormitorij/">
                          Dormitorij
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-425432"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-425432"
                  >
                    <span />
                    <a
                      href="https://www.snz.unizg.hr/nastava/"
                      style={{
                        opacity: 1,
                        transform: "translateX(0px) translateZ(0px)"
                      }}
                    >
                      Nastava
                    </a>
                    <ul className="sub-menu" style={{ height: 274 }}>
                      <li
                        id="menu-item-425684"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425684"
                      >
                        <span />
                        <a href="https://www.snz.unizg.hr/nastava/raspored/">
                          Raspored
                        </a>
                      </li>
                      <li
                        id="menu-item-426866"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-426866"
                      >
                        <span />
                        <a
                          target="_blank"
                          rel="noopener"
                          href="https://mef.unizg.hr/studiji/diplomski/sveucilisni-integrirani-preddiplomski-i-diplomski/#Medicina(128)#nastavni-plan-i-program#1-godina"
                        >
                          Integrirani preddiplomski i diplomski studij medicine
                        </a>
                      </li>
                      <li
                        id="menu-item-426867"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-426867"
                      >
                        <span />
                        <a
                          target="_blank"
                          rel="noopener"
                          href="https://mef.unizg.hr/studiji/diplomski/diplomski/#Sestrinstvo(130)#nastavni-plan-i-program#1-godina"
                        >
                          Diplomski studij sestrinstva
                        </a>
                      </li>
                      <li
                        id="menu-item-426868"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-426868"
                      >
                        <span />
                        <a
                          target="_blank"
                          rel="noopener"
                          href="https://mse.mef.unizg.hr/medical-studies-in-english/curriculum/#curriculum#1-year"
                        >
                          Medical studies in English
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-425436"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-425436"
                  >
                    <span />
                    <a
                      href="https://www.snz.unizg.hr/pitaj-andriju/"
                      style={{
                        opacity: 1,
                        transform: "translateX(0px) translateZ(0px)"
                      }}
                    >
                      Pitaj Andriju
                    </a>
                    <ul className="sub-menu" style={{ height: 274 }}>
                      <li
                        id="menu-item-425437"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425437"
                      >
                        <span />
                        <a href="https://www.snz.unizg.hr/pitaj-andriju/o-projektu/">
                          Pitaj Andriju!
                        </a>
                      </li>
                      <li
                        id="menu-item-425438"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425438"
                      >
                        <span />
                        <a
                          target="_blank"
                          rel="noopener"
                          href="https://www.snz.unizg.hr/pitaj-andriju/tribina-covid-19-cjepiva/"
                        >
                          Tribina „COVID-19 – Cjepiva”
                        </a>
                      </li>
                      <li
                        id="menu-item-425439"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425439"
                      >
                        <span />
                        <a href="https://www.snz.unizg.hr/pitaj-andriju/baza-do-sada-postavljenih-pitanja/">
                          Baza do sada postavljenih pitanja
                        </a>
                      </li>
                      <li
                        id="menu-item-425440"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425440"
                      >
                        <span />
                        <a href="https://www.snz.unizg.hr/pitaj-andriju/postavi-novo-pitanje/">
                          Postavi novo pitanje
                        </a>
                      </li>
                    </ul>
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
                action="https://www.snz.unizg.hr/pretraga/"
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
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-425442">
                    <a
                      rel="privacy-policy"
                      href="https://www.snz.unizg.hr/kontakt/"
                    >
                      Kontakt
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-425443">
                    <a
                      target="_blank"
                      rel="noopener"
                      href="https://mail.snz.hr/owa"
                    >
                      Webmail
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425734">
                    <a href="https://www.snz.unizg.hr/e-publikacije/">
                      E-publikacije
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-425444">
                    <a
                      target="_blank"
                      rel="noopener"
                      href="http://raspored.mef.hr/appointments"
                    >
                      Dvorane
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header__scroll">
      <div className="header__scroll__indicator" style={{ width: "0%" }} />
    </div>
  </header>
  <main id="main" data-swup={0}>
    <div className="page">
      <div id="breadcrumb">
        <div className="row">
          <div className="col-xs-12">
            <div className="breadcrumbs">
              {/* Breadcrumb NavXT 7.2.0 */}
              <span property="itemListElement" typeof="ListItem">
                <a
                  property="item"
                  typeof="WebPage"
                  title="Go to Škola narodnog zdravlja dr. Andrija Štampar."
                  href="https://www.snz.unizg.hr"
                  className="home"
                >
                  <span property="name">
                    Škola narodnog zdravlja dr. Andrija Štampar
                  </span>
                </a>
                <meta property="position" content="1" />
              </span>{" "}
              <span property="itemListElement" typeof="ListItem">
                <a
                  property="item"
                  typeof="WebPage"
                  title="Go to Ustroj."
                  href="https://www.snz.unizg.hr/ustroj/"
                  className="post post-page"
                >
                  <span property="name">Ustroj</span>
                </a>
                <meta property="position" content="2" />
              </span>{" "}
              <span property="itemListElement" typeof="ListItem">
                <span property="name" className="post post-page current-item">
                  Knjižnica Andrija Štampar
                </span>
                <meta
                  property="url"
                  content="https://www.snz.unizg.hr/ustroj/knjiznica-andrija-stampar/"
                />
                <meta property="position" content="3" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="intro">
        <section className="block intro">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="intro__content  intro__content--img ">
                  <div
                    className="simpleParallax simple-parallax-initialized"
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="intro__image lazy entered loaded"
                      data-bg="https://www.snz.unizg.hr/app/uploads/2017/05/knjiznica-1-1024x683.jpg"
                      style={{
                        transform: "translate3d(0px, -10px, 0px) scale(1.5)",
                        willChange: "transform",
                        backgroundImage:
                          'url("https://www.snz.unizg.hr/app/uploads/2017/05/knjiznica-1-1024x683.jpg")'
                      }}
                      data-ll-status="loaded"
                    />
                  </div>
                  <div className="intro__title">
                    <h2>Knjižnica Andrija Štampar</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="row">
        <div
          className="col-xs-12 col-sm-12 col-md-3 col-lg-3"
          data-sticky-container=""
        >
          <div
            id="sidebar-links"
            className="sidebar sidebar--desktop is-moved"
            data-margin-top={10}
            data-sticky-class="is-sticky"
            data-depth={1}
          >
            <p className="sidebar__title">Ustroj</p>
            <div>
              <ul className="sidebar__items">
                <li className="menu-item">
                  <a
                    className=""
                    href="https://www.snz.unizg.hr/ustroj/katedre/"
                  >
                    Katedre
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    className=""
                    href="https://www.snz.unizg.hr/ustroj/zavodi-i-odsjeci/"
                  >
                    Zavodi i odsjeci
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    className=""
                    href="https://www.snz.unizg.hr/ustroj/centri/"
                  >
                    Centri
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    className=""
                    href="https://www.snz.unizg.hr/ustroj/uprava-i-tajnistvo/"
                  >
                    Uprava i tajništvo
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    className=""
                    href="https://www.snz.unizg.hr/ustroj/suradni-centar-szo-za-pracenje-epidemije-hiv-a/"
                    target="_blank"
                  >
                    Suradni centar SZO za praćenje epidemije HIV-a
                  </a>
                </li>
                <li className="menu-item current_page_item">
                  <a
                    className=" is-active "
                    href="https://www.snz.unizg.hr/ustroj/knjiznica-andrija-stampar/"
                  >
                    Knjižnica Andrija Štampar
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    className=""
                    href="https://www.snz.unizg.hr/ustroj/dormitorij/"
                  >
                    Dormitorij
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col--no-pad">
          <div id="content">
            <div className="row">
              <div className="col-xs-12">
                <div className="tabs">
                  <div className="tabs__items__container">
                    <div className="tabs__items is-moved">
                      <a
                        className="tabs__items__item  is-active "
                        href="#o-knjiznici"
                      >
                        O Knjižnici
                      </a>
                      <a className="tabs__items__item " href="#novosti">
                        Novosti
                      </a>
                      <a
                        className="tabs__items__item "
                        href="#povijest-knjiznice"
                      >
                        Povijest knjižnice
                      </a>
                      <a className="tabs__items__item " href="#e-izvori">
                        E-izvori
                      </a>
                      <a className="tabs__items__item " href="#baze-podataka">
                        Baze podataka
                      </a>
                    </div>
                  </div>
                  <div className="tabs__panes">
                    <div
                      id="o-knjiznici"
                      className="tabs__pane"
                      style={{ display: "block" }}
                    >
                      <div className="content">
                        <h3
                          className="wp-block-heading element-animated"
                          style={{
                            opacity: 1,
                            transform: "translateY(0px) translateZ(0px)"
                          }}
                        >
                          Rad Knjižnice Andrija Štampar tijekom obnove zgrade
                          ŠNZa
                        </h3>
                        <p
                          style={{
                            opacity: 1,
                            transform: "translateY(0px) translateZ(0px)"
                          }}
                          className="element-animated"
                        >
                          Tijekom obnove zgrade Škole narodnog zdravlja „Andrija
                          Štampar“, Knjižnica Andrija Štampar smještena je u
                          prostorima Središnje medicinske knjižnice Medicinskog
                          fakultet Sveučilišta u Zagrebu, na adresi Šalata 3b.
                        </p>
                        <p
                          style={{
                            opacity: 1,
                            transform: "translateY(0px) translateZ(0px)"
                          }}
                          className="element-animated"
                        >
                          Ističemo da su sve usluge Knjižnice Andrija Štampar
                          kontinuirano dostupne korisnicima. Usluga posudbe i
                          povrata knjižne građe pruža se na Šalati 3b (u već
                          spomenutoj Središnjoj medicinskoj knjižnici), a za
                          ostale usluge slobodno nam se možete obratiti na
                          sljedeće načine:
                        </p>
                        <figure className="wp-block-table">
                          <table>
                            <tbody>
                              <tr>
                                <td>
                                  Zahtjevi za literaturu – cjeloviti tekstovi
                                  članaka i knjiga u e-obliku
                                </td>
                                <td>
                                  <a href="mailto:lmachala@snz.hr">
                                    lmachala@snz.hr
                                  </a>
                                  &nbsp;;&nbsp;
                                  <a href="mailto:%20mculjak@snz.hr">
                                    mculjak@snz.hr
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Tematsko pretraživanje baza podataka</td>
                                <td>
                                  <a href="mailto:lmachala@snz.hr">
                                    lmachala@snz.hr
                                  </a>
                                  &nbsp;;&nbsp;
                                  <a href="mailto:mculjak@snz.hr">
                                    mculjak@snz.hr
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Pomoć pri navođenju literature</td>
                                <td>
                                  <a href="mailto:lmachala@snz.hr">
                                    lmachala@snz.hr
                                  </a>
                                  &nbsp;;&nbsp;
                                  <a href="mailto:mculjak@snz.hr">
                                    mculjak@snz.hr
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Informacije o posudbi i povratu udžbenika
                                </td>
                                <td>
                                  <a href="mailto:mculjak@snz.hr">
                                    mculjak@snz.hr
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Ostale informacije i informacije vezane uz
                                  Hrvatski zavod za javno zdravstvo
                                </td>
                                <td>
                                  <a href="mailto:%20jasna.rescic@hzjz">
                                    jasna.rescic@hzjz
                                  </a>
                                  .hr&nbsp;
                                </td>
                              </tr>
                              <tr>
                                <td>Voditeljica Knjižnice</td>
                                <td>
                                  <a href="mailto:lmachala@snz.hr">
                                    lmachala@snz.hr
                                  </a>
                                  &nbsp;; tel. 01/4590-181; 01/4566-741
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </figure>
                        <h3 className="wp-block-heading">Adresa</h3>
                        <p>
                          <a
                            rel="noreferrer noopener"
                            href="https://goo.gl/maps/XKV41YdXvM82"
                            target="_blank"
                          >
                            Rockefellerova 4, 10000 Zagreb, Hrvatska
                          </a>
                        </p>
                        <h3 className="wp-block-heading">Telefon</h3>
                        <p>
                          +385 1 4590 181
                          <br />
                          +385 1 4590 106
                          <br />
                          +385 1 4590 182
                        </p>
                        <h3 className="wp-block-heading">Radno vrijeme</h3>
                        <p>
                          Ponedjeljak – petak
                          <br />
                          9:00 – 15:30
                        </p>
                        <h3 className="wp-block-heading">
                          Voditeljica Knjižnice
                        </h3>
                        <figure className="wp-block-image size-full">
                          <img
                            src="https://www.snz.unizg.hr/app/uploads/2017/05/Lovela-1.png"
                            width={10}
                            height={10}
                            alt=""
                            className="wp-image-432"
                          />
                        </figure>
                        <p>
                          Dr. sc. <strong>Lovela Machala Poplašen</strong>
                          <br />
                          viši knjiž, prof.
                          <br />
                          <a href="mailto:lovela.machala@snz.hr">
                            lovela.machala@snz.hr
                          </a>
                        </p>
                        <h3 className="wp-block-heading">Knjižničari</h3>
                        <div className="contact__container">
                          <section className="contact">
                            <div className="contact__content">
                              <p className="contact__name">Martina Čuljak</p>
                              <div className="contact__info">
                                <a href="mailto:mculjak@snz.hr">
                                  mculjak@snz.hr
                                </a>
                              </div>
                            </div>
                          </section>
                        </div>
                        <div className="contact__container">
                          <section className="contact">
                            <div className="contact__content">
                              <p className="contact__name">Jasna Reščić</p>
                              <div className="contact__info">
                                <a href="mailto:jasna.rescic@hzjz.hr">
                                  jasna.rescic@hzjz.hr
                                </a>
                              </div>
                            </div>
                          </section>
                        </div>
                        <h3 className="wp-block-heading">Katalog knjižnice</h3>
                        <p>
                          <a
                            href="http://katalog.nsk.hr/F/?CON_LNG=ZAG&func=find-e-0&local_base=mfsnz_web"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <strong>Katalog</strong>
                          </a>
                        </p>
                        <h3 className="wp-block-heading">Bibliografija</h3>
                        <a
                          className="document-block animate-fade-slide "
                          href="https://www.snz.unizg.hr/app/uploads/2024/04/bibliografija_1927-2023.pdf"
                          target="_blank"
                        >
                          <div className="document-block__icon">
                            <svg
                              id="Layer_1"
                              data-name="Layer 1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 27.51 32"
                            >
                              <polygon points="4.13 1 20.33 1 26.51 7.19 26.51 31 4.13 31 4.13 28.28 3.13 28.28 3.13 32 27.51 32 27.51 6.77 20.75 0 3.13 0 3.13 13.07 4.13 13.07 4.13 1" />
                              <path
                                d="M0,25v-.74l1-.17V17.34L0,17.18v-.74H3.94a3.51,3.51,0,0,1,1.55.31,2.41,2.41,0,0,1,1,.9A2.54,2.54,0,0,1,6.82,19a2.58,2.58,0,0,1-.34,1.35,2.32,2.32,0,0,1-1,.89,3.51,3.51,0,0,1-1.55.31H2.12v2.52l1,.17V25Zm2.1-4.33H3.94a1.67,1.67,0,0,0,1.29-.46,1.83,1.83,0,0,0,0-2.36,1.64,1.64,0,0,0-1.29-.48H2.12Z"
                                transform="translate(-0.02 0)"
                              />
                              <path
                                d="M7.62,25v-.74l1-.17V17.34l-1-.16v-.74H11a3.57,3.57,0,0,1,2,.53,3.73,3.73,0,0,1,1.31,1.49,4.79,4.79,0,0,1,.47,2.15v.18a4.9,4.9,0,0,1-.46,2.13A3.6,3.6,0,0,1,13,24.42,3.5,3.5,0,0,1,11,25Zm2.1-.91H11a2.17,2.17,0,0,0,1.38-.44,2.82,2.82,0,0,0,.9-1.18,4.18,4.18,0,0,0,.31-1.65V20.6a4.21,4.21,0,0,0-.31-1.67,2.76,2.76,0,0,0-.9-1.16A2.29,2.29,0,0,0,11,17.34H9.72Z"
                                transform="translate(-0.02 0)"
                              />
                              <path
                                d="M15.56,25v-.74l1-.17V17.34l-1-.16v-.74H22v2h-.93l-.13-1.16H17.67v3h3.12v.91H17.67v2.87l.95.17V25Z"
                                transform="translate(-0.02 0)"
                              />
                            </svg>
                          </div>
                          <span className="document-block__title">
                            Bibliografija 1927-2023
                          </span>
                        </a>
                      </div>
                    </div>
                    <div id="novosti" className="tabs__pane">
                      <div className="content">
                        <section className="news">
                          <div className="news__container">
                            <div className="news__container__col news__container__col--simply  news__container__col--small ">
                              <a
                                className="news__link animate-fade-slide"
                                href="https://www.snz.unizg.hr/azuriranje-institucijske-bibliografije-za-2023-godinu/"
                              >
                                <div className="news__content news__content--simply">
                                  <div className="news__info news__info--simply">
                                    <span className="news__date news__date--simply">
                                      29. 4. 2024.
                                    </span>
                                  </div>
                                  <h4 className="news__title news__title--simply">
                                    Ažuriranje institucijske bibliografije za
                                    2023. godinu
                                  </h4>
                                </div>
                              </a>
                            </div>
                            <div className="news__container__col news__container__col--simply  news__container__col--small ">
                              <a
                                className="news__link animate-fade-slide"
                                href="https://www.snz.unizg.hr/knjiznica-snz-nova-organizacija-rada-knjiznice-andrija-stampar/"
                              >
                                <div className="news__content news__content--simply">
                                  <div className="news__info news__info--simply">
                                    <span className="news__date news__date--simply">
                                      9. 4. 2020.
                                    </span>
                                  </div>
                                  <h4 className="news__title news__title--simply">
                                    [KNJIŽNICA ŠNZ] Nova organizacija rada
                                    Knjižnice Andrija Štampar
                                  </h4>
                                </div>
                              </a>
                            </div>
                            <div className="news__container__col news__container__col--simply  news__container__col--small ">
                              <a
                                className="news__link animate-fade-slide"
                                href="https://www.snz.unizg.hr/noc-knjige-2019/"
                              >
                                <div className="news__content news__content--simply">
                                  <div className="news__info news__info--simply">
                                    <span className="news__date news__date--simply">
                                      15. 4. 2019.
                                    </span>
                                  </div>
                                  <h4 className="news__title news__title--simply">
                                    Noć knjige 2019.
                                  </h4>
                                </div>
                              </a>
                            </div>
                            <div className="news__container__col news__container__col--simply  news__container__col--small ">
                              <a
                                className="news__link animate-fade-slide"
                                href="https://www.snz.unizg.hr/springer-e-zbirka/"
                              >
                                <div className="news__content news__content--simply">
                                  <div className="news__info news__info--simply">
                                    <span className="news__date news__date--simply">
                                      26. 2. 2019.
                                    </span>
                                  </div>
                                  <h4 className="news__title news__title--simply">
                                    Springer – e zbirka
                                  </h4>
                                </div>
                              </a>
                            </div>
                            <div className="news__container__col news__container__col--simply  news__container__col--small ">
                              <a
                                className="news__link animate-fade-slide"
                                href="https://www.snz.unizg.hr/clinical-key-mef-pretplacen-na-bazu-clinicalkey-650-e-casopisa-i-1150-e-knjiga/"
                              >
                                <div className="news__content news__content--simply">
                                  <div className="news__info news__info--simply">
                                    <span className="news__date news__date--simply">
                                      26. 2. 2019.
                                    </span>
                                  </div>
                                  <h4 className="news__title news__title--simply">
                                    [CLINICAL KEY] MEF pretplaćen na bazu
                                    ClinicalKey (650 e-časopisa i 1150 e-knjiga)
                                  </h4>
                                </div>
                              </a>
                            </div>
                            <div className="news__container__col news__container__col--simply  news__container__col--small ">
                              <a
                                className="news__link animate-fade-slide"
                                href="https://www.snz.unizg.hr/noc-knjige-2018/"
                              >
                                <div className="news__content news__content--simply">
                                  <div className="news__info news__info--simply">
                                    <span className="news__date news__date--simply">
                                      16. 4. 2018.
                                    </span>
                                  </div>
                                  <h4 className="news__title news__title--simply">
                                    Noć knjige 2018.
                                  </h4>
                                </div>
                              </a>
                            </div>
                            <div className="news__container__col news__container__col--simply  news__container__col--small ">
                              <a
                                className="news__link animate-fade-slide"
                                href="https://www.snz.unizg.hr/radionica-cetvrtkom/"
                              >
                                <div className="news__content news__content--simply">
                                  <div className="news__info news__info--simply">
                                    <span className="news__date news__date--simply">
                                      28. 3. 2018.
                                    </span>
                                  </div>
                                  <h4 className="news__title news__title--simply">
                                    Radionica četvrtkom
                                  </h4>
                                </div>
                              </a>
                            </div>
                            <div className="news__container__col news__container__col--simply  news__container__col--small ">
                              <a
                                className="news__link animate-fade-slide"
                                href="https://www.snz.unizg.hr/radionice-cetvrtkom/"
                              >
                                <div className="news__content news__content--simply">
                                  <div className="news__info news__info--simply">
                                    <span className="news__date news__date--simply">
                                      20. 2. 2018.
                                    </span>
                                  </div>
                                  <h4 className="news__title news__title--simply">
                                    Radionice četvrtkom
                                  </h4>
                                </div>
                              </a>
                            </div>
                            <div className="news__container__col news__container__col--simply  news__container__col--small ">
                              <a
                                className="news__link animate-fade-slide"
                                href="https://www.snz.unizg.hr/knjiznica-noc-knjige/"
                              >
                                <div className="news__content news__content--simply">
                                  <div className="news__info news__info--simply">
                                    <span className="news__date news__date--simply">
                                      19. 5. 2017.
                                    </span>
                                  </div>
                                  <h4 className="news__title news__title--simply">
                                    Knjižnica – Noć knjige
                                  </h4>
                                </div>
                              </a>
                            </div>
                            <div className="news__container__col news__container__col--simply  news__container__col--small ">
                              <a
                                className="news__link animate-fade-slide"
                                href="https://www.snz.unizg.hr/nova-knjiga-free-clinics-autorice-virginie-brennan/"
                              >
                                <div className="news__content news__content--simply">
                                  <div className="news__info news__info--simply">
                                    <span className="news__date news__date--simply">
                                      19. 5. 2017.
                                    </span>
                                  </div>
                                  <h4 className="news__title news__title--simply">
                                    Nova knjiga: Free Clinics autorice Virginie
                                    Brennan
                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xs-12">
                              <div className="pagination"></div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                    <div id="povijest-knjiznice" className="tabs__pane">
                      <div className="content">
                        <h3 className="wp-block-heading">
                          Povijest knjižnice Andrija Štampar
                        </h3>
                        <p>
                          Knjižnica Andrija Štampar osnovana je 1927. godine i
                          jedna je od najstarijih javnozdravstvenih knjižnica u
                          ovom dijelu svijeta. Iste je godine osnovan Higijenski
                          zavod sa Školom narodnog zdravlja čiji je knjižnica
                          sastavni dio. Knjižnica Škole nastala je spajanjem
                          knjižnice nekadašnjeg Zemaljskog bakteriološkog zavoda
                          dr. Gutschya, kasnije nazvanog Epidemiološki zavod i
                          knjižnice Rasuhinovog Zavoda za socijalnu medicinu.
                        </p>
                        <p>
                          Sve ove promjene utjecale su na fond knjižnice
                          Andrija Štampar.
                        </p>
                        <p>
                          U knjižnici se mogu pronaći vrlo stare i rijetke
                          knjige. Zahvaljujući profesoru A. Štamparu i njegovim
                          poznanstvima po svijetu, posebno vezi sa Svjetskom
                          zdravstvenom organizacijom i Rockefellerovom zakladom,
                          kompletiran je fond časopisa iz vremena Drugog
                          svjetskog rata kada je knjižnica bila zatvorena. Na
                          taj je način ova knjižnica postala doista jedinstvena
                          ne samo u Hrvatskoj nego i u Europi.
                        </p>
                        <p>
                          U međuvremenu knjižnica je proširila područja svojeg
                          interesa. Osim javnog zdravstva, svoje mjesto našla su
                          i druga biomedicinska područja, npr. socijalna
                          medicina, epidemiologija, istraživanje zdravstvene
                          zaštite, mikrobiologija, imunologija, virologija,
                          parazitologija, mikrobiologija, ekologija, ispitivanje
                          vode, medicina rada, medicinska statistika, medicinska
                          informatika, obiteljska medicina, gerontologija,
                          menadžment u medicini.
                        </p>
                        <p>
                          Od 1992. godine Knjižnica je depozitarna knjižnica
                          Svjetske zdravstvene organizacije.
                        </p>
                        <h3 className="wp-block-heading">Fond</h3>
                        <p>
                          Knjižnica posjeduje oko 50 000 svezaka knjiga i
                          časopisa, te prima oko 40 tekućih naslova časopisa.
                          Knjižnica je otvorenog tipa.
                        </p>
                        <p>
                          Tokom godina mijenjala se prema potrebama svojih
                          korisnika u specifičnom znanstvenom medicinskom
                          području.
                        </p>
                        <p>
                          Danas medicinska knjižnica informacijski podupire
                          nastavni, znanstveni i stručni rad matične ustanove.
                          Knjižnica istodobno pruža usluge svima kojima su
                          potrebne medicinske informacije.
                        </p>
                        <p>
                          Knjižnica je povezana u integrirani sustav Aleph koji
                          koristi većina fakultetskih knjižnica Sveučilišta u
                          Zagrebu. Preko sustava Aleph odvija se knjižnično
                          poslovanje knjižnice, a sustav omogućuje i pristup
                          mrežnom katalogu knjižnice. Korisnici imaju mogućnost
                          korištenja računala u knjižnici preko čijih je IP
                          adresa osiguran pristup svim relevantnim bazama
                          podataka i časopisima iz područja biomedicine i
                          zdravstva koja financira Ministarstvo znanosti,&nbsp;
                          obrazovanja i sporta. Bazama je omogućen pristup i
                          preko AAI@EduHr identiteta.
                        </p>
                        <h3 className="wp-block-heading">Usluge</h3>
                        <p>
                          Knjižnica osigurava otvoreni pristupom svima onima
                          kojima je potrebna medicinska informacija. Pristup
                          osigurava:
                        </p>
                        <ul>
                          <li>uporabu u čitaonicama svekolike građe,</li>
                          <li>
                            posudbu izvan knjižnice udžbeničke građe koje ima u
                            više primjeraka, te fotokopija i korištenje
                            inozemnih časopisa,
                          </li>
                          <li>pretraživanjem baza podataka,</li>
                          <li>fotokopiranje članaka iz časopisa,</li>
                          <li>međuknjižničnom posudbom,</li>
                          <li>
                            izobrazbom korisnika za uporabu informacijskih
                            izvora.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div id="e-izvori" className="tabs__pane">
                      <div className="content">
                        <h3 className="wp-block-heading">E-izvori</h3>
                        <ul>
                          <li>
                            <a
                              rel="noreferrer noopener"
                              href="http://medlib.mef.hr/"
                              target="_blank"
                            >
                              <strong>Repozitorij Medicinskog fakulteta</strong>
                            </a>
                          </li>
                          <li>
                            <strong>
                              <a
                                href="https://repozitorij.mef.unizg.hr/"
                                target="_blank"
                                rel="noreferrer noopener"
                              >
                                Dr Med
                              </a>
                              :&nbsp;Diplomski radovi Medicinskog fakulteta
                            </strong>
                          </li>
                          <li>
                            <a
                              href="http://beta.bib.irb.hr/"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <strong>CROSBI</strong>
                            </a>
                            <strong>: Hrvatska znanstvena bibliografija</strong>
                          </li>
                          <li>
                            <strong>
                              <a
                                href="http://lib.irb.hr/utility/pero/"
                                target="_blank"
                                rel="noreferrer noopener"
                              >
                                PERO
                              </a>
                              : Pretraživač elektroničkih izvora online
                            </strong>
                          </li>
                          <li>
                            <strong>
                              <a
                                href="http://hrcak.srce.hr/"
                                target="_blank"
                                rel="noreferrer noopener"
                              >
                                Hrčak
                              </a>
                              :&nbsp; Portal znanstvenih časopisa Republike
                              Hrvatske
                            </strong>
                          </li>
                          <li>
                            <strong>
                              <a
                                href="https://scholar.google.hr/"
                                target="_blank"
                                rel="noreferrer noopener"
                              >
                                Google Scholar
                              </a>
                              :&nbsp;Pomoću Google Znalca pretražite znanstvenu
                              literaturu iz niza disciplina i izvora,
                              uključujući znanstvene radove, knjige, sažetke i
                              članke.
                            </strong>
                          </li>
                          <li>
                            <strong>
                              <a
                                href="https://doaj.org/"
                                target="_blank"
                                rel="noreferrer noopener"
                              >
                                DOAJ
                              </a>
                              : Directory of Open Access Journals
                            </strong>
                          </li>
                          <li>
                            <a
                              href="https://www.clinicalkey.com/"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <strong>ClinicalKey</strong>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div id="baze-podataka" className="tabs__pane">
                      <div className="content">
                        <h3 className="wp-block-heading">Baze podataka</h3>
                        <ul>
                          <li>
                            <a
                              href="http://katalog.nsk.hr/F/?CON_LNG=ZAG&func=find-e-0&local_base=mfsnz_web"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <strong>Katalog knjižnice</strong>
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://baze.nsk.hr/"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <strong>
                                Portal elektroničkih izvora za hrvatsku ak.
                                zajednicu
                              </strong>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.ncbi.nlm.nih.gov/pubmed/"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <strong>PubMed&nbsp;</strong>
                            </a>
                            slobodno dostupni Medline, najpoznatija medicinska
                            bibliografska baza podataka koju stvara&nbsp;
                            <a
                              href="http://www.ncbi.nlm.nih.gov/"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              National Center for Biotechnology Information
                            </a>
                            &nbsp;(NCBI), odjel&nbsp;
                            <a
                              href="http://www.nlm.nih.gov/"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              S. National Library of Medicine
                            </a>
                            &nbsp;(NLM, Bethesda, USA).
                          </li>
                          <li>
                            <a
                              href="http://apps.webofknowledge.com/WOS_GeneralSearch_input.do?product=WOS&search_mode=GeneralSearch&SID=V1UfETPEJWOa8OjfL8Z&preferencesSaved="
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <strong>Web of Science</strong>
                            </a>
                            &nbsp;portal koji omogućuje pristup bazama podataka
                            Clarivate Analytics
                          </li>
                          <li>
                            <a
                              href="http://apps.webofknowledge.com/CCC_GeneralSearch_input.do?product=CCC&search_mode=GeneralSearch&SID=V1UfETPEJWOa8OjfL8Z&preferencesSaved="
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <strong>Current Contents</strong>
                            </a>
                            &nbsp;baza podataka dostupna preko Web of Science
                            sučelja
                          </li>
                          <li>
                            <a
                              href="https://www.scopus.com/search/form.uri?display=basic"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <strong>Scopus&nbsp;</strong>
                            </a>
                            najveća svjetska bibliografska i citatna baza
                            podataka.
                          </li>
                          <li>
                            <a
                              href="http://ovidsp.tx.ovid.com/sp-3.27.1a/ovidweb.cgi?QS2=434f4e1a73d37e8cac529f721181381a3a40c50b6cd9ea9a69c3fd5eb5bbd7c03b4fdfe0c8e9807068745cd701ad8eca71e2502d6d62b1f4fcab252f48239a04a82eced2000efd7c0cc449bf2836f88edd79d7528d6573c40a8e828230e690ad8847ef03645da97fe0321e218519e9cf5223aac370b7f33445a3903762b4621a3a7ceb865ee7d4d4bcfd3a40eac1b76470d391f115d7a46e73c21cab48029213cbe1be5388c5c247813d03f129ad77d7ebcfcb46cb254e5efb0d030680eeda7e"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <strong>Ovid</strong>
                            </a>
                            &nbsp;sastavnica tvrtke Wolters Kluwer Health, jedan
                            je od vodećih svjetskih davatelja pristupa
                            elektroničkim informacijskim izvorima u području
                            medicine.
                          </li>
                          <li>
                            <a
                              href="https://link.springer.com/search?facet-content-type=%22Book%22&showAll=false"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <strong>Springer – e zbirka</strong>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                href="http://www.hlz.hr"
                target="_blank"
              >
                {" "}
                Hrvatski liječnički zbor{" "}
              </a>
              <a
                className="footer__links__link link-hover"
                href="https://zdravlje.gov.hr"
                target="_blank"
              >
                Ministarstvo zdravlja Republike Hrvatske
              </a>
              <a
                className="footer__links__link link-hover"
                href="https://www.hzjz.hr"
                target="_blank"
              >
                Hrvatski zavod za javno zdravstvo
              </a>
              <a
                className="footer__links__link link-hover"
                href="http://www.stampar.hr"
                target="_blank"
              >
                Nastavni zavod za javno zdravstvo dr. Andrija Štampar
              </a>
              <a
                className="footer__links__link link-hover"
                href="http://www.zdravi-gradovi.com.hr"
                target="_blank"
              >
                Hrvatska mreža zdravih gradova
              </a>
            </div>
            <div className="footer__links__content">
              <a
                className="footer__links__link link-hover"
                href="http://aspher.org"
                target="_blank"
              >
                ASPHER - Association of Schools of Public Health in the European
                Region
              </a>
              <a
                className="footer__links__link link-hover"
                href="#"
                target="_blank"
              >
                FPH-SEE - Forum for Public Health in South East Europe
              </a>
              <a
                className="footer__links__link link-hover"
                href="http://www.whohub-zagreb.org"
                target="_blank"
              >
                WHO-HIV - WHO Collaborating Centre / Knowledge Hub for HIV
                Surveillance
              </a>
              <a
                className="footer__links__link link-hover"
                href="http://www.euro.who.int"
                target="_blank"
              >
                WHO - Regional office for Europe
              </a>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-3"></div>
      </div>
    </div>
    <div className="footer__copyright">
      <div className="row">
        <div className="col-xs-12">
          <div className="footer__copyright__content">
            Copyright © 2023 Škola narodnog zdravlja Andrija Štampar. Sva
            prava pridržana.
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Consent Management powered by Complianz | GDPR/CCPA Cookie Consent https://wordpress.org/plugins/complianz-gdpr */}
  <div id="cmplz-manage-consent" data-nosnippet="true">
    <button className="cmplz-btn cmplz-hidden cmplz-manage-consent manage-consent-1">
      Manage consent
    </button>
  </div>
</>
      );
}
