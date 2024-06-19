
import React from 'react'

const Detail = (props) => {
    const {keyword} = props.searchParams;

    return (
    <div className='container'>
        <h3>Search page </h3>
        <div className='form-group'>
           Kết quả tìm kiếm với từ khoá {keyword}
        </div>


    </div>
  ) 
}

export default Detail
