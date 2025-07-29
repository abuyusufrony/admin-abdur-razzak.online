import React, { useEffect, useState } from 'react';


const Landproduct = () => {

    const [products, setlanproducts] = useState([])
    useEffect(() => {
        fetch('/landproduct.json')
            .then(res => res.json())
            .then(data => setlanproducts(data))
            .catch(err => console.error('Error fetching land products:', err));

    }, [])


    return (



        <div className="font-popins px-4 sm:px-6 md:px-10   py-10 relative">
            <h2 className="font-semibold text-2xl sm:text-3xl">Landscape Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        style={{ backgroundColor: 'rgb(242, 244, 246)' }}
                        className="p-4 rounded-lg mb-4"
                    >
                        <div className="border-dashed border-2 border-gray-300 mb-4">
                            <img className="rounded-2xl w-full" src={product.image} alt="" />
                        </div>
                        <h3 className="text-lg font-semibold">{product.title}</h3>
                        <p>{product.price}</p>
                        <button className="bg-lime-500 rounded-full px-8 py-2 text-sm hover:bg-lime-600 mt-3.5">
                            Shop Now
                        </button>
                    </div>
                ))}
            </div>
        </div>


    );
};

export default Landproduct;