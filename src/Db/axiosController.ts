import axios from "axios";
import { isEmpty, reject } from "lodash";
import { Alert } from "react-native";
import { json } from "express";
import { TextLocalization } from "../routers/PlantDetails/styles";

//url padrão
const url = "http://10.0.2.2:3333/";
// const url = "http://192.168.10.11:3333/";

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
  const endre = await axios
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
        return endereco;
      }
    })
    .catch((error) => {
      error.message;
    });
  return endre;
}
// #############User######################
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
        return false;
      });
    if (id) {
      return id;
    }
    return false;
  }
}

async function getUser(id: number) {
  return await axios.get(url + "login/" + id).then((resp) => {
    return resp.data;
  });
}

async function alterUser(
  id: Number,
  login: String,
  tel: String,
  senha: String,
  avatar: String,
  end: any
) {
  const dados = {
    login: login,
    tel: tel,
    senha: senha,
    avatar: avatar,
    end: await getCep(end).then((resp) => {
      return resp;
    }),
  };
  return await axios.put(url + "user/alter/" + id, dados).then((resp) => {
    return resp.data;
  });
}

// #############Planta######################
async function getPlants() {
  return await axios.get(url + "plant/").then((resp) => {
    return resp.data;
  });
}

async function getPlant(id: number) {
  return await axios.get(url + "plant/" + id).then((resp) => {
    return resp.data;
  });
}

// #############Postagem######################
async function getPosts(cat?: String, name?: String) {
  return await axios.get(url + "post/all/" + cat + "/" + name).then((resp) => {
    return resp.data;
  });
}

async function getPostsUser(id: Number) {
  return await axios.get(url + "post/user/" + id).then((resp) => {
    return resp.data;
  });
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

  return await axios
    .post(url + "post/create", dados)
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => {
      return err.message;
    });
}

async function deletePost(id: any) {
  await axios.delete(url + "post/delete/" + id);
}

async function alterPost(
  idPost: any,
  plantId: number,
  plantName: string,
  image: string,
  valor: number,
  troca: boolean
) {
  const dados = {
    plantId: plantId,
    plantName: plantName,
    image: image,
    valor: valor,
    troca: troca,
  };
  await axios.put(url + "post/alter/" + idPost, dados);
}

async function getPostId(id: number) {
  return await axios.get(url + "post/select/" + id).then((resp) => {
    return resp.data;
  });
}

//categorias

async function getCat() {
  return await axios.get(url + "cat/").then((resp) => {
    return resp.data;
  });
}

//Api ZAP

export {
  getPostId,
  getCat,
  alterUser,
  alterPost,
  deletePost,
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
