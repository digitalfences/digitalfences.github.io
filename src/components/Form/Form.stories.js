import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from './Form';

storiesOf('Form', module)
    .add('Email-Small', () => <Form type="email" label="Email" small/>)
    .add('Email-Medium', () => <Form type="email" label="Email" medium/>)
    .add('Email-Large', () => <Form type="email" label="Email" large/>)
    .add('Select-Small', () => <Form type="select" placeholder="Select"  small/>)
    .add('Select-Medium', () => <Form type="select" placeholder="Select"  medium/>)
    .add('Select-Large', () => <Form type="select" placeholder="Select"  large/>)
    .add('Select-Small Filled', () => <Form type="select" placeholder="Select" small filled/>)
    .add('Select-Medium Filled', () => <Form type="select" placeholder="Select" medium filled/>)
    .add('Select-Large Filled', () => <Form type="select" placeholder="Select" large filled/>)
    .add('Number', () => <Form type="number" label="" />)
    .add('TextButton Small', () => <Form buttonType="primary" type="textButton" placeholder="Voucher Code" label="Redeem" small/>)
    .add('TextButton Medium', () => <Form buttonType="primary" type="textButton" placeholder="Voucher Code" label="Redeem" medium/>)
    .add('TextButton Big', () => <Form buttonType="primary" type="textButton" placeholder="Voucher Code" label="Redeem" large/>)
    .add('Black Checkbox', () => <Form type="checkBox" label="" color="black" />)
    .add('Blue Checkbox', () => <Form type="checkBox" label="" color="blue"/>)
    .add('Black Checkbox w/Label', () => <Form type="checkBox" label="Don't show this pop-up again." color="black" />)
    
    
    
    