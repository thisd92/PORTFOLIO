import React from 'react';
import axios from 'axios';
import { BASE_URL } from "../utils/request";
import { useState } from 'react';
import { CEP } from '../models/type';

const BuscaCEP = () => {
    
    const [cep, setCEP] = useState([])
    
    const getCEP = () => {
        axios.get(`${BASE_URL}/${cep}/json`)
            .then(resp => {
                setCEP(resp.data.content)
            })
    }

    return(
        <form>
            <input type="text" />
        </form>
    )
}


export default BuscaCEP;