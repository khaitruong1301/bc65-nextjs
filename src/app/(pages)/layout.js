'use client'
import React from 'react'
import Header from '../components/Header'
/*import redux*/
import { Provider } from "react-redux";
import { store } from '../redux/store';

const layout = ({children}) => {
  return (
    <div>
        <Provider store={store}>
            <Header />
            {children}
        </Provider>
    </div>
  )
}

export default layout