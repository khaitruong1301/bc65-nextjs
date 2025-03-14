  import { getDetailProductByIdApi, getProductApi } from '@/app/server/action/product';
import React from 'react'
import Image from 'next/image'

// export async function generateStaticParams() {
//     const res = await getProductApi();//Lấy ra tất cả sản phẩm để gọi getById Api cache server 
//     let arrId = [];
//     for (let item in res){
//       arrId.push({id: item.id});
//     }
//     return arrId;
// }


//SSG: build hết dữ liệu cho tất cả sản phẩm của trang chi tiết
const Detail = async (props) => {
   const {tham_so} = props.params;
   const productDetail = await getDetailProductByIdApi(tham_so);
  return (
    <div className='container'>
        <h3>Detail</h3>
        <div className='row'>
          <div className='col-2'>
            <Image src={productDetail.image} alt='...' width={100} height={100} className='w-100 h-auto' />
          </div>
          <div className='col-8'>
            <h3>{productDetail.name}</h3>
            <p>{productDetail.description}</p>
            <div>
            {productDetail.size.map((item)=>{
              return <button className='btn btn-dark me-2' key={item}>{item}</button>
            })}
            </div>
          </div>
        </div>
    </div>
  )
}
export default Detail