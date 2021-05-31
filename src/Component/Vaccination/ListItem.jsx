import React from 'react';

const ListItem = (props) => {
    return (<>
        <li className="list-group-item my-2">
            <div className="card border-0" >
                <div className="card-body">
                    <h6>Center Code:{props.center_code} </h6>
                    <h6>Center Name:{props.name} </h6>
                    <h6>Address:{props.address} </h6>
                    <h6>Date:{props.date} </h6>
                    <h6>Fees Type:{props.fee_type} </h6>
                    <h6>Min Age Limit :{props.min_age_limit} </h6>
                    <h6>Slot: {props.slots.map(slotItem => {
                        return slotItem + "  ";
                    })}</h6>
                    <h6>Vaccine: {props.vaccine}</h6>
                </div>
            </div>
        </li>
    </>);
}

export default ListItem;