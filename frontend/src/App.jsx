import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'

function App() {
  const [msg, setMsg]=useState("");
  const [products,setProducts]=useState([]);
  
  useEffect(()=>{

    async function getdata(){
      
      await axios.get('http://localhost:9000/products')
      .then((response)=>{
        setProducts(response.data);
      })
      // console.log(response.data);
      // setProducts( response.data);
    }

   getdata();
  },[])
  // console.log(products)

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Products🛒
      </h1>
      
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900">{product.title}</h2>
              <p className="text-lg text-gray-600 mt-2">${product.price}</p>
            
            </div>
          </div>
        ))}
      </div>
    </div>

      
    </>
  )
}

export default App
