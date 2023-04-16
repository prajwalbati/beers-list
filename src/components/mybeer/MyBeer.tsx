import CustomBeer from '../../assets/custom-beer.png';

const MyBeer = (props: any) => {
    return (
        <div className="col-lg-6 col-md-12">
            <div className="card mb-4 p-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-2 text-center">
                            <img src={CustomBeer} alt={props.beer.name} height="100px" />
                        </div>
                        <div className="col-sm-10 text-left">
                            <h3>{props.beer.name}</h3>
                            <h6>{props.beer.genre}</h6>
                            <p className="card-text">{props.beer.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBeer;