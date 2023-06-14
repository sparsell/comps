import Button from './Button'
import { GoCloudDownload, GoDatabase } from 'react-icons/go';
import { BsCurrencyDollar } from 'react-icons/bs';

function App() {
    return (
    <div>
        <div>
            <Button primary rounded>
                <BsCurrencyDollar />
                    I spent less
            </Button>
        </div>
        <div>
            <Button secondary outline>
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