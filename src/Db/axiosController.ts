import axios from "axios";
import { isEmpty, reject } from "lodash";
import { Alert } from "react-native";
import { json } from "express";

//url padrão
// const url = "http://10.0.2.2:3333/";
const url = "http://192.168.10.11:3333/";

let end = {};
let error: boolean = false;
let x: any;

// #############Cadastro######################

async function postCadastro(props: any) {
  try {
    // const end = {bairro, uf, localidade, logadouro, cep}
    getCep(props.cep);

    const dados = {
      login: props.usuario,
      email: props.email,
      tel: props.tel,
      end: end,
      senha: props.senha,
    };
    await axios.post(url + "user/cadastro", dados);

    // .then((resp) => {

    //   resp.data;

    // });
  } catch (err) {
    console.log(err);
  }
  // console.log(end)
}

async function getCep(cep: String) {
  await axios
    .get("https://viacep.com.br/ws/" + cep + "/json/")
    .then((resp) => {
      if (!resp.data.erro) {
        const endereco = {
          bairro: resp.data.bairro,
          cep: resp.data.cep,
          logradouro: resp.data.logradouro,
          localidade: resp.data.localidade,
          uf: resp.data.uf,
        };
        end = endereco;
      }
    })
    .catch((error) => {
      error.message;
    });
}
// #############Login######################
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
    return resp.data;
  });

  return lista;
}

// #############Planta######################
async function getPlants() {
  const plants = await axios.get(url + "plant/").then((resp) => {
    return resp.data;
  });

  return plants;
}

async function getPlant(id: number) {
  console.log(id);
  const plant = await axios.get(url + "plant/" + id).then((resp) => {
    return resp.data;
  });
  return plant;
}

// #############Postagem######################
async function getPosts() {
  const posts = await axios.get(url + "post/").then((resp) => {
    return resp.data;
  });

  return posts;
}

async function getPostsUser(id: number) {
  const lista = await axios.get(url + "post/" + id).then((resp) => {
    return resp.data;
  });

  return lista;
}

async function postPost(
  idUser: number,
  plantId: number,
  plantName: string,
  image: string,
  valor: number,
  troca: boolean
) {
  const dados = {
    idUser: idUser,
    plantId: plantId,
    plantName: plantName,
    image: image,
    valor: valor,
    troca: troca,
  };

  const data = await axios
    .post(url + "post/create", dados)
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => {
      return err.message;
    });

  return data;
}

export {
  postPost,
  getPlant,
  getPostsUser,
  getPosts,
  getPlants,
  postCadastro,
  getCep,
  postLogin,
  getUser,
};
