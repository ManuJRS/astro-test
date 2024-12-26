import type { home, HomeResponse } from "@/types/home";

export const mappedHome = (data: HomeResponse) => {
    const homeData:home = {
        titlehero: data.data.herotext,
        texfortintro: data.data.titleintro,
        text:data.data.textintro[0].children[0].text,
        imgforhero: {
            url: data.data.heromedia.url,
            alt: data.data.heromedia.alternativeText! || 'No hay Alt',
        },
        btnintrohome: {
            btntextintro: data.data.buttonIntro?.btntextintro || 'Default text',
            urlbtnintro: data.data.buttonIntro?.urlbtnintro || 'Default url',
            
        },        
        titleD: data.data.titledata,
        textD: data.data.textdata,
        dataO: data.data.dataone,
        labelDataOne: data.data.datalabelone[0].children[0].text,
        dataTw: data.data.datatwo,
        labelDataTwo: data.data.datalabeltwo[0].children[0].text,
        dataTr: data.data.datathree,
        labelDataThree: data.data.datalabelthree[0].children[0].text,
        btnDone: {
            btntextdata: data.data.buttonData?.btntextdata || 'Default text',
            urlbtndata: data.data.buttonData?.urlbtndata || 'Default URL',
        },
        titleintrocards: data.data.titlecards,
        textintrocards: data.data.introcards[0].children[0].text,
        imgone: {
            url: data.data.cardimgone.url,
            alt: data.data.cardimgone.alternativeText! || 'No hay Alt',
        },
        titleone: data.data.cardtitleone,
        textone: data.data.textcardone[0].children[0].text,
        imgtwo: {
            url: data.data.cardimgtwo.url,
            alt: data.data.cardimgtwo.alternativeText! || 'No hay Alt',
        },
        titletwo: data.data.cardtitletwo,
        texttwo: data.data.textcardtwo[0].children[0].text,
        imgthree: {
            url: data.data.cardimgthree.url,
            alt: data.data.cardimgthree.alternativeText! || 'No hay Alt',
        },
        titlethree: data.data.cardtitlthree,
        textthree: data.data.textcardthree[0].children[0].text,
        titleend: data.data.endcomponenttitle,
        imgend: {
            url: data.data.endcomponentimg.url,
            alt: data.data.endcomponentimg.alternativeText! || 'No hay Alt',
        },
    };
    return homeData
};