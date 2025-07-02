import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../Home/Header';
import Footer2 from '../Home/Footer2';
import './Services.css';

const Services = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLanguage");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <>
      <div id="cover">
        <div id="totalr">
          <div id="Hederarea">
            <Header />
          </div>

          <div id="Listingg">
            <h1>{t("services.directoryListing.title")}</h1>
            <p>{t("services.directoryListing.letters")}</p>
          </div>

          <div id="featured">
            <h1>{t("services.featuredListing")}</h1>
          </div>

          <div id="bannerr1">
            <div id="i1">
              <img src="https://hielscherelectrical.com.au/wp-content/uploads/2021/08/Product-Review-Hanwha-Q-CELLS-Solar-Panels.jpg" />
            </div>
            <div id="i1l">
              <img src="https://www.cambridge.org/core/services/aop-file-manager/file/6560c7b957556ffa4e8ea85e" />
            </div>
            <div id="i1l">
              <img src="https://decarbonfuse.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN2ZCQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5f8e02b5bfd53ecb70274034478f53a2aac03d0d/aircapture.webp" />
            </div>
          </div>

          <div id="des">
            <div id="innerdes">
              <p>{t("services.description")}</p>
            </div>
          </div>

          <div id="ufcourse">
            <div id="fcourse">
              <button>{t("services.courseButton")}</button>
            </div>
          </div>

          <div id="utotalscard">
            <div id="totalscard">
              {[1, 2, 3, 4].map((_, i) => (
                <div id="scard" key={i}>
                  <img src={`./s${i+1}.png`} />
                  <h1>{t(`services.cards.${i}.title`)}</h1>
                  <p>{t(`services.cards.${i}.desc`)}</p>
                  <div id="innerh1s">
                    <h1>{t("services.professor")}</h1>
                    <p>Marie Curie</p>
                  </div>
                  <div id="innerh1ss">
                    <h1>{t("services.commencing")}</h1>
                    <p>01/01/2024</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="ubottomtexter">
            <div id="bottomtexter">
              <p>{t("services.trainingSummary")}</p>
            </div>
          </div>

          <div id="bottomone">
            <div id="bcard1">
              <h1>{t("services.course1.title")}</h1>
              <p>{t("services.course1.line1")}</p>
              <p>{t("services.course1.line2")}</p>
              <p>{t("services.course1.line3")}</p>
              <p>{t("services.course1.line4")}</p>
              <h1>⭐ 4.3 ★★★★★ (990 students)</h1>
              <p>{t("services.createdBy")}</p>
            </div>
            <div id="bcard11">
              <h1>{t("services.course2.title")}</h1>
              <p>{t("services.course2.desc")}</p>
              <h1>⭐ 4.4 ★★★★★ (4,576 students)</h1>
              <p>{t("services.createdBy")}</p>
            </div>
          </div>
        </div>
        <Footer2 />
      </div>
    </>
  );
};

export default Services;
