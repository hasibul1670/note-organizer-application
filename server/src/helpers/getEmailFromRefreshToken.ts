import { Secret } from "jsonwebtoken";
import config from "../config";
import { jwtHelpers } from "./jwtHelpers";


type IDecodedToken = {
  email: string;
}

export function getEmailFromRefreshToken(refreshToken: string): string {
  const decodedToken = jwtHelpers.verifyToken(
    refreshToken,
    config.jwt.refresh_secret as Secret
  ) as IDecodedToken;

  return decodedToken.email;
}
