
let environment = {};

const DEV = {
    root: "localhost"
}

const QA = {
    root: "caobaqa.uninorte.edu.co"
}

const PROD = {
    root: "comino.uninorte.edu.co"
}

let domain = window.location.hostname;

if( domain.includes(DEV.root)){
    environment = DEV;
} else if ( domain.includes(QA.root) ){
    environment = QA;
} else if ( domain.includes(PROD.root) ){
    environment = PROD;
}


const URL = {
    loadContent: "/pisoton/admin/load_content.php",
    loadArticles: "/pisoton/admin/load_articles.php",
    loadAudios: "/pisoton/admin/load_audios.php",
    loadHistory: "/pisoton/admin/load_history.php",
    videoBlog: "/pisoton/admin/load_videoBlog.php",
    uploads: "/pisoton/admin/uploads/"
}

console.log(URL.loadContent);



