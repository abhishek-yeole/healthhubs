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
import MARKDOWN from './BFAanalysis.md';
import './report.css';
import { BarChart } from '@mui/x-charts/BarChart';

const Bfa = () => {
    const [age, setAge] = useState(20);
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState(70);
    const [height, setHeight] = useState(180);
    const [neck, setNeck] = useState(50);
    const [waist, setWaist] = useState(98);
    const [bfa, setBfa] = useState(0);
    const [bfaCat, setBfaCat] = useState('');
    const [fatMass, setFatMass] = useState(0);
    const [leanMass, setLeanMass] = useState(0);
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
        let bfa = 0; 
        
        if (age >= 20 && gender === 'male') {
            bfa = (1.20 * bmi) + (0.23 * age) - 16.2;
            setBfa(bfa.toFixed(2));
        }
        if (age >= 20 && gender === 'female') {
            bfa = (1.20 * bmi) + (0.23 * age) - 5.4;
            setBfa(bfa.toFixed(2));
        }
        if (age < 20 && gender === 'male') {
            bfa = (1.51 * bmi) + (0.70 * age) - 2.2;
            setBfa(bfa.toFixed(2));
        }
        if (age < 20 && gender === 'female') {
            bfa = (1.51 * bmi) + (0.70 * age) - 1.4;
            setBfa(bfa.toFixed(2));
        }

        if ((gender === 'male' && bfa <= 5) || (gender === 'female' && bfa <= 13)) {
            dataList = [bfa,0,0,0,0];
            setBfaCat('Essential fat');
        }
        else if ((gender === 'male' && (bfa >= 6 && bfa <= 13)) || (gender === 'female' && (bfa >= 14 && bfa <= 20))) {
            dataList = [0,bfa,0,0,0];
            setBfaCat('Athletes');
        }
        else if ((gender === 'male' && (bfa >= 14 && bfa <= 17)) || (gender === 'female' && (bfa >= 21 && bfa <= 24))) {
            dataList = [0,0,bfa,0,0];
            setBfaCat('Fitness');
        }
        else if ((gender === 'male' && (bfa >= 18 && bfa <= 24)) || (gender === 'female' && (bfa >= 25 && bfa <= 31))) {
            dataList = [0,0,0,bfa,0];
            setBfaCat('Average');
        }
        else if ((gender === 'male' && bfa >= 25) || (gender === 'female' && bfa >= 32)) {
            dataList = [0,0,0,0,bfa];
            setBfaCat('Obese');
        }

        setFatMass(((bfa/100)*weight).toFixed(2));
        setLeanMass((weight - ((bfa/100)*weight)).toFixed(2));
        if (gender === 'female') {
            setList([
                { data: [0, 5, 14, 18, 25] },
                { data: dataList}
            ]);
        }
        else if (gender === 'male') {
            setList([
                { data: [0, 14, 21, 25, 32] },
                { data: dataList}
            ]);
        }

        setLoad(false);
    };

    return (
        <div>
            <div className='bmi-title'>Body Fate Percentage Calculator</div>
            
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
                    </Box>
                    <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', alignItems: 'center' }}>
                        <Icon icon="mingcute:necktie-line" style={{fontSize: '28px'}}/>
                        <TextField
                            size='small'
                            label="Neck"
                            id="outlined-start-adornment"
                            type='number'
                            sx={{ m: 1, width: '25ch' }}
                            InputProps={{
                                endAdornment: <InputAdornment position="start">cm</InputAdornment>,
                            }}
                            value={neck}
                            onChange={(e) => setNeck(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', alignItems: 'center' }}>
                        <Icon icon="icon-park:waistline" style={{fontSize: '28px'}}/>
                        <TextField
                            size='small'
                            label="Waist"
                            id="outlined-start-adornment"
                            type='number'
                            sx={{ m: 1, width: '25ch' }}
                            InputProps={{
                                endAdornment: <InputAdornment position="start">cm</InputAdornment>,
                            }}
                            value={waist}
                            onChange={(e) => setWaist(e.target.value)}
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
                            xAxis={[{ data: ['Essential Fat', 'Atheletes', 'Fitness', 'Average', 'Obese'], scaleType: 'band' }]}
                            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                        />
                        <div className='bmi-value'><b>Body Fat Value = </b>{bfa} %</div><br />
                        <div><b>Body Fat Category = </b>{bfaCat}</div><br />
                        <div><b>Fat Mass = </b>{fatMass} kg</div><br />
                        <div><b>Lean Mass = </b>{leanMass} kg</div>
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

export default Bfa;