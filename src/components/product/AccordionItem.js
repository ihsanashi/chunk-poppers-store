import React from 'react';
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import { BiMinus, BiPlus } from 'react-icons/bi';

const ProductAccordionItem = ({ uuid, title, children }) => {
  return (
    <AccordionItem uuid={uuid}>
      <AccordionItemHeading>
        <AccordionItemButton className='flex items-center justify-between'>
          <h6 className='text-lg font-medium text-gray-700'>{title}</h6>
          <AccordionItemState>
            {({ expanded }) =>
              expanded ? (
                <BiMinus size={20} color='#C1577E' />
              ) : (
                <BiPlus size={20} color='#C1577E' />
              )
            }
          </AccordionItemState>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>{children}</AccordionItemPanel>
    </AccordionItem>
  );
};

export default ProductAccordionItem;
