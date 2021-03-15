import React from 'react';

const AddToCartButton = (props) => {
  const {
    _id,
    title,
    description,
    basePrice,
    slug,
    image,
    variantType,
    variantOptions,
    variantTitle,
    variantPrice,
  } = props;

  return (
    <button
      className='snipcart-add-item text-white font-bold w-full py-2 px-4 rounded bg-mountbattenPink-400 shadow-md hover:bg-mountbattenPink-500 hover:shadow-2xl'
      data-item-id={_id}
      data-item-price={basePrice}
      data-item-url={slug}
      data-item-description={description}
      data-item-image={image && image}
      data-item-name={title}
      data-item-quantity='1'
      data-item-max-quantity='8'
      data-item-custom1-name={variantType}
      data-item-custom1-options={variantOptions}
      data-item-custom1-value={variantTitle}
      data-item-custom2-name='Gift'
      data-item-custom2-type='checkbox'
      data-item-custom3-name='Gift note or message (optional)'
      data-item-custom3-type='textarea'
    >{`Add to cart - RM${variantPrice}`}</button>
  );
};

export default AddToCartButton;
