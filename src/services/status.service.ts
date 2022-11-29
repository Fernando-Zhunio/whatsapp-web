import axios from "axios";
import { useEffect, useState } from "react";
import { environment } from "../environment/environment";

export default function ApiStatus() {
    const [status, SetStatus] = useState("Loading...");

    useEffect(() => {
        axios.get(environment.server+'').then((res) => {
            console.log({res});
            SetStatus(res);
        });
    }, []);
}