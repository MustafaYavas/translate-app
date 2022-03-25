import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import styles from './Select.module.css';

const Select = (props) => {
    const [languages, setLanguages] = useState([]);
    const langArray = [];

    useEffect(() => {
        const languageDatas = {
            method: 'GET',
            url: 'https://simple-elegant-translation-service.p.rapidapi.com/getSupportedLanguages',
            headers: {
              'x-rapidapi-host': 'simple-elegant-translation-service.p.rapidapi.com',
              'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`
            }
        };

        axios.request(languageDatas).then(response => {
            setLanguages(response.data.languages);
        }).catch(error => {
            console.log(error)
        })
        }, [])


        const getLanguages = () => {
            for (const [key, value] of Object.entries(languages)) {
                langArray.push(
                    <option key={uuidv4()} value={key}>{value}</option>
                )
            }
            return langArray
        }
        

    return(
        <select
            value={props.value}
            className={`${props.className} ${styles['select__size']} ${styles['select__selectect_color']} ${styles['select__position']}`}
            onChange={props.onChange}
        >
            {
                getLanguages()
            }

        </select>
    )
}

export default Select;