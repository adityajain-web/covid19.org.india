import Mask from '../Images/navbarBrand.svg';
import HandWash from '../Images/handWash.svg';
import Social from '../Images/socialDistance.svg';
import Vaccination from '../Images/vaccination.svg';

const symptoms = [{
    id: 1,
    title: "Most Common Symptoms",
    Sym: ["Dry Cough", "Fever", "Tiredness"]
}, {

    id: 2,
    title: "Less Common Symptoms",
    Sym: ["aches and pains", "sore throat", "diarrhoea", "conjunctivitis", "headache", "loss of taste or smell", "a rash on skin, or discolouration of fingers or toes"]
}, {
    id: 3,
    title: "Serious Symptoms",
    Sym: ["difficulty breathing or shortness of breath", "chest pain or pressure", "loss of speech or movement"]
}]

const Prevention = [{
    id: 1,
    imgSrc: Mask,
    text: "Wear a Mask"
}, {
    id: 2,
    imgSrc: HandWash,
    text: "Clean Your Hands"
}, {
    id: 3,
    imgSrc: Social,
    text: "Maintain Safe Distance"
}, {
    id: 4,
    imgSrc: Vaccination,
    text: "Get Vaccinated"
}]

export default symptoms;
export { Prevention };