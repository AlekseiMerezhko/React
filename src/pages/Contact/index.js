import { useState, useEffect } from "react";

const PLANETS = [
    { name: "Tatooine", id: 0 },
    { name: "Alderaan", id: 1 },
];

const Contact = () => {
    // const [value, setValue] = useState(0);
    // const [timer, setTimer] = useState(0);

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         setTimer((value) => {
    //             return value + 1;
    //         });
    //     }, 1000);

    //     return () => {
    //         clearInterval(id);
    //     };
    // }, []);

    // const handleValueChange = () => {
    //     setValue((prevValue) => {
    //         return prevValue + 1;
    //     });
    // };
    // console.log("planet", planet);
    // console.log(timer);

    const [option, setOption] = useState(""); //ID
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        console.log("Component Did Mount");
    }, []);

    useEffect(() => {
        if (!option) return;
        getPlanet(option);
    }, [option]);

    const getPlanet = (id) => {
        fetch(`https://swapi.dev/api/planets/${id}/`)
            .then((resp) => resp.json())
            .then((resp) => setPlanet(resp))
            .catch((e) => console.log(e));
    };

    const handleSelectChange = (e) => {
        //ID
        setOption(e.target.value);
    };

    console.log(option);
    return (
        <div style={{ padding: 20 }}>
            <h2>{planet?.name || "No Planet"}</h2>
            <div style={{ paddingTop: 40 }}>
                <select onChange={handleSelectChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
        </div>
    );
};

export default Contact;

// 1) ComponentDidMount

// 2) ComponentWillUnmount

// 3) ComponentDidUpdate

// const useState = (initialValiu) => {
//     let state = initialValiu || null;

//     let setState = (value) => {
//         state = value;
//     };

//     return [state, setState];
// };

// state = {
//     value: 0,
//     users: [],
// };
