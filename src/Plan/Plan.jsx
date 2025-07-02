import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Plan.css";
import Header from '../Home/Header';
import Footer2 from '../Home/Footer2';

const Plan = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="cover">
        <div id="uuq">
          <div id="hederArea">
            <Header />
          </div>

          <div id="innerPlan">
            <div id="innerheading">
              <h1>{t("plan.membership_plans")}</h1>
            </div>

            <div id="totalCards">
              {/* INDIVIDUAL PLAN */}
              <div id="Cards1">
                <div id="inCard">
                  <h3>{t("plan.individual")}</h3>
                  <h1>C$54 / {t("plan.month")}</h1>
                  <p>{t("plan.individual_desc")}</p>
                  <div id="Listing">
                    <p>✔ {t("plan.listing")}</p>
                    <p>✔ {t("plan.dashboard")}</p>
                    <p>✔ {t("plan.news_access")}</p>
                    <p>✔ (3) {t("plan.transactions")}</p>
                  </div>
                  <button>{t("plan.buy_now")}</button>
                </div>
              </div>

              {/* PROFESSIONAL PLAN */}
              <div id="Cards">
                <div id="inCard">
                  <h3>{t("plan.professional")}</h3>
                  <h1>C$74.99 / {t("plan.month")}</h1>
                  <p>{t("plan.professional_desc")}</p>
                  <div id="Listing">
                    <p>✔ {t("plan.listing")}</p>
                    <p>✔ {t("plan.dashboard")}</p>
                    <p>✔ {t("plan.news_access")}</p>
                    <p>✔ (3) {t("plan.transactions")}</p>
                    <p>✔ {t("plan.store_service")}</p>
                  </div>
                  <button>{t("plan.buy_now")}</button>
                </div>
              </div>

              {/* PREMIUM PLAN */}
              <div id="Cards3">
                <div id="inCard">
                  <h3>{t("plan.premium")}</h3>
                  <h1>C$99.99 / {t("plan.month")}</h1>
                  <p>{t("plan.premium_desc")}</p>
                  <div id="Listing">
                    <p>✔ {t("plan.freemium_listing")}</p>
                    <p>✔ {t("plan.dashboard")}</p>
                    <p>✔ {t("plan.news_posting")}</p>
                    <p>✔ (3) {t("plan.transactions")}</p>
                    <p>✔ {t("plan.store_service")}</p>
                  </div>
                  <button>{t("plan.buy_now")}</button>
                </div>
              </div>
            </div>
          </div>

          <div id="Perks">
            <h1>{t("plan.membership_perks")}</h1>
            <p>{t("plan.perk1")}</p>
            <p>{t("plan.perk2")}</p>
          </div>

          <div id="iio">
            <div id="Blockchain">
              <h1>{t("plan.blockchain_title")}</h1>
              <p>{t("plan.blockchain_text")}</p>
            </div>
            <img id="imager" src="https://static.vecteezy.com/system/resources/previews/055/135/329/non_2x/3d-gold-coin-stacks-with-a-rising-arrow-representing-business-growth-investment-success-and-positive-financial-trends-free-png.png" />
          </div>

          <div id="yyy">
            <img id="imager2" src="https://www.tunley-environmental.com/hs-fs/hubfs/Website%20Sized%20Images/Graphics/Embodied%20Carbon%20Assessment-03.png?width=500&height=439&name=Embodied%20Carbon%20Assessment-03.png" />
            <div id="Blockchain2">
              <h1>{t("plan.investment_hub_title")}</h1>
              <p>{t("plan.investment_hub_text")}</p>
            </div>
          </div>

          <div id="Laster">
            <div id="Blockchain3">
              <h1>{t("plan.commitment_title")}</h1>
              <p>{t("plan.commitment_text")}</p>
            </div>
            <img id="lasterimg" src="https://static.vecteezy.com/system/resources/thumbnails/040/735/326/small/ai-generated-silhouette-two-hand-holding-soil-with-growing-sprout-black-color-only-png.png" />
          </div>
        </div>

        <Footer2 />
      </div>
    </>
  );
};

export default Plan;
