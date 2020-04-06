import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)

    .add('Primary', () => <Button type="primary" label="Do something" />)
    .add('Primary Outline', () => <Button type="primary" label="Do something" outline/>)
    .add('Primary Light Fill', () => <Button type="primary" label="Do something" lightFill/>)
    
    .add('Danger', () => <Button type="danger" label="Do something" />)
    .add('Danger Outline', () => <Button type="danger" label="Do something" outline/>)
    .add('Danger Light Fill', () => <Button type="danger" label="Do something" lightFill/>)

    .add('Success', () => <Button type="success" label="Do something" />)
    .add('Success Outline', () => <Button type="success" label="Do something" outline/>)
    .add('Success Light Fill', () => <Button type="success" label="Do something" lightFill/>)

    .add('Warning', () => <Button type="warning" label="Do something" />)
    .add('Warning Outline', () => <Button type="warning" label="Do something" outline/>)
    .add('Warning Light Fill', () => <Button type="warning" label="Do something" lightFill/>)

    .add('Default', () => <Button type="default" label="Do something" />)
    .add('Default Outline', () => <Button type="default" label="Do something" outline/>)
    .add('Default Light Fill', () => <Button type="default" label="Do something" lightFill/>)

    .add('Large Primary', () => <Button type="primary" label="Do something" large/>)
    .add('Large Primary Outline', () => <Button type="primary" label="Do something" outline large/>)
    .add('Large Primary Light Fill', () => <Button type="primary" label="Do something" lightFill large/>)

    .add('Large Danger', () => <Button type="danger" label="Do something" large/>)
    .add('Large Danger Outline', () => <Button type="danger" label="Do something" outline large/>)
    .add('Large Danger Light Fill', () => <Button type="danger" label="Do something" lightFill large/>)

    .add('Large Success', () => <Button type="success" label="Do something" large/>)
    .add('Large Success Outline', () => <Button type="success" label="Do something" outline large/>)
    .add('Large Success Light Fill', () => <Button type="success" label="Do something" lightFill large/>)

    .add('Large Warning', () => <Button type="warning" label="Do something" large/>)
    .add('Large Warning Outline', () => <Button type="warning" label="Do something" outline large/>)
    .add('Large Warning Light Fill', () => <Button type="warning" label="Do something" lightFill large/>)

    .add('Large Default', () => <Button type="default" label="Do something" large/>)
    .add('Large Default Outline', () => <Button type="default" label="Do something" outline large/>)
    .add('Large Default Light Fill', () => <Button type="default" label="Do something" lightFill large/>)

    .add('Heart Icon', () => <Button type="primary" label="" lightFill hearticon/>)
    .add('Cart Icon', () => <Button type="primary" label=""  lightFill carticon/>) 
    .add('Heart Icon w/Text', () => <Button type="primary" label="Add to Favorites" lightFill hearticon/>)
    .add('Cart Icon w/Text', () => <Button type="primary" label="Add to Cart"  lightFill carticon/>)
    

