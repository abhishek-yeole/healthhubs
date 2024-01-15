import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Icon } from '@iconify/react';
import Background from '../../Landing/Background/Background';
import Header from '../../Landing/Header/Header';
import happy1 from '../../../assets/happy1.png';
import happy2 from '../../../assets/happy2.png';
import result from '../../../assets/result.png';
import './happy.css';
  
const Happy = () => {
    const [activeStep, setActiveStep] = useState(0);

    const [ca1, setCa1] = useState(0);
    const [sa1, setSa1] = useState(0);
    const [sa2, setSa2] = useState(0);
    const [sa3, setSa3] = useState(0);
    const [sa4, setSa4] = useState(0);
    const [p1, setP1] = useState('');
    const [p2, setP2] = useState('');
    const [p3, setP3] = useState('');
    const [p4, setP4] = useState('');
    const [p5, setP5] = useState('');
    const [h1, setH1] = useState('');
    const [h2, setH2] = useState('');
    const [h3, setH3] = useState('');
    const [h4, setH4] = useState('');
    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [t3, setT3] = useState('');
    const [l1, setL1] = useState('');
    const [l2, setL2] = useState('');
    const [l3, setL3] = useState('');
    const [l4, setL4] = useState('');
    const [co1, setCo1] = useState('');
    const [co2, setCo2] = useState('');
    const [co3, setCo3] = useState('');
    const [co4, setCo4] = useState('');
    const [co5, setCo5] = useState('');
    const [co6, setCo6] = useState('');
    const [co7, setCo7] = useState('');
    const [so1, setSo1] = useState('');
    const [so2, setSo2] = useState('');
    const [so3, setSo3] = useState('');
    const [so4, setSo4] = useState('');
    const [e1, setE1] = useState('');
    const [e2, setE2] = useState('');
    const [e3, setE3] = useState('');
    const [e4, setE4] = useState('');
    const [g1, setG1] = useState('');
    const [g2, setG2] = useState('');
    const [g3, setG3] = useState('');
    const [g4, setG4] = useState('');
    const [g5, setG5] = useState(0);
    const [st1, setSt1] = useState('');
    const [st2, setSt2] = useState('');
    const [st3, setSt3] = useState('');
    const [st4, setSt4] = useState('');
    const [w1, setW1] = useState('');
    const [w2, setW2] = useState('');
    const [w3, setW3] = useState('');
    const [w4, setW4] = useState('');
    const [w5, setW5] = useState('');
    const [w6, setW6] = useState('');

    const [disabled, setDisabled] = useState(false);
    const [display, setDisplay] = useState(false);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0); setCa1(0); setSa1(0); setSa2(0); setSa3(0); setSa4(0); setP1(''); setP2('');setP3('');setP4('');  setP5('');setH1('');setH2(''); setH3('');setH4('');setT1('');setT2('');setT3('');setL1('');setL2('');setL3('');setL4('');setCo1('');setCo2('');setCo3('');setCo4('');setCo5('');setCo6('');setCo7('');setSo1('');setSo2('');setSo3('');setSo4('');setE1('');setE2('');setE3('');setE4('');setG1('');setG2('');setG3('');setG4('');setG5(0);setSt1('');setSt2('');setSt3('');setSt4('');setW1('');setW2('');setW3('');setW4('');setW5('');setW6('');
    };

    const handleSubmit = () => {
        setDisabled(true);
        setDisplay(true);
        // try {
        //     const response = await fetch( 'http://192.168.0.104:5000/happy', {
        //         method: 'POST',
        //         headers: {
        //         'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ ca1,sa1,sa2,sa3,sa4,p1,p2,p3,p4,p5,h1,h2,h3,h4,t1,t2,t3,l1,l2,l3,l4,co1,co2,co3,co4,co5,co6,co7,so1,so2,so3,so4,e1,e2,e3,e4,g1,g2,g3,g4,g5,st1,st2,st3,st4,w1,w2,w3,w4,w5,w6 }),
        //     });
        
        //     if (response.ok) {
        //         const data = await response.json();
        //         if (data.success) {
        //             console.log(data);
        //             setDisabled(true);
        //         } else {
        //             console.log('Something got wrong. Please try again !!');
        //         }
        //     } else {
        //         console.log('Cannot connect to server right now !!');
        //     }
        // } catch (error) {
        //     console.log('We are experiencing heavy traffic !!');
        // }
    }

    return (
        <div className='happy-main'>
            <Header />
            <Background /><br /><br /><br /><br />
            <div className='happy-container'>
                <div className='happy-info'>
                    <div className='happy-image-1'><img src={happy1} alt="happy-1" width={'150px'} /></div>
                    <div className='happy-text'>
                        <div className='happy-title'>Happiness Index Survey</div><br />
                        <div className='happy-content'>Take a comprehensive questionnaire that help you to define happiness and re-define the purpose of life and government. ​Get your answers by domain and see your Happiness Index.</div><br />
                        <div className='happy-explore'><Button variant='outlined' href='https://worldhappiness.report/' target='_blank' endIcon={<Icon icon="solar:arrow-right-broken" />}>Explore</Button></div>
                    </div>
                    <div className='happy-image-2'><img src={happy2} alt="happy_2" width={'250px'} /></div>
                </div>
                <br /><hr className='happy-hr' /><br />
                <div className='happy-survey'>
                    <div className='happy-form' style={{width: '60%'}}>
                        <Box sx={{ maxWidth: 600 }}>
                            <Stepper activeStep={activeStep} orientation="vertical">
                                <Step disabled={disabled} key='Cantril Ladder' index={0}>
                                    <StepLabel><b>Cantril Ladder</b></StepLabel>
                                    <StepContent> <Typography fontSize={14}>Please imagine a ladder with steps numbered from zero at the bottom ten at the top. Suppose we say that the top of the ladder represents the best possible life for you and the bottom of the ladder represents the worst possible.</Typography>
                                    <br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>If the top step is 10 and the bottom step is 0, on which step of the ladder do you feel you personally stand at the present time?</FormLabel>
                                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="1" name="radio-buttons-group" value={ca1} onChange={(e) => setCa1(e.target.value)}>
                                            <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <FormControlLabel value="0" control={<Radio />} label="0 Worst" />
                                                <FormControlLabel value="1" control={<Radio />} label="1" />
                                                <FormControlLabel value="2" control={<Radio />} label="2" />
                                                <FormControlLabel value="3" control={<Radio />} label="3" />
                                                <FormControlLabel value="4" control={<Radio />} label="4" />
                                                <FormControlLabel value="5" control={<Radio />} label="5" />
                                                <FormControlLabel value="6" control={<Radio />} label="6" />
                                                <FormControlLabel value="7" control={<Radio />} label="7" />
                                                <FormControlLabel value="8" control={<Radio />} label="8" />
                                                <FormControlLabel value="9" control={<Radio />} label="9" />
                                                <FormControlLabel value="10" control={<Radio />} label="10 Best" />
                                            </Box>
                                        </RadioGroup>
                                    </FormControl>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }} > Continue </Button>
                                            <Button disabled onClick={handleBack} sx={{ mt: 1, mr: 1 }} > Back </Button>
                                        </div>
                                    </Box>
                                    </StepContent>
                                </Step>
                                <Step disabled={disabled} key='Satisfaction with Life' index={1}>
                                    <StepLabel><b>Satisfaction With Life</b></StepLabel>
                                    <StepContent> <Typography>This questions deals with satisfaction with life.</Typography>
                                    <br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>Overall, how satisfied are you with your life nowadays?</FormLabel>
                                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" value={sa1} onChange={(e) => setSa1(e.target.value)}>
                                            <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <FormControlLabel value="0" control={<Radio />} label="0 Not" />
                                                <FormControlLabel value="1" control={<Radio />} label="1" />
                                                <FormControlLabel value="2" control={<Radio />} label="2" />
                                                <FormControlLabel value="3" control={<Radio />} label="3" />
                                                <FormControlLabel value="4" control={<Radio />} label="4" />
                                                <FormControlLabel value="5" control={<Radio />} label="5" />
                                                <FormControlLabel value="6" control={<Radio />} label="6" />
                                                <FormControlLabel value="7" control={<Radio />} label="7" />
                                                <FormControlLabel value="8" control={<Radio />} label="8" />
                                                <FormControlLabel value="9" control={<Radio />} label="9" />
                                                <FormControlLabel value="10" control={<Radio />} label="10 Completely" />
                                            </Box>
                                        </RadioGroup>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>Overall, to what extent do you feel the things you do in your life are worthwhile?</FormLabel>
                                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" value={sa2} onChange={(e) => setSa2(e.target.value)}>
                                            <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <FormControlLabel value="0" control={<Radio />} label="0 Not" />
                                                <FormControlLabel value="1" control={<Radio />} label="1" />
                                                <FormControlLabel value="2" control={<Radio />} label="2" />
                                                <FormControlLabel value="3" control={<Radio />} label="3" />
                                                <FormControlLabel value="4" control={<Radio />} label="4" />
                                                <FormControlLabel value="5" control={<Radio />} label="5" />
                                                <FormControlLabel value="6" control={<Radio />} label="6" />
                                                <FormControlLabel value="7" control={<Radio />} label="7" />
                                                <FormControlLabel value="8" control={<Radio />} label="8" />
                                                <FormControlLabel value="9" control={<Radio />} label="9" />
                                                <FormControlLabel value="10" control={<Radio />} label="10 Completely" />
                                            </Box>
                                        </RadioGroup>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>Overall, how happy did you feel yesterday?</FormLabel>
                                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" value={sa3} onChange={(e) => setSa3(e.target.value)}>
                                            <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <FormControlLabel value="0" control={<Radio />} label="0 Not" />
                                                <FormControlLabel value="1" control={<Radio />} label="1" />
                                                <FormControlLabel value="2" control={<Radio />} label="2" />
                                                <FormControlLabel value="3" control={<Radio />} label="3" />
                                                <FormControlLabel value="4" control={<Radio />} label="4" />
                                                <FormControlLabel value="5" control={<Radio />} label="5" />
                                                <FormControlLabel value="6" control={<Radio />} label="6" />
                                                <FormControlLabel value="7" control={<Radio />} label="7" />
                                                <FormControlLabel value="8" control={<Radio />} label="8" />
                                                <FormControlLabel value="9" control={<Radio />} label="9" />
                                                <FormControlLabel value="10" control={<Radio />} label="10 Completely" />
                                            </Box>
                                        </RadioGroup>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>Overall, how anxious did you feel yesterday?</FormLabel>
                                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" value={sa4} onChange={(e) => setSa4(e.target.value)}>
                                            <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <FormControlLabel value="0" control={<Radio />} label="0 Not" />
                                                <FormControlLabel value="1" control={<Radio />} label="1" />
                                                <FormControlLabel value="2" control={<Radio />} label="2" />
                                                <FormControlLabel value="3" control={<Radio />} label="3" />
                                                <FormControlLabel value="4" control={<Radio />} label="4" />
                                                <FormControlLabel value="5" control={<Radio />} label="5" />
                                                <FormControlLabel value="6" control={<Radio />} label="6" />
                                                <FormControlLabel value="7" control={<Radio />} label="7" />
                                                <FormControlLabel value="8" control={<Radio />} label="8" />
                                                <FormControlLabel value="9" control={<Radio />} label="9" />
                                                <FormControlLabel value="10" control={<Radio />} label="10 Completely" />
                                            </Box>
                                        </RadioGroup>
                                    </FormControl>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }} > Continue </Button>
                                            <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }} > Back </Button>
                                        </div>
                                    </Box>
                                    </StepContent>
                                </Step>
                                <Step disabled={disabled} key='Psychological Well-Being' index={2}>
                                    <StepLabel><b>Psychological Well-Being</b></StepLabel>
                                    <StepContent> <Typography fontSize={14}>To what extent do you agree with the following statements?</Typography>
                                    <br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>I lead a purposeful and meaningful life.</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={p1} onChange={(e) => setP1(e.target.value)}>
                                                    <MenuItem value={'Strongly Disagree'}>Strongly Disagree</MenuItem>
                                                    <MenuItem value={'Disagree'}>Disagree</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Agree'}>Agree</MenuItem>
                                                    <MenuItem value={'Strongly Agree'}>Strongly Agree</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>I am engaged and interested in my daily activities.</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={p2} onChange={(e) => setP2(e.target.value)}>
                                                    <MenuItem value={'Strongly Disagree'}>Strongly Disagree</MenuItem>
                                                    <MenuItem value={'Disagree'}>Disagree</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Agree'}>Agree</MenuItem>
                                                    <MenuItem value={'Strongly Agree'}>Strongly Agree</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>I am optimistic about my future.</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={p3} onChange={(e) => setP3(e.target.value)}>
                                                    <MenuItem value={'Strongly Disagree'}>Strongly Disagree</MenuItem>
                                                    <MenuItem value={'Disagree'}>Disagree</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Agree'}>Agree</MenuItem>
                                                    <MenuItem value={'Strongly Agree'}>Strongly Agree</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>Most days I feel a sense of accomplishment from what I do.</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={p4} onChange={(e) => setP4(e.target.value)}>
                                                    <MenuItem value={'Strongly Disagree'}>Strongly Disagree</MenuItem>
                                                    <MenuItem value={'Disagree'}>Disagree</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Agree'}>Agree</MenuItem>
                                                    <MenuItem value={'Strongly Agree'}>Strongly Agree</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>In general, I feel very positive about myself.</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={p5} onChange={(e) => setP5(e.target.value)}>
                                                    <MenuItem value={'Strongly Disagree'}>Strongly Disagree</MenuItem>
                                                    <MenuItem value={'Disagree'}>Disagree</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Agree'}>Agree</MenuItem>
                                                    <MenuItem value={'Strongly Agree'}>Strongly Agree</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }} > Continue </Button>
                                            <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }} > Back </Button>
                                        </div>
                                    </Box>
                                    </StepContent>
                                </Step>
                                <Step disabled={disabled} key='Health' index={3}>
                                    <StepLabel><b>Health</b></StepLabel>
                                    <StepContent> <Typography fontSize={14}>These questions are for Health.</Typography>
                                    <br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>In general, I would say my health is:</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={h1} onChange={(e) => setH1(e.target.value)}>
                                                    <MenuItem value={'Poor'}>Poor</MenuItem>
                                                    <MenuItem value={'Fair'}>Fair</MenuItem>
                                                    <MenuItem value={'Good'}>Good</MenuItem>
                                                    <MenuItem value={'Very Good'}>Very Good</MenuItem>
                                                    <MenuItem value={'Excellent'}>Excellent</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>Please indicate, how much of the time during the past week you had a lot of energy?</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={h2} onChange={(e) => setH2(e.target.value)}>
                                                    <MenuItem value={'Very rarely or never'}>Very rarely or never</MenuItem>
                                                    <MenuItem value={'Rarely'}>Rarely</MenuItem>
                                                    <MenuItem value={'Sometimes'}>Sometimes</MenuItem>
                                                    <MenuItem value={'Often'}>Often</MenuItem>
                                                    <MenuItem value={'Very Often or Always'}>Very Often or Always</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>How satisfied were you with your ability to perform your daily living activities?</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={h3} onChange={(e) => setH3(e.target.value)}>
                                                    <MenuItem value={'Very Satisfied'}>Very Satisfied</MenuItem>
                                                    <MenuItem value={'Satisfied'}>Satisfied</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Dissatisfied'}>Dissatisfied</MenuItem>
                                                    <MenuItem value={'Very Dissatisfied'}>Very Dissatisfied</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>How satisfied were you with the quality of your exercise?</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={h4} onChange={(e) => setH4(e.target.value)}>
                                                    <MenuItem value={'Very Satisfied'}>Very Satisfied</MenuItem>
                                                    <MenuItem value={'Satisfied'}>Satisfied</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Dissatisfied'}>Dissatisfied</MenuItem>
                                                    <MenuItem value={'Very Dissatisfied'}>Very Dissatisfied</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }} > Continue </Button>
                                            <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }} > Back </Button>
                                        </div>
                                    </Box>
                                    </StepContent>
                                </Step>
                                <Step disabled={disabled} key='Time Balance' index={4}>
                                    <StepLabel><b>Time Balance</b></StepLabel>
                                    <StepContent> <Typography fontSize={14}>These questions are for Time Balance.</Typography>
                                    <br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>In a typical week, how much of your time are you able to spend doing the kinds of things that you enjoy?</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={t1} onChange={(e) => setT1(e.target.value)}>
                                                    <MenuItem value={'None of my time'}>None of my time</MenuItem>
                                                    <MenuItem value={'Not much of my time'}>Not much of my time</MenuItem>
                                                    <MenuItem value={'Some of my time'}>Some of my time</MenuItem>
                                                    <MenuItem value={'Most of my time'}>Most of my time</MenuItem>
                                                    <MenuItem value={'All of my time'}>All of my time</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <Typography fontSize={14}>Here are some statements about how things are going in your life. When indicating your agreement with each statement, please think specifically about how things were for you over the past week.</Typography>
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>My life has been too rushed</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={t2} onChange={(e) => setT2(e.target.value)}>
                                                    <MenuItem value={'Strongly Disagree'}>Strongly Disagree</MenuItem>
                                                    <MenuItem value={'Disagree'}>Disagree</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Agree'}>Agree</MenuItem>
                                                    <MenuItem value={'Strongly Agree'}>Strongly Agree</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>I have had plenty of spare time</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={t3} onChange={(e) => setT3(e.target.value)}>
                                                    <MenuItem value={'Strongly Disagree'}>Strongly Disagree</MenuItem>
                                                    <MenuItem value={'Disagree'}>Disagree</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Agree'}>Agree</MenuItem>
                                                    <MenuItem value={'Strongly Agree'}>Strongly Agree</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }} > Continue </Button>
                                            <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }} > Back </Button>
                                        </div>
                                    </Box>
                                    </StepContent>
                                </Step>
                                <Step disabled={disabled} key='Lifelong Learning, Arts & Culture' index={5}>
                                    <StepLabel><b>Lifelong Learning, Arts & Culture</b></StepLabel>
                                    <StepContent> <Typography fontSize={14}>In your neighborhood or community, how satisfied you are with...</Typography>
                                    <br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>Your access to sports and recreational activities?</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={l1} onChange={(e) => setL1(e.target.value)}>
                                                    <MenuItem value={'Very Satisfied'}>Very Satisfied</MenuItem>
                                                    <MenuItem value={'Satisfied'}>Satisfied</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Dissatisfied'}>Dissatisfied</MenuItem>
                                                    <MenuItem value={'Very Dissatisfied'}>Very Dissatisfied</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>I am engaged and interested in my daily activities.</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={l2} onChange={(e) => setL2(e.target.value)}>
                                                    <MenuItem value={'Very Satisfied'}>Very Satisfied</MenuItem>
                                                    <MenuItem value={'Satisfied'}>Satisfied</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Dissatisfied'}>Dissatisfied</MenuItem>
                                                    <MenuItem value={'Very Dissatisfied'}>Very Dissatisfied</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>I am optimistic about my future.</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={l3} onChange={(e) =>setL3(e.target.value)}>
                                                    <MenuItem value={'Very Satisfied'}>Very Satisfied</MenuItem>
                                                    <MenuItem value={'Satisfied'}>Satisfied</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Dissatisfied'}>Dissatisfied</MenuItem>
                                                    <MenuItem value={'Very Dissatisfied'}>Very Dissatisfied</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>Most days I feel a sense of accomplishment from what I do.</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={l4} onChange={(e) => setL4(e.target.value)}>
                                                    <MenuItem value={'Never'}>Never</MenuItem>
                                                    <MenuItem value={'Rarely'}>Rarely</MenuItem>
                                                    <MenuItem value={'Some of the Time'}>Some of the Time</MenuItem>
                                                    <MenuItem value={'Most of the time'}>Most of the time</MenuItem>
                                                    <MenuItem value={'All of the time'}>All of the time</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }} > Continue </Button>
                                            <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }} > Back </Button>
                                        </div>
                                    </Box>
                                    </StepContent>
                                </Step>
                                <Step disabled={disabled} key='Community' index={6}>
                                    <StepLabel><b>Community</b></StepLabel>
                                    <StepContent>
                                    <br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>How would you describe your feeling of belonging to your local community?</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={co1} onChange={(e) => setCo1(e.target.value)}>
                                                    <MenuItem value={'Very Weak'}>Very Weak</MenuItem>
                                                    <MenuItem value={'Somewhat Weak'}>Somewhat Weak</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Somewhat Strong'}>Somewhat Strong</MenuItem>
                                                    <MenuItem value={'Very Strong'}>Very Strong</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <Typography>Please tell us how many of the following people you trust:</Typography>
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>Your neighbors</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={co2} onChange={(e) => setCo2(e.target.value)}>
                                                    <MenuItem value={'Trust none of them'}>Trust none of them</MenuItem>
                                                    <MenuItem value={'Trust a few of them'}>Trust a few of them</MenuItem>
                                                    <MenuItem value={'Trust some of them'}>Trust some of them</MenuItem>
                                                    <MenuItem value={'Trust most of them'}>Trust most of them</MenuItem>
                                                    <MenuItem value={'Trust all of them'}>Trust all of them</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>Businesses in your community</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={co3} onChange={(e) => setCo3(e.target.value)}>
                                                    <MenuItem value={'Trust none of them'}>Trust none of them</MenuItem>
                                                    <MenuItem value={'Trust a few of them'}>Trust a few of them</MenuItem>
                                                    <MenuItem value={'Trust some of them'}>Trust some of them</MenuItem>
                                                    <MenuItem value={'Trust most of them'}>Trust most of them</MenuItem>
                                                    <MenuItem value={'Trust all of them'}>Trust all of them</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <Typography>Imagine that you lost a wallet or purse that contained two hundred dollars.</Typography>
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong> Please indicate how likely you think it would be to have all of your money returned to you if it was found by someone who lives close by.</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={co4} onChange={(e) => setCo4(e.target.value)}>
                                                    <MenuItem value={'Not at all likely'}>Not at all likely</MenuItem>
                                                    <MenuItem value={'Somewhat likely'}>Somewhat likely</MenuItem>
                                                    <MenuItem value={'Fairly likely'}>Fairly likely</MenuItem>
                                                    <MenuItem value={'Very likely'}>Very likely</MenuItem>
                                                    <MenuItem value={'Extremely likely'}>Extremely likely</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>How satisfied are you with your personal safety in your city or town?</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={co5} onChange={(e) => setCo5(e.target.value)}>
                                                    <MenuItem value={'Very Satisfied'}>Very Satisfied</MenuItem>
                                                    <MenuItem value={'Satisfied'}>Satisfied</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Dissatisfied'}>Dissatisfied</MenuItem>
                                                    <MenuItem value={'Very Dissatisfied'}>Very Dissatisfied</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <Typography>Using the scale below, please indicate how frequently you have done these activities in the past 12 months:</Typography>
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong> Volunteered your time to an organization</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={co6} onChange={(e) => setCo6(e.target.value)}>
                                                    <MenuItem value={'At least once a month'}>Atleast once a month</MenuItem>
                                                    <MenuItem value={'At least once every three months'}>At least once every three months</MenuItem>
                                                    <MenuItem value={'At least once every six months'}>At least once every six months</MenuItem>
                                                    <MenuItem value={'Once in the last Year'}>Once in the last Year</MenuItem>
                                                    <MenuItem value={'Never'}>Never</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>Donated money to a charity</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={co7} onChange={(e) => setCo7(e.target.value)}>
                                                    <MenuItem value={'At least once a month'}>Atleast once a month</MenuItem>
                                                    <MenuItem value={'At least once every three months'}>At least once every three months</MenuItem>
                                                    <MenuItem value={'At least once every six months'}>At least once every six months</MenuItem>
                                                    <MenuItem value={'Once in the last Year'}>Once in the last Year</MenuItem>
                                                    <MenuItem value={'Never'}>Never</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }} > Continue </Button>
                                            <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }} > Back </Button>
                                        </div>
                                    </Box>
                                    </StepContent>
                                </Step>
                                <Step disabled={disabled} key='Social Support' index={7}>
                                    <StepLabel><b>Social Support</b></StepLabel>
                                    <StepContent>
                                    <br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>How satisfied are you with your personal relationships?</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={so1} onChange={(e) => setSo1(e.target.value)}>
                                                    <MenuItem value={'Very Satisfied'}>Very Satisfied</MenuItem>
                                                    <MenuItem value={'Satisfied'}>Satisfied</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Dissatisfied'}>Dissatisfied</MenuItem>
                                                    <MenuItem value={'Very Dissatisfied'}>Very Dissatisfied</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>People in my life care about me.</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={so2} onChange={(e) => setSo2(e.target.value)}>
                                                    <MenuItem value={'Strongly Disagree'}>Strongly Disagree</MenuItem>
                                                    <MenuItem value={'Disagree'}>Disagree</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Agree'}>Agree</MenuItem>
                                                    <MenuItem value={'Strongly Agree'}>Strongly Agree</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <Typography>Please indicate how much of the time during the past week...</Typography>
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>You felt loved</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={so3} onChange={(e) => setSo3(e.target.value)}>
                                                    <MenuItem value={'Very rarely or never'}>Very rarely or never</MenuItem>
                                                    <MenuItem value={'Rarely'}>Rarely</MenuItem>
                                                    <MenuItem value={'Sometimes'}>Sometimes</MenuItem>
                                                    <MenuItem value={'Often'}>Often</MenuItem>
                                                    <MenuItem value={'Very Often or Always'}>Very Often or Always</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong> You felt lonely</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={so4} onChange={(e) => setSo4(e.target.value)}>
                                                    <MenuItem value={'Very rarely or never'}>Very rarely or never</MenuItem>
                                                    <MenuItem value={'Rarely'}>Rarely</MenuItem>
                                                    <MenuItem value={'Sometimes'}>Sometimes</MenuItem>
                                                    <MenuItem value={'Often'}>Often</MenuItem>
                                                    <MenuItem value={'Very Often or Always'}>Very Often or Always</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }} > Continue </Button>
                                            <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }} > Back </Button>
                                        </div>
                                    </Box>
                                    </StepContent>
                                </Step>
                                <Step disabled={disabled} key='Environment' index={8}>
                                    <StepLabel><b>Environment</b></StepLabel>
                                    <StepContent>
                                    <br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong> How healthy is your physical environment?</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={e1} onChange={(e) => setE1(e.target.value)}>
                                                    <MenuItem value={'Not at all'}>Not at all</MenuItem>
                                                    <MenuItem value={'A little'}>A little</MenuItem>
                                                    <MenuItem value={'Somewhat'}>Somewhat</MenuItem>
                                                    <MenuItem value={'Very'}>Very</MenuItem>
                                                    <MenuItem value={'Extremely'}>Extremely</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <Typography>Please rate your level of satisfaction.</Typography>
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>How satisfied are you with the efforts being made to preserve the natural environment in your neighborhood?</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={e2} onChange={(e) => setE2(e.target.value)}>
                                                    <MenuItem value={'Very Satisfied'}>Very Satisfied</MenuItem>
                                                    <MenuItem value={'Satisfied'}>Satisfied</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Dissatisfied'}>Dissatisfied</MenuItem>
                                                    <MenuItem value={'Very Dissatisfied'}>Very Dissatisfied</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>How satisfied are you with the opportunities that you have to enjoy nature?</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={e3} onChange={(e) => setE3(e.target.value)}>
                                                    <MenuItem value={'Very Satisfied'}>Very Satisfied</MenuItem>
                                                    <MenuItem value={'Satisfied'}>Satisfied</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Dissatisfied'}>Dissatisfied</MenuItem>
                                                    <MenuItem value={'Very Dissatisfied'}>Very Dissatisfied</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong> How satisfied are you with the air quality in your environment?</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={e4} onChange={(e) => setE4(e.target.value)}>
                                                    <MenuItem value={'Very Satisfied'}>Very Satisfied</MenuItem>
                                                    <MenuItem value={'Satisfied'}>Satisfied</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Dissatisfied'}>Dissatisfied</MenuItem>
                                                    <MenuItem value={'Very Dissatisfied'}>Very Dissatisfied</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }} > Continue </Button>
                                            <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }} > Back </Button>
                                        </div>
                                    </Box>
                                    </StepContent>
                                </Step>
                                <Step disabled={disabled} key='Government' index={9}>
                                    <StepLabel><b>Government</b></StepLabel>
                                    <StepContent>
                                    <br />
                                    <Typography>State your level of agreement with the following statements</Typography>
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong> Corruption is widespread throughout the government in my city or town.</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={g1} onChange={(e) => setG1(e.target.value)}>
                                                    <MenuItem value={'Strongly Disagree'}>Strongly Disagree</MenuItem>
                                                    <MenuItem value={'Disagree'}>Disagree</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Agree'}>Agree</MenuItem>
                                                    <MenuItem value={'Strongly Agree'}>Strongly Agree</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <Typography>Please rate your level of satisfaction.</Typography>
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>The public officials in my city or town pay attention to what people think.</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={g2} onChange={(e) => setG2(e.target.value)}>
                                                    <MenuItem value={'Strongly Disagree'}>Strongly Disagree</MenuItem>
                                                    <MenuItem value={'Disagree'}>Disagree</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Agree'}>Agree</MenuItem>
                                                    <MenuItem value={'Strongly Agree'}>Strongly Agree</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <Typography>Please indicate how much confidence you have in the following organizations:</Typography>
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>National government</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={g3} onChange={(e) => setG3(e.target.value)}>
                                                <MenuItem value={'No confidence'}>No confidence</MenuItem>
                                                    <MenuItem value={'Not very much confidence'}>Not very much confidence</MenuItem>
                                                    <MenuItem value={'A fair amouunt if confidence'}>A fair amouunt if confidence</MenuItem>
                                                    <MenuItem value={'Quite a lot of confidence'}>Quite a lot of confidence</MenuItem>
                                                    <MenuItem value={'A great deal of confidence'}>A great deal of confidence</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong> Local government</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={g4} onChange={(e) => setG4(e.target.value)}>
                                                    <MenuItem value={'No confidence'}>No confidence</MenuItem>
                                                    <MenuItem value={'Not very much confidence'}>Not very much confidence</MenuItem>
                                                    <MenuItem value={'A fair amouunt if confidence'}>A fair amouunt if confidence</MenuItem>
                                                    <MenuItem value={'Quite a lot of confidence'}>Quite a lot of confidence</MenuItem>
                                                    <MenuItem value={'A great deal of confidence'}>A great deal of confidence</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>If the top step is 10 and the bottom step is 0, on which step of the ladder do you feel you personally stand at the present time?</FormLabel>
                                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="0" name="radio-buttons-group" value={g5} onChange={(e) => setG5(e.target.value)}>
                                            <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <FormControlLabel value="0" control={<Radio />} label="0 Not" />
                                                <FormControlLabel value="1" control={<Radio />} label="1" />
                                                <FormControlLabel value="2" control={<Radio />} label="2" />
                                                <FormControlLabel value="3" control={<Radio />} label="3" />
                                                <FormControlLabel value="4" control={<Radio />} label="4" />
                                                <FormControlLabel value="5" control={<Radio />} label="5" />
                                                <FormControlLabel value="6" control={<Radio />} label="6" />
                                                <FormControlLabel value="7" control={<Radio />} label="7" />
                                                <FormControlLabel value="8" control={<Radio />} label="8" />
                                                <FormControlLabel value="9" control={<Radio />} label="9" />
                                                <FormControlLabel value="10" control={<Radio />} label="10 Completely" />
                                            </Box>
                                        </RadioGroup>
                                    </FormControl>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }} > Continue </Button>
                                            <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }} > Back </Button>
                                        </div>
                                    </Box>
                                    </StepContent>
                                </Step>
                                <Step disabled={disabled} key='Standard of Living - Economy' index={10}>
                                    <StepLabel><b>Standard of Living - Economy</b></StepLabel>
                                    <StepContent>
                                    <br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong> In general, how much stress do you feel about your personal finances?</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={st1} onChange={(e) => setSt1(e.target.value)}>
                                                    <MenuItem value={'Overwhleming stress'}>Overwhleming stress</MenuItem>
                                                    <MenuItem value={'High stress'}>High stress</MenuItem>
                                                    <MenuItem value={'Moderate stress'}>Moderate stress</MenuItem>
                                                    <MenuItem value={'Low stress'}>Low stress</MenuItem>
                                                    <MenuItem value={'No stress at all'}>No stress at all</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong> How frequently do you find yourself just getting by financially and living paycheck to paycheck?</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={st2} onChange={(e) => setSt2(e.target.value)}>
                                                    <MenuItem value={'All the time'}>All the time</MenuItem>
                                                    <MenuItem value={'Most of the time'}>Most of the time</MenuItem>
                                                    <MenuItem value={'Sometimes'}>Sometimes</MenuItem>
                                                    <MenuItem value={'Rarely'}>Rarely</MenuItem>
                                                    <MenuItem value={'Never'}>Never</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong>Please indicate how frequently you have had the following experiences in the past 12 months. You ate less because there wasn’t enough food or money for food.</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={st3} onChange={(e) => setSt3(e.target.value)}>
                                                    <MenuItem value={'At least once a month'}>Atleast once a month</MenuItem>
                                                    <MenuItem value={'At least once every three months'}>At least once every three months</MenuItem>
                                                    <MenuItem value={'At least once every six months'}>At least once every six months</MenuItem>
                                                    <MenuItem value={'Once in the last Year'}>Once in the last Year</MenuItem>
                                                    <MenuItem value={'Never'}>Never</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong> To what extent do you agree with the following statement? I have enough money to buy things I want.</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={st4} onChange={(e) => setSt4(e.target.value)}>
                                                    <MenuItem value={'Strongly Disagree'}>Strongly Disagree</MenuItem>
                                                    <MenuItem value={'Disagree'}>Disagree</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Agree'}>Agree</MenuItem>
                                                    <MenuItem value={'Strongly Agree'}>Strongly Agree</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }} > Continue </Button>
                                            <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }} > Back </Button>
                                        </div>
                                    </Box>
                                    </StepContent>
                                </Step>
                                <Step disabled={disabled} key='Work' index={11}>
                                    <StepLabel><b>Work</b></StepLabel>
                                    <StepContent> <Typography fontSize={14}>Please answer the following questions about your satisfaction with your current working situation. If you are not working (unemployed, retired, a student, homemaker, volunteer, or other) please answer only the questions that apply to your main activity or occupation.</Typography>
                                    <br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong> All things considered, how satisfied are you with your current work life? (Note: if you work or volunteer at more than one job, you should answer about the job you spend the longest time working at.</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={w1} onChange={(e) => setW1(e.target.value)}>
                                                    <MenuItem value={'Very Satisfied'}>Very Satisfied</MenuItem>
                                                    <MenuItem value={'Satisfied'}>Satisfied</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Dissatisfied'}>Dissatisfied</MenuItem>
                                                    <MenuItem value={'Very Dissatisfied'}>Very Dissatisfied</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong> How satisfied are you with the balance between the time you spend on your job and the time you spend on other aspects of your life?</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={w2} onChange={(e) => setW2(e.target.value)}>
                                                    <MenuItem value={'Very Satisfied'}>Very Satisfied</MenuItem>
                                                    <MenuItem value={'Satisfied'}>Satisfied</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Dissatisfied'}>Dissatisfied</MenuItem>
                                                    <MenuItem value={'Very Dissatisfied'}>Very Dissatisfied</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong> How much of the time do you find your current work life interesting?</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={w3} onChange={(e) => setW3(e.target.value)}>
                                                    <MenuItem value={'Very rarely or never'}>Very rarely or never</MenuItem>
                                                    <MenuItem value={'Rarely'}>Rarely</MenuItem>
                                                    <MenuItem value={'Sometimes'}>Sometimes</MenuItem>
                                                    <MenuItem value={'Often'}>Often</MenuItem>
                                                    <MenuItem value={'Very Often or Always'}>Very Often or Always</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <Typography fontSize={14}>Please state your level of agreement with each of these statements.</Typography>
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong> Considering all my efforts and achievements in my job I feel I get paid appropriately.</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={w4} onChange={(e) => setW4(e.target.value)}>
                                                    <MenuItem value={'Strongly Disagree'}>Strongly Disagree</MenuItem>
                                                    <MenuItem value={'Disagree'}>Disagree</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Agree'}>Agree</MenuItem>
                                                    <MenuItem value={'Strongly Agree'}>Strongly Agree</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong> The conditions of my life allow me to be about as productive as I could be.</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={w5} onChange={(e) => setW5(e.target.value)}>
                                                    <MenuItem value={'Strongly Disagree'}>Strongly Disagree</MenuItem>
                                                    <MenuItem value={'Disagree'}>Disagree</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Agree'}>Agree</MenuItem>
                                                    <MenuItem value={'Strongly Agree'}>Strongly Agree</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"><strong>Question: </strong> I am allowed to decide how to go about getting my job done.</FormLabel>
                                        <Box sx={{ '& > :not(style)': { m: 0.5 }, display: 'flex', alignItems: 'center', width: '100%' }}>
                                            <Icon icon="octicon:multi-select-16" style={{fontSize: '32px'}}/>
                                            <FormControl fullWidth size='small'>
                                                <InputLabel id="age-input-label" required>Select</InputLabel>
                                                <Select labelId="age-input-label" label="Psycho" name="personCount"  required fullWidth value={w6} onChange={(e) => setW6(e.target.value)}>
                                                    <MenuItem value={'Strongly Disagree'}>Strongly Disagree</MenuItem>
                                                    <MenuItem value={'Disagree'}>Disagree</MenuItem>
                                                    <MenuItem value={'Neutral'}>Neutral</MenuItem>
                                                    <MenuItem value={'Agree'}>Agree</MenuItem>
                                                    <MenuItem value={'Strongly Agree'}>Strongly Agree</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </FormControl>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }} > Continue </Button>
                                            <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }} > Back </Button>
                                        </div>
                                    </Box>
                                    </StepContent>
                                </Step>
                                <Step disabled={disabled} key='Submit' index={12}>
                                    <StepLabel><b>Last step</b></StepLabel>
                                    <StepContent> <Typography> Do you wish to submit the Happiness Index Survey?</Typography>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button variant="contained" onClick={handleSubmit} sx={{ mt: 1, mr: 1 }} > Submit </Button>
                                            <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }} > Back </Button>
                                        </div>
                                    </Box>
                                    </StepContent>
                                </Step>
                            </Stepper>
                            {activeStep === 12 && (
                                <Paper square elevation={2} sx={{ p: 3, borderRadius: '12px' }}>
                                    <Typography>All steps completed - you&apos;re finished</Typography>
                                    <Button variant='contained' color='error' onClick={handleReset} sx={{ mt: 1, mr: 1 }}> Reset</Button>
                                </Paper>
                            )}
                        </Box>
                    </div>
                    <div className='happy-result'>
                        {display ? (
                            <div>
                                <img src={result} alt="Analysis_chart" width={'100%'} />
                                Your Happiness Index Score is: <b>6.53</b>.
                            </div>
                        ) : (
                            <div style={{color:'grey', textAlign:'center'}}>
                                Complete the survey!
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Happy;