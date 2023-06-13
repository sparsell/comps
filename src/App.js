import Button from './Button'

function App() {
    return (
    <div>
        <div>
            <Button primary>Click</Button>
        </div>
        <div>
            <Button danger>Buy now</Button>
        </div>
        <div>
            <Button rounded outline>Reserve</Button>
        </div>
        <div>
            <Button success primary>See more</Button>
        </div>
    </div>
    );
}

export default App;