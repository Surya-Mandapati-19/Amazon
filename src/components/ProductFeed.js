import React from 'react';
import Product from './Product';

function ProductFeed({ products }) {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
     md:-mt-52 mx-auto'>
      {/** First four products */}
      { products
        .slice(0,4)
        .map(({ id, title, price, description, category, image }) => (
          <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
          />
      ))}
      {/** Banner Image */}
      <img
       className='md:col-span-full' 
       src="https://links.papareact.com/dyz"
       alt=""
       />
      {/** Products 4 and 5 */}
       <div className='md:col-span-2'>
         { products
          .slice(4,5)
          .map(({ id, title, price, description, category, image }) => (
            <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
            />
        ))}
       </div>
      {/** Rest of the products */}
       { products
          .slice(5, products.l)
          .map(({ id, title, price, description, category, image }) => (
            <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
            />
        ))}
    </div>
  );
}

export default ProductFeed;
