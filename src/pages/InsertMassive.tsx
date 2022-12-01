import axios from "axios"
import { useEffect, useRef, useState } from "react";
import { locations } from "../assets/locations";
import { environment } from "../environment/environment";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + environment.token
    }
});

interface Register {
    status: 'ok' | 'error';
    message: string;
    mba_code: string;
}

export default function () {
    const apiUrl = "http://sistema-codificacion.test/";
    const [location, setLocation] = useState();
    const [register, setRegister] = useState<Register[]>([]);
    const locationIndex = useRef<number>(0);

    function insertDataLatAndLng() {
        const location = axiosInstance.get(apiUrl + "api/insertDataLatAndLng")
        axios.put(apiUrl + "api/insertDataLatAndLng").then((response) => {

        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {}, []);

    function handlerRegister(mba_code: string, status: 'ok' | 'error' = 'ok', message = 'Encontrado y actualizado correctamente') {
        setRegister((current) => {
            // current.push({
            //     mba_code,
            //     status,
            //     message
            // })
            // return current;
            return [
                ...current,
                {
                    mba_code,
                    status,
                    message
                }
            ]
        });
    }

    function test(){
        // setIndex((current) => {
        //     const next = current + 1;
        //     console.log(next)
        //     return next;
        // });
        handlerRegister('jh');
    }

    async function getLocations() {
        const locationData = locations[locationIndex.current];
        const data = await axiosInstance.get(apiUrl + `api/admin/locations?pageSize=5&search=${locationData.mba_code}&page=1`)
        const _location = data.data.data.data.data[0];
        if (_location && _location.mba_code === locationData.mba_code) {
            setLocation(_location)
            handlerRegister(_location.mba_code)
        } 
        else {
            const message = !_location ? 
            `No se encontro el codigo ${locationData.mba_code}` : `El codigo db ${_location.mba_code} no coincide con el codigo ${locationData.mba_code}`;
            handlerRegister(locationData.mba_code, 'error', message)
        }
        
        //  setIndex((current) => {
        //     const next = current + 1;
        //     console.log(next)
        //     return next;
        // });
        console.log(locationIndex.current)
        locationIndex.current = locationIndex.current + 1;
        if (locationIndex.current < locations.length) {
            getLocations()
        }
    }

    return (
        <div className="container">
            <button onClick={getLocations}>Get Location</button>
            <div className="grid grid-cols-4 divide-y">
                {register.map((item, index) => {
                    return (
                        <small className={`p-3 ${item.status === 'ok' ? 'text-green-600' : 'text-red-500'}`} key={index}>
                            <p>Codigo: {item.mba_code}</p>
                            <p>Estado: <strong>{item.status}</strong></p>
                            <p>{item.message}</p>
                        </small>
                    )
                })}
            </div>
            <div>
                {/* <p>Index: {locationIndex}</p> */}
                <p>Location: {locations?.length}</p>
            </div>
        </div>
    )
}