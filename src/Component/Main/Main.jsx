import React from 'react';
import { useLocation } from 'react-router-dom';
import { AcrossIndia, SymptomsMain, TestMain, VaccinationMain } from '../Components';

const Main = () => {
    const location = useLocation();
    return (<>
        <main>
            <div className="container-fluid" style={{ minHeight: "80vh" }}>
                <div className="row">
                    <div className="col-lg-10 col-md-11 mx-auto">
                        {location.pathname === "/" ? <AcrossIndia /> : null}
                        {location.pathname === "/Symptoms" ? <SymptomsMain /> : null}
                        {location.pathname === "/BookATest" ? <TestMain /> : null}
                        {location.pathname === "/Vaccination" ? <VaccinationMain /> : null}
                    </div>
                </div>
            </div>
        </main>
    </>);
}

export default Main;