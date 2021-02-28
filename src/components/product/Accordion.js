import React from 'react';
import { Accordion } from 'react-accessible-accordion';

const ProductAccordion = ({ children }) => {
  return (
    <Accordion preExpanded={['description']} allowZeroExpanded={true}>
      {children}
    </Accordion>
  );
};

export default ProductAccordion;
