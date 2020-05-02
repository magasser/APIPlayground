import { getAPODFromApi } from "../services/nasa-service"
import { getAPODOfDateFromApi } from "../services/nasa-service"
import { createAPOD } from "../services/db-service"
import { getAPODByDateFromDb } from "../services/db-service"
import { NasaApod } from "../models/apod"
 
let title;
let date;
let apod;
let apodVid;
let copyright;
let explanation;
let dateSelector;

document.addEventListener("DOMContentLoaded", () => {
    title = document.querySelector('#title');
    date = document.querySelector('#date');
    apod = document.querySelector('#apod');
    apodVid = document.querySelector('#apod-vid');
    copyright = document.querySelector('#copyright');
    explanation = document.querySelector('#explanation');
    dateSelector = document.querySelector('#date-selector');

    dateSelector.addEventListener("change", getImageOfDate);

    getImageOfToday();

    });


let getImageOfToday = () => {
    let date = new Date();
    getAPODByDateFromDb(formatDate(date))
        .then(data => {            
            if (data) {
                setData(data);
            } else {
                getAPODFromApi()
                    .then(data => {
                        const apod = new NasaApod(data);
                        setData(apod);

                        createNewAPOD(apod);
                        });
            }
        })
        .catch(err => console.error(err));


};

let formatDate = (date) => {
    return date.getFullYear() + '-' + `${date.getMonth() + 1}`.padStart(2, '0') + '-' + `${date.getDate()}`.padStart(2, '0');
};

let getImageOfDate = () => {
    getAPODByDateFromDb(dateSelector.value)
        .then(data => {
            setData(data);
        })
        .catch(err => {
            getAPODOfDateFromApi(dateSelector.value)
                .then(data => {
                    const apod = new NasaApod(data);
                    setData(apod);

                    createNewAPOD(apod);
                });
        });
};

let createNewAPOD = (apod) => {
    createAPOD(apod)
        .then(res => console.log(res));
};

let setData = (data) => {    
    title.innerHTML = data.title;
    date.innerHTML = data.date;

    if (data.media_Type === 'image') {
        apodVid.src = '';
        apod.src = data.img_Url;
        apod.className = 'img';
        apodVid.className = 'none';
    } else if (data.media_Type === 'video') {
        apod.src = '';
        apodVid.src = `${data.vid_Url}?controls=0&autoplay=1`;
        apodVid.className = 'vid';
        apod.className = 'none';
    }

    if (data.copyright_Holder) {
        copyright.innerHTML = `© ${data.copyright_Holder}`;
    }

    explanation.innerHTML = data.explanation;   
};
