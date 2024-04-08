import React, { useState } from 'react';
import { ShowStatusButton } from './ShowStatusButton';

function RegistrationStatusForm() {
    const [documento, setDocumento] = useState('');

    const handleDocumentoChange = (event) => {
        setDocumento(event.target.value);
    };

    return (
        <div className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>This is a modal!</p>
        </div>
      </div>
    );
}
export { RegistrationStatusForm }

