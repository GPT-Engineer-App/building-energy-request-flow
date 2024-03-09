import React from "react";
import { Image } from "@chakra-ui/react";

const CatImage = ({ width, height }) => <Image src={`https://placekitten.com/${parseInt(width, 10)}/${parseInt(height, 10)}`} width={width} height={height} alt="Cute kitten" />;

export default CatImage;
