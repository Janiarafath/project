import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#21081a' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className="footer text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      OpenAI © 2015–2025
<a href="https://example.com" style={{ fontWeight: 'bold', color: 'white' }}></a>
      </div>
    
      
    </MDBFooter>
  );
}


