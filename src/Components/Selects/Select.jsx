import React from 'react'

export default function Select({
    value, 
    onChange, 
    placeHolder, 
    option,
    label,
    reference

//     <option value="grapefruit">Pamplemousse</option>
//   <option value="lime">Citron vert</option>
//   <option selected value="coconut">Noix de coco</option>
//   <option value="mango">Mangue</option>
}) {
    return (
        
        <div>
        <select>
            <option value="grapefruit">Pamplemousse</option>
            <option value="lime">Citron vert</option>
            <option selected value="coconut">Noix de coco</option>
            <option value="mango">Mangue</option>
        </select>
        <select multiple={true} value={['B', 'C']}></select>
        </div>
    )
}
