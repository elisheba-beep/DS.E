import React from "react";
import Select from "./Select";
import { withA11y } from '@storybook/addon-a11y'


// css
import '@ds.e/scss/lib/Select.css'

// options
const options = [{
    label: "Strict Black",
    value: 'black'
},
{
    label: "Blue Grey",
    value: 'grey'
},
{
    label: "Sweet Pink",
    value: 'pink'
},
{
    label: "Ripe Yellow",
    value: 'yellow'
}
]

export default{
    title: 'Molecules/Select',
    decorators: [withA11y]
}



export const Common = () => <Select options={options}/>

export const RenderOption = () => <Select options={options}
 renderOption={({getOptionRecommendedProps, option, isSelected})=>
 <span{...getOptionRecommendedProps()}>{option.label}
 {isSelected ? ' SELECTED !': ''}</span>}/>

 export const CustomLabel = () => <Select  label='your custom label' 
 options={options}/>