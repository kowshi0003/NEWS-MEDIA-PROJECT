import React from 'react'
import style from './BigFilter.module.css'
import { GrClose } from 'react-icons/gr'
export const BigFilter = (props) => {
// console.log(props);
    
    return (
        <div className={style.wrap_big}>
            <GrClose className={style.crossComponent} onClick={()=>props.el.setHamPage(true)}/>

            <div className={style.page_wrapper}>
                <div className={style.ulBox_cont}>
                    <ul>
                        <li>
                            <ul>
                                <li><strong>World</strong></li>
                                <li ><strong>India</strong></li>
                                <li ><strong>North East India</strong></li>
                                <li><>Arunachal Pradesh</></li>
                                <li><>Assam</></li>
                                <li><>Manipur</></li>
                                <li><>Meghalaya</></li>
                                <li><>Mizoram</></li>
                                <li><>Nagaland</></li>
                                <li><>Tripura</></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>Entertainment</strong></li>
                                <li><>Sports</></li>
                                <li><>News</></li>
                                <li><>Lifestyle</></li>
                                <li><>Viral</></li>
                                <li><>Technology</></li>
                                <li><>Archives</></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>Explained</strong></li>
                                <li><>Technology</></li>
                                <li><>Entertainment</></li>
                                <li><>Lifestyle</></li>
                                <li><>Food</></li>
                                <li><>Sports</></li>
                                <li><>Idea Exchange</></li>
                                <li><>News</></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>3 Things</strong></li>
                                <li><>Express Sports</></li>
                                <li><>Water</></li>
                                <li><>Likh: The Process</></li>
                                <li><>Metro Food Hoppers</></li>
                                <li><>The Sandip Roy Show</></li>
                                <li><>Talking Books</></li>
                                <li><>What to Watch this Weekend</></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>Opinion</strong></li>
                                <li><>Explained</></li>
                                <li><>Delhi Confidential</></li>
                                <li><>Astrology</></li>
                                <li><>Epaper</></li>
                                <li><>Todays Paper</></li>
                                <li><>Sunday Eye</></li>
                            </ul>
                        </li>
                    </ul>

                    <hr></hr>
                    <ul>
                        <li>
                            <ul>
                                <li><strong>Bollywood</strong></li>
                                <li><>Hollywood</></li>
                                <li><>Television</></li>
                                <li><>Music</></li>
                                <li><>Reviews</></li>
                                <li><>Regional</></li>
                                <li><>Tamil</></li>
                                <li><>Web Series</></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>What Is</strong></li>
                                <li><>Who Is</></li>
                                <li><>When Is</></li>
                                <li><>How to</></li>
                                <li><>Research</></li>
                                <li><>GenderAnd</></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>Olympics</strong></li>
                                <li><>T20 WC</></li>
                                <li><>Badminton</></li>
                                <li><>Cricket</></li>
                                <li><>Football</></li>
                                <li><>FIFA 2018</></li>
                                <li><>Hockey</></li>
                                <li><>Motor Sport</></li>
                                <li><>Tennis</></li>
                                <li><>WWE Wrestling</></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>Technology</strong></li>
                                <li><>Mobile &amp; Tabs</></li>
                                <li><>Gadgets</></li>
                                <li><>Science</></li>
                                <li><>Tech Reviews</></li>
                                <li><>Social</></li>
                                <li><>Tech News</></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>Books</strong></li>
                                <li><>Fashion</></li>
                                <li><>Food Wine</></li>
                                <li><>Health</></li>
                                <li><>Fitness</></li>
                                <li><>Art &amp; Culture</></li>
                                <li><>Workplace</></li>
                                <li><>Auto &amp; Travel</></li>
                            </ul>
                        </li>
                    </ul>

                    <hr></hr>
                    <ul>
                        <li>
                            <ul>
                                <li><strong>Trending In India</strong></li>
                                <li><>Trending Globally</></li>
                                <li><>Viral Videos</></li>
                                <li><>Bizarre</></li>
                                <li><>Voice</></li>
                                <li><><strong>Parenting</strong></></li>
                                <li><>Food</></li>
                                <li><>Health &amp; Fitness</></li>
                                <li><>Learning</></li>
                                <li><>Family</></li>
                                <li><>Blogs</></li>
                                <li><>Things To Do</></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>Ahmedabad</strong></li>
                                <li><>Bangalore</></li>
                                <li><>Chandigarh</></li>
                                <li><>Chennai</></li>
                                <li><>Delhi</></li>
                                <li><>Jaipur</></li>
                                <li><>Kolkata</></li>
                                <li><>Lucknow</></li>
                                <li><>Ludhiana</></li>
                                <li><>Mumbai</></li>
                                <li><>Pune</></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>Bank Jobs</strong></li>
                                <li><>Defence Jobs</></li>
                                <li><>PSU</></li>
                                <li><>Railway</></li>
                                <li><>UPSC</></li>
                                <li><>Teachers Job</></li>
                                <li><>SSC</></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>Aviation</strong></li>
                                <li><>Banking &amp; finance</></li>
                                <li><>Budget</></li>
                                <li><>Business Other</></li>
                                <li><>Companies</></li>
                                <li><>Economy</></li>
                                <li><>Market</></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>Students Voice</strong></li>
                                <li><>Study Abroad</></li>
                                <li><strong>More</strong></li>
                                <li><>Elections</></li>
                                <li><>Brand Solutions</></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
