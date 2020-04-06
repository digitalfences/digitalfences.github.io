import React from 'react';
import { storiesOf } from '@storybook/react';

import Check from './Check';

storiesOf('Check', module)
.add('Blue Checkbox', () => <Check color="blue"></Check>)
.add('Black Checkbox', () => <Check color="black"></Check>)
.add('Black Checkbox w/Label', () => <Check color="black" label="Don't show this pop-up again"></Check>)

