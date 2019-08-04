import React from "react";
import {Helmet} from "react-helmet";
import BackButton from '../components/ButtonBack';
import brands from '../data/brands'

function BrandDetail ({ match })  {
  const brand = brands.find(brand => brand.slug === match.params.brand);

   return (
      <div>
        <Helmet>
           <title>{brand.title}</title>
        </Helmet>
        <h1>Brand is: {brand.title}</h1>
        <img src={brand.brand_logo_url} alt=''/>
        <BackButton/>
      </div>
   );
   }     
         
export default BrandDetail;