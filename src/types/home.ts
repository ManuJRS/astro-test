export interface home {
    titlehero: string;
    text: string;
    texfortintro: string;
    imgforhero: imagehero;
    btnintrohome: btnintroone;
    titleD: string;
    textD:string;
    dataO:string;
    labelDataOne:string;
    dataTw:string;
    labelDataTwo:string;
    dataTr:string;
    labelDataThree:string;
    btnDone:buttondata;
    titleintrocards:string;
    textintrocards:string;
    imgone:imgcardone;
    titleone:string;
    textone:string
    imgtwo:imgcardtwo;
    titletwo:string;
    texttwo:string;
    imgthree:imgcardthree;
    titlethree:string;
    textthree:string;
    titleend:string;
    imgend:imgendend;
}

interface imagehero {
    url:string;
    alt:string;
}

interface imgcardone {
    url:string;
    alt:string;
}

interface imgcardtwo {
    url:string;
    alt:string;
}

interface imgcardthree {
    url:string;
    alt:string;
}

interface imgendend {
    url:string;
    alt:string;
}

interface btnintroone {
    btntextintro:string;
    urlbtnintro:string;
}

interface buttondata {
    btntextdata:string;
    urlbtndata:string;
}

export interface HomeResponse {
    data: Data;
    meta: Meta;
}

export interface Data {
    id:                number;
    documentId:        string;
    createdAt:         Date;
    updatedAt:         Date;
    publishedAt:       Date;
    herotext:          string;
    textintro:         Datalabelone[];
    titleintro:        string;
    titledata:         string;
    textdata:          string;
    dataone:           string;
    datalabelone:      Datalabelone[];
    datatwo:           string;
    datalabeltwo:      Datalabelone[];
    datathree:         string;
    datalabelthree:    Datalabelone[];
    cardtitleone:      string;
    textcardone:       Datalabelone[];
    cardtitletwo:      string;
    textcardtwo:       Datalabelone[];
    cardtitlthree:     string;
    textcardthree:     Datalabelone[];
    endcomponenttitle: string;
    titlecards:        string;
    introcards:        Datalabelone[];
    heromedia:         Cardimgone;
    cardimgone:        Cardimgone;
    cardimgtwo:        Cardimgone;
    cardimgthree:      Cardimgone;
    endcomponentimg:   Cardimgone;
    buttonIntro:       ButtonIntro;
    buttonData:        ButtonData;
}

export interface ButtonData {
    id:          number;
    btntextdata: string;
    urlbtndata:  string;
}

export interface ButtonIntro {
    id:           number;
    btntextintro: string;
    urlbtnintro:  string;
}


export interface Cardimgone {
    id:                number;
    documentId:        string;
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: ProviderMetadata;
    createdAt:         Date;
    updatedAt:         Date;
    publishedAt:       Date;
}

export enum EXT {
    Jpg = ".jpg",
    PNG = ".png",
    Webp = ".webp",
}

export interface Formats {
    large:     Large;
    small:     Large;
    medium:    Large;
    thumbnail: Large;
}

export interface Large {
    ext:               EXT;
    url:               string;
    hash:              string;
    mime:              MIME;
    name:              string;
    path:              null;
    size:              number;
    width:             number;
    height:            number;
    sizeInBytes:       number;
    provider_metadata: ProviderMetadata;
}

export enum MIME {
    ImageJPEG = "image/jpeg",
    ImagePNG = "image/png",
    ImageWebp = "image/webp",
}

export interface ProviderMetadata {
    public_id:     string;
    resource_type: ResourceType;
}

export enum ResourceType {
    Image = "image",
}

export interface Datalabelone {
    type:     string;
    children: Child[];
}

export interface Child {
    text: string;
    type: string;
}

export interface Meta {
}