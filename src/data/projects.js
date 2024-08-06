// TODO Add a couple lines about each project
const data = [
  {
    title: 'COVID-19 data Visualization using Dashboard',
    subtitle: 'Data Visualization',
    link: 'https://github.com/Srichand-Medagani/COVID19Dashboard',
    image: '/images/projects/Covid19.jpg',
    date: '2022-11-30',
    desc:
      'In this project, we have visualized different aspects and behavior of Covid-19 dataset using Tableau.'
      + ' We have built a dashboard which represents amount of population vaccinated, top 20 countries severely affected, etc.'
      + ' This actually helps in understanding the behavior of the Covid-19 dataset which further helps in taking any action required.',
  },
  {
    title: 'Peer to peer Distribution System',
    subtitle: 'Secured file distribution system with excryption',
    link: 'https://github.com/Srichand-Medagani/peer-to-peer-file-sharing',
    image: '/images/projects/P2P_header.jpg',
    date: '2022-9-30',
    desc:
      'In this project we have built a peer to peer distributed file system which is encrypted with the Fernet algorithm.'
      + ' This is a file system in which users can create, read, write, delete and restore files with certain permissions.' 
      + ' Also for duplicacy, the replicas of the files are maintained on at least 3 peers in encrypted format.' 
      + ' It also allows the peers to share files between them securely without any intruder disturbing the integrity of files as the names of the files, content and even the communication between the peers is encrypted.' 
      + ' Furthermore, multiple users can simultaneously perform operations while maintaining the ACID properties.',
  },
  {
    title: 'Sensor Application',
    subtitle: 'A Mobile Application using sensors',
    link: 'https://github.com/Srichand-Medagani/SensorApplication',
    image: '/images/projects/sensor.jpg',
    date: '2023-02-15',
    desc:
      'I have created an Android app that displays the users current location on a map using Google Maps API.' 
      + ' It also implements a dead reckoning algorithm to estimate the users location when the GPS signal is weak or unavailable.' 
      + ' The app requests location updates from the LocationManager and registers a listener to receive these updates.' 
      + ' When the user presses the "Location" button, the app displays the users current location on the map, along with latitude and longitude coordinates.',
  },
  {
    title: 'Information Retrieval',
    subtitle: 'Study of documents using python',
    link: 'https://github.com/Srichand-Medagani/InformationRetrieval',
    image: '/images/projects/InfoRetrieval.jpg',
    date: '2023-03-17',
    desc:
      'I performed document clustering on a corpus of HTML documents using the agglomerative clustering algorithm with the complete link method.' 
      + ' The goal was to identify similarities and dissimilarities between documents and determine the closest document to the corpus centroid.',
  },
  {
    title: 'Stock Price Prediction',
    subtitle: 'Prediction using SARIMAX',
    link: 'https://github.com/Srichand-Medagani/PredictingStockPrices',
    image: '/images/projects/StockPricePred.jpg',
    date: '2023-02-15',
    desc:
      'This work examines the effectiveness of predictive models on a multi-decade dataset of Google stock prices.' 
      + ' Our initial focus was to conduct exploratory data analysis (EDA) to understand the characteristics of the dataset.' 
      + ' We found that the data were not stable and successfully converted them into stable series by differentiation using the SARIMAX model.' 
      + ' Then, we use the SARIMAX model that incorporates exogenous variables to predict the final price.',
  },
];

export default data;
