import Button from './Button'

function App() {
    return (
    <div>
        <div>
            <Button primary rounded outline>Click</Button>
        </div>
        <div>
            <Button secondary outline>Secondary</Button>
        </div>
        <div>
            <Button warning outline>Warning</Button>
        </div>
        <div>
            <Button danger rounded>Danger</Button>
        </div>
        <div>
            <Button success>Success!</Button>
        </div>
    </div>
    );
}

export default App;