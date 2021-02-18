import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer xRUDURmlp-kComwvrUKGuSAvfcSDF0K70s3J1F1lIN6u_6Tui-K8ZiXFvSdMCxIA-bzFWtq6fbvsYHAM2TevJOp_1ZziVYKODQM4w29-Pj9IvLY2u5AfeKOmW-QtYHYx',
  },
});
