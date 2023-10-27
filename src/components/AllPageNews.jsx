import React from 'react'
import style from './AllPageNews.module.css'
export const AllPageNews = (props) => {
    const allData = props.data
    console.log(allData);
  return (
    <div className={style.tenNews}>
        {
            allData?.map((el,ind)=>{
                console.log(el,"el");
             return (
               <div>
                 <div className={style.fisrtNews} key={ind}>
                   <div>
                     <h1>{el.title}</h1>
                     <p>{el.content}</p>
                     <p className={style.author}>Author : {el.author}</p>
                     <p className={style.author}> {el.publishedAt}</p>
                   </div>

                   <div>
                     <img src={el?.urlToImage} alt="" />
                   </div>
                 </div>
                 <hr></hr>
                 <br></br>
               </div>
             );
                
            })
        }
    </div>
  )
}
