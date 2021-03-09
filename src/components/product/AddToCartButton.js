import React from 'react';

const AddToCartButton = (props) => {
  const {
    _id,
    title,
    excerpt,
    variantPrice,
    slug,
    image,
    buttonText,
    variantName,
  } = props;
  return (
    <button
      className='snipcart-add-item text-white font-bold w-full py-2 px-4 rounded bg-mountbattenPink-400 shadow-md hover:bg-mountbattenPink-500 hover:shadow-2xl'
      data-item-id={_id}
      data-item-price={variantPrice}
      data-item-url={slug}
      data-item-description={excerpt}
      data-item-image={image && image}
      data-item-name={title}
      data-item-quantity='1'
      // data-item-custom1-name={variantName}
      // data-item-custom1-options="Black|Brown|Gold"
      data-item-custom2-name='This is a gift'
      data-item-custom2-type='checkbox'
    >{`Add to cart - RM${buttonText}`}</button>
  );
};

export default AddToCartButton;
