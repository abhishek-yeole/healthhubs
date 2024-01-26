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
2. **ML API's:** Machine Learning Interface API where developed using Gradio and is deployed on 🤗 HuggingFace: _[HuggingFace - HealthHub](https://huggingface.co/spaces/abhicodes/healthapp)_
3. **Happy Index and Reports API's:** These API's are developed using Python Flask and deployed on 🤗 HuggingFace: _[HuggingFace - healthapi](https://huggingface.co/spaces/abhicodes/healthapi)_
4. **Developement Tech Stack:**
   - Python Flask
   - 🤗 Hugging Face Spaces
   - Docker
  
## Databases
1. **MySQL:** For Simple API's MySQL database is used. Database is hosted on _[Freemysqlhosting](https://www.freemysqlhosting.net/)_ site which provides 5MB database.
2. **Hugging Space Non-Persistent Database Storage:** For Streaming API's hugging face non persistent storage is used. It is integrated feature of Hugging Face Spaces.


## Machine Learning Models
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


## **Cross Model Machine Learning for Sentiment Analysis**
- **Models Used -** Various Text, Audio, Face emotion recognition models are implemented:
   1. _[HuggingFace - facial-emotions-image-detection](https://huggingface.co/dima806/facial_emotions_image_detection)_
   2. _[HuggingFace - real-time-sentiment-analysis](https://huggingface.co/spaces/Pontonkid/Real-Time-Multilingual-sentiment-analysis)_
   3. _[HuggingFace - Roberta-base-go-emotions](https://huggingface.co/SamLowe/roberta-base-go_emotions)_
   5. _[HuggingFace - Google vit-base Model](https://huggingface.co/google/vit-base-patch16-224-in21k)_
   6. _[Kaggle - Facial expressions Dataset](https://www.kaggle.com/datasets/samaneheslamifar/facial-emotion-expressions)_
   7. _[Kaggle - Fine Tuned Google vit-base](https://www.kaggle.com/code/dima806/facial-emotions-image-detection-vit/)_
   8. _[Github - OpenAI: Whisper](https://github.com/openai/whisper)_
- Developed and Interface using **Gradio**


## ChatBot LLM
The ChatBot - HealthBot was built using a free GPT provider - _[gpt4free](https://pypi.org/project/gpt4free/0.0.2.6/)_
   - The API endpoint for prompt engineering and user query was built using Flask.
   - Then it is connected to the frontend ChatUI by Gradio.


## Routes Architecture (System Diagram)
[![Routes_healthhub](https://i.postimg.cc/vHX9t1jz/routes-architecture-health.png)](https://healthhubs.vercel.app/user)


## Features

- Machine Learning Models for Diseases:
  > Various Models were deployed for Alzheimer, Breast Cancer and Brain Tumor diseases.
  
[![HealthHub_ML_models](https://i.postimg.cc/52YdPFRF/Screenshot-2024-01-13-143812.png)](https://healthhubs.vercel.app/ml)

- Cross Model Machine Learning:
  > A cross-model ML model for video processing in healthcare sentiment analysis involves combining different machine learning models to analyze sentiments expressed in healthcare-related videos.

[![crossmodel](https://i.postimg.cc/v85LP4yr/crossmodel.png)](https://healthhubs.vercel.app/crossmodel)

-  Health Reports:
   > Various Calculators were developed for BMI, Body Fat and BMR index, etc...
   
[![HealthHubReports](https://i.postimg.cc/kX9BFc7m/reports.png)](https://healthhubs.vercel.app/reports)

- Happy Index Survey:
  > Happiness survey was developed using several references such as _[World Happiness Index](https://worldhappiness.report/)_ and _[Happy Count Alliance](https://www.happycounts.org/)_.
  
[![HealthHub Happy Index](https://i.postimg.cc/brZW6Zyv/Screenshot-2024-01-16-142627.png)](https://healthhubs.vercel.app/happy)

- HealthBots:
  > A disease sppecific health bots is designed for each diseases such as Alzheimer, Breast Cancer and brain tumor.


## Fun Features

- Pet Adoption
  > Adopting a pet isn't just about bringing a new companion into your life; it's a transformative journey for both humans as well as pet animals. Beyond the joy and companionship they provide, pets contribute significantly to emotional and mental well-being. Studies show that having a pet can reduce stress, alleviate feelings of loneliness, and bring boundless happiness into your daily routine. When you adopt, you're not just gaining a pet; you're gaining a loyal confidant, a source of endless joy, and a cuddle buddy who's always there for you.

[![pets](https://i.postimg.cc/yYqccsSD/pets.png)](https://healthhubs.vercel.app/pet)

- Memes
  > Lauughter is the best medicine. Just chill and relax.

[![memes.png](https://i.postimg.cc/cC1q5Vvw/memes.png)](https://healthhubs.vercel.app/memes)


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

## Do 🌟 the Repo.
