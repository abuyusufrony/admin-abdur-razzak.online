import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Agproducts = () => {
    const [agproducts, setagproducts] = useState([]);

    useEffect(() => {
        fetch('Agproducts.json')
            .then((res) => res.json())
            .then((data) => setagproducts(data));
    }, []);

    // Animation variant for cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: 'easeOut',
            },
        }),
    };

    return (
        <div className="font-popins px-4 sm:px-6 md:px-10 py-10 relative">
            <h2 className="font-semibold text-2xl sm:text-3xl">Agricultural Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {agproducts.map((product, i) => (
                    <motion.div
                        key={product.id}
                        className="p-4 rounded-lg mb-4"
                        style={{ backgroundColor: 'rgb(242, 244, 246)' }}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={i}
                        whileHover={{
                            scale: 1.03,
                            boxShadow: '0px 8px 20px rgba(0,0,0,0.1)',
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="border-dashed border-2 border-gray-300 mb-4">
                            <img className="rounded-2xl w-full" src={product.image} alt={product.title} />
                        </div>
                        <h3 className="text-lg font-semibold">{product.title}</h3>
                        <p>{product.price}</p>
                        <button className="bg-[rgb(176,221,29)] rounded-full px-8 py-2 cursor-pointer text-sm hover:bg-lime-600 mt-3.5">
                            Shop Now
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Agproducts;
