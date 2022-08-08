import axios from 'axios';
import Light from '../models/Light.js';

export const checkStatus = (req, res) => {
    const { lightId, value = "" } = req.body;

    Light.findOne({ where: { id: lightId } }).then(data => {

        let input;

        if (value === "") {
            if (lightId === 1) {
                input = "Matrix";
            } else if (lightId === 2 || lightId === 7) {
                input = "";
            } else if (lightId === 3 || lightId === 4) {
                input = "5";
            } else if (lightId === 5) {
                input = {
                    username: "Ali",
                    password: "1qw234"
                }
            } else {
                input = "Garden";
            }
        } else {
            if (lightId === 2 || lightId === 7) {
                input = "";
            } else {
                input = value
            }
        }

        let obj = {};

        if (data.method === "GET") {
            obj = {
                method: 'get',
                url: `${data.url}${input}`,
            };
        } else {
            obj = {
                method: 'post',
                url: data.url,
                data: input,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            };
        }

        axios(obj).then((response) => {
            // OMDB Movie Not found Exception handling
            if (response.data.Error && response.data.Error === "Movie not found!") {
                res.sendStatus(404);
                return;
            }
            // Unsplash API Image Not found Exception handling
            if (response.data.total === 0) {
                res.sendStatus(404);
                return;
            }
            // OK
            res.sendStatus(200);
        }).catch(err => {
            // Not found Exeption handling
            res.sendStatus(404);
        });

    }).catch(err => {
        res.status(500).send("An error occured while finding light")
    });

}