// import axios from "axios";

// const axiosInstance = axios.create({
//   // firebase deployed
//   // baseURL : "https://api-gzaowg74wq-uc.a.run.app"
//   //  using render
//     baseURL :'http://localhost:5000'
// });

// export { axiosInstance };

import axios from "axios";

const axiosInstance = axios.create({
      // baseURL :'http://localhost:5000'
      baseURL :'https://amazone-last-api.onrender.com'
    });
export { axiosInstance };