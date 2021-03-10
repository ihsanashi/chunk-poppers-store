import React from 'react';

const AddToCartButton = (props) => {
  const {
    _id,
    title,
    description,
    price,
    slug,
    image,
    variantType,
    variantOptions,
  } = props;

  return (
    <button
      className='snipcart-add-item text-white font-bold w-full py-2 px-4 rounded bg-mountbattenPink-400 shadow-md hover:bg-mountbattenPink-500 hover:shadow-2xl'
      data-item-id={_id}
      data-item-price={price}
      data-item-url={slug}
      data-item-description={description}
      data-item-image={image && image}
      data-item-name={title}
      data-item-quantity='1'
      // data-item-custom1-name={variantType}
      // data-item-custom1-options={variantOptions}
    >{`Add to cart - RM${price}`}</button>
  );
};

export default AddToCartButton;
