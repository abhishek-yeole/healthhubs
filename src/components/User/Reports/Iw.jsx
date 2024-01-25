import React, { useState, useEffect } from 'react';
import { Box, Button, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { Icon } from '@iconify/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MARKDOWN from './IWanalysis.md';
import './report.css';

const Iw = () => {
    const [age, setAge] = useState(20);
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState(70);
    const [height, setHeight] = useState(180);
    const [bmi, setBmi] = useState(0);
    const [bmiPrime, setBmiPrime] = useState(0);
    const [ponIndex, setPonIndex] = useState(0);
    const [message, setMessage] = useState('');

    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(MARKDOWN)
            .then((res) => res.text())
            .then((md) => {
                setMarkdown(md)
            })
    }, []);

    const calculateBmi = () => {
        const heightInMeters = height / 100; 
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2); 
        setBmi(bmi);
        const bmiPrime = (bmi/25).toFixed(2);
        setBmiPrime(bmiPrime);
        const ponIndex = (weight / (heightInMeters * heightInMeters * heightInMeters)).toFixed(2); 
        setPonIndex(ponIndex);

        let message = ''; 
        if (bmi <= 16) { 
            message = 'You are Underweight (Severe Thinness)'; 
        } else if (bmi > 16 && bmi <= 17) { 
            message = 'You are Underweight (Moderate Thinness)'; 
        } else if (bmi > 17 && bmi <= 18.5) { 
            message = 'You are Underweight (Mild Thinness)'; 
        }
        else if (bmi > 18.5 && bmi <= 25) { 
            message = 'You are Normal'; 
        } 
        else if (bmi > 25 && bmi <= 30) { 
            message = 'You are Overweight'; 
        }
        else if (bmi > 30 && bmi <= 35) { 
            message = 'You are Obese (Class 1)'; 
        }
        else if (bmi > 35 && bmi <= 40) { 
            message = 'You are Obese (Class 2)'; 
        }
        else if (bmi > 40) { 
            message = 'You are Obese (Class 3)'; 
        }
        setMessage(message);
    };

    return (
        <div>
            <div className='bmi-title'>BMI Calculator</div>
            
            <div className='bmi-main'>
                <div className='bmi-survey'>
                    <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', alignItems: 'center' }}>
                        <Icon icon="game-icons:ages" style={{fontSize: '28px'}}/>
                        <TextField
                            size='small'
                            label="Age"
                            id="outlined-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            type='number'
                            InputProps={{
                                endAdornment: <InputAdornment position="start">Years</InputAdornment>,
                            }}
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', alignItems: 'center' }}>
                        <Icon icon="icons8:gender" style={{fontSize: '28px'}}/>
                        <Box sx={{display:'flex', flexDirection:'column'}}>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                size='small'
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </RadioGroup>
                        </Box>
                    </Box>
                    <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', alignItems: 'center' }}>
                        <Icon icon="game-icons:weight" style={{fontSize: '28px'}}/>
                        <TextField
                            size='small'
                            label="Weight"
                            id="outlined-start-adornment"
                            type='number'
                            sx={{ m: 1, width: '25ch' }}
                            InputProps={{
                                endAdornment: <InputAdornment position="start">kg</InputAdornment>,
                            }}
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', alignItems: 'center' }}>
                        <Icon icon="game-icons:body-height" style={{fontSize: '28px'}}/>
                        <TextField
                            size='small'
                            label="Height"
                            id="outlined-start-adornment"
                            type='number'
                            sx={{ m: 1, width: '25ch' }}
                            InputProps={{
                                endAdornment: <InputAdornment position="start">cm</InputAdornment>,
                            }}
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    </Box><br />
                    <Button variant='contained' onClick={calculateBmi}> Calculate </Button>
                </div>
                
                <div className='bmi-output'>
                    <div className='bmi-value'><b>BMI Value = </b>{bmi}kg/m<sup>2</sup></div><br />
                    <div className='bmi-prime'><b>BMI Prime Value = </b>{bmiPrime}</div><br />
                    <div className='pon-index'><b>Ponderal Index Value = </b>{ponIndex}kg/m<sup>3</sup></div><br />
                    <div className='bmi-message'>{message}</div>
                </div>

                <div className='analysis'>
                    <div className='bmi-title'>Analysis</div>
                    <div className='analysis-markdown'><ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown></div>
                </div>
            </div>
        </div>
    )
}

export default Iw;