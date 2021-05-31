import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RoomIcon from '@material-ui/icons/Room';
import CountUp from 'react-countup';

const AcrossIndia = () => {
    const [total, setTotal] = useState({});
    const [sState, setSState] = useState("");
    const [StateData, setStateData] = useState({});
    const [tLastUpdate, setTLastUpdate] = useState("");
    const [sLastUpdate, setStateLastUpdate] = useState("")

    const getCovidData = async () => {
        try {
            const res = await axios.get("https://api.covid19india.org/data.json");
            setTotal(() => {
                return {
                    'Active Cases': res.data.statewise[0].active,
                    'Confirmed Cases': res.data.statewise[0].confirmed,
                    'Recovered Cases': res.data.statewise[0].recovered,
                    'Deaths': res.data.statewise[0].deaths,
                }
            });

            setTLastUpdate(res.data.statewise[0].lastupdatedtime);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCovidData();
    }, [])


    const totalData = Object.entries(total).map(item => {
        return (<>
            <div className="card border-0 my-3 shadow-lg" style={{ width: "14rem" }}>
                <div className="card-body">
                    <h5 className={item[0] === "Deaths" ? 'text-danger' : item[0] === "Recovered Cases" ? 'text-success' : 'text-primary'}>{item[0]}</h5>
                    <h2><CountUp start={0} end={item[1]} duration={2} separator="," /></h2>
                </div>
            </div>
        </>);
    })

    const searchState = async () => {
        try {
            const response = await axios.get("https://api.covid19india.org/data.json");
            const stateWiseData = response.data.statewise;

            if (sState !== "") {
                const stateData = stateWiseData.filter(entry => {
                    return entry.state.toUpperCase() === sState.toUpperCase();
                })
                setStateData({
                    'Active Cases': stateData[0].active,
                    'Confirmed Cases': stateData[0].confirmed,
                    'Recovered Cases': stateData[0].recovered,
                    'Deaths': stateData[0].deaths,
                });
                setStateLastUpdate(stateData[0].lastupdatedtime)
            }
        } catch (err) {
            console.log(err)
        }
    }

    // console.log(sLastUpdate)


    const sData = Object.entries(StateData).map(item => {
        return (<>
            <div className="card border-0 my-3 shadow-lg" style={{ width: "14rem" }}>
                <div className="card-body">
                    <h5 className={item[0] === "Deaths" ? 'text-danger' : item[0] === "Recovered Cases" ? 'text-success' : 'text-primary'}>{item[0]}</h5>
                    <h2><CountUp start={0} end={item[1]} duration={2} separator="," /></h2>
                </div>
            </div>
        </>);

    });

    const fetchStateData = (e) => {
        e.preventDefault();
        searchState();
    }

    const userInput = (e) => {
        setSState(e.target.value)
    }

    return (<>
        <div className="container-fluid pt-lg-5 pt-3">
            <h1 className="font-weight-light text-center text-light">Covid19 Cases Across The India</h1>
            <div className="d-flex flex-wrap justify-content-around py-3">
                {totalData}
                <p className="text-white">Last Update: {tLastUpdate}</p>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column">
                <h2 className="text-white text-center my-4">Search for your state</h2>
                <form className="row row-cols-lg-auto g-3 align-items-center" onSubmit={fetchStateData}>
                    <div className="col-12">
                        <label className="visually-hidden text-white" htmlFor="PinCode">PinCode</label>
                        <div className="input-group">
                            <div className="input-group-text"><RoomIcon /></div>
                            <input type="text" className="form-control" id="state" name="state" placeholder="Enter Your state" onChange={userInput} value={sState} required />
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </form>
            </div>
            <div className="d-flex flex-wrap justify-content-around py-3">
                {sData}
                <p className="text-white">Last Update: {sLastUpdate}</p>
            </div>
        </div>
    </>)
}

export default AcrossIndia;