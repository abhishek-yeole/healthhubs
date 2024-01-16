[![HealthHub](https://i.postimg.cc/RC8dT4Ps/front.png)](https://healthhubs.vercel.app/)
# HealthHub
### Welcome to HealthHub - Your Health. Your Hub. Your Journey.

Welcome to HealthHub, a Comprehensive ecosystem for health and wellness. Embark on a journey towards a healthier, happier you. It consists of multiple features such as Machine learning Models for disease classification and detection, Happiness index survey, Health related reports with various calculators such as Body Mass Index (BMI), Body Fat, BMR, etc. Along with it it also consists of a HeathBot for specific diseases and a few suggestions for and lightening up mood of the user.

[![HealthHub](https://i.postimg.cc/k5YC12RR/healthtest.png)](https://healthhubs.vercel.app/)

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
   
2. **Hugging Space Non-Persistent Database Storage:** For Streaming API's hugging face non persistent storage is used. It is integrated feature of Hugging Face Spaces.


## Machin Learning Models
1. **Alzheimer Classification and Detection:**
   - **Deployed Model -** 🤗 HuggingFace: _[HuggingFace - Alzheimer Image Classifcation](https://huggingface.co/AhmadHakami/alzheimer-image-classification-google-vit-base-patch16)_
   - **Dataset:** _[Kaggle - Alzheimer MRI Dataset](https://www.kaggle.com/datasets/sachinkumar413/alzheimer-mri-dataset)_
   - **Size of Model ~ 343 MB (Hashed)**
   - Interface using **Gradio**

2. **Breast Cancer Detection and Prediction:**
   - **Deployed Model -** 🤗 HuggingFace: _[HuggingFace - Breast Cancer Detector](https://huggingface.co/MUmairAB/Breast_Cancer_Detector)_
   - **Dataset:** _[Kaggle - Breast Histopathology Images](https://www.kaggle.com/datasets/paultimothymooney/breast-histopathology-images)_
   - **Size of Model ~  31.7 MB (Hashed)**
   - Interface using **Gradio**

3. **Brain Tumor Detection and Classification:**
   - **Deployed Model -** 🤗 HuggingFace: _[HuggingFace - Brain Tumor Classification](https://huggingface.co/Devarshi/Brain_Tumor_Classification)_
   - **Dataset:** _[Kaggle - Brain Tumor Mri](https://www.kaggle.com/datasets/masoudnickparvar/brain-tumor-mri-dataset)_
   - **Size of Model ~  110 MB (Hashed)**
   - Developed and Interface using **Gradio**

## ChatBot LLM
The ChatBot - HealthBot was built using a free GPT provider - _[gpt4free](https://pypi.org/project/gpt4free/0.0.2.6/)_
   - The API endpoint for prompt engineering and user query was built using Flask.
   - Then it is connected to the frontend ChatUI by Gradio.

## Features

- Machine Learning Models for Diseases:
  > Various Models were deployed for Alzheimer, Breast Cancer and Brain Tumor diseases.
[!HealthHub ML models](https://i.postimg.cc/52YdPFRF/Screenshot-2024-01-13-143812.png)](https://healthhubs.vercel.app/ml)

-  Health Reports:
   > Various Calculators were developed for BMI, Body Fat and BMR index, etc...
[![HealthHub Reports](https://i.postimg.cc/jS2XrHHZ/Screenshot-2024-01-16-142436.png)](https://healthhubs.vercel.app/reports)

- Happy Index Survey:
  > Happiness survey was developed using several references such as _[World Happiness Index](https://worldhappiness.report/)_ and _[Happy Count Alliance](https://www.happycounts.org/)_.
[![HealthHub Happy Index](https://i.postimg.cc/brZW6Zyv/Screenshot-2024-01-16-142627.png)](https://healthhubs.vercel.app/happy)

- HealthBots:
  > A disease sppecific health bots is designed for each diseases such as Alzheimer, Breast Cancer and brain tumor.

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
