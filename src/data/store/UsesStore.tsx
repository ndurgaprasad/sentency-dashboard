import React from "react";
import {rootContext} from "../context/RootContext";

export const useStores = () => React.useContext(rootContext)