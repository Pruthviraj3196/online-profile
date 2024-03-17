import React from 'react'
import { Frames } from './Frames';

const Certifications = (Props) => {
  return (
    <div>
        <div className='name'>
            <div>My Certifications</div>
        </div>
        <div>
            <div>
                <Frames name = "Node.Js Essentials" social = "LinkedIn Learning" src = "https://oktayshakirov.com/assets/images/certificates/node.js-essentials.png" /> 
                <Frames name = "React.Js Essentials" social = "LinkedIn Learning" src = "https://oktayshakirov.com/assets/images/certificates/node.js-essentials.png" /> 
                <Frames name = "JavaScript Essentials" social = "LinkedIn Learning" src = "https://oktayshakirov.com/assets/images/certificates/node.js-essentials.png" /> 
                <Frames name = "Fundamentals Of Digital Marketing" social = "Google Certified Digital Marketing Course" src = "https://oktayshakirov.com/assets/images/certificates/node.js-essentials.png" /> 
                <Frames name = "Elements Of AI" social = "University of Helsinki" src = "https://oktayshakirov.com/assets/images/certificates/node.js-essentials.png" /> 
            </div>
        </div>
    </div>
  );
}

export default Certifications;
