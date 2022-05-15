import axios from "axios";
import { isEmpty, reject } from "lodash";
import { Alert } from "react-native";
import { theme } from "./../global/theme";
import { json } from "express";

//url padrão
const url = "http://10.0.2.2:3333/";
// const url = "http://192.168.10.11:3333/";

let end = {};
let error: boolean = false;
let x: any;

async function postCadastro(props: any) {
  try {
    // const end = {bairro, uf, localidade, logadouro, cep}
    getCep(props.cep);
    // console.log(end)
    const dados = {
      login: props.usuario,
      email: props.email,
      tel: props.tel,
      end: end,
      senha: props.senha,
    };

    await axios.post(url + "user/cadastro", dados).then((resp) => {
      resp.data;
    });
  } catch (err) {
    console.log(err);
  }
}

async function getCep(cep: String) {
  let err = true;
  await axios
    .get("https://viacep.com.br/ws/" + cep + "/json/")
    .then((resp) => {
      if (!resp.data.erro) {
        const enderec = {
          bairro: resp.data.bairro,
          cep: resp.data.cep,
          logradouro: resp.data.logradouro,
          localidade: resp.data.localidade,
          uf: resp.data.uf,
        };
        end = enderec;
      }
    })
    .catch((error) => {
      error.message;
    });
  return err;
}

async function postLogin(email: String, senha: String) {
  // const end = {bairro, uf, localidade, logadouro, cep}

  const dados = {
    email: email,
    senha: senha,
  };

  if (!isEmpty(dados.email) || !isEmpty(dados.senha)) {
    const id = await axios
      .post(url + "user/login", dados)
      .then((resp) => {
        return resp.data;
      })
      .catch((err) => {
        return err.message;
      });
    return id;
  }
}

async function getUser(id: number) {
  const lista = await axios.get(url + "login/" + id).then((resp) => {
    return resp.data
  });
  return lista

  // console.log(lista.data);
}

export { postCadastro, getCep, postLogin, getUser };
