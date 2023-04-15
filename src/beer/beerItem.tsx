function BeerItem({beer, key}) {
    return (
        <div className="col-lg-6 col-md-12">
            <div className="card mb-4 p-2" key={key}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-2 text-center">
                            <img src={beer.image_url} alt="" height="100px" />
                        </div>
                        <div className="col-sm-10 text-left">
                            <h3>{beer.name}</h3>
                            <h6>{beer.tagline}</h6>
                            <p className="card-text">{beer.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeerItem;