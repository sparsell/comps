import Button from './components/Button';
import Accordion from './components/Accordion';
import { GoCloudDownload, GoDatabase } from 'react-icons/go';
import { BsCurrencyDollar } from 'react-icons/bs';

function App() {

    const items = [
        {
            id: "0",
            label: "Can I use React in a project", 
            content: "Yes, you can"
        },
        {
            id: "1",
            label: "Can I use Tailwind in a project", 
            content: "Yes, you can"
        },
        {
            id: "2",
            label: "Can I use Javascript in a project", 
            content: "Yes, you can"
        }
    ];

    return (
        <Accordion items={items}/>
    )
    
}

export default App;