// Récupère les données de l'utilisateur
let connexion = window.localStorage.getItem("compte");

//====================================================================================//
// Affichage
//====================================================================================//
const stat = document.querySelector("#stat");
const chiffre = document.querySelector("#chiffre");
const degatsParSeconde = document.querySelector("#degatsParSeconde");
const degatsBonus = document.querySelector("#textDegatsBonus");
const AffichageZone = document.querySelector("#AffichageZone");
const affichageNombreDeMonstreTuee = document.querySelector("#affichageNombreDeMonstreTuee");

// fonction qui affichage toutes les information a l'écran
function Affichage() {
	degatsBonus.innerHTML = "";
	AffichageZone.innerHTML = "";
	// Affiche les degats qu'inflige les bonus chaque secondes
	degatsParSeconde.innerText = `Degats par seconde: ${degatsDesBonus().toFixed(1)}`;
	chiffre.innerText = `${Reduction(argent)} Slimes`;

	AffichageBtnUpgradeClick();
	AffichageBtnBonus(bonus1);
	AffichageBtnBonus(bonus2);
	AffichageBtnBonus(bonus3);
	AffichageBtnBonus(bonus4);

	for (let i = 0; i < lesZones.tableauZone.length; i++) {
		AffichageSelectionZone(lesZones.tableauZone[i]);
	}
	if (zoneActive.nombreDeMonstreTuee < 15)
		affichageNombreDeMonstreTuee.innerText = `${zoneActive.nombreDeMonstreTuee} / 15`;
	else affichageNombreDeMonstreTuee.innerText = `${Reduction(zoneActive.nombreDeMonstreTuee)} Monstre Tuée`;

	if (menuDroitDemander === "Succes") {
		menuCategorieSucces.innerHTML = "";
		preAffichageSucces();
	}
}

function AffichageBtnUpgradeClick() {
	// Affiche les information sur le bouton d'amelioration du click
	btnUpgrade.innerHTML = ""; // vide la case

	// Elément qui permet de tout rentré dans le bouton
	const btnPuissanceClick = document.createElement("div");
	// Elément qui sépare l'image et le prix du niveau
	const AchatPuissanceClick = document.createElement("div");
	AchatPuissanceClick.setAttribute("class", "AchatPuissanceClick");
	// L'image de l'arme actuellement possèdé par le joueur
	const ImgbtnClick = document.createElement("img");
	ImgbtnClick.src = ImgArme;
	// Le Prix de l'amélioration
	const textPrixClick = document.createElement("p");
	// Le niveau de l'arme
	const lvlClick = document.createElement("p");
	lvlClick.innerText = `Lvl ${niveauClick}`;

	// Initialisation avec les class en cas de situation spécial (il seront retiré en cas de cas normaux)
	textPrixClick.setAttribute("class", "textPrixRankSuivant");
	lvlClick.setAttribute("class", "lvlClickRankSuivant");
	ImgbtnClick.setAttribute("class", "ImgbtnClickRankSuivant");

	// Vérification du niveau de l'arme
	switch (niveauClick) {
		case 14: // Arme niveau 14 affichage de l'achat de la Dague en bois
			textPrixClick.innerText = `${Reduction(clickCoutMultiplier())} points points pour acheter Dague en bois`;
			break;
		case 29: // Arme niveau 29 affichage de l'achat de l'épée en bois
			textPrixClick.innerText = `${Reduction(clickCoutMultiplier())} points points pour acheter Epée en bois`;
			break;
		case 49: // Arme niveau 49 affichage de l'achat de la dague de pierre
			textPrixClick.innerText = `${Reduction(clickCoutMultiplier())} points pour acheter Dague en pierre`;
			break;
		default: // la prochaine amélioration ne change pas d'arme affichage normal
			textPrixClick.removeAttribute("class");
			lvlClick.removeAttribute("class");
			ImgbtnClick.removeAttribute("class");
			textPrixClick.innerText = `${Reduction(clickCoutMultiplier())} points`;
			textPrixClick.setAttribute("class", "textPrixClick");
			lvlClick.setAttribute("class", "lvlClick");
			ImgbtnClick.setAttribute("class", "ImgbtnClick");
			break;
	}
	// On met l'article dans le bouton puis dans l'article on met la partis information achat (avec l'image et le prix) puis le niveau de l'amélioration
	btnUpgrade.appendChild(btnPuissanceClick);
	btnPuissanceClick.appendChild(AchatPuissanceClick);
	AchatPuissanceClick.appendChild(ImgbtnClick);
	AchatPuissanceClick.appendChild(textPrixClick);
	btnPuissanceClick.appendChild(lvlClick);

	// affiche les dégats infligé par le clique
	if (puissanceClick > 0) {
		const fichesPuissanceClick = document.createElement("article");
		const ImgPuissanceClick = document.createElement("img");
		ImgPuissanceClick.src = ImgArme;
		const textPuissanceClick = document.createElement("p");
		if (niveauRank === 0)
			textPuissanceClick.innerText = `${rankArme} inflige ${(puissanceClick * bonusClick).toFixed(1)}`;
		else textPuissanceClick.innerText = `${rankArme} inflige ${(puissanceClick * bonusClick).toFixed(1)}`;
		degatsBonus.appendChild(fichesPuissanceClick);
		fichesPuissanceClick.appendChild(ImgPuissanceClick);
		fichesPuissanceClick.appendChild(textPuissanceClick);
	}
}

function AffichageBtnBonus(bonus) {
	// Affiche les information sur le bouton d'amelioration du bonus 1
	bonus.btnB.innerHTML = ""; // vide la case

	// Elément qui permet de tout rentré dans le bouton
	const BtnBonus = document.createElement("div");
	// Elément qui sépare l'image et le prix du niveau
	const zoneAchatBonus = document.createElement("div");
	zoneAchatBonus.setAttribute("class", "zoneAchatBonus");
	// L'image de l'arme actuellement possèdé par le joueur
	const ImgbtnBonus = document.createElement("img");
	ImgbtnBonus.setAttribute("class", "ImgbtnClick");
	ImgbtnBonus.src = "Image/Ennemie/Blob/Normal/Blob.png";
	// Le Prix de l'amélioration
	const textPrixBonus = document.createElement("p");
	textPrixBonus.setAttribute("class", "textPrixClick");
	textPrixBonus.innerText = `${Reduction(bonus.CoutMultiplier())} points`;
	// Le niveau du bonus
	const lvlBonus = document.createElement("p");
	lvlBonus.setAttribute("class", "lvlBonus");
	lvlBonus.innerText = `Lvl ${bonus.NiveauB}`;

	// On met l'article dans le bouton puis dans l'article on met la partis information achat (avec l'image et le prix) puis le niveau de l'amélioration
	bonus.btnB.appendChild(BtnBonus);
	BtnBonus.appendChild(zoneAchatBonus);
	zoneAchatBonus.appendChild(ImgbtnBonus);
	zoneAchatBonus.appendChild(textPrixBonus);
	BtnBonus.appendChild(lvlBonus);

	// affiche les dégats infligé par chaque bonus indépendament (si il on au minimum 1 d'attaque)
	if (bonus.puissanceB > 0) {
		const fichesPuissanceBonus = document.createElement("article");
		fichesPuissanceBonus.setAttribute("class", "fichesPuissanceBonus");
		const Imgbonus = document.createElement("img");
		Imgbonus.setAttribute("class", "Imgbonus");
		Imgbonus.src = "Image/Item/Baton.png";

		const textPuissanceBonus = document.createElement("p");
		textPuissanceBonus.innerText = `${bonus.nom} inflige ${(bonus.puissanceB * bonus.bonusBonus).toFixed(1)}`;

		degatsBonus.appendChild(fichesPuissanceBonus);
		fichesPuissanceBonus.appendChild(Imgbonus);
		fichesPuissanceBonus.appendChild(textPuissanceBonus);
	}
}

function AffichageSelectionZone(zone) {
	if (zone.zoneDebloquer === true) {
		const BtnChangementZone = document.createElement("button");
		BtnChangementZone.setAttribute("class", "BtnChangementZone");
		BtnChangementZone.style.backgroundImage = zone.couleurZone;
		BtnChangementZone.innerText = `${zone.numeroZone}`;

		AffichageZone.appendChild(BtnChangementZone);
		BtnChangementZone.addEventListener("click", function () {
			changementZone(zone);
		});
	}
}
//====================================================================================//
// chiffre Elevé
//====================================================================================//
function Reduction(nombre) {
	let base = 0;
	let nombreLetter = 0;
	let formatUtiliser = " ";
	var letter = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];
	var formatLong = ["Mille", "Million", "Milliard"];

	if (!isFinite(nombre)) return "Infini";
	if (nombre >= 1000) {
		while (Math.round(nombre) >= 1000) {
			nombre /= 1000;
			base++;
		}
		if (base > formatLong.length) {
			base -= 3;
			if (base > letter.length) {
				while (Math.round(base) > letter.length) {
					base -= letter.length;
					nombreLetter++;
				}
				formatUtiliser += letter[nombreLetter - 1];
				formatUtiliser += letter[base - 1];
			} else formatUtiliser += letter[base - 1];
		} else {
			formatUtiliser += formatLong[base - 1];
		}
		return `${nombre.toFixed(2)} ${formatUtiliser}`;
	} else return `${nombre}`;
}

//====================================================================================//
// Menu pour petit ecran
//====================================================================================//
let menuOuvert; // Permet de gardé en mémoire l'onglet ouvert

// Une fois que le bouton appuié lui a envoie qu'elle onglet ouvrir l'ouvre
function affichageMenu(menu) {
	if (menu.style.display != "flex") {
		if (menuOuvert != null) menuOuvert.style.display = "none";
		menu.style.display = "flex";
		menuOuvert = menu;
	} else {
		menu.style.display = "none";
	}
}
const buttonMenuBonus = document.getElementById("menuBonus");
const menuBonus = document.querySelector("aside");
const buttonMenuMenu = document.getElementById("menuMenu");
const menuMenu = document.querySelector("footer");
const buttonMenuPerso = document.getElementById("menuPerso");
const menuPerso = document.querySelector("section");
buttonMenuBonus.addEventListener("click", function () {
	affichageMenu(menuBonus);
});
buttonMenuMenu.addEventListener("click", function () {
	affichageMenu(menuMenu);
});
buttonMenuPerso.addEventListener("click", function () {
	affichageMenu(menuPerso);
});

// Récupère la largeur de la page sans compté la bar de scroll
var w = document.documentElement.clientWidth;
var modal = document.getElementById("compte"); // Get the modal
// Permet de fermer l'onglet en cliquant a un autre endroit de la page
window.onclick = function (event) {
	// Verifie que l'écran soit en mode téléphone afin de ne pas fermer l'onglet quand il ne le faut pas
	if (w <= 1500) {
		if (menuOuvert != null)
			if (
				event.target === document.querySelector(".zoneDeClick") ||
				event.target === monster ||
				event.target === fondTimer ||
				event.target === timer ||
				event.target === PV ||
				event.target === nombreHP ||
				event.target === document.querySelector(".fondVie") ||
				event.target === stat ||
				event.target === chiffre ||
				event.target === degatsParSeconde ||
				event.target === document.querySelector(".clicable")
			) {
				// Verifie que l'utilisateur clique autre part que l'onglet ouvert
				menuOuvert.style.display = "none"; // Ferme l'onglet
			}
	}
	if (event.target === modal) {
		modal.style.display = "none";
	}
};

// Permet de fermer ou ouvrir les onglets en cas de changement de la taille de l'écran
window.onresize = function () {
	w = document.documentElement.clientWidth;
	if (w >= 1500) {
		// L'utilisateur passe en mode ordinateur ouvre les onglets fermé
		menuBonus.style.display = "flex";
		menuMenu.style.display = "flex";
		menuPerso.style.display = "flex";
	}
	if (w <= 1500) {
		// L'utilisateur passe en mode téléphone ferme les onglets ouvert
		menuBonus.style.display = "none";
		menuMenu.style.display = "none";
		menuPerso.style.display = "none";
	}
};

//====================================================================================//
// Multiple Amélioration
//====================================================================================//
let nombreMulti = 1;
let btnMultiUpgradePrecedent = document.getElementById("multiplieur1");
document.getElementById("multiplieur1").addEventListener("click", multiUpgrade);
document.getElementById("multiplieur2").addEventListener("click", multiUpgrade);
document.getElementById("multiplieur3").addEventListener("click", multiUpgrade);
document.getElementById("multiplieur4").addEventListener("click", multiUpgrade);

function multiUpgrade(e) {
	e.target.classList.add("active");

	btnMultiUpgradePrecedent.classList.remove("active");
	nombreMulti = e.target.value;
	btnMultiUpgradePrecedent = e.target;
	Affichage();
}

//====================================================================================//
// Amélioration puissance Click
//====================================================================================//
let btnUpgrade = document.getElementById("btnUpgrade");
btnUpgrade.onclick = function () {
	if (coutBtnUpgrade <= argent) {
		argent -= clickCoutMultiplier();

		let i = nombreMulti;
		while (i >= 1) {
			coutBtnUpgrade = Math.round(coutBtnUpgrade * 1.25);
			niveauClick++;
			niveauRank++;
			calculeRankArme();
			puissanceClick = Math.round((puissanceClick + augmentationPuissanceClick) * 10) / 10;
			i--;
		}
		btnUpgrade.innerText = `${coutBtnUpgrade} points pour amélioré le click`;
	} else {
		let pointManquant = clickCoutMultiplier() - argent;
		btnUpgrade.innerText = `Il vous manque ${pointManquant} points pour amélioré le click`;
		setTimeout(retourNormal, 2500);
		function retourNormal() {
			btnUpgrade.innerText = `${coutBtnUpgrade} points pour amélioré le click`;
		}
	}
	Affichage();
};

// Permet de voir le prix du bonus (et compte lorsque le joueur cherche a payer plusieur fois le bonus)
function clickCoutMultiplier() {
	let i = nombreMulti;
	let coutTotal = coutBtnUpgrade;
	let coutAjouter = coutBtnUpgrade;

	while (i > 1) {
		coutTotal += coutAjouter = Math.round(coutAjouter * 1.25);
		i--;
	}
	coutTotal > argent ? btnUpgrade.setAttribute("disabled", "true") : btnUpgrade.removeAttribute("disabled");

	return coutTotal;
}

// calcule rank arme
function calculeRankArme() {
	switch (niveauClick) {
		case 0:
			rankArme = "Bâton";
			ImgArme = "Image/Item/Baton.png";
		case 15:
			rankArme = "Dague en bois";
			break;
		case 30:
			niveauRank = 0;
			rankArme = "Epée en bois";
			break;
		case 50:
			niveauRank = 0;
			rankArme = "Dague en pierre";
			break;
	}
	return rankArme;
}

//====================================================================================//
// Bonus
//====================================================================================//

// Class qui va permettre au joueur de pouvoir acheter des bonus vissant a attaque l'ennemie sans a avoir a cliquer de lui même
class Bonus {
	constructor(nom, btnB, NiveauB, puissanceB, bonusBonus, coutB, pointAjout, coutAjout, actifB) {
		this.nom = nom;
		this.btnB = btnB;
		this.NiveauB = NiveauB;
		this.puissanceB = puissanceB;
		this.bonusBonus = bonusBonus;
		this.coutB = coutB;
		this.pointAjout = pointAjout;
		this.coutAjout = coutAjout;
		this.actifB = actifB;
	}

	// Lorsque le bouton du bonus est cliqué vérifie si le joueur possède assez d'argent
	ClickBtn() {
		if (this.coutTotal <= argent) {
			this.Achat(); // Si oui achete le bonus
		} else {
			this.PointManquant(); // Si non compte les points manquant
		}
	}

	// Lorsque le joueur a assez d'argent achete le bonus
	Achat() {
		this.actifB = true;

		argent -= this.CoutMultiplier(); // fait payer le joueur (compte si le prix en cas d'achat multiple)

		let i = nombreMulti;
		while (i >= 1) {
			this.coutB = Math.round(this.coutB * this.coutAjout);
			this.puissanceB += this.pointAjout;
			this.NiveauB++;
			i--;
		}
		Affichage();
	}
	// Fonction qui va permettre au bonus d'infligé des dégats
	attaque() {
		setInterval(frappe, 1000, this.puissanceB * this.bonusBonus);
		function frappe(degats) {
			if (monstreAfficher.vie > 0) {
				monstreAfficher.vie -= degats;

				monstreAfficher.pointDeVie();
				if (degats > monstreAfficher.vie) monstreAfficher.vie = 0;
				if (monstreAfficher.vie <= 0) {
					monstreAfficher.mort();
				}
			}
		}
	}

	// Permet de voir le prix des bonus (et compte lorsque le joueur cherche a payer plusieur fois le bonus)
	CoutMultiplier() {
		let i = nombreMulti;
		this.coutTotal = this.coutB;
		let coutAjouter = this.coutB;

		// Boucle comptant le prix total (calcule avec le prix qui augmente a chaque niveau)
		while (i > 1) {
			this.coutTotal += coutAjouter = Math.round(coutAjouter * this.coutAjout);
			i--;
		}
		this.coutTotal > argent ? this.btnB.setAttribute("disabled", "true") : this.btnB.removeAttribute("disabled");

		return this.coutTotal;
	}

	// Lorsque le joueur n'a pas assez de point calcule les points manquant
	PointManquant() {
		let pointManquant = this.coutB - argent;

		this.btnB.innerText = `Il vous manque ${pointManquant} points pour amélioré le bonus`;
		setTimeout(() => {
			this.btnB.innerText = `${this.coutB} points pour acheté le bonus`;
		}, 2500);
	}
}
function degatsDesBonus() {
	return (
		bonus1.puissanceB * bonus1.bonusBonus +
		bonus2.puissanceB * bonus2.bonusBonus +
		bonus3.puissanceB * bonus3.bonusBonus +
		bonus4.puissanceB * bonus4.bonusBonus
	);
}
// Fonction qui va permettre au bonus d'infligé des dégats
function frappeBonus() {
	let degats = degatsDesBonus();
	if (monstreAfficher.vie > 0) {
		monstreAfficher.vie -= degats;

		monstreAfficher.pointDeVie();
		if (monstreAfficher.vie <= 0) {
			monstreAfficher.mort();
		}
	} else if (degats > monstreAfficher.vie) monstreAfficher.vie = 0;
}

//====================================================================================//
// Monstre
//====================================================================================//
const PV = document.getElementById("vie");
const nombreHP = document.getElementById("labelVie");
let HPLeft = 100;
const timer = document.getElementById("timer");
const fondTimer = document.getElementById("fondTimer");
let timeLeft = 100;
let colorRed = 0;
let colorGreen = 150;
const monster = document.getElementById("monster");
let barVie;

// Class permettant de crée des ennemies (boss ou non boss)
class Ennemie {
	constructor(nom, vieMax, argentMin, argentMax, imageEnnemie, imageBlesser, tempsMax, isBoss) {
		this.nom = nom;
		this.vieMax = vieMax;
		this.vie = vieMax;
		this.argentMin = argentMin;
		this.argentMax = argentMax;
		this.imageEnnemie = imageEnnemie;
		this.imageBlesser = imageBlesser;
		this.tempsMax = tempsMax;
		this.temps = tempsMax;
		this.isBoss = isBoss;

		if (this.isBoss === true) {
			this.tempsRestant;
			this.intervaleTemps;
		}
		this.Animation;
		monster.src = this.imageEnnemie;
	}

	// Fonction qui inflige les dégats a l'ennnemie
	degats(degats) {
		// Si les dégats sont plus élevé que les PV restant de l'ennemie met automatiquement les pv a 0
		if (degats > this.vie) this.vie = 0;
		else this.vie -= degats;

		// Met l'image de l'ennemie qui se prend un coup
		monster.src = this.imageBlesser;
		clearInterval(this.Animation);
		this.pointDeVie();

		// Lorsque les point de vie de l'ennemie sont a zéro arrête le décompte du timer en cas de boss
		if (this.vie <= 0) {
			setTimeout(() => {
				this.mort();
			}, 1000);
		} else {
			// Si l'ennemie n'est pas mort après le coup met un timer qui si un autre coup n'est pas infligé remettera l'image de l'ennemie normal
			this.Animation = setTimeout(() => {
				monster.src = this.imageEnnemie;
			}, 500);
		}
	}

	// Lorsque l'ennemie est mort remet a zero la barre de vie et de temps et met un nouvelle ennemie
	mort() {
		clearInterval(this.TempsCombat);
		clearInterval(this.Animation);
		barVie.kill();
		argent += this.gain(); // Donne l'argent au joueur que lui donne l'ennemie
		zoneActive.nombreDeMonstreTuee++;
		nombreDeMonstreTueeTotal++;
		if (zoneActive.nombreDeMonstreTuee === 15 && zoneActive.deblocageZone != false) {
			lesZones.tableauZone[zoneActive.deblocageZone].zoneDebloquer = true;
			zoneAtteinte++;
		}
		this.vie = this.vieMax;
		timeLeft = this.temps = this.tempsMax;
		HPLeft = 100;
		nombreHP.innerText = this.vie;

		Affichage();
		Respawn();
	}
	// Lorsque le temps est écoulé remet a zero le temps et la vie de l'ennemie et met un nouvelle ennemie
	reset() {
		clearInterval(this.TempsCombat);
		clearInterval(this.Animation);
		barVie.kill();
		this.vie = this.vieMax;
		timeLeft = this.temps = this.tempsMax;
		HPLeft = 100;
		nombreHP.innerText = this.vie;

		Affichage();
		Respawn();
	}

	// Fonction qui permet d'afficher la barre de vie et change de couleur par rapport a la vie restante de l'ennemie
	pointDeVie() {
		HPLeft = ((this.vie * 100) / this.vieMax).toFixed(1);
		animationVie();
		nombreHP.innerText = this.vie.toFixed(1);
		if (HPLeft < 50) {
			PV.style.backgroundColor = "rgb(255, 153, 0)";
			PV.style.borderColor = "rgb(255, 153, 0)";
		}
		if (HPLeft < 22) {
			PV.style.backgroundColor = "rgb(133, 6, 6)";
			PV.style.borderColor = "rgb(133, 6, 6)";
		}
	}

	// Fonction qui permet d'afficher la barre de temps en cas de combat contre un boss
	TempsRestant() {
		if (monstreAfficher.isBoss === true) {
			// Affiche la bar de temps lorsque l'ennemie est un boss
			timer.style.display = "block";
			fondTimer.style.display = "block";

			// Timer comptant le temps restant avant que le boss ne parte (vire petit a petit de bleu à rouge)
			this.TempsCombat = setInterval(() => {
				if (this.temps === 0) {
					this.reset();
				} else {
					this.temps -= 1;
					timeLeft = (this.temps * 100) / this.tempsMax;
					colorGreen -= 0.1;
					colorRed += 0.1;

					timer.style.width = timeLeft + "%";
					timer.style.backgroundColor = "rgb(" + colorRed + ", " + colorGreen + ", 0)";
				}
			}, 1);
		} else {
			// Retire la bar de temps lorsque l'ennemie n'est pas un boss
			timer.style.display = "none";
			fondTimer.style.display = "none";
		}
	}

	// Calcule se que le joueur reçois du monstre qu'il vient de tuer
	gain() {
		return Math.floor(Math.random() * (this.argentMax - this.argentMin + 1)) + this.argentMin;
	}
}
function animationVie() {
	barVie = gsap.to(PV, {
		duration: 1,
		width: HPLeft + "%",
		overwrite: "auto",
	});
}

// function permettant de voir quelle monstre faire apparaitre dans chaque zone
const zoneDeClick = document.getElementById("zoneDeClick");
class Zone {
	constructor(numeroZone, couleurZone, deblocageZone, zoneDebloquer) {
		this.numeroZone = numeroZone;
		this.couleurZone = couleurZone;
		this.deblocageZone = deblocageZone;
		this.zoneDebloquer = zoneDebloquer;
		this.nombreDeMonstreTuee = 0;

		this.monstre = []; // tableau regroupant tous les monstres d'une zone
		this.nombreDeMonstre = 0;
	}

	addmonster(nom, vieMax, argentMin, argentMax, imageEnnemie, imageBlesser, tempsMax, isBoss) {
		this.monstre.push(new Ennemie(nom, vieMax, argentMin, argentMax, imageEnnemie, imageBlesser, tempsMax, isBoss));
		this.nombreDeMonstre++;
	}
}
function NombreZone() {
	this.tableauZone = []; // tableau regroupant toute les zones du jeu
	this.nombreDeZone = 0;
	this.zoneSelectionner;

	this.addZone = function (ZoneAjouter, couleurZone, deblocageZone, zoneDebloquer) {
		this.tableauZone.push(new Zone(ZoneAjouter, couleurZone, deblocageZone, zoneDebloquer));
		this.nombreDeZone++;
	};
}
function Respawn() {
	let ennemieRandom = Math.floor(Math.random() * (zoneActive.nombreDeMonstre - 1 + 1)) + 0;

	timeLeft = 100;
	colorRed = 0;
	colorGreen = 150;
	timer.style.width = timeLeft + "%";
	timer.style.backgroundColor = "rgb(" + colorRed + ", " + colorGreen + ", 0)";
	PV.style.width = HPLeft + "%";
	PV.style.backgroundColor = "#09c";
	PV.style.borderColor = "#09c";
	monstreAfficher = zoneActive.monstre[ennemieRandom];
	monster.src = monstreAfficher.imageEnnemie;
	animationVie();
	monstreAfficher.TempsRestant();
}
function changementZone(zone) {
	if (monstreAfficher != null) {
		clearInterval(monstreAfficher.TempsCombat);
		clearInterval(monstreAfficher.Animation);
		barVie.kill();
		monstreAfficher.vie = monstreAfficher.vieMax;
		timeLeft = monstreAfficher.temps = monstreAfficher.tempsMax;
		HPLeft = 100;
		nombreHP.innerText = monstreAfficher.vie;
	}

	lesZones.zoneSelectionner = zone.numeroZone;
	zoneActive = lesZones.tableauZone[lesZones.zoneSelectionner - 1];

	zoneDeClick.style.backgroundImage = zoneActive.couleurZone;
	Affichage();
	Respawn();
}
monster.addEventListener("click", function () {
	if (monstreAfficher.vie > 0) {
		nbrClick++;
		monstreAfficher.degats(puissanceClick * bonusClick);
	}
});
//====================================================================================//
// Initialisation Monstre
//====================================================================================//
let zoneActive = 0;
let lesZones = new NombreZone();
lesZones.addZone(1, "url(Image/Zone/Foret.jpeg)", 1, true);
lesZones.addZone(2, "url(Image/Zone/Plage.jpg)", false, false);

let blob = lesZones.tableauZone[0].addmonster(
	"Blob",
	20,
	2,
	10,
	"Image/Ennemie/Blob/Normal/Blob.png",
	"Image/Ennemie/Blob/Normal/Blob_Hit.png",
	2000,
	false
);
let blobEau = lesZones.tableauZone[0].addmonster(
	"Blob Eau",
	20,
	2,
	10,
	"Image/Ennemie/Blob/Eau/BlobEau.png",
	"Image/Ennemie/Blob/Eau/BlobEau_Hit.png",
	2000,
	false
);
let blobGlace = lesZones.tableauZone[0].addmonster(
	"Blob Glace",
	20,
	2,
	10,
	"Image/Ennemie/Blob/Glace/BlobGlace.png",
	"Image/Ennemie/Blob/Glace/BlobGlace_Hit.png",
	2000,
	false
);
let blobLumiere = lesZones.tableauZone[0].addmonster(
	"Blob Lumiere",
	20,
	2,
	10,
	"Image/Ennemie/Blob/Lumiere/BlobLumiere.png",
	"Image/Ennemie/Blob/Lumiere/BlobLumiere_Hit.png",
	2000,
	false
);

let blobSable = lesZones.tableauZone[0].addmonster(
	"Blob Sable",
	20,
	2,
	10,
	"Image/Ennemie/Blob/Sable/BlobSable.png",
	"Image/Ennemie/Blob/Sable/BlobSable_Hit.png",
	2000,
	true
);
let blobTenebre = lesZones.tableauZone[0].addmonster(
	"Blob Tenebre",
	20,
	2,
	10,
	"Image/Ennemie/Blob/Tenebre/BlobTenebre.png",
	"Image/Ennemie/Blob/Tenebre/BlobTenebre_Hit.png",
	2000,
	true
);

let blobElectrique = lesZones.tableauZone[1].addmonster(
	"Blob Electrique",
	40,
	10,
	20,
	"Image/Ennemie/Blob/Electrique/BlobElectrique.png",
	"Image/Ennemie/Blob/Electrique/BlobElectrique_Hit.png",
	2000,
	false
);
let blobLave = lesZones.tableauZone[1].addmonster(
	"Blob Lave",
	40,
	10,
	20,
	"Image/Ennemie/Blob/Lave/BlobLave.png",
	"Image/Ennemie/Blob/Lave/BlobLave_Hit.png",
	2000,
	false
);
let blobPoison = lesZones.tableauZone[1].addmonster(
	"Blob Poison",
	40,
	10,
	20,
	"Image/Ennemie/Blob/Poison/BlobPoison.png",
	"Image/Ennemie/Blob/Poison/BlobPoison_Hit.png",
	2000,
	false
);
let blobRoche = lesZones.tableauZone[1].addmonster(
	"Blob Roche",
	40,
	10,
	20,
	"Image/Ennemie/Blob/Roche/BlobRoche.png",
	"Image/Ennemie/Blob/Roche/BlobRoche_Hit.png",
	2000,
	true
);
let blobTerre = lesZones.tableauZone[1].addmonster(
	"Blob Terre",
	20,
	10,
	20,
	"Image/Ennemie/Blob/Terre/BlobTerre.png",
	"Image/Ennemie/Blob/Terre/BlobTerre_Hit.png",
	2000,
	true
);

//====================================================================================//
// Succes
//====================================================================================//
class Succes {
	constructor(nom, typeObjectif, objectif, textDescriptif, accomplis, recompense) {
		this.nom = nom;
		this.typeObjectif = typeObjectif;
		this.objectif = objectif;
		this.textDescriptif = textDescriptif;
		this.accomplis = accomplis;
		this.recompense = recompense;
	}

	accomplissement(objectifAtteint) {
		if (this.accomplis != true)
			if (objectifAtteint >= this.objectif) {
				this.accomplis = true;
				switch (this.typeObjectif) {
					case "click": // si le succes correspond au nombre de click
						bonusClick += this.recompense;
						break;
					case "monstreTuee":
					case "monstreTueeZone1":
					case "monstreTueeZone2": // si le succes correspond au nnombre de monstre tuée
						bonus1.bonusBonus += this.recompense;
						bonus2.bonusBonus += this.recompense;
						bonus3.bonusBonus += this.recompense;
						bonus4.bonusBonus += this.recompense;
						break;
					case "niveauClick": // si le succes correspond au niveau du click
						bonusClick += this.recompense;
						break;
					case "Bonus1": // si le succes correspond au niveau du bonus 1
						bonus1.bonusBonus += this.recompense;
						break;
					case "Bonus2": // si le succes correspond au niveau du bonus 2
						bonus2.bonusBonus += this.recompense;
						break;
					case "Bonus3": // si le succes correspond au niveau du bonus 3
						bonus3.bonusBonus += this.recompense;
						break;
					case "Bonus4": // si le succes correspond au niveau du bonus 4
						bonus4.bonusBonus += this.recompense;
						break;
				}
				Affichage();
			}
	}
}
function NombreSucces() {
	this.tableauSucces = []; // tableau regroupant toute les zones du jeu
	this.nombreDeSucces = 0;

	this.addSucces = function (nom, typeObjectif, objectif, textDescriptif, accomplis, recompense) {
		this.tableauSucces.push(new Succes(nom, typeObjectif, objectif, textDescriptif, accomplis, recompense));
		this.nombreDeSucces++;
	};
}
let menuDroitDemander = "Perso";
let CategorieSucces = "click";
const ecranDroit = document.getElementById("ecranDroit");
const btnEcranPerso = document.getElementById("btnEcranPerso");
const btnEcranSucces = document.getElementById("btnEcranSucces");
function affichageEcranDroit(menuDemander, couleurEcran) {
	menuDroitDemander = menuDemander;
	ecranDroit.innerHTML = "";
	ecranDroit.style.backgroundColor = couleurEcran;

	if (menuDroitDemander === "Succes") {
		ecranDroit.innerHTML = `<div class="btnCategorieSucces"><button id="btnCategorieClick"></button><button id="btnCategoriemonstreTuee"></button><button id="btnCategorieNiveauClick"></button><button id="btnCategorieBonus1"></button><button id="btnCategorieBonus2"></button><button id="btnCategorieBonus3"></button><button id="btnCategorieBonus4"></button></div><div id="menuCategorieSucces"></div>`;
		const menuCategorieSucces = document.getElementById("menuCategorieSucces");
		let btnCategorieClick = document.getElementById("btnCategorieClick");
		let btnCategorieSuccesActif = btnCategorieClick;
		btnCategorieClick.addEventListener("click", function () {
			menuCategorieSucces.innerHTML = "";
			CategorieSucces = "click";
			btnCategorieSuccesActif.style.height = 100 + "%";
			btnCategorieSuccesActif.style.backgroundColor = "rgb(97, 95, 93)";
			btnCategorieSuccesActif = btnCategorieClick;
			btnCategorieSuccesActif.style.height = 105 + "%";
			btnCategorieSuccesActif.style.backgroundColor = "#179751";
			preAffichageSucces();
		});
		let btnCategoriemonstreTuee = document.getElementById("btnCategoriemonstreTuee");
		btnCategoriemonstreTuee.addEventListener("click", function () {
			menuCategorieSucces.innerHTML = "";
			CategorieSucces = "monstreTuee";
			btnCategorieSuccesActif.style.height = 100 + "%";
			btnCategorieSuccesActif.style.backgroundColor = "rgb(97, 95, 93)";
			btnCategorieSuccesActif = btnCategoriemonstreTuee;
			btnCategorieSuccesActif.style.height = 105 + "%";
			btnCategorieSuccesActif.style.backgroundColor = "#179751";
			preAffichageSucces();
		});
		let btnCategorieNiveauClick = document.getElementById("btnCategorieNiveauClick");
		btnCategorieNiveauClick.addEventListener("click", function () {
			menuCategorieSucces.innerHTML = "";
			CategorieSucces = "niveauClick";
			btnCategorieSuccesActif.style.height = 100 + "%";
			btnCategorieSuccesActif.style.backgroundColor = "rgb(97, 95, 93)";
			btnCategorieSuccesActif = btnCategorieNiveauClick;
			btnCategorieSuccesActif.style.height = 105 + "%";
			btnCategorieSuccesActif.style.backgroundColor = "#179751";
			preAffichageSucces();
		});
		let btnCategorieBonus1 = document.getElementById("btnCategorieBonus1");
		btnCategorieBonus1.addEventListener("click", function () {
			menuCategorieSucces.innerHTML = "";
			CategorieSucces = "Bonus1";
			btnCategorieSuccesActif.style.height = 100 + "%";
			btnCategorieSuccesActif.style.backgroundColor = "rgb(97, 95, 93)";
			btnCategorieSuccesActif = btnCategorieBonus1;
			btnCategorieSuccesActif.style.height = 105 + "%";
			btnCategorieSuccesActif.style.backgroundColor = "#179751";
			preAffichageSucces();
		});
		let btnCategorieBonus2 = document.getElementById("btnCategorieBonus2");
		btnCategorieBonus2.addEventListener("click", function () {
			menuCategorieSucces.innerHTML = "";
			CategorieSucces = "Bonus2";
			btnCategorieSuccesActif.style.height = 100 + "%";
			btnCategorieSuccesActif.style.backgroundColor = "rgb(97, 95, 93)";
			btnCategorieSuccesActif = btnCategorieBonus2;
			btnCategorieSuccesActif.style.height = 105 + "%";
			btnCategorieSuccesActif.style.backgroundColor = "#179751";
			preAffichageSucces();
		});
		let btnCategorieBonus3 = document.getElementById("btnCategorieBonus3");
		btnCategorieBonus3.addEventListener("click", function () {
			menuCategorieSucces.innerHTML = "";
			CategorieSucces = "Bonus3";
			btnCategorieSuccesActif.style.height = 100 + "%";
			btnCategorieSuccesActif.style.backgroundColor = "rgb(97, 95, 93)";
			btnCategorieSuccesActif = btnCategorieBonus3;
			btnCategorieSuccesActif.style.height = 105 + "%";
			btnCategorieSuccesActif.style.backgroundColor = "#179751";
			preAffichageSucces();
		});
		let btnCategorieBonus4 = document.getElementById("btnCategorieBonus4");
		btnCategorieBonus4.addEventListener("click", function () {
			menuCategorieSucces.innerHTML = "";
			CategorieSucces = "Bonus4";
			btnCategorieSuccesActif.style.height = 100 + "%";
			btnCategorieSuccesActif.style.backgroundColor = "rgb(97, 95, 93)";
			btnCategorieSuccesActif = btnCategorieBonus4;
			btnCategorieSuccesActif.style.height = 105 + "%";
			btnCategorieSuccesActif.style.backgroundColor = "#179751";
			preAffichageSucces();
		});
		preAffichageSucces();
	}
}
function preAffichageSucces() {
	if (CategorieSucces != "monstreTuee") {
		for (let i = 0; i < lesSucces.tableauSucces.length; i++) {
			if (lesSucces.tableauSucces[i].typeObjectif === CategorieSucces) affichageSucces(lesSucces.tableauSucces[i]);
		}
	} else {
		for (let i = 0; i < lesSucces.tableauSucces.length; i++) {
			if (
				lesSucces.tableauSucces[i].typeObjectif === "monstreTuee" ||
				lesSucces.tableauSucces[i].typeObjectif === "monstreTueeZone1" ||
				lesSucces.tableauSucces[i].typeObjectif === "monstreTueeZone2"
			)
				affichageSucces(lesSucces.tableauSucces[i]);
		}
	}
}
function affichageSucces(succes) {
	// affiche les dégats infligé par chaque bonus indépendament (si il on au minimum 1 d'attaque)
	if (succes.accomplis === true) {
		const fichesSucces = document.createElement("article");
		fichesSucces.setAttribute("class", "fichesSucces");
		const ImgSucces = document.createElement("img");
		ImgSucces.setAttribute("class", "ImgSucces");
		ImgSucces.src = "Image/Ennemie/Blob/Normal/Blob.png";

		const textSucces = document.createElement("p");
		textSucces.innerText = `${succes.textDescriptif}`;

		menuCategorieSucces.appendChild(fichesSucces);
		fichesSucces.appendChild(ImgSucces);
		fichesSucces.appendChild(textSucces);
	}
}

setInterval(VerificationSuccesAccomplie, 1000);
function VerificationSuccesAccomplie() {
	for (let i = 0; i < lesSucces.tableauSucces.length; i++) {
		switch (lesSucces.tableauSucces[i].typeObjectif) {
			case "click": // si le succes correspond au nombre de click
				lesSucces.tableauSucces[i].accomplissement(nbrClick);
				break;
			case "monstreTuee": // si le succes correspond au nombre de click
				lesSucces.tableauSucces[i].accomplissement(nombreDeMonstreTueeTotal);
				break;
			case "monstreTueeZone1": // si le succes correspond au nombre de click
				lesSucces.tableauSucces[i].accomplissement(lesZones.tableauZone[0].nombreDeMonstreTuee);
				break;
			case "monstreTueeZone2": // si le succes correspond au nombre de click
				lesSucces.tableauSucces[i].accomplissement(lesZones.tableauZone[1].nombreDeMonstreTuee);
				break;
			case "niveauClick": // si le succes correspond au niveau du click
				lesSucces.tableauSucces[i].accomplissement(niveauClick);
				break;
			case "Bonus1": // si le succes correspond au niveau du bonus 1
				lesSucces.tableauSucces[i].accomplissement(bonus1.NiveauB);
				break;
			case "Bonus2": // si le succes correspond au niveau du bonus 2
				lesSucces.tableauSucces[i].accomplissement(bonus2.NiveauB);
				break;
			case "Bonus3": // si le succes correspond au niveau du bonus 3
				lesSucces.tableauSucces[i].accomplissement(bonus3.NiveauB);
				break;
			case "Bonus4": // si le succes correspond au niveau du bonus 4
				lesSucces.tableauSucces[i].accomplissement(bonus4.NiveauB);
				break;
		}
	}
}

// initialise les Succes
let lesSucces = new NombreSucces();
/********************************************/
/* 				Succes Click				*/
/********************************************/
lesSucces.addSucces("Premier Click", "click", 1, "Fais ton premier Click", false, 0.1);
lesSucces.addSucces("100 Click", "click", 100, "Fais 100 Click", false, 0.1);
/********************************************/
/* 			Succes Monstre Tuée				*/
/********************************************/
lesSucces.addSucces("100 Monstre Tuée", "monstreTuee", 100, "Tuée 100 monstre", false, 0.1);
lesSucces.addSucces("Debut de l'aventure", "monstreTueeZone1", 15, "Tuée 15 monstre dans la zone 1", false, 0.1);
lesSucces.addSucces("Videur de plage", "monstreTueeZone2", 50, "Tuée 50 monstre dans la zone 2", false, 0.1);
/********************************************/
/*          Succes Niveau Click				*/
/********************************************/
lesSucces.addSucces("Dague en Bois", "niveauClick", 15, "Débloque la dague en bois", false, 0.1);
lesSucces.addSucces("Epee en bois", "niveauClick", 30, "Débloque l'épée en bois", false, 0.1);
lesSucces.addSucces("Dague en pierre", "niveauClick", 50, "Débloque la dague en pierre", false, 0.2);
lesSucces.addSucces("Epee en pierre", "niveauClick", 100, "Débloque l'épée en pierre", false, 0.2);
/********************************************/
/* 				Succes Bonus 1				*/
/********************************************/
lesSucces.addSucces("Bonus1 Niveau 25", "Bonus1", 25, "Amélioré 25 fois le Bonus 1", false, 0.1);
lesSucces.addSucces("Bonus1 Niveau 150", "Bonus1", 150, "Amélioré 150 fois le Bonus 1", false, 0.1);
/********************************************/
/* 				Succes Bonus 2				*/
/********************************************/
lesSucces.addSucces("Bonus2 Niveau 50", "Bonus2", 50, "Amélioré 50 fois le Bonus 2", false, 0.1);
lesSucces.addSucces("Bonus2 Niveau 200", "Bonus2", 200, "Amélioré 200 fois le Bonus 2", false, 0.2);
/********************************************/
/* 				Succes Bonus 3				*/
/********************************************/
lesSucces.addSucces("Bonus3 Niveau 100", "Bonus3", 100, "Amélioré 100 fois le Bonus 3", false, 0.1);
/********************************************/
/* 				Succes Bonus 4				*/
/********************************************/
lesSucces.addSucces("Bonus Niveau 20", "Bonus4", 20, "Amélioré 20 fois le Bonus 4", false, 0.1);
lesSucces.addSucces("Bonus4 Niveau 100", "Bonus4", 100, "Amélioré 100 fois le Bonus 4", false, 0.1);

btnEcranPerso.addEventListener("click", function () {
	affichageEcranDroit("Perso", "#179782");
});
btnEcranSucces.addEventListener("click", function () {
	affichageEcranDroit("Succes", "#179751");
});

//====================================================================================//
// Connexion a la session
//====================================================================================//
let argent;
let nbrClick;
let niveauClick;
let niveauRank;
let rankArme;
let ImgArme;
let puissanceClick;
let bonusClick;
let coutBtnUpgrade;
let augmentationPuissanceClick;
let zoneAtteinte;
let nombreDeMonstreTueeTotal;

let bonus1;
let bonus2;
let bonus3;
let bonus4;
let monstreAfficher;

let Succes1Accomplis;
let Succes2Accomplis;
let Succes3Accomplis;
let Succes4Accomplis;
let Succes5Accomplis;
let Succes6Accomplis;
let Succes7Accomplis;
let Succes8Accomplis;
let Succes9Accomplis;
let Succes10Accomplis;
let Succes11Accomplis;
let Succes12Accomplis;
let Succes13Accomplis;
let Succes14Accomplis;
let Succes15Accomplis;
let Succes16Accomplis;

// Vérifie si un compte existe déjà
if (connexion === null) {
	//******************************************************//
	//	Le compte n'existe pas initialise toute les données	//
	//******************************************************//
	argent = 2000000;
	nbrClick = 0;
	niveauClick = 0;
	niveauRank = 0;
	rankArme = "Bâton";
	ImgArme = "Image/Item/Baton.png";
	puissanceClick = 1;
	bonusClick = 1;
	coutBtnUpgrade = 15;
	augmentationPuissanceClick = 0.1;
	zoneAtteinte = 0;
	nombreDeMonstreTueeTotal = 0;

	// Initialise tous les bonus
	bonus1 = new Bonus("bonus1", document.getElementById("btnBonus1"), 0, 0, 1, 20, 0.1, 1.5, false);
	bonus2 = new Bonus("bonus2", document.getElementById("btnBonus2"), 0, 0, 1, 50, 0.2, 1.75, false);
	bonus3 = new Bonus("bonus3", document.getElementById("btnBonus3"), 0, 0, 1, 100, 0.5, 2, false);
	bonus4 = new Bonus("bonus4", document.getElementById("btnBonus4"), 0, 0, 1, 250, 1, 5, false);

	Succes1Accomplis = false;
	Succes2Accomplis = false;
	Succes3Accomplis = false;
	Succes4Accomplis = false;
	Succes5Accomplis = false;
	Succes6Accomplis = false;
	Succes7Accomplis = false;
	Succes8Accomplis = false;
	Succes9Accomplis = false;
	Succes10Accomplis = false;
	Succes11Accomplis = false;
	Succes12Accomplis = false;
	Succes13Accomplis = false;
	Succes14Accomplis = false;
	Succes15Accomplis = false;
	Succes16Accomplis = false;
} else {
	//**********************************************//
	//  Le compte existe récupéré les informations	//
	//**********************************************//
	connexion = JSON.parse(connexion);
	argent = connexion.argent;
	nbrClick = connexion.nbrClick;

	niveauClick = connexion.niveauClick;
	niveauRank = connexion.niveauRank;
	rankArme = connexion.rankArme;
	ImgArme = connexion.ImgArme;

	puissanceClick = connexion.puissanceClick;
	bonusClick = connexion.bonusClick;
	augmentationPuissanceClick = connexion.augmentationPuissanceClick;
	coutBtnUpgrade = connexion.coutBtnUpgrade;
	zoneAtteinte = connexion.zoneAtteinte;
	lesZones.tableauZone[0].zoneDebloquer = connexion.zoneDebloquerZone1;
	lesZones.tableauZone[0].nombreDeMonstreTuee = connexion.nombreDeMonstreTueeZone1;
	lesZones.tableauZone[1].zoneDebloquer = connexion.zoneDebloquerZone2;
	lesZones.tableauZone[1].nombreDeMonstreTuee = connexion.nombreDeMonstreTueeZone2;
	nombreDeMonstreTueeTotal = connexion.nombreDeMonstreTueeTotal;

	// Si le compte existe vérifie si les bonus sont débloqué
	if (connexion.actif1 === true) {
		// Le bonus 1 a était débloqué
		bonus1 = new Bonus(
			"bonus1",
			document.getElementById("btnBonus1"),
			connexion.NiveauBonus1,
			connexion.puissanceBonus1,
			connexion.bonusBonus1,
			connexion.coutBonus1,
			0.1,
			1.5,
			connexion.actif1
		);
	} else {
		// Le bonus 1 n'a pas était débloqué
		bonus1 = new Bonus("bonus1", document.getElementById("btnBonus1"), 0, 0, 1, 20, 0.1, 1.5, false);
	}

	if (connexion.actif2 === true) {
		// Le bonus 2 a était acheté
		bonus2 = new Bonus(
			"bonus2",
			document.getElementById("btnBonus2"),
			connexion.NiveauBonus2,
			connexion.puissanceBonus2,
			connexion.bonusBonus2,
			connexion.coutBonus2,
			0.2,
			1.75,
			connexion.actif2
		);
	} else {
		// Le bonus 2 n'a pas était acheté
		bonus2 = new Bonus("bonus2", document.getElementById("btnBonus2"), 0, 0, 1, 50, 0.2, 1.75, false);
	}
	if (connexion.actif3 === true) {
		// Le bonus 3 a était acheté
		bonus3 = new Bonus(
			"bonus3",
			document.getElementById("btnBonus3"),
			connexion.NiveauBonus3,
			connexion.puissanceBonus3,
			connexion.bonusBonus3,
			connexion.coutBonus3,
			0.5,
			2,
			connexion.actif3
		);
	} else {
		// Le bonus 3 n'a pas était acheté
		bonus3 = new Bonus("bonus3", document.getElementById("btnBonus3"), 0, 0, 1, 100, 0.5, 2, false);
	}
	if (connexion.actif4 === true) {
		// Le bonus 3 a était acheté
		bonus4 = new Bonus(
			"bonus4",
			document.getElementById("btnBonus4"),
			connexion.NiveauBonus4,
			connexion.puissanceBonus4,
			connexion.bonusBonus4,
			connexion.coutBonus4,
			1,
			5,
			connexion.actif4
		);
	} else {
		// Le bonus 3 n'a pas était acheté
		bonus4 = new Bonus("bonus4", document.getElementById("btnBonus4"), 0, 0, 1, 250, 1, 5, false);
	}

	lesSucces.tableauSucces[0].accomplis = connexion.Succes1Accomplis;
	lesSucces.tableauSucces[1].accomplis = connexion.Succes2Accomplis;
	lesSucces.tableauSucces[2].accomplis = connexion.Succes3Accomplis;
	lesSucces.tableauSucces[3].accomplis = connexion.Succes4Accomplis;
	lesSucces.tableauSucces[4].accomplis = connexion.Succes5Accomplis;
	lesSucces.tableauSucces[5].accomplis = connexion.Succes6Accomplis;
	lesSucces.tableauSucces[6].accomplis = connexion.Succes7Accomplis;
	lesSucces.tableauSucces[7].accomplis = connexion.Succes8Accomplis;
	lesSucces.tableauSucces[8].accomplis = connexion.Succes9Accomplis;
	lesSucces.tableauSucces[9].accomplis = connexion.Succes10Accomplis;
	lesSucces.tableauSucces[10].accomplis = connexion.Succes11Accomplis;
	lesSucces.tableauSucces[11].accomplis = connexion.Succes12Accomplis;
	lesSucces.tableauSucces[12].accomplis = connexion.Succes13Accomplis;
	lesSucces.tableauSucces[13].accomplis = connexion.Succes14Accomplis;
	lesSucces.tableauSucces[14].accomplis = connexion.Succes15Accomplis;
	lesSucces.tableauSucces[15].accomplis = connexion.Succes16Accomplis;
}

// Attend le click sur les bouton de bonus
bonus1.btnB.addEventListener("click", function () {
	bonus1.ClickBtn();
});
bonus2.btnB.addEventListener("click", function () {
	bonus2.ClickBtn();
});
bonus3.btnB.addEventListener("click", function () {
	bonus3.ClickBtn();
});
bonus4.btnB.addEventListener("click", function () {
	bonus4.ClickBtn();
});

changementZone(lesZones.tableauZone[zoneAtteinte]); // Fait spawn le premier monstre
nombreHP.innerText = monstreAfficher.vieMax;
setInterval(frappeBonus, 1000);
Affichage(); // Affiche la page

// Permet de récupéré les information a sauvegarder dans le localStorage afin de pouvoir récupéré les information la prochaine fois
let sauvegardeAuto = setInterval(() => {
	const compte = {
		argent: argent, // Sauvegarde Argent Possédé

		// Sauvegarde Information Click
		nbrClick: nbrClick,
		niveauClick: niveauClick,
		niveauRank: niveauRank,
		rankArme: rankArme,
		ImgArme: ImgArme,
		puissanceClick: puissanceClick,
		bonusClick: bonusClick,
		augmentationPuissanceClick: augmentationPuissanceClick,
		coutBtnUpgrade: coutBtnUpgrade,
		zoneAtteinte: zoneAtteinte,
		zoneDebloquerZone1: lesZones.tableauZone[0].zoneDebloquer,
		nombreDeMonstreTueeZone1: lesZones.tableauZone[0].nombreDeMonstreTuee,
		zoneDebloquerZone2: lesZones.tableauZone[1].zoneDebloquer,
		nombreDeMonstreTueeZone2: lesZones.tableauZone[1].nombreDeMonstreTuee,
		nombreDeMonstreTueeTotal: nombreDeMonstreTueeTotal,

		// Sauvegarde Bonus 1
		actif1: bonus1.actifB,
		NiveauBonus1: bonus1.NiveauB,
		puissanceBonus1: bonus1.puissanceB,
		bonusBonus1: bonus1.bonusBonus,
		coutBonus1: bonus1.coutB,

		// Sauvegarde Bonus 2
		actif2: bonus2.actifB,
		NiveauBonus2: bonus2.NiveauB,
		puissanceBonus2: bonus2.puissanceB,
		bonusBonus2: bonus2.bonusBonus,
		coutBonus2: bonus2.coutB,

		// Sauvegarde Bonus 3
		actif3: bonus3.actifB,
		NiveauBonus3: bonus3.NiveauB,
		puissanceBonus3: bonus3.puissanceB,
		bonusBonus3: bonus3.bonusBonus,
		coutBonus3: bonus3.coutB,

		// Sauvegarde Bonus 4
		actif4: bonus4.actifB,
		NiveauBonus4: bonus4.NiveauB,
		puissanceBonus4: bonus4.puissanceB,
		bonusBonus4: bonus4.bonusBonus,
		coutBonus4: bonus4.coutB,

		Succes1Accomplis: lesSucces.tableauSucces[0].accomplis,
		Succes2Accomplis: lesSucces.tableauSucces[1].accomplis,
		Succes3Accomplis: lesSucces.tableauSucces[2].accomplis,
		Succes4Accomplis: lesSucces.tableauSucces[3].accomplis,
		Succes5Accomplis: lesSucces.tableauSucces[4].accomplis,
		Succes6Accomplis: lesSucces.tableauSucces[5].accomplis,
		Succes7Accomplis: lesSucces.tableauSucces[6].accomplis,
		Succes8Accomplis: lesSucces.tableauSucces[7].accomplis,
		Succes9Accomplis: lesSucces.tableauSucces[8].accomplis,
		Succes10Accomplis: lesSucces.tableauSucces[9].accomplis,
		Succes11Accomplis: lesSucces.tableauSucces[10].accomplis,
		Succes12Accomplis: lesSucces.tableauSucces[11].accomplis,
		Succes13Accomplis: lesSucces.tableauSucces[12].accomplis,
		Succes14Accomplis: lesSucces.tableauSucces[13].accomplis,
		Succes15Accomplis: lesSucces.tableauSucces[14].accomplis,
		Succes16Accomplis: lesSucces.tableauSucces[15].accomplis,
	};

	window.localStorage.setItem("compte", JSON.stringify(compte));

	let DonneeCompte = window.localStorage.getItem("DonneeCompte");
	DonneeCompte = JSON.parse(DonneeCompte);
	if (DonneeCompte != null) {
		let stat = window.localStorage.getItem("compte");
		let MajDonnee;

		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			MajDonnee = new XMLHttpRequest();
		} else {
			// code for IE6, IE5
			MajDonnee = new ActiveXObject("Microsoft.XMLHTTP");
		}
		MajDonnee.onreadystatechange = function () {
			if (MajDonnee.readyState == 4 && MajDonnee.status == 200) {
				MajDonnee = JSON.parse(MajDonnee.responseText);
				window.localStorage.setItem("DonneeCompte", JSON.stringify(MajDonnee));
			}
		};
		MajDonnee.open("GET", "majDonnee.php?Pseudo=" + DonneeCompte.Pseudo + "&Donnee=" + stat, true);
		MajDonnee.send();
	}
}, 1000);

export function recuperationDonneeCompte() {
	let recupDonneeCompte = window.localStorage.getItem("DonneeCompte");
	recupDonneeCompte = JSON.parse(recupDonneeCompte);

	argent = Number(recupDonneeCompte.argent);
	nbrClick = Number(recupDonneeCompte.nbrClick);

	niveauClick = Number(recupDonneeCompte.niveauClick);
	niveauRank = Number(recupDonneeCompte.niveauRank);
	rankArme = Number(recupDonneeCompte.rankArme);
	ImgArme = recupDonneeCompte.ImgArme;

	puissanceClick = Number(recupDonneeCompte.puissanceClick);
	bonusClick = Number(recupDonneeCompte.bonusClick);
	augmentationPuissanceClick = Number(recupDonneeCompte.augmentationPuissanceClick);
	coutBtnUpgrade = Number(recupDonneeCompte.coutBtnUpgrade);
	zoneAtteinte = Number(recupDonneeCompte.zoneAtteinte);
	lesZones.tableauZone[0].zoneDebloquer = Number(recupDonneeCompte.zoneDebloquerZone1);
	lesZones.tableauZone[0].nombreDeMonstreTuee = Number(recupDonneeCompte.nombreDeMonstreTueeZone1);
	lesZones.tableauZone[1].zoneDebloquer = Number(recupDonneeCompte.zoneDebloquerZone2);
	lesZones.tableauZone[1].nombreDeMonstreTuee = Number(recupDonneeCompte.nombreDeMonstreTueeZone2);
	nombreDeMonstreTueeTotal = Number(recupDonneeCompte.nombreDeMonstreTueeTotal);

	// Si le compte existe vérifie si les bonus sont débloqué
	if (recupDonneeCompte.actif1 === true) {
		// Le bonus 1 a était débloqué
		bonus1.NiveauB = Number(recupDonneeCompte.NiveauBonus1);
		bonus1.puissanceB = Number(recupDonneeCompte.puissanceBonus1);
		bonus1.bonusBonus = Number(recupDonneeCompte.bonusBonus1);
		bonus1.coutB = Number(recupDonneeCompte.coutBonus1);
		bonus1.actifB = recupDonneeCompte.actif1;
	}
	if (recupDonneeCompte.actif2 === true) {
		// Le bonus 2 a était débloqué
		bonus2.NiveauB = Number(recupDonneeCompte.NiveauBonus2);
		bonus2.puissanceB = Number(recupDonneeCompte.puissanceBonus2);
		bonus2.bonusBonus = Number(recupDonneeCompte.bonusBonus2);
		bonus2.coutB = Number(recupDonneeCompte.coutBonus2);
		bonus2.actifB = recupDonneeCompte.actif2;
	}

	if (recupDonneeCompte.actif3 === true) {
		// Le bonus 3 a était débloqué
		bonus3.NiveauB = Number(recupDonneeCompte.NiveauBonus3);
		bonus3.puissanceB = Number(recupDonneeCompte.puissanceBonus3);
		bonus3.bonusBonus = Number(recupDonneeCompte.bonusBonus3);
		bonus3.coutB = Number(recupDonneeCompte.coutBonus3);
		bonus3.actifB = recupDonneeCompte.actif3;
	}
	if (recupDonneeCompte.actif4 === true) {
		// Le bonus 4 a était débloqué
		bonus4.NiveauB = Number(recupDonneeCompte.NiveauBonus4);
		bonus4.puissanceB = Number(recupDonneeCompte.puissanceBonus4);
		bonus4.bonusBonus = Number(recupDonneeCompte.bonusBonus4);
		bonus4.coutB = Number(recupDonneeCompte.coutBonus4);
		bonus4.actifB = recupDonneeCompte.actif4;
	}

	lesSucces.tableauSucces[0].accomplis = recupDonneeCompte.Succes1Accomplis;
	lesSucces.tableauSucces[1].accomplis = recupDonneeCompte.Succes2Accomplis;
	lesSucces.tableauSucces[2].accomplis = recupDonneeCompte.Succes3Accomplis;
	lesSucces.tableauSucces[3].accomplis = recupDonneeCompte.Succes4Accomplis;
	lesSucces.tableauSucces[4].accomplis = recupDonneeCompte.Succes5Accomplis;
	lesSucces.tableauSucces[5].accomplis = recupDonneeCompte.Succes6Accomplis;
	lesSucces.tableauSucces[6].accomplis = recupDonneeCompte.Succes7Accomplis;
	lesSucces.tableauSucces[7].accomplis = recupDonneeCompte.Succes8Accomplis;
	lesSucces.tableauSucces[8].accomplis = recupDonneeCompte.Succes9Accomplis;
	lesSucces.tableauSucces[9].accomplis = recupDonneeCompte.Succes10Accomplis;
	lesSucces.tableauSucces[10].accomplis = recupDonneeCompte.Succes11Accomplis;
	lesSucces.tableauSucces[11].accomplis = recupDonneeCompte.Succes12Accomplis;
	lesSucces.tableauSucces[12].accomplis = recupDonneeCompte.Succes13Accomplis;
	lesSucces.tableauSucces[13].accomplis = recupDonneeCompte.Succes14Accomplis;
	lesSucces.tableauSucces[14].accomplis = recupDonneeCompte.Succes15Accomplis;
	lesSucces.tableauSucces[15].accomplis = recupDonneeCompte.Succes16Accomplis;
}
