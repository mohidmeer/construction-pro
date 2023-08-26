import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export async function createLead(data){

    data = {data : [{...data , Lead_Source:"HostbuildingNextjs" }]}
    await AxiosClient.post('/submit',data)
    .then((r)=>{
        console.log(r)
      })
    .catch((e)=>{
      console.log(e)
    })
}