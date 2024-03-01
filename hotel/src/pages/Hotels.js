import React from 'react';

export default function Book() {
  return (
    <div>
      <h1>Book Hotel with Hotel Sites Below</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}><a href="https://www.booking.com/">Booking.com</a></li>
        <li style={{ marginBottom: '10px' }}><a href="https://www.expedia.com/">Expedia</a></li>
        <li style={{ marginBottom: '10px' }}><a href="https://www.hotels.com/">Hotels.com</a></li>
        
      </ul>
    </div>
  );
}