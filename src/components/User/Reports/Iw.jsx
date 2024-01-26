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
import { BarChart } from '@mui/x-charts/BarChart';

const Iw = () => {
    const [age, setAge] = useState(20);
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState(180);
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
        if (gender === 'male') {
            let hmale = (48.0 + 2.7 * ((height - 152.40) / 2.54)).toFixed(2);
            let dmale = (50.0 + 2.3 * ((height - 152.40) / 2.54)).toFixed(2);
            let rmale = (52.0 + 1.9 * ((height - 152.40) / 2.54)).toFixed(2);
            let mmale = (56.2 + 1.41 * ((height - 152.40) / 2.54)).toFixed(2);
            dataList = [hmale,dmale,rmale,mmale];
        }
        else if (gender === 'female') {
            let hfemale = (45.5 + 2.2 * ((height - 152.40) / 2.54)).toFixed(2);
            let dfemale = (45.5 + 2.3 * ((height - 152.40) / 2.54)).toFixed(2);
            let rfemale = (49.0 + 1.7 * ((height - 152.40) / 2.54)).toFixed(2);
            let mfemale = (53.1 + 1.36 * ((height - 152.40) / 2.54)).toFixed(2);
            dataList = [hfemale,dfemale,rfemale,mfemale];
        }

        setList([
            { data: dataList}
        ]);
        
        setLoad(false);
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
                            xAxis={[{ data: ['Hamwi', 'Devine', 'Robinson', 'Miller'], scaleType: 'band' }]}
                            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                        />
                        <div className='bmi-value'><b>Hamwi formula(1964) = </b>{list[0].data[0]} kg</div><br />
                        <div><b>Devine formula(1974) = </b>{list[0].data[1]} kg</div><br />
                        <div><b>Robinson formula(1983) = </b>{list[0].data[2]} kg</div><br />
                        <div><b>Miller formula(1983) = </b>{list[0].data[3]} kg</div>
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

export default Iw;