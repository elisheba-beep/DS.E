import { Spacing } from '@ds.e/foundation';
import React from 'react';
interface MarginProps {
    space?: keyof typeof Spacing;
    children?: React.ReactNode;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
}
declare const Margin: React.FC<MarginProps>;
export default Margin;
