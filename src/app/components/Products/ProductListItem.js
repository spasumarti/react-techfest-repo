import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { white, platinum } from '../../../styles/colors';
import ProductTag from './ProductTag';
import ProductRating from './ProductRating';
import HeaderTag from '../base/HeaderTag';
import { fontWeightMedium, fontWeightBold } from '../../../styles/variables';
import QuantityTextBox from '../Cart/QuantityTextBox';

const Wrapper = styled.div`
  display: flex;
  background-color: ${white};
  border-radius: 3px;
  padding: 20px;
  border-bottom: ${ props => (props.showPricing ? `1px solid ${platinum}` : white) };
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  > *:first-child{
    flex: 1;
  }
`

const ProductImage = styled.div`
  text-align: center;
  max-width: 220px;
  img{
    width: 100%;
  }
`

const CartActions = styled.div`
  cursor: pointer;
`

const ProductDetail = styled.div`
  padding: 0 25px;
  flex: 1;
`

const SubText = styled.p`
  font-weight: ${fontWeightMedium};
  margin: 6px 0;
`

const QuantityWrapper = styled.div`
  margin-top: 15px;
`

const Pricing = styled.span`
  font-weight: ${fontWeightBold};
  margin-left: 2px;
`

const ProductListItem = ({name, imageUrl, bestSelling, subText, numberOfRaters, rating, showActions, showPricing}) => (
  <Wrapper showPricing>
    { bestSelling && <ProductTag>Best Selling</ProductTag> }
    <ProductImage>
      <img src={imageUrl} alt={name}/>
    </ProductImage>
    <ProductDetail>
      <TitleWrapper>
        <HeaderTag as='h6'>{name}</HeaderTag>
        {
          showActions && 
          <CartActions>
            <span>Delete Item</span> | <span>Save for Later</span>
          </CartActions>
        }
      </TitleWrapper>
      { subText && <SubText>{subText}</SubText> }
      <ProductRating rating={rating} numberOfRaters={numberOfRaters} />
      {
        showPricing && 
        <QuantityWrapper>
          <QuantityTextBox /> <Pricing>X $124.00 = $124.00</Pricing>
        </QuantityWrapper>
      }
    </ProductDetail>
  </Wrapper>

)

export default ProductListItem;

ProductListItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  bestSelling: PropTypes.bool,
  subText: PropTypes.string,
  numberOfRaters: PropTypes.number,
  rating: PropTypes.number.isRequired,
  showActions: PropTypes.bool,
  showPricing: PropTypes.bool
}