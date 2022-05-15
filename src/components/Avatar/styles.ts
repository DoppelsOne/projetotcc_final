import styled from "styled-components/native";

export const ImgView = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: white;
`;

export const Image = styled.Image.attrs({
  resizeMode: "center",
})`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;
