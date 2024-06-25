import axios from 'axios'
import React from 'react'
import { httpApiStore } from './util/setting';
import { getProductApi } from './server/action/product';
import Image from "next/image";
import Link from 'next/link'
import HomeLayout from './templates/HomeLayout';
const Home = async () => {
  const arrProduct = await getProductApi();
  return (
    <main>
      <HomeLayout>
        <div className='display-4'>Shoes Shop</div>
        <div className='row'>
          {arrProduct?.map((item, index) => {
            return <div className="col-4 mt-2" key={index}>
              <div className='card'>
                <Image src={item.image} alt="..." width={200} height={200} style={{ width: '100%', height: 'auto' }} />
                <div className='card-body'>
                  <h3>{item.name}</h3>
                  <h3>{item.price}</h3>
                  <Link className='btn btn-dark' href={`/detail/${item.id}`}>View detail</Link>
                </div>
              </div>
            </div>
          })}
        </div>
      </HomeLayout>

    </main>
  )
}
export default Home


//Client side data 
// 'use client'
// import Image from "next/image";
// import styles from "./page.module.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
// export default function Home() {
//   const [arrProduct,setArrayProduct] = useState([])
//   console.log(arrProduct)
//   const getApiProduct = async () => {
//     const res = await axios.get('/api/products');
//     setArrayProduct(res.data.content);
//   }
//   useEffect(() =>{
//     getApiProduct();
//   },[])
//   return (
//     <main className={styles.main}>
//       <h3>Shoes shop</h3>
//       <button onClick={()=>{
//         getApiProduct();
//       }}>getAPi</button>
//       {arrProduct?.map((item,index)=>{
//         return <div className="" key={index}>
//           <h3>{item.name}</h3>
//         </div>
//       })}
//     </main>
//   );
// }

