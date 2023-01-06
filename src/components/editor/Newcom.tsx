import { useState } from 'react';
import '../../styles.css'
export default function App() {
    const [bold, setBold] = useState<any>(false);

    const handleBoldChange = (event: any) => {
        setBold(event.target.value);
    };

    return (
        <div>
            <button 
                value={bold}
                onClick={handleBoldChange}
            >bold</button>
            <textarea className={bold ? 'bold' : ''}>Beauty</textarea>
          
        </div>
    );
}


