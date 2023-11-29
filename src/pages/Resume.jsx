import PDF from '../assets/MollyResume.pdf';
import { useState } from 'react';

export default function Resume() {
    const [showPDF, setShowPDF] = useState(false);
    const handleClick = () => {
        setShowPDF(!showPDF);
    }
    return (
        <>
          {showPDF ? (
            <div className="pdfContainer">
              <object
                aria-label="pdf resume"
                width="100%"
                height="800"
                data={PDF}
                type="application/pdf"
              />
            </div>
          ) : (
            <div className='buttonContainer'>
              <button onClick={handleClick} className='resumeButton'>
                Download Resume
              </button>
            </div>
          )}
        </>
      );
    };