import React, { useState } from 'react'

export default function BMICalc() {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [name, setName] = useState('');
    const calculateBMI = () => {
        var heightSquared = (height/100 * height/100);
        var bmi = weight/heightSquared;
        if(bmi < 16) {
            window.alert("Hi.." + name + "...You are Completely under Weight(Severe Thinner)");
        } else if(bmi >= 16 && bmi < 17) {
            window.alert("Hi.." + name + "You are Moderately UnderWeight(Moderate Thinner)");
        } else if(bmi >= 17 && bmi < 18.5) {
            window.alert("Hi.." + name + "You are little UnderWeight(Mild Thinness)");
        } else if(bmi >= 18.5 && bmi <= 24.99) {
            window.alert("Hi.." + name + "You are in healthy weight range");
        } else if(bmi >= 25 && bmi <= 29.9) {
            window.alert("Hi.." + name + "You are in over weight");
        } else if(bmi >= 30) {
            window.alert("Hi.." + name + "You are Obese");
        } else if(bmi < 18.5) {
            window.alert("Hi.." + name + "You are under Weight");
        }
        bmi = Math.round(bmi*100)/100;
    }

    const submitMe = (e) => {
        e.preventDefault();
        calculateBMI();
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleHeight = (e) => {
        setHeight(e.target.value);
    }
    const handleWeight = (e) => {
        setWeight(e.target.value);
    }
    return (
        <div>
            <h1>BMI Calculator</h1>
            <form onSubmit={submitMe}>
                <label>Please Enter Your Name</label>
                <input type="text" name="name" value={name} onChange={handleName}/>
                <br /><br />
                <label>Please Enter Your Height in CM</label>
                <input type="text" name="height" value={height} onChange={handleHeight}/>
                <br /><br />
                <label>Please Enter Your Weight in KG</label>
                <input type="text" name="weight" value={weight} onChange={handleWeight}/>
                <br /><br />
                <input type='submit' value="submit"/>
            </form>
        </div>
    )
}
