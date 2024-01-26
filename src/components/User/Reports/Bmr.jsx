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
import MARKDOWN from './BMRanalysis.md';
import './report.css';

const Bmr = () => {
    const [age, setAge] = useState(20);
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState(70);
    const [height, setHeight] = useState(180);
    const [bmr, setBmr] = useState(0);
    const [load, setLoad] = useState(true);

    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(MARKDOWN)
            .then((res) => res.text())
            .then((md) => {
                setMarkdown(md)
            })
    }, []);

    const calculateBmi = () => {
        let bmr = 0;

        if (gender === 'male') {
            bmr = (10*weight) + (6.25*height) - (5*age) + 5;
        }
        else if (gender === 'female') {
            bmr = (10*weight) + (6.25*height) - (5*age) - 161;
        }

        setBmr(bmr.toFixed(2));
        setLoad(false);
    };

    return (
        <div>
            <div className='bmi-title'>Basal Metabolic Rate (BMR) Calculator</div>
            
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
                        <div className='bmi-value'><b>BMR Value = </b>{bmr} Calories/day</div><br />
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

export default Bmr;