import axios from "axios";
import { theme } from "./../global/theme";

//url padrão
const url = "http://10.0.2.2:3333/";

let end = {};

async function postCadastro(
  login: String,
  email: String,
  tel: String,
  cep: String,
  senha: String
) {
  try {
    // const end = {bairro, uf, localidade, logadouro, cep}
    getCep(cep);
    const dados = {
      login: login,
      email: email,
      tel: tel,
      end: end,
      senha: senha,
    };
    await axios.post(url + "user/cadastro", dados);
  } catch (err) {
    console.log(err);
  }
}

async function getCep(cep: String) {
  try {
    await axios
      .get("https://viacep.com.br/ws/" + cep + "/json/")
      .then((resp) => {
        const enderec = {
          bairro: resp.data.bairro,
          cep: resp.data.cep,
          logradouro: resp.data.logradouro,
          localidade: resp.data.localidade,
          uf: resp.data.uf,
        };
        end = enderec;
      });
  } catch (err) {
    console.log(err);
  }
}

async function postLogin(email: String, senha: String) {
  try {
    // const end = {bairro, uf, localidade, logadouro, cep}
    const dados = {
      email: email,
      senha: senha,
    };
    await axios.post(url + "user/login", dados);
  } catch (err) {
    console.log(err);
  }
}

export { postCadastro, getCep, postLogin };
