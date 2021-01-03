import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/performance";

import { db } from "./auth"

export const usersPath = db.collection("users")
export const chatPath = db.collection("chat")
export const emotesPath = db.collection("emotes")
