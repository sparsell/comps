import Button from './Button'
import { GoCloudDownload, GoDatabase } from 'react-icons/go';
import { BsCurrencyDollar } from 'react-icons/bs';

function App() {

    const handleClick = () => {
        console.log("handle click");
    }

    const handleMouseOver = () => {
        console.log('mouseover');
    }
    return (
    <div>
        <div>
            <Button primary rounded className='mb-5' onClick={handleClick}>
                <BsCurrencyDollar />
                    I spent less
            </Button>
        </div>
        <div>
            <Button onMouseOver={handleMouseOver} secondary outline>
                    Secondary
                </Button>
        </div>
        <div>
            <Button warning outline>
                <GoCloudDownload />
                    Warning
                </Button>
        </div>
        <div>
            <Button danger rounded>
                <GoDatabase />
                    Danger
            </Button>
        </div>
        <div>
            <Button success>Success!</Button>
        </div>
    </div>
    );
}

export default App;