import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

function buildMail() {}

export async function getCountry(ip: String) {
  const res = await axios.get("http://ip-api.com/json/" + ip);
  return res.data.country;
}

export async function getGender(name: String, country: String, ip: String) {
  const options = {
    method: "GET",
    url: "https://gender.p.rapidapi.com/get",
    params: {
      name,
      ip,
      country,
    },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "gender.p.rapidapi.com",
    },
  };

  const res = await axios.get("https://gender.p.rapidapi.com/get", {
    method: "GET",
    url: "https://gender.p.rapidapi.com/get",
    params: {
      name,
      ip,
      country,
    },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY as string,
      "X-RapidAPI-Host": "gender.p.rapidapi.com",
    },
  });

  return await res.data.gender;
}
