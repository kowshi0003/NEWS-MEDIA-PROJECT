import style from './Footer.module.css'

export const Footer = ()=>{

    return (
      <>
        <div className={style.footbigcont}>
          <div className={style.logo}>
            <img
              src="https://indianexpress.com/wp-content/themes/indianexpress/images/theindianexpress-logo-n.svg"
              alt="logo"
            />
            <a href="./">
              <img
                src="https://images.hindustantimes.com/images/app-images/2022/2/mweb_button_svg.svg"
                alt="appp"
              />
            </a>
          </div>

          <p className={style.footerSubscribe}>
            Subscribe to our best newsletters
          </p>

          <div className={style.socialMedia}>
            <div className={style.subscribe}>
              <input type="text" placeholder="Enter Email Address" />
              <button>SUBSCRIBE</button>
            </div>
            <div className={style.subscribe__social}>
              <li>
                <a href="https://www.facebook.com/indianexpress">
                  <img
                    src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/fb-logo.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/indian-express/">
                  <img
                    src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/in-logo.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/indian-express/">
                  <img
                    src="https://images.hindustantimes.com/images/app-images/2022/2/instagram.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/indianexpress">
                  <img
                    src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/tw-logo.svg"
                    alt=""
                  />
                </a>
              </li>
            </div>  
          </div>

          <div className={style.footer__menu}>
            <div>
              <ul>
                <li className={style.heading}>
                  <a href="/">
                    Latest News
                  </a>
                </li>
                <li className={style.heading}>
                  <a href="/">
                    World News
                  </a>
                </li>
                <li className={style.heading}>
                  <a href="/">
                    India News
                  </a>
                </li>
                <li className={style.heading}>
                  <a href="/">Cricket</a>
                </li>
                <li className={style.heading}>
                  <a href="/">CITY NEWS</a>
                </li>
                <li>
                  <a href="/">
                    Bengaluru
                  </a>
                </li>
                <li>
                  <a href="/">
                    Bhopal
                  </a>
                </li>
                <li>
                  <a href="/">
                    Chandigarh
                  </a>
                </li>
                <li>
                  <a href="/">
                    Dehradun
                  </a>
                </li>
                <li>
                  <a href="/">
                    Delhi
                  </a>
                </li>
                <li>
                  <a href="/">
                    Gurugram
                  </a>
                </li>
                <li>
                  <a href="/">
                    Indore
                  </a>
                </li>
                <li>
                  <a href="/">
                    Jaipur
                  </a>
                </li>
                <li>
                  <a href="/">
                    Kolkata
                  </a>
                </li>
                <li>
                  <a href="/">
                    Lucknow
                  </a>
                </li>
                <li>
                  <a href="/">
                    Mumbai
                  </a>
                </li>
                <li>
                  <a href="/">
                    Noida
                  </a>
                </li>
                <li>
                  <a href="/">
                    Patna
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li>
                  <a href="/">
                    Ranchi
                  </a>
                </li>
                <li>
                  <a href="/">
                    Others
                  </a>
                </li>
                <li className={`${style.heading}+" " +${style.mt14px}`}>
                  <a href="/">
                    Entertainment
                  </a>
                </li>
                <li>
                  <a href="/">
                    Bollywood
                  </a>
                </li>
                <li>
                  <a href="/">
                    Hollywood
                  </a>
                </li>
                <li>
                  <a href="/">
                    Music
                  </a>
                </li>
                <li>
                  <a href="/">
                    Tamil Cinema
                  </a>
                </li>
                <li>
                  <a href="/">
                    Telugu Cinema
                  </a>
                </li>
                <li>
                  <a href="/">
                    TV
                  </a>
                </li>
                <li>
                  <a href="/">
                    Web Stories
                  </a>
                </li>
                <li>
                  <a href="/">
                    Others
                  </a>
                </li>
                <li className={`${style.heading}+" " +${style.mt14px}`}>
                  <a href="/">
                    ASTROLOGY
                  </a>
                </li>
                <li>
                  <a href="/">
                    Horoscope
                  </a>
                </li>
                <li>
                  <a href="/">
                    Vastu
                  </a>
                </li>
                <li>
                  <a href="/">
                    Gemstones
                  </a>
                </li>
                <li>
                  <a href="/">
                    Panchang Today
                  </a>
                </li>
                <li>
                  <a href="/">
                    Compatibility Calculator
                  </a>
                </li>
                <li>
                  <a href="/">
                    Your Fortune Today
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className={style.heading}>
                  <a href="/">
                    Education
                  </a>
                </li>
                <li>
                  <a href="/">
                    Admission News
                  </a>
                </li>
                <li>
                  <a href="/">
                    Board Exams
                  </a>
                </li>
                <li>
                  <a href="/">
                    Competitive Exams
                  </a>
                </li>
                <li>
                  <a href="/">
                    Employment News
                  </a>
                </li>
                <li>
                  <a href="/">
                    Exam Results
                  </a>
                </li>
                <li>
                  <a href="/">
                    Education News
                  </a>
                </li>
                <li className={`${style.heading}+" " +${style.mt14px}`}>
                  <a href="/">
                    LIFESTYLE
                  </a>
                </li>
                <li>
                  <a href="/">
                    Art and Culture
                  </a>
                </li>
                <li>
                  <a href="/">
                    Brunch
                  </a>
                </li>
                <li>
                  <a href="/">
                    Fashion
                  </a>
                </li>
                <li>
                  <a href="/">
                    Festivals
                  </a>
                </li>
                <li>
                  <a href="/">
                    Health
                  </a>
                </li>
                <li>
                  <a href="/">
                    Recipes
                  </a>
                </li>
                <li>
                  <a href="/">
                    Relationship
                  </a>
                </li>
                <li>
                  <a href="/">
                    Travel
                  </a>
                </li>
                <li className={`${style.heading}+" " +${style.mt14px}`}>
                  <a href="/">
                    Web Stories
                  </a>
                </li>
                <li className={style.heading}>
                  <a href="/">Trending</a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className={style.heading}>
                  <a href="/">Business</a>
                </li>
                <li className={style.heading}>
                  <a href="/">Photos</a>
                </li>
                <li className={style.heading}>
                  <a href="/">Videos</a>
                </li>
                <li className={style.heading}>
                  <a href="/">Budget</a>
                </li>
                <li className={style.heading}>
                  <a href="/">
                    Environment
                  </a>
                </li>
                <li className={style.heading}>
                  <a href="/">Science</a>
                </li>
                <li className={style.heading}>
                  <a href="/">Opinion</a>
                </li>
                <li className={style.heading}>
                  <a href="/">
                    Editorials
                  </a>
                </li>
                <li className={`${style.heading}+" " +${style.mt14px}`}>
                  <a href="/">Sports</a>
                </li>
                <li>
                  <a href="/">
                    Badminton
                  </a>
                </li>
                <li>
                  <a href="/">
                    Football
                  </a>
                </li>
                <li>
                  <a href="/">
                    Hockey
                  </a>
                </li>
                <li>
                  <a href="/">
                    Tennis
                  </a>
                </li>
                <li>
                  <a href="/">
                    Others
                  </a>
                </li>
                <li className={`${style.heading}+" " +${style.mt14px}`}>
                  <a href="/">Books</a>
                </li>
               

                <li className={style.heading}>
                  <a href="/">
                    Brand Post
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className={style.heading}>
                  <a href="/">
                    Brand Stories
                  </a>
                </li>
                <li className={style.heading}>
                  <a href="/">
                    Elections
                  </a>
                </li>
                <li>
                  <a href="/">
                    Uttar Pradesh Assembly Election
                  </a>
                </li>
                <li>
                  <a href="/">
                    Punjab Assembly Election
                  </a>
                </li>
                <li>
                  <a href="/">
                    Goa Assembly Election
                  </a>
                </li>
                <li>
                  <a href="/">
                    Uttarakhand Assembly Election
                  </a>
                </li>
                <li>
                  <a href="/">
                    Manipur Assembly Election
                  </a>
                </li>
                <li className={`${style.heading}+" " +${style.mt14px}`}>
                  <a href="/">
                    Quickreads
                  </a>
                </li>
                <li className={style.heading}>
                  <a href="/">
                    Covid 19
                  </a>
                </li>
                <li className={style.heading}>
                  <a href="/">
                    Omicron
                  </a>
                </li>
                <li className={style.heading}>
                  <a href="/">
                    Assembly Election
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className={style.heading}>
                  <span>TRENDING NEWS</span>
                </li>
                <li>
                  <a href="/">
                    India Covid Cases
                  </a>
                </li>
                <li>
                  <a href="/">
                    Russia Ukraine War Live
                  </a>
                </li>
                <li>
                  <a href="/">
                    Horoscope Today
                  </a>
                </li>
                <li>
                  <a href="/">
                    LIC IPO
                  </a>
                </li>
                <li>
                  <a href="/">
                    jodhpur violence
                  </a>
                </li>
                <li className={`${style.heading}+" " +${style.mt14px}`}>
                  <span>TRENDING TOPICS</span>
                </li>
                <li>
                  <a href="/">
                    IPL 2022
                  </a>
                </li>
                <li>
                  <a href="/">
                    Russia Ukraine Crisis
                  </a>
                </li>
                <li>
                  <a href="/">
                    Petrol Prices
                  </a>
                </li>
                <li>
                  <a href="/">
                    Today Horoscope
                  </a>
                </li>
                <li>
                  <a href="/">
                    Ukraine
                  </a>
                </li>
                <li>
                  <a href="/">
                    Russia
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={style.footbigdarak}>
          <div className={style.ht__basic}>
            <div>
              <p> About Us </p>
              <p> Contact us </p>
            </div>
            <div>
              <p> Terms of use </p>
              <p> Privacy policy </p>
            </div>
            <div>
              <p> Weather Today </p>
            </div>
            <div>
              <p> Subscription </p>
              <p> Disclaimer </p>
            </div>
            <div>
              <p> Print Ad Rates </p>
              <p> Code of Ethics </p>
            </div>
            <div>
              <p> Site Map </p>
              <p> RSS Feeds </p>
            </div>
          </div>

          <div className={style.spons}>
            <ul className={style.ht__basic}>
              <li>
                <a href="https://www.livemint.com/">
                  <img
                    src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/mint-logo.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://www.livehindustan.com/">
                  <img
                    src="https://indianexpress.com/wp-content/themes/indianexpress/images/theindianexpress-logo-n.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://lifestyle.livemint.com/">
                  <img
                    src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/mint-lounge.svg"
                    alt=""
                  />
                </a>
              </li>
              
              <li>
                <a href="/">
                  <img
                    src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-bangla.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://www.healthshots.com/">
                  <img
                    src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/healthshots.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/smartcast-logo.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <p className={style.copyRight}>© 2022 IndianExpress</p>
        </div>
      </>
    );
}