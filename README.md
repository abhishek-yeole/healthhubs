[![HealthHub](https://healthhubs.vercel.app//static/media/Road_Sense-removebg-preview.b109c5d8d6d88f54cabe.png)](https://healthhubs.vercel.app//)
# HealthHub
### Welcome to HealthHub - Your Health. Your Hub. Your Journey.

Welcome to HealthHub, a Comprehensive ecosystem for health and wellness. Embark on a journey towards a healthier, happier you. It consists of multiple features such as Machine learning Models for disease classification and detection, Happiness index survey, Health related reports with various calculators such as Body Mass Index (BMI), Body Fat, BMR, etc. Along with it it also consists of a HeathBot for specific diseases and a few suggestions for and lightening up mood of the user.

[![HealthHub](https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaDzb3Tq0LeMeKVqTdl9k_D8be6ouRxs_ferNbs0HQpWeLXO1xY-lj4xtHrCHvR0RbWQiIXvFJazo2DTMX7iFY3oUwRrEA=w1960-h4012)](https://healthhubs.vercel.app//)

## Youtube
To see the Demo Video Working for the Project:

[![Youtube](https://img.youtube.com/vi/QQBP-krwj4g/0.jpg)](https://www.youtube.com/watch?v=QQBP-krwj4g)


## GeekforGeeks Article
To know more refer to this GFG article - _[GFG Write Portal](https://write.geeksforgeeks.org/post/5589472)_


## Frontend
1. Complete Frontend code is deployed on Vercel: _[Github - HealthHubs](https://github.com/abhishek-yeole/healthhubs)_
2. **Developement Tech Stack:**
   - React JS
   - Material UI
   - GSAP Animations
   - React Charts
   - Framer Motion

## Backend
1. **Simple API's:** Calculators and Happy Index Survey API's where developed using Flask and is deployed on Vercel: _[Github - healthhubapi](https://github.com/abhishek-yeole/healthhubapi)_
2. **ML API's:** Machine Learning Interface API where developed using Gradio and is deployed on 🤗 Hugging Face: _[HuggingFace - HealthHub](https://huggingface.co/spaces/abhicodes/healthapp)_
3. **Developement Tech Stack:**
   - Python Flask
   - 🤗 Hugging Face Spaces
   - Docker
  
## Databases
1. **MySQL:** For Simple API's MySQL database is used. Database is hosted on _[Freemysqlhosting](https://www.freemysqlhosting.net/)_ site which provides 5MB database.
   
   ![Database](https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaBeBrg-Frgvg6BnuDwNfgsBhtL3u56ilsESkUp8r7fto7aLwSaC8jQY8ox50gDHRyhvojORhGpo8cFbgI39shHuZ761pw=w1920-h923)
3. **Hugging Space Non-Persistent Database Storage:** For Streaming API's hugging face non persistent storage is used. It is integrated feature of Hugging Face Spaces.


## Machin Learning Models
1. **Alzheimer Classification and Detection:**
   - **Deployed Model -** 🤗 Hugging Face: _[https://huggingface.co/spaces/abhicodes/T20i-cricket-score-predictor](https://huggingface.co/spaces/abhicodes/T20i-cricket-score-predictor)_
   - **Developed using Jupyter lab -**
     - **Kaggle Notebook:** _[https://www.kaggle.com/code/abhisheky27/t20i-cricket-score-predictor](https://www.kaggle.com/code/abhisheky27/t20i-cricket-score-predictor)_
     - **Google Collab .ipynb file:** _[https://colab.research.google.com/drive/1mqtLjarfVQTXwiMyerHH0fLWp6K2eta9?usp=sharing](https://colab.research.google.com/drive/1mqtLjarfVQTXwiMyerHH0fLWp6K2eta9?usp=sharing)_
   - **Dataset:** _[https://www.kaggle.com/datasets/jamiewelsh2/ball-by-ball-it20](https://www.kaggle.com/datasets/jamiewelsh2/ball-by-ball-it20)_
   - **Size of Model ~ 514.39MB (Hashed)**
   - Interface using **Gradio**

2. **ICC World Cup Score Predictor:**
   - **Deployed Model -** 🤗 Hugging Face: _[https://huggingface.co/spaces/abhicodes/ICC-World-Cup-Score-Predictor](https://huggingface.co/spaces/abhicodes/ICC-World-Cup-Score-Predictor)_
   - **Developed using Jupyter lab -**
     - **Kaggle Notebook:** _[https://www.kaggle.com/code/abhisheky27/icc-world-cup-score-predictor/](https://www.kaggle.com/code/abhisheky27/icc-world-cup-score-predictor/)_
     - **Google Collab .ipynb file:** _[https://colab.research.google.com/drive/13fBNphICHe4_ojK1DRiILgDOeyOcu8od?usp=sharing](https://colab.research.google.com/drive/13fBNphICHe4_ojK1DRiILgDOeyOcu8od?usp=sharing)_
   - **Dataset:** _[https://www.kaggle.com/datasets/utkarshtomar736/odi-mens-cricket-match-data-2002-2023](https://www.kaggle.com/datasets/utkarshtomar736/odi-mens-cricket-match-data-2002-2023)_
   - **Size of Model ~ 2.95 GB (Hashed)**
   - Interface using **Gradio**

3. **Cricket Players Performance Analysis:**
   - **Deployed Interface -** 🤗 Hugging Face: _[https://huggingface.co/spaces/abhicodes/Cricket-Performance-Analysis](https://huggingface.co/spaces/abhicodes/Cricket-Performance-Analysis)_
   - **Dataset:** _[https://www.kaggle.com/datasets/akarshsinghh/cricket-player-performance-prediction](https://www.kaggle.com/datasets/akarshsinghh/cricket-player-performance-prediction)_
   - Developed and Interface using **Gradio**

## ChatBot LLM
The ChatBot - CrickBot was built using a free GPT provider - _[gpt4free](https://pypi.org/project/gpt4free/0.0.2.6/)_
   - The API endpoint for prompt engineering and user query was built using Flask.
   - Then it is connected to the frontend ChatUI by Gradio.

## **System Architecture:**
1. **Routes Architecture:**
   ![HealthHub](https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaBhTOKQ2G7VzGU8tCPKPGFUQmc_Tez9oRbjDZfxHfFhm2m8WGfAhjd-5faqsjbPGcnuRs4XsAdEn0yoJkpylK6VXaFfkw=w8462-h10071)
2. **API Architecture:**
   ![HealthHub](https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCcNq1exlmWGU229fiu68DIENmadIcx1mTa85WWbMfWjM8LO2-zaCxqSSHiBXnj9jMMCacB9X7-UE9P3pE0TWfzCxZljg=w1607-h4012)


## Features

- Machine Learning Models for Diseases:
  > Various Models were deployed for Alzheimer, Breast Cancer and Brain Tumor diseases.
[![HealthHub](https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaBkdZJ7oxGciB_-AOHrdvSuSofCADbPTwZV91oNJlZOoR4vwDK0GuAjYs3pK8vKJET4f7-Nm31JABWFFxJ0rfsHT_PX1g=w1960-h4012)](https://healthhubs.vercel.app//)
[![HealthHub](https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCl5i_ggTc3xLMdwOvVd9c74v4hmTPxCXhPEZN_pKA4TsqsVcqeqRKwLjwluhdU1FKBOeHAZdE5Gy8UklRPEvdrjeasng=w1960-h4012)](https://healthhubs.vercel.app//)

-  Health Reports:
   > Various Calculators were developed for BMI, Body Fat and BMR index, etc...
[![HealthHub](https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaDrE7jLM1XTZfrMSDU_vtCusxnxBSJ7evOg7cbb1I8_3fFSUJ26e83d9FiCvgz3zF7OGoEZLejDyvIcu6kkqjQXeV868Q=w1960-h4012)](https://healthhubs.vercel.app//)
[![HealthHub](https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCDMSBSf2vju8R4_vSdY_ulQohnHB_biqjPEFeqY8rjK6W1F7rPnfNUdu7uxYRWAxgVD4daI0fISVBvig6JoaURARxaag=w1960-h4012)](https://healthhubs.vercel.app//)

- Happy Index Survey:
  > Happiness survey was developed using several references such as _[World Happiness Index](https://worldhappiness.report/)_ and _[Happy Count Alliance](https://www.happycounts.org/)_.
[![HealthHub](https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCSsQaaPFu_adLpI8TMsyFO4n47IF9NbWULfiqsjsvRCW-laacCa7pr8jJ9m_ifJ1DpIebQOc49lRlzK0AIMeHvkE-UEQ=w1960-h4012)](https://healthhubs.vercel.app//)

- HealthBots:
  > A disease sppecific health bots is designed for each diseases such as Alzheimer, Breast Cancer and brain tumor.
[![HealthHub](https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaAw346C8SHAfyJsKViiTj-3Ny-qJ8dfuPUnUKY_fUF7Gp7-RY4kqFYTetP1fny_WguhBKay8wfPv36jf_F1g9BRfI4XSQ=w1960-h4012)](https://healthhubs.vercel.app//)

## Visit Live Site

HealthHub is hosted using Vercel.

_[HealthHub](https://healthhubs.vercel.app/)_


## Run it locally

In the project directory, you can run:

### `npm init`

Installs the required the libraries on the local machine. Also install required libraries if not installed use:

- Install force library: `npm install force`
- Install pakages with conflicting dependencies using force: `npm install package_install_name --force`

> **NOTE**: Do not use npm: `--legacy-peer-deps` library. It will break down Spline runtime and Spline react-spline libraries causing error.

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.
