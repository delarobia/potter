let smart = window.matchMedia("(max-width: 769px)");
const tooltipBody = document.querySelector('.tooltip__body');
const tooltipTitle = tooltipBody.querySelector('.tooltip__title');
const tooltipText = tooltipBody.querySelector('.tooltip__text');


if (smart.matches) { 
    document.addEventListener("touchstart", tooltip);
} 
else {
    document.addEventListener("mousedown", tooltip); 
}

function tooltip(event){
     if(!event.target.closest('.tooltip__body')){
        tooltipBody.classList.remove('_active');
    }

    if(event.target.closest('.main_item._char1')){
        tooltipTitle.textContent = "Harry Potter";
        tooltipText.textContent = "Harry est assez timide et plutôt modeste.Il reconnaît très volontiers la difficulté,voire l'incapacité, d'affronter ses peurs etson principal ennemi sans l'aide précieuse de ses amis,en particulier celle de Ron et d'Hermione.Comme d'autres élèves de la maison Gryffondor àlaquelle il appartient, Harry sait faire preuve de courageet de discernement, même si ses sentiments l'emportentquelquefois sur sa sagesse (comme Hermione le lui rappelle souvent).Il peut aussi lui arriver quelquefois de perdre patience et de faire exploser sa colère, notamment en cinquième année, alors qu'il est tenu volontairement à l'écart des événements majeurs par les membres de l'Ordre du Phénix, et après la mort de son parrain, alors qu'il est retenu dans le bureau de Dumbledore. Bien que ce dernier soit considéré comme mentor et figure de bienveillance, il arrive à plusieurs reprises que Harry et Dumbledore en viennent à hausser le ton.";
        tooltipBody.classList.toggle('_active');
    }
   
    if(event.target.closest('.main_item._char2')){
        tooltipTitle.textContent = "Hermione Jean Granger";
        tooltipText.textContent = "Amie proche de Harry Potter et de Ron Weasley, Hermione fait figure de droiture et d'esprit tout au long de l'histoire. Née de parents moldus, elle est particulièrement douée pour la magie et intéressée par le monde magique et les connaissances qui l'entourent. Elle se montre d'un grand secours auprès de ses camarades de Poudlard et fonde l'Armée de Dumbledore avec Harry et Ron en cinquième année afin de contrer leur nouveau professeur de défense contre les forces du mal, Dolores Ombrage, et s'entraîner à se défendre. Hermione et Ron aident ensuite Harry à trouver et à détruire tous les horcruxes de Voldemort, pour permettre à Harry de le vaincre.";
        tooltipBody.classList.toggle('_active');
    }
    if(event.target.closest('.main_item._char3')){
        tooltipTitle.textContent = "Ronald Bilius Weasley";
        tooltipText.textContent = "Ron fait partie de la famille Weasley, une famille de sang-pur, qui réside au Terrier. Dans Harry Potter à l'école des sorciers, Ron rencontre Harry dans la gare de King's Cross, où il aide Harry à trouver l'entrée secrète de la gare du monde des sorciers. Harry et Ron s'installent dans le même compartiment du train Poudlard Express et font connaissance, posant les premières pierres de leur amitié : Ron est fasciné par le célèbre Harry Potter. C'est dans ce même compartiment qu'ils rencontrent tous deux Hermione Granger, qui leur paraît à première vue très antipathique mais qui devient par la suite leur amie, après qu'ils l'ont sauvée d'une dangereuse confrontation avec un troll des montagnes adulte.";
        tooltipBody.classList.toggle('_active');
    }
    if(event.target.closest('.main_item._char4')){
        tooltipTitle.textContent = "Albus Dumbledore";
        tooltipText.textContent = "Principalement connu pour être le directeur de l'école de sorcellerie Poudlard dans les six premiers romans Harry Potter, Dumbledore devient un guide pour le héros éponyme, incarnant et professant les valeurs du courage, de l'amour et de la justice. Il a été séduit par le pouvoir des reliques de la Mort durant sa jeunesse et en a subi des conséquences tragiques. Son expérience et son intelligence l'ont amené par la suite à anticiper et contrer les impulsions les plus sombres de la société magique. Il s'est notamment rendu célèbre dans l'histoire de la sorcellerie pour avoir vaincu en duel le mage noir Gellert Grindelwald en 1945, et devient plusieurs décennies plus tard le seul sorcier craint par Lord Voldemort.";
        tooltipBody.classList.toggle('_active');
    }
    if(event.target.closest('.main_item._char5')){
        tooltipTitle.textContent = "Rubeus Hagrid";
        tooltipText.textContent = "Il est un demi-géant, connu pour être le « gardien des clés et des lieux » à Poudlard. Il est membre de l'Ordre du Phénix depuis son origine.Hagrid vit dans une cabane construite à sa mesure dans le parc de Poudlard, en bordure de la forêt interdite. Il apparaît pour la première fois dans le premier chapitre de Harry Potter à l'école des sorciers en apportant Harry Potter âgé d'un an auprès de Dumbledore et du professeur McGonagall.Il revient ensuite le chercher à ses onze ans pour l'emmener faire ses achats sur le chemin de Traverse pour sa première rentrée scolaire à Poudlard.";
        tooltipBody.classList.toggle('_active');
    }
    if(event.target.closest('.main_item._char6')){
        tooltipTitle.textContent = "Drago Malefoy";
        tooltipText.textContent = "Drago Malefoy est le premier élève que rencontre Harry Potter (chez Madame Guipure, au chemin de Traverse), avant même sa première rentrée. À Poudlard, le garçon est envoyé dans la maison Serpentard. Il devient l'ennemi de Harry Potter et son premier « rival », par jalousie vis-à-vis de sa célébrité et de ses talents au Quidditch. Malefoy n'a pas davantage de sympathie envers Hermione Granger (qu'il traite régulièrement de « Sang-de-Bourbe » à partir de leur deuxième année) et Ronald Weasley, issu d'une famille pauvre et considérée comme « traître à son Sang » car aimant et protégeant les Moldus. Les Weasley étant, de surcroît, très proches de Harry.";
        tooltipBody.classList.toggle('_active');
    }
    if(event.target.closest('.main_item._char7')){
        tooltipTitle.textContent = "Severus Rogue (Severus Snape en anglais)";
        tooltipText.textContent = "Professeur à l'école de magie de Poudlard et directeur de la maison des Serpentard, il y est depuis des années un maître de la préparation des potions redouté et particulièrement partial, avant d'être nommé par Albus Dumbledore au poste de professeur de défense contre les forces du Mal, qu'il désire depuis longtemps. Après la mort de Dumbledore, il devient directeur de l'école durant une année sous le règne de Voldemort.Personnage sombre, aigri et amer, il a une personnalité complexe, ambiguë et assez indéchiffrable ; il a un physique peu engageant et un ton sarcastique.";
        tooltipBody.classList.toggle('_active');
    }
    if(event.target.closest('.main_item._char8')){
        tooltipTitle.textContent = "Tom Elvis Jedusor - Voldemort";
        tooltipText.textContent = "C'est un sorcier doté de pouvoirs considérables, qui cherche à s'imposer sur le monde des sorciers afin de remodeler celui-ci selon ses idéaux. Il est appelé « le Seigneur des Ténèbres » par ses fidèles mangemorts, « Tu-Sais-Qui » ou « Celui-Dont-On-Ne-Doit-Pas-Prononcer-Le-Nom » par la population magique qu'il terrifie, ou tout simplement « Voldemort » par Harry Potter et quelques-uns des membres de l'ordre du Phénix, destiné à le contrer.";
        tooltipBody.classList.toggle('_active');
    }
    
}



document.addEventListener("mousedown", cursorCast);
document.addEventListener("mouseup",hideCast)
let isVisible = false;

function cursorCast(e){
    if(!isVisible){
        isVisible = true;
        const cast = document.getElementById('cast');
        const cloneCast = cast.cloneNode(true);
        cloneCast.classList.add('_clone');
        cloneCast.style.top = (e.pageY || e.clientY) + 'px';
        cloneCast.style.left = (e.pageX || e.clientX) + 'px';
        cloneCast.style.visibility = 'visible';
        document.body.appendChild(cloneCast);
    }
}
function hideCast(){
    if(isVisible){
        const cloneCast = document.querySelector('._clone');
        document.body.removeChild(cloneCast);
    }
    isVisible = false;
}