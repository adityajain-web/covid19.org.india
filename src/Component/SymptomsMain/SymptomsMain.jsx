import React from 'react';
import symptoms, { Prevention } from './SymptomsData';

const sym = symptoms.map(item => {
    return (<><div key={item.id} className="card shadow-lg border-0 my-2" style={{ width: "18rem" }}>
        <div className="card-body">
            <h5>{item.title}</h5>
            {item.Sym.map(item => {
                return (<><li>{item}</li></>)
            })}
        </div>
    </div></>)
});

const prevention = Prevention.map(item => {
    return (<>
        <div key={item.id} className="card border-0 shadow-lg my-2" style={{ width: "18rem" }}>
            <img src={item.imgSrc} alt={item.text} style={{ height: "10rem", width: "100%" }} />
            <div className="card-body">
                <h5 className="text-center">{item.text}</h5>
            </div>
        </div>
    </>)
})

const SymptomsMain = () => {
    return (<>
        <div className="container-fluid pt-lg-5 pt-3">
            <h1 className="font-weight-light text-md-left text-center text-light">Symptoms</h1>
            <p className="text-light text-md-left text-center">COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</p>
            <div className="d-flex flex-wrap justify-content-around py-3">
                {sym}
            </div>
            <h1 className="font-weight-light text-md-left text-center text-light">Prevention</h1>
            <p className="text-light text-md-left text-center">Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local health authority.
</p>
            <div className="d-flex flex-wrap justify-content-around py-3">
                {prevention}
            </div>
        </div>
    </>);
}

export default SymptomsMain;