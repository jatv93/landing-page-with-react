import React from "react";
import PropTypes from "prop-types";


const Card = props => {
    return (
        <div className= "container pb-4">
        <div className="card-deck">
            <div className="card">
                <img className="card-img-top" src={props.imgURL} alt="Card image cap"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description1}</p>
                    </div>
                    <div className="card-footer text-center">
                        <a href="#" class="btn btn-primary">{props.buttonLabel}</a>
                    </div>
            </div>
                <div className="card">
                    <img className="card-img-top" src={props.imgURL} alt="Card image cap"/>
                        <div className="card-body text-center">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description2}</p>
                        </div>
                        <div className="card-footer text-center">
                            <a href="#" class="btn btn-primary">{props.buttonLabel}</a>
                        </div>
            </div>
                    <div className="card">
                        <img className="card-img-top" src={props.imgURL} alt="Card image cap"/>
                            <div className="card-body text-center">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">{props.description1}</p>
                            </div>
                            <div className="card-footer text-center">
                                <a href="#" class="btn btn-primary">{props.buttonLabel}</a>
                            </div>
            </div>
                        <div className="card">
                            <img className="card-img-top" src={props.imgURL} alt="Card image cap"/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">{props.title}</h5>
                                    <p className="card-text">{props.description2}</p>
                                </div>
                                <div className="card-footer text-center">
                                    <a href="#" class="btn btn-primary">{props.buttonLabel}</a>
                                </div>
            </div>
                        </div>
                        </div>
                        );
                    };

Card.propTypes = {
    title: PropTypes.string,
    description1: PropTypes.string,
    description2: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonURL: PropTypes.string
                    };

export default Card;
        

