import React, { useEffect, useState } from "react";
import style from "./LandingPage.module.css";
import axios from "axios";
import {Carousell} from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AllPageNews } from "./AllPageNews";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { useSearchParams } from "react-router-dom";
import { Footer } from "./Footer";

export const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+searchParams.get("_page") || 1);
  const handlePageChange = (a) => {
    setPage(page + a);
    makeData();
  };
  const makeData = () => {
    setSearchParams({ _page: page });
  };
  useEffect(() => {
    setSearchParams({ _page: page });
    axios
      .get(`https://cryptic-ravine-10338.herokuapp.com/articles`, {
        params: {
          _page: page,
          _limit: 10,
        },
      })
      .then((res) => {
        setLandingPageData(res.data);
      });
  }, [page, setSearchParams]);

  //   console.log(landingPageData[0]);

  return (
    <div style={{ background: "rgb(239, 239, 239)" }}>
      {/* {isLoading ? <p>heelo</p> : "nooo"} */}
      <div className={style.landingBoxContainer}>
        <div className={style.fisrtNews}>
          <div>
            <img src={landingPageData[0]?.urlToImage} alt="" />
          </div>
          <div>
            <h1>{landingPageData[0]?.title}</h1>
            {/* <p>{landingPageData[0]?.description}</p> */}
            <p>{landingPageData[0]?.content}</p>
          </div>
        </div>
        {/* first top box ended */}
        <div className={style.secondBoxNews}>
          <div>
            <div>
              <h1>{landingPageData[1]?.title}</h1>
              <img src={landingPageData[1]?.urlToImage} alt="" />
              <p
                style={{
                  marginTop: "10px",
                  marginBottom: "1px",
                  fontSize: "larger",
                }}
              >
                {landingPageData[1]?.description}
                {landingPageData[1]?.content}
              </p>
            </div>
            <div>
              <strong style={{ color: "rgb(163, 32, 32)" }}>
                {"TOP NEWS STORIES >>"}
              </strong>
              <hr></hr>
              {landingPageData?.map((el, ind) => {
                if (ind > 3) {
                  return (
                    <div
                      key={ind}
                      style={{
                        borderBottom: "1px solid rgb(195, 195, 195)",
                        marginTop: "2px",
                      }}
                    >
                      <p style={{ fontSize: "16px" }}>{el.title}</p>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
          {/* left side over */}
          <div className={style.sliderWrapperBox}>
            <div>
              <img
                style={{ width: "70%" }}
                src="https://indianexpress.com/wp-content/themes/indianexpress/microsites/brand/fb-covid-sos/images/HER-SOS-2022-Logo.png"
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "100%", height: "250px" }}
                src="https://images.indianexpress.com/2022/05/SOS.jpg?resize=450%2C250&w=400"
                alt=""
              />
              <p
                style={{
                  textAlign: "center",
                  marginTop: "15px",
                  fontSize: "larger",
                  color: "gray",
                }}
              >
                How a tribal woman helped her community in a Chhattisgarh
                village during Covid-19
              </p>
            </div>
            <div>
              <h3>READ MORE STORIES</h3>
            </div>
          </div>
        </div>
        {/* start of carousel div */}
        <div>
          <Carousell />
        </div>
        <br></br>
        <div>
          <AllPageNews data={landingPageData} />
        </div>
      </div>
      <div className={style.paginate}>
        <button disabled={page === 1} onClick={() => handlePageChange(-1)}>
          <FcPrevious style={{ fontSize: "50px" }}>
            PREV
          </FcPrevious>
        </button>
        <button disabled={page === 2} onClick={() => handlePageChange(1)}>
          <FcNext style={{ fontSize: "50px" }}>NEXT</FcNext>
        </button>
      </div>
      <Footer />
    </div>
  );
};
