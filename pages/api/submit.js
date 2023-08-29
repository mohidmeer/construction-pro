import axios from 'axios';


const ZOHO_API_URL = 'https://www.zohoapis.com/crm/v2/Leads';
const REFRESH_TOKEN = '1000.b9a4d20c06595916cd6d6448ae3ec41e.594d28941de920570e32b3bedd257c26';
const CLIENTID = '1000.JOKXV1XUSHPE6OM0Y6CYZD78RGDFDX';
const CLIENTSECRET = 'a831396a4ff6a8e4ec0f683677b2b7fad266835f95';
const ACCESS_TOKEN_URL=`https://accounts.zoho.com/oauth/v2/token?refresh_token=${REFRESH_TOKEN}&client_id=${CLIENTID}&client_secret=${CLIENTSECRET}&grant_type=refresh_token`

console.log('NEW REQUESAT')

// Token cache
let accessToken = null;
let accessTokenTimestamp = 0; // Timestamp when the access token was obtained


const getAccessToken = async () => {
    console.log(accessToken)
    console.log('Date Now',Date.now())
    console.log('Date when Created',accessTokenTimestamp)
    console.log('AFTER SUBTRACT',Date.now()-accessTokenTimestamp)
     
    if (!accessToken || Date.now() - accessTokenTimestamp >= 3600000) {
      try {
        const response = await axios.post(ACCESS_TOKEN_URL);
        accessToken = response.data.access_token;
        accessTokenTimestamp = Date.now();
      } catch (error) {
        console.error('Error refreshing access token:', error);
        throw error;
      }
    }
  
    return accessToken;
  };



export default async (req, res) => {
    const {  body } = req;
  
    try {
        const token = await getAccessToken();
        const response = await axios({
        method:'POST',
        url: 'https://www.zohoapis.com/crm/v2/Leads',
        data: body,
        headers: {
            'Authorization':`Bearer ${token}`
        },
      });
      res.status(response.status).json(response.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  };