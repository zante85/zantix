import { Contact } from "./contact";

export class Constants {

    public static COPYRIGHT = "zante85";
    public static LINK_FACEBOOK = "https://www.facebook.com/zante85";
    public static LINK_STRAVA = "https://www.strava.com/athletes/8248680";
    public static LINK_YOUTUBE = "https://www.youtube.com/channel/UC1Dn1T7x6GUa-momy4GcT_g";
    public static LINK_LINKEDIN = "https://it.linkedin.com/in/nicola-zantedeschi-79170018";
    public static LINK_BRICKSET = "http://brickset.com/sets/ownedby-zante85";
    public static NOME = "Nicola";
    public static COGNOME = "Zantedeschi";
    public static EMAIL = "a@a.it";

    public static get CONTACT(): Contact {

        let contact = new Contact();
        contact.cognome = Constants.COGNOME;
        contact.nome = Constants.NOME;
        contact.facebook = Constants.LINK_FACEBOOK;
        contact.brickset = Constants.LINK_BRICKSET;
        contact.linkedin = Constants.LINK_LINKEDIN;
        contact.youtube = Constants.LINK_YOUTUBE;
        contact.email = Constants.EMAIL;
        return contact;

    };



}