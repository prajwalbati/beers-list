import * as React from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';

function BeerItem(props: any) {
    const {
        getArrowProps,
        getTooltipProps,
        setTooltipRef,
        setTriggerRef,
        visible,
    } = usePopperTooltip({
        placement: 'top'
    });

    const getIngredients = () => {
        let ingredientsArr = Object.keys(props.beer.ingredients);
        let ingredients = ingredientsArr.join(', ');
        return ingredients;
    };

    return (
        <div className="col-lg-6 col-md-12">
            <div className="card mb-4 p-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-2 text-center">
                            <img src={props.beer.image_url} alt="" height="100px" ref={setTriggerRef} />
                            {visible && (
                                <div
                                ref={setTooltipRef}
                                {...getTooltipProps({ className: 'tooltip-container' })}
                                >
                                <div {...getArrowProps({ className: 'tooltip-arrow' })} />
                                Ingredients: {getIngredients()}
                                </div>
                            )}
                        </div>
                        <div className="col-sm-10 text-left">
                            <h3>{props.beer.name}</h3>
                            <h6>{props.beer.tagline}</h6>
                            <p className="card-text">{props.beer.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeerItem;