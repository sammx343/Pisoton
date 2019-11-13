
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

console.log(environment);

const URL = {
    loadContent: environment.root + "/pisoton/admin/load_content.php",
    loadArticles: environment.root + "/pisoton/admin/load_articles.php",
    loadAudios: environment.root + "/pisoton/admin/load_audios.php",
    loadHistory: environment.root + "/pisoton/admin/load_history.php",
    videoBlog: environment.root + "/pisoton/admin/load_videoBlog.php",
    uploads: environment.root + "/pisoton/admin/uploads/"
}



