import { recuperationDonneeCompte } from "./index.js";
// Récupère les données de l'utilisateur
let DonneeCompte = window.localStorage.getItem("DonneeCompte");
if (DonneeCompte != null) {
	DonneeCompte = JSON.parse(DonneeCompte);
}

// Get the button that opens the modal
var btnCompte = document.getElementById("btnCompte");
if (DonneeCompte === null) {
	btnCompte.addEventListener("click", menuCompte);
} else {
	btnCompte.addEventListener("click", menuConnexionCompte);
}

let menuAfficher = "connexion";

const ecranDroit = document.getElementById("ecranDroit");

// When the user clicks the button, open the modal
function menuCompte() {
	ecranDroit.innerHTML = ``;
	if (menuAfficher != "deconnexion") {
		if (menuAfficher === "connexion") {
			ecranDroit.innerHTML = `
			<!-- Connection -->
			<div id="partieConnection">
				<h1>Connexion</h1>
	
				<div class="formulaireConnexion">
					<label for="CPseudo">Identifiant:</label>
					<input type="text" name="CPseudo" id="CPseudo" />
					<label for="CPseudo">Mot de passe:</label>
					<input type="password" name="CMDP" id="CMDP" />
					<label id="erreur"></label>
					<button id="btnConnexion">Se Connecter</button>
				</div>
				<button id="changementPage">Crée un compte</button>
			</div>
			<!-- Fin Connection -->
			`;
			let btnConnexion = document.getElementById("btnConnexion");
			btnConnexion.addEventListener("click", connexionCompte);
			let btnChangementPage = document.getElementById("changementPage");
			btnChangementPage.addEventListener("click", function () {
				menuAfficher = "inscription";
				menuCompte();
			});
		} else {
			ecranDroit.innerHTML = `
			<!-- Inscription -->
			<div id="partieInscription">
					<h1>Crée un Compte</h1> 
	
				<div class="formulaireInscription">
					<label for="IPseudo">Pseudo:</label>
					<input type="text" name="IPseudo" id="IPseudo"/>
	
					<label for="IEmail">Adresse mail:</label>
					<input type="Iemail" name="IEmail" id="IEmail"/>
	
					<label for="IMDP">Mot de passe:</label>
					<input type="password" name="IMDP" id="IMDP"/>
	
					<label for="cIMDP" id="labelcIMDP">Confirmer mot de passe:</label>
					<input type="password" name="cIMDP" id="cIMDP"/>
	
					<label id="erreur"></label>
					<button id="btnInscription"> Inscription </button>
				</div>
				<button id="changementPage"> Je possède déjà un compte </button>
			</div>
			<!-- Fin Inscription -->
		`;
			let btnInscription = document.getElementById("btnInscription");
			btnInscription.addEventListener("click", inscriptionCompte);
			let btnChangementPage = document.getElementById("changementPage");
			btnChangementPage.addEventListener("click", function () {
				menuAfficher = "connexion";
				menuCompte();
			});
		}
	} else {
		ecranDroit.innerHTML =
			`<!-- Deconnexion -->
	<div id="partieDeconnexion">
			<h1>Bienvenue ` +
			DonneeCompte.Pseudo +
			`</h1>
		<div class="formulaireConnexion">
			<button id="btnDeconnexion">Se Deconnecter</button>
		</div>
	</div>
	<!-- Fin Connection -->`;
		let btnDeconnexion = document.getElementById("btnDeconnexion");
		btnDeconnexion.addEventListener("click", function () {
			localStorage.clear();
			menuAfficher = "connexion";
			menuCompte();
		});
	}
}

function inscriptionCompte() {
	let infoCompte;
	let IPseudo = document.getElementById("IPseudo").value;
	let IEmail = document.getElementById("IEmail").value;
	let IMDP = document.getElementById("IMDP").value;
	let cIMDP = document.getElementById("cIMDP").value;
	let Donnee = window.localStorage.getItem("compte");
	document.getElementById("erreur").innerHTML = "";

	if (IPseudo == "" || IEmail == "" || IMDP == "" || cIMDP == "") {
		document.getElementById("erreur").innerHTML =
			"Les champs ne sont pas tous remplis !";
	} else {
		if (IMDP === cIMDP) {
			if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				infoCompte = new XMLHttpRequest();
			} else {
				// code for IE6, IE5
				infoCompte = new ActiveXObject("Microsoft.XMLHTTP");
			}
			infoCompte.onreadystatechange = function () {
				if (infoCompte.readyState == 4 && infoCompte.status == 200) {
					if (
						infoCompte.responseText != "Les champs ne sont pas tous remplis."
					) {
						if (infoCompte.responseText != "Erreur Email") {
							if (infoCompte.responseText != "Erreur Pseudo") {
								menuAfficher = "connexion";
								menuCompte();
								document.getElementById("erreur").innerHTML =
									"Creation du compte réussi.";
							} else {
								document.getElementById("erreur").innerHTML =
									"Cette identifiant est deja utilisé.";
							}
						} else {
							document.getElementById("erreur").innerHTML =
								"L'adresse mail est deja utilisé.";
						}
					} else {
						document.getElementById("erreur").innerHTML =
							"Les champs ne sont pas tous remplis.";
					}
				}
			};
			infoCompte.open(
				"GET",
				"creeCompte.php?Pseudo=" +
					IPseudo +
					"&Email=" +
					IEmail +
					"&MDP=" +
					IMDP +
					"&Donnee=" +
					Donnee,
				true
			);
			infoCompte.send();
		} else {
			document.getElementById("labelcIMDP").innerText =
				"Les mots de passe ne correspondent pas";
		}
	}
}

function connexionCompte() {
	let infoCompte;
	let CPseudo = document.getElementById("CPseudo").value;
	let CMDP = document.getElementById("CMDP").value;
	document.getElementById("erreur").innerHTML = "";

	if (CPseudo == "" || CMDP == "") {
		document.getElementById("erreur").innerHTML =
			"Les champs ne sont pas tous remplis !";
	} else {
		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			infoCompte = new XMLHttpRequest();
		} else {
			// code for IE6, IE5
			infoCompte = new ActiveXObject("Microsoft.XMLHTTP");
		}
		infoCompte.onreadystatechange = function () {
			if (infoCompte.readyState == 4 && infoCompte.status == 200) {
				if (infoCompte.responseText != "Erreur Identifiant") {
					if (infoCompte.responseText != "Erreur MDP") {
						infoCompte = JSON.parse(infoCompte.responseText);
						window.localStorage.setItem(
							"DonneeCompte",
							JSON.stringify(infoCompte)
						);
						DonneeCompte = window.localStorage.getItem("DonneeCompte");
						DonneeCompte = JSON.parse(DonneeCompte);
						menuConnexionCompte();
					} else {
						document.getElementById("erreur").innerHTML =
							"Mot de passe incorrecte !";
					}
				} else {
					document.getElementById("erreur").innerHTML =
						"L'Identifiant n'existe pas !";
				}
			}
		};
		infoCompte.open(
			"GET",
			"connexion.php?Pseudo=" + CPseudo + "&MDP=" + CMDP,
			Array
		);
		infoCompte.send();
	}
}

function menuConnexionCompte() {
	if (DonneeCompte != null) {
		recuperationDonneeCompte();
		ecranDroit.innerHTML =
			`<!-- Deconnexion -->
        <div id="partieDeconnexion">
                <h1>Bienvenue ` +
			DonneeCompte.Pseudo +
			`</h1>
			<div class="formulaireConnexion">
				<button id="btnDeconnexion">Se Deconnecter</button>
			</div>
        </div>
        <!-- Fin Connection -->`;
		menuAfficher = "deconnexion";
		let btnDeconnexion = document.getElementById("btnDeconnexion");
		btnDeconnexion.addEventListener("click", function () {
			localStorage.clear();
			menuAfficher = "connexion";
			menuCompte();
		});
	}
}
