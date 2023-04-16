import '../assets/css/Navbar.css';

const Navbar = (props: any) => {
    const loadBeers = (type: string) => {
        props.loadBeers(type);
    };

    const openModal = () => {
        props.openModal();
    };

    return (
        <ul className="nav mb-4">
            <li className="nav-item">
                <a className={props.listType=='all'?'nav-link active':'nav-link'} onClick={() => loadBeers('all')}>All Beers</a>
            </li>
            <li className="nav-item">
                <a className={props.listType=='my'?'nav-link active':'nav-link'} onClick={() => loadBeers('my')}>My Beers</a>
            </li>
            <li className={props.listType=='my'?'addBeerBtn':'d-none'}>
                <button className='btn btn-primary' onClick={openModal}>Add a new beer</button>
            </li>
        </ul>
    );
};

export default Navbar;