import React from 'react';
import { useState } from 'react';
import { QRGenerated } from './QRGenerated';

function MainSection() {  
    return (
        <div>
            <div className="h-ful flex items-center justify-center w-full">
            <QRGenerated/>
            </div>
         
        </div>
    );
}
export {MainSection}
