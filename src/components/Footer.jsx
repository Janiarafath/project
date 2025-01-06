import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#21081a' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className="footer text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
  <p>CyberWorld © 2025 </p>
  <div>
    <a href="/terms" style={{ fontWeight: 'bold', color: 'white', marginRight: '15px' }}>
      Terms and Conditions
    </a>
    <a href="/privacy" style={{ fontWeight: 'bold', color: 'white' }}>
      Privacy Policy
    </a>
  </div>
</div>

    
      
    </MDBFooter>
  );
}


