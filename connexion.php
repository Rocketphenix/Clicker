<?php
include 'database.php';

$Pseudo = $_GET["Pseudo"];
$MDP = $_GET["MDP"];

$q = $db->prepare("SELECT * FROM compteclicker WHERE Pseudo = :Pseudo");
$q->execute(['Pseudo' => $Pseudo]);
$result = $q->fetch();

if ($result == true) {
    $hashMDP = $result['MDP'];
    if (password_verify($MDP, $hashMDP)) {

        $g = $db->prepare("SELECT * FROM statcompte WHERE ID = :ID");
        $g->execute(['ID' => $result['ID']]);
        $resultStat = $g->fetch();

        $statistique = array("Pseudo" => $result['Pseudo'], "Argent" => $resultStat['argent'], "nbrClick" => $resultStat['nbrClick'], "niveauClick" => $resultStat['niveauClick'], "niveauRank" => $resultStat['niveauRank'], "rankArme" => $resultStat['rankArme'], "imgArme" => $resultStat['imgArme'], "puissanceClick" => $resultStat['puissanceClick'], "bonusClick" => $resultStat['bonusClick'], "augmentationPuissanceClick" => $resultStat['augmentationPuissanceClick'], "coutBtnUpgrade" => $resultStat['coutBtnUpgrade'], "zoneAtteinte" => $resultStat['zoneAtteinte'], "zoneDebloquerZone1" => $resultStat['zoneDebloquerZone1'], "nombreDeMonstreTueeZone1" => $resultStat['nombreDeMonstreTueeZone1'], "zoneDebloquerZone2" => $resultStat['zoneDebloquerZone2'], "nombreDeMonstreTueeZone2" => $resultStat['nombreDeMonstreTueeZone2'], "nombreDeMonstreTueeTotal" => $resultStat['nombreDeMonstreTueeTotal'], "actif1" => $resultStat['actif1'], "NiveauBonus1" => $resultStat['NiveauBonus1'], "puissanceBonus1" => $resultStat['puissanceBonus1'], "bonusBonus1" => $resultStat['bonusBonus1'], "coutBonus1" => $resultStat['coutBonus1'], "actif2" => $resultStat['actif2'], "NiveauBonus2" => $resultStat['NiveauBonus2'], "puissanceBonus2" => $resultStat['puissanceBonus2'], "bonusBonus2" => $resultStat['bonusBonus2'], "coutBonus2" => $resultStat['coutBonus2'], "actif3" => $resultStat['actif3'], "NiveauBonus3" => $resultStat['NiveauBonus3'], "puissanceBonus3" => $resultStat['puissanceBonus3'], "bonusBonus3" => $resultStat['bonusBonus3'], "coutBonus3" => $resultStat['coutBonus3'], "actif4" => $resultStat['actif4'], "NiveauBonus4" => $resultStat['NiveauBonus4'], "puissanceBonus4" => $resultStat['puissanceBonus4'], "bonusBonus4" => $resultStat['bonusBonus4'], "coutBonus4" => $resultStat['coutBonus4'], "Succes1Accomplis" => $resultStat['Succes1Accomplis'], "Succes2Accomplis" => $resultStat['Succes2Accomplis'], "Succes3Accomplis" => $resultStat['Succes3Accomplis'], "Succes4Accomplis" => $resultStat['Succes4Accomplis'], "Succes5Accomplis" => $resultStat['Succes5Accomplis'], "Succes6Accomplis" => $resultStat['Succes6Accomplis'], "Succes7Accomplis" => $resultStat['Succes7Accomplis'], "Succes8Accomplis" => $resultStat['Succes8Accomplis'], "Succes9Accomplis" => $resultStat['Succes9Accomplis'], "Succes10Accomplis" => $resultStat['Succes10Accomplis'], "Succes11Accomplis" => $resultStat['Succes11Accomplis'], "Succes12Accomplis" => $resultStat['Succes12Accomplis'], "Succes13Accomplis" => $resultStat['Succes13Accomplis'], "Succes14Accomplis" => $resultStat['Succes14Accomplis'], "Succes15Accomplis" => $resultStat['Succes15Accomplis'], "Succes16Accomplis" => $resultStat['Succes16Accomplis']);

        echo json_encode($statistique);
    } else {
        echo "Erreur MDP";
    }
} else {
    echo "Erreur Identifiant";
}
