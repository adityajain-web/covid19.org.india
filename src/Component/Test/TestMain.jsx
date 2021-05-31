import React from 'react';
import TestData from './TestData';

const data = TestData.map(item => {
    return (<>
        <a href={item.link} key={item.id} target="blank">
            <div className="card border-0 my-2" style={{ width: "18rem" }}>
                <img src={item.imgSrc} alt={item.text} className="card-img-top" />
                <div className="card-body">
                    <h5 className="text-dark text-decoration-none">{item.text}</h5>
                </div>
            </div>
        </a>
    </>)
})

const TestMain = () => {
    return (<>
        <div className="container-fluid pt-lg-5 pt-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
                <h1 className="font-weight-light text-md-left text-center text-light">Covid19 Text Overview</h1>
                <a href="https://covid.icmr.org.in/features/login-register/register-form" target="blank" className="btn btn-primary">Register for a test</a>
            </div>
            <div className="alert alert-danger my-4" role="alert">
                <a href="https://www.cdc.gov/coronavirus/2019-ncov/testing/diagnostic-testing.html#who-should-get-tested" target="blank">Find out who should get tested</a>. Protect yourself and others. Wear a mask, stay at least 6 feet from others, avoid crowds and poorly ventilated indoor spaces, and wash your hands often
</div>
            <div>
                <h2 className="font-weight-light text-md-left text-center text-light">Types Of Test</h2>
                <p className="text-light text-md-left text-center">COVID-19 tests are available that can test for <a href="https://www.cdc.gov/coronavirus/2019-ncov/testing/diagnostic-testing.html" target="blank">current infection</a> or <a href="https://www.cdc.gov/coronavirus/2019-ncov/testing/serology-overview.html" target="blank">past infection</a>.</p>
                <ul>
                    <li><p className="text-light text-md-left text-center">A <a href="https://www.cdc.gov/coronavirus/2019-ncov/testing/diagnostic-testing.html" target="blank">viral test</a> tells you if you have a current infection. Two types of viral tests can be used: nucleic acid amplification tests (NAATs) and antigen tests</p></li>
                    <li><p className="text-light text-md-left text-center">An <a href="https://www.cdc.gov/coronavirus/2019-ncov/testing/serology-overview.html" target="blank">antibody test</a> (also known as a serology test) might tell you if you had a past infection. Antibody tests should not be used to diagnose a current infection.</p></li>
                </ul>
            </div>
            <div className="d-flex justify-content-around align-items-center">
                {data}
            </div>
        </div>
    </>);
}

export default TestMain;