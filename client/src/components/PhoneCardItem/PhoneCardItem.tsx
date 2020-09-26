import React from 'react';
import { connect } from 'react-redux';
import { RootStateInterface } from '../../interfaces/rootStateInterface';
import { useHistory } from "react-router-dom";

import "./PhoneCardItem.scss";
import { phoneCardInterface } from '../../interfaces/phonesInterfaces';
import { phones } from '../../store/actions';

interface PhoneCardInterface {
    phone: phoneCardInterface
}

const PhoneCardItem: React.FC<PhoneCardInterface> = ({ phone }) => {
    let history = useHistory();

    return (
        <div className="phone-card" onClick={() => history.push(`/phone/${phone.routePosition}`)}>
            <div className="phone-card__image--wrapper">
                <img src={phone.availabelDevices[0].images.main} alt={phone.title} className="phone-card__image--item" />
            </div>
            <div className="phone-card__content">
                <p className="phone-card__title">{phone.title}</p>
                <div className="phone-card__price">
                    <p className="phone-card__current-price">{phone.price.current}</p>
                    <p className="phone-card__old-price">{phone.price.old}</p>
                </div>

                <div className="phone-card__line"></div>

                <div className="card-specification--list">
                    <div className="card-specification--item">
                        <div className="card-specification__name">Screen</div>
                        <div className="card-specification__value">{phone.deviceInfo.screen}</div>
                    </div>

                    <div className="card-specification--item">
                        <div className="card-specification__name">Processor</div>
                        <div className="card-specification__value">{phone.deviceInfo.processor}</div>
                    </div>

                    <div className="card-specification--item">
                        <div className="card-specification__name">Camera</div>
                        <div className="card-specification__value">{phone.deviceInfo.camera}</div>
                    </div>
                </div>

                <div className="phone-card__button--wrapper">
                    <div className="button__add-cart--wrapper phone-card__add-cart--wrapper">
                        <div className="button__add-cart--text">Add to cart</div>
                    </div>
                    <div className="button__favorite--wrapper phone-card__favorite--wrapper">
                        <img src="/icons/heart.svg" alt="favorite" className="button__favorite--icon"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state: RootStateInterface) => ({

});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneCardItem)