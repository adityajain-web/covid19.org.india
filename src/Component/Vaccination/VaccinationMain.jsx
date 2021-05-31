import React, { useState } from 'react';
import axios from 'axios';
import RoomIcon from '@material-ui/icons/Room';
import Banner from '../Images/cowin-banner.jpg';
import { ListItem } from '../Components';

const VaccinationMain = () => {
    const [PinCode, setPinCode] = useState("");
    const [VSession, setVSession] = useState([]);

    const ses = VSession.map(item => {
        console.log(VSession);
        return (<>
            <ListItem key={item.center_id} center_id={item.center_id} name={item.name} address={item.address} date={item.date} fee_type={item.fee_type} min_age_limit={item.min_age_limit} slots={item.slots} vaccine={item.vaccine} />
        </>);
    })

    const fetchCenter = (e) => {
        e.preventDefault();
        getData();
    }

    const userInput = (e) => {
        setPinCode(e.target.value)
    }

    const date = new Date().toDateString().split(" ");
    const month = new Date().getMonth();

    const getData = async () => {
        try {
            const res = await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${PinCode}&date=${date[2]}/${month + 1}/${date[3]}`);

            if (res.data.sessions.length !== 0) {
                setVSession(res.data.sessions)
            } else {
                alert("Sorry, session is unavailable for today!")
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (<>
        <div>
            <img src={Banner} alt="cowin-banner" className="img-fluid my-5" />
            <div>
                <h2 className="text-center text-white">Know About Your Nearest Vaccination Center</h2>
                <div className="d-flex justify-content-center align-items-center my-4">
                    <form className="row row-cols-lg-auto g-3 align-items-center" onSubmit={fetchCenter}>
                        <div className="col-12">
                            <label className="visually-hidden text-white" htmlFor="PinCode">PinCode</label>
                            <div className="input-group">
                                <div className="input-group-text"><RoomIcon /></div>
                                <input type="Number" className="form-control" id="PinCode" name="PinCode" placeholder="Enter Your PinCode" onChange={userInput} value={PinCode} required />
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Search</button>
                        </div>
                        <div className="col-12">
                            <a href="https://www.cowin.gov.in/home" className="btn btn-primary">Register for vaccination</a>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <ul className="list-group">
                    {ses}
                </ul>
            </div>
        </div>
    </>);
}

export default VaccinationMain;