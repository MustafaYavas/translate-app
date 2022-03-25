import React, {useState, useEffect} from 'react';
import TextArea from '../UI/TextArea';
import Select from '../UI/Select';
import axios from 'axios';
import AlertModal from '../UI/AlertModal';
import styles from './Main.module.css';
import Button from '../UI/Button';
import Counter from '../UI/Counter';


const Main = () => {
    const [selectLang, setSelectLang] = useState('tr');
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const onTextHandler = (e) => {
        setInput(e.target.value);
        e.target.value.length === 0 ? setShowButton(false) : setShowButton(true)
    }

    useEffect(() => {
        if(input.length > 750) setOutput('!!! Text passes the 750 character limit !!!')
        const identifier = setTimeout(() => {
            const options = {
                method: 'POST',
                url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
                params: {
                    'api-version': '3.0',
                    to: selectLang,
                    textType: 'plain',
                    profanityAction: 'NoAction'
                },
                headers: {
                    'content-type': 'application/json',
                    'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
                    'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`
                },
                data: [{Text: `${input}`}]
            };
           
            axios.request(options).then(response => {
                if(input === 0){
                    setSelectLang('tr');
                    setOutput('');
                }
                else{               
                    setOutput(response.data[0].translations[0].text);
                }            
            }).catch(error => {
                console.log(error)
            })
        }, 500)

        return (() => { // sürekli request yapmanın önüne geçmek için
            clearTimeout(identifier);
        })
    }, [input, selectLang])

    const onSelectHandler = (e) => {
        setInput('');
        setOutput('');
        setSelectLang(e.target.value);
    }

    const handleClose = () => setShowAlert(false);
    const clearTextHandler = () => {
        setInput('');
        setShowButton(false);
    }

    return (
        <>
            <AlertModal 
                handleClose={handleClose}
                show={showAlert}
            />
            <div className={`${styles['parent-content']}`}>
                <div className={`${styles['child-content']}`}>
                    <Button 
                        show={showButton}
                        onClick={clearTextHandler}
                    />
                    <TextArea 
                        className='bg-dark text-light'
                        onChange={onTextHandler}
                        colNumber='75'
                        rowNumber='7'
                        placeholder='Type Here!'
                        value={input}
                    />
                    <Counter textLength={input.length}/>
                </div>
                                
                <div className={`${styles['child-content']}`}>
                    <Select
                        value={selectLang}
                        onChange={onSelectHandler}
                    />
                    <TextArea 
                        className={`bg-dark text-light`}
                        onChange={onTextHandler}
                        colNumber='75'
                        rowNumber='7'
                        placeholder='Translate'
                        value={output}
                        readonly={true}
                    />
                </div>
            </div>
        </>
    )
}

export default Main;