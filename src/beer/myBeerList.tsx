const MyBeerList = (props: any) => {
    const openAddBeerModal = () => {
        props.openModal();
    };

    return (
        <div>
            <div className="noBeerContent p-4 m-4">
                <div className='align-middle text-center p-4'>
                    <p className="mb-1">Nothing to see yet.</p>
                    <p><a href="#" onClick={openAddBeerModal}>Click here</a> to add your first beer!</p>
                </div>

            </div>
        </div>

    );
};

export default MyBeerList;