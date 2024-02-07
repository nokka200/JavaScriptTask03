"use:strict";

// Henkilo kantaluokka
class Henkilo {
    #etunimi;
    #sukunimi;
    #kutsumanimi;
    #syntymavuosi;

    constructor(etunimi, sukunimi, kutsumanimi, syntymavuosi) {
        this.#etunimi = etunimi;
        this.#sukunimi = sukunimi;
        this.#kutsumanimi = kutsumanimi;
        this.#syntymavuosi = syntymavuosi; //Date
    }
}

// Urheilija aliluokka
class Urheilija extends Henkilo { 
    #linkkiKuvaan;
    #omapaino;
    #laji;
    #saavutukset;

    constructor(etunimi, sukunimi, kutsumanimi, syntymavuosi, linkkiKuvaan, omapaino, laji, saavutukset) {
        super(etunimi, sukunimi, kutsumanimi, syntymavuosi);
        this.#linkkiKuvaan = linkkiKuvaan;
        this.#omapaino = omapaino;
        this.#laji = laji;
        this.#saavutukset = saavutukset;
    }

    get linkkiKuvaan() {
        return this.#linkkiKuvaan;
    }

    get omapaino() {
        return this.#omapaino;
    }

    get laji() {
        return this.#laji;
    }

    get saavutukset() {
        return this.#saavutukset;
    }

    set linkkiKuvaan(linkkiKuvaan) {
        this.#linkkiKuvaan = linkkiKuvaan;
    }

    set omapaino(omapaino) {
        this.#omapaino = omapaino;
    }

    set laji(laji) {
        this.#laji = laji;
    }

    set saavutukset(saavutukset) {
        this.#saavutukset = saavutukset;
    }
}

// apu funktio tietojen tulostamiseen
const displayInformation = (urheilija) => { 
    console.log(`Nimi: ${urheilija.etunimi} ${urheilija.sukunimi}`);
    console.log(`Kutsumanimi: ${urheilija.kutsumanimi}`);
    console.log(`Syntymävuosi: ${urheilija.syntymavuosi}`);
    console.log(`Linkki kuvaan: ${urheilija.linkkiKuvaan}`);
    console.log(`Omapaino: ${urheilija.omapaino}`);
    console.log(`Laji: ${urheilija.laji}`);
    console.log(`Saavutukset: ${urheilija.saavutukset}`);
    console.log("-------");

}

// muodostetaan oliot
const urheilija1 = new Urheilija("Matti", "Mattinen", "Masa", new Date(1980, 12, 24), "https://www.nhl.com", 80, "Jääkiekko", "Stanley cup 2000");
const urheilija2 = new Urheilija("Juha", "Tepponen", "Jugi", new Date(2000, 1, 1), "https://www.nfl.com", 120, "Amerikkalainen jalkapallo", "-");

// Näytetään tietoja
displayInformation(urheilija1);
displayInformation(urheilija2);

// muutetaan arvoja
urheilija1.omapaino = 122;
urheilija2.saavutukset = "Superbowl 2020";

// Näytetään muutettuja tietoja
displayInformation(urheilija1);
displayInformation(urheilija2);