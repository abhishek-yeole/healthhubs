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
import MARKDOWN from './BMIanalysis.md';
import './report.css';
import { BarChart } from '@mui/x-charts/BarChart';

const Bmi = () => {
    const [age, setAge] = useState(20);
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState(70);
    const [height, setHeight] = useState(180);
    const [bmi, setBmi] = useState(0);
    const [bmiPrime, setBmiPrime] = useState(0);
    const [ponIndex, setPonIndex] = useState(0);
    const [message, setMessage] = useState('');
    const [load, setLoad] = useState(true);

    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(MARKDOWN)
            .then((res) => res.text())
            .then((md) => {
                setMarkdown(md)
            })
    }, []);
    
    const [list, setList] = useState([]);
    let dataList = [];

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
            dataList = [bmi,0,0,0,0,0,0,0];
            message = 'You are Underweight (Severe Thinness)'; 
        } else if (bmi > 16 && bmi <= 17) { 
            dataList = [0,bmi,0,0,0,0,0,0];
            message = 'You are Underweight (Moderate Thinness)'; 
        } else if (bmi > 17 && bmi <= 18.5) { 
            dataList = [0,0,bmi,0,0,0,0,0];
            message = 'You are Underweight (Mild Thinness)'; 
        } else if (bmi > 18.5 && bmi <= 25) { 
            dataList = [0,0,0,bmi,0,0,0,0];
            message = 'You are Normal'; 
        } else if (bmi > 25 && bmi <= 30) { 
            dataList = [0,0,0,0,bmi,0,0,0];
            message = 'You are Overweight'; 
        } else if (bmi > 30 && bmi <= 35) { 
            dataList = [0,0,0,0,0,bmi,0,0];
            message = 'You are Obese (Class 1)'; 
        } else if (bmi > 35 && bmi <= 40) { 
            dataList = [0,0,0,0,0,0,bmi,0];
            message = 'You are Obese (Class 2)'; 
        } else if (bmi > 40) { 
            dataList = [0,0,0,0,0,0,0,bmi];
            message = 'You are Obese (Class 3)'; 
        }
        setMessage(message);
        setList([
            { data: [0, 16, 17, 18.5, 25, 30, 35, 40] },
            { data: dataList}
        ]);

        setLoad(false);
    };

    return (
        <div>
            <div className='bmi-title'>Body Mass Index Calculator</div>
            
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

                {load ? (
                    <div className='bmi-output' style={{color: 'gray'}}>Enter the details!!</div>
                ) : (
                    <div className='bmi-output'>
                        <BarChart
                            series={list}
                            height={290}
                            xAxis={[{ data: ['Underweight (Severe Thinness)', 'Underweight (Moderate Thinness)', 'Underweight (Mild Thinness)', 'Normal', 'Overweight', 'Obese (Class 1)', 'Obese (Class 2)', 'Obese (Class 3)'], scaleType: 'band' }]}
                            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                        />
                        <div className='bmi-value'><b>BMI Value = </b>{bmi}kg/m<sup>2</sup></div><br />
                        <div className='bmi-prime'><b>BMI Prime Value = </b>{bmiPrime}</div><br />
                        <div className='pon-index'><b>Ponderal Index Value = </b>{ponIndex}kg/m<sup>3</sup></div><br />
                        <div className='bmi-message'><b>{message}</b></div>
                    </div>
                )}

                <div className='analysis'>
                    <div className='bmi-title'>Analysis</div>
                    <div className='analysis-markdown'><ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown></div>
                </div>
            </div>
        </div>
    )
}

export default Bmi;