
import React, {useState, useEffect} from 'react';
import GetData from './requests/getData';
import PostData from './requests/postData';

import {HashRouter} from "react-router-dom";
  function App() {
    return (
      <HashRouter>
      <div class="row justify-content-center">
        <div class="col-6">
          <PostData />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-6">
          <GetData />
        </div>
      </div>
      </HashRouter>
    );
  }


export default App;
//pot do zagona backenda: cd "gis-desktop-novo\gis-desktop\gis-desktop-backend"