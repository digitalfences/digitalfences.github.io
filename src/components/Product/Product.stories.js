import React from 'react';
import { storiesOf } from '@storybook/react';

import Product from './Product';

storiesOf('Product',module)
.add('Product-Block-Outline', () => <Product type="block" label="Apple MacBook Pro" default outline/>)
.add('Product-Filled', () => <Product type="block" label="Apple MacBook Pro" default filled/>)
.add('Product-Long', () => <Product type="block" label="Apple MacBook Pro" long/>)
.add('Product-Small', () => <Product type="block" label="Beats Solo2 On Ear Headphones - Black" small/>)
.add('Product-Inline', () => <Product type="inline" label="Beats Solo2 On Ear Headphones - Black" inline desc="Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ..."/>)
    
