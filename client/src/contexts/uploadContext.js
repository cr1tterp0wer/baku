import React from 'react';

const defaultURL = { dataURL: 'https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv' }

export const UploadContext = React.createContext(defaultURL);

