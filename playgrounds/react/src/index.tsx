import React from 'react'
import ReactDOM from 'react-dom'
import { Text, Margin, Select } from '@ds.e/react'



import '@ds.e/scss/lib/Utilities.css';
import '@ds.e/scss/lib/Text.css';
import '@ds.e/scss/lib/Margin.css';
import '@ds.e/scss/lib/global.css';
import '@ds.e/scss/lib/Select.css';

const options = [{
    label: "Strict Black",
    value: 'strick-black'
},
{
    label: "Blue Grey",
    value: 'blue-grey'
},
{
    label: "Sweet Pink",
    value: 'pink'
},
{
    label: "Ripe Yellow",
    value: 'ripe-yellow'
}
]

ReactDOM.render(
    <div style={{padding: '40px'}}>
     
        <Select options={options}></Select>
        
        
        
        
    </div>
  
    
    ,
    document.querySelector("#root")
)