export class NasaApod {
    constructor(apod) {
        this.date = apod.date;
        this.media_Type = apod.media_type;
        this.title = apod.title;
        if (this.media_Type === 'image') {
            this.img_Url = apod.hdurl;
            this.vid_Url = '';
        } else {
            this.img_Url = '';
            this.vid_Url = apod.url;
        }
        this.copyright_Holder = apod.copyright;
        this.explanation = apod.explanation;
    }
}