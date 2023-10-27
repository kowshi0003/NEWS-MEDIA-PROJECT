import React from 'react';
import { Carousel } from 'react-responsive-carousel';

 
export const Carousell = () => {
  let allData = [
    {
      urlToImage:
        "https://images.indianexpress.com/2014/03/agnipath-protests.jpg?w=660",
    },
    {
      urlToImage:
        "https://images.indianexpress.com/2022/06/nerves_200_pixabay.jpg",
    },

    {
      urlToImage:
        "https://images.indianexpress.com/2022/06/WhatsApp-Express-Photo-1-4.jpg",
    },
    {
      urlToImage:
        "https://images.hindustantimes.com/img/2022/06/18/1600x900/alia_bhatt_1655521865957_1655521876149.JPG",
    },
    {
      urlToImage:
        "https://c.ndtvimg.com/2022-06/f7e6b6cg_modi-mother_625x300_18_June_22.jpg",
    },

    {
      urlToImage:
        "https://images.hindustantimes.com/img/2022/06/18/1600x900/vidyut_jammwal_1655520995400_1655520995538.jpg",
    },
    {
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2022/03/untitled-design-1-43-164673970816x9.png",
    },
    {
      urlToImage:
        "https://static.toiimg.com/thumb/msid-92292833,width-1070,height-580,imgsize-108666,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    },

    {
      urlToImage:
        "https://img.onmanorama.com/content/dam/mm/en/lifestyle/health/images/2022/6/18/health.jpg",
    },
    {
      urlToImage:
        "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/9ycwfedsxvbrmqmg_1655519233.jpeg",
    },
    {
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2022/06/18/1600x900/HT_Tech_(23)_1651402236549_1655517398042.jpg",
    },
    {
      urlToImage:
        "https://images.indianexpress.com/2022/06/indian-army-expl.jpg",
    },
    {
      urlToImage:
        "https://images.hindustantimes.com/img/2022/06/18/1600x900/modi_biden_1655515205051_1655515213806.JPG",
    },
    {
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/EIIKU36SEJK45CLODNICDXIKLI_120-647x363.jpeg?nDIuOfyxyc1cM8G5_mZfKXY5r85zT7qc",
    },
    {
      urlToImage:
        "https://images.indianexpress.com/2022/06/gujarat-riots-2.jpg",
    },
    {
      urlToImage:
        "https://images.hindustantimes.com/img/2022/06/18/1600x900/20220617-KPT-SK-MN-03-0_1655511814621_1655511837352.JPG",
    },
    {
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/341100/341173.6.jpg",
    },
    {
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2022/06/pakistan-165543741016x9.jpg",
    },
  ];
 return (
   <>
     <Carousel autoPlay={true} infiniteLoop="true" showThumbs={false}>
       {allData.map((el, ind) => {
         return (
           <div key={ind} style={{ height: "400px" }}>
             <img
               style={{ height: "100%", width: "96%" }}
               src={el.urlToImage}
               alt=""
             />
           </div>
         );
       })}
     </Carousel>
   </>
 );
 }


 