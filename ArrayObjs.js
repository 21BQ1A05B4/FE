import React, { Component } from 'react'

export default class ArrayObjs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countriesinfo : [
                {name: "india", capital: "newdelhi"},
                {name: "america", capital: "washingtonDc"},
                {name: "japan", capital: "tokyo"}
            ]
        }
    }
    render() {
        const {countriesinfo} = this.state;
        return (
        <div>
            <table border='1' align='center'>
                <tr>
                    <th>CountryName</th>
                    <th>CountryCapital</th>
                </tr>
                {countriesinfo.length>0 && countriesinfo.map((country)=>{
                    return (
                        <tr key={country.name}>
                            <td>{country.name}</td>
                            <td>{country.capital}</td>
                        </tr>
                    )
                })}
                
            </table>
        </div>
        )
    }
}
