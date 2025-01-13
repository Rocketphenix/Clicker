<?php
include 'database.php';

$Pseudo = $_GET["Pseudo"];
$Donnee = $_GET["Donnee"];

$q = $db->prepare("SELECT * FROM compteclicker WHERE Pseudo = :Pseudo");
$q->execute(['Pseudo' => $Pseudo]);
$result = $q->fetch();

$data = json_decode($Donnee);
$g = $db->prepare("UPDATE `statcompte` SET `argent` = :Argent, `nbrClick` = :nbrClick, `niveauClick` = :niveauClick, `rankArme` = :rankArme, `imgArme` = :imgArme, `puissanceClick` = :puissanceClick, `bonusClick` = :bonusClick, `augmentationPuissanceClick` = :augmentationPuissanceClick, `coutBtnUpgrade` = :coutBtnUpgrade, `zoneAtteinte` = :zoneAtteinte, `zoneDebloquerZone1` = :zoneDebloquerZone1, `nombreDeMonstreTueeZone1` = :nombreDeMonstreTueeZone1, `zoneDebloquerZone2` = :zoneDebloquerZone2, `nombreDeMonstreTueeZone2` = :nombreDeMonstreTueeZone2, `nombreDeMonstreTueeTotal` = :nombreDeMonstreTueeTotal, `actif1` = :actif1, `NiveauBonus1` = :NiveauBonus1, `puissanceBonus1` = :puissanceBonus1, `bonusBonus1` = :bonusBonus1, `coutBonus1` = :coutBonus1, `actif2` = :actif2, `NiveauBonus2` = :NiveauBonus2, `puissanceBonus2` = :puissanceBonus2, `bonusBonus2` = :bonusBonus2, `coutBonus2` = :coutBonus2, `actif3` = :actif3, `NiveauBonus3` = :NiveauBonus3, `puissanceBonus3` = :puissanceBonus3, `bonusBonus3` = :bonusBonus3, `coutBonus3` = :coutBonus3, `actif4` = :actif4, `NiveauBonus4` = :NiveauBonus4, `puissanceBonus4` = :puissanceBonus4, `bonusBonus4` = :bonusBonus4, `coutBonus4` = :coutBonus4, `Succes1Accomplis` = :Succes1Accomplis, `Succes2Accomplis` = :Succes2Accomplis, `Succes3Accomplis` = :Succes3Accomplis, `Succes4Accomplis` = :Succes4Accomplis, `Succes5Accomplis` = :Succes5Accomplis, `Succes6Accomplis` = :Succes6Accomplis, `Succes7Accomplis` = :Succes7Accomplis, `Succes8Accomplis` = :Succes8Accomplis, `Succes9Accomplis` = :Succes9Accomplis, `Succes10Accomplis` = :Succes10Accomplis, `Succes11Accomplis` = :Succes11Accomplis, `Succes12Accomplis` = :Succes12Accomplis, `Succes13Accomplis` = :Succes13Accomplis, `Succes14Accomplis` = :Succes14Accomplis, `Succes15Accomplis` = :Succes15Accomplis, `Succes16Accomplis` = :Succes16Accomplis WHERE `ID` = :ID");
$g->execute([
    'Argent' => $data->argent,
    'nbrClick' => $data->nbrClick,
    'niveauClick' => $data->niveauClick,
    'rankArme' => $data->rankArme,
    'imgArme' => $data->ImgArme,
    'puissanceClick' => $data->puissanceClick,
    'bonusClick' => $data->bonusClick,
    'augmentationPuissanceClick' => $data->augmentationPuissanceClick,
    'coutBtnUpgrade' => $data->coutBtnUpgrade,
    'zoneAtteinte' => $data->zoneAtteinte,
    'zoneDebloquerZone1' => $data->zoneDebloquerZone1,
    'nombreDeMonstreTueeZone1' => $data->nombreDeMonstreTueeZone1,
    'zoneDebloquerZone2' => $data->zoneDebloquerZone2,
    'nombreDeMonstreTueeZone2' => $data->nombreDeMonstreTueeZone2,
    'nombreDeMonstreTueeTotal' => $data->nombreDeMonstreTueeTotal,
    'actif1' => $data->actif1,
    'NiveauBonus1' => $data->NiveauBonus1,
    'puissanceBonus1' => $data->puissanceBonus1,
    'bonusBonus1' => $data->bonusBonus1,
    'coutBonus1' => $data->coutBonus1,
    'actif2' => $data->actif2,
    'NiveauBonus2' => $data->NiveauBonus2,
    'puissanceBonus2' => $data->puissanceBonus2,
    'bonusBonus2' => $data->bonusBonus2,
    'coutBonus2' => $data->coutBonus2,
    'actif3' => $data->actif3,
    'NiveauBonus3' => $data->NiveauBonus3,
    'puissanceBonus3' => $data->puissanceBonus3,
    'bonusBonus3' => $data->bonusBonus3,
    'coutBonus3' => $data->coutBonus3,
    'actif4' => $data->actif4,
    'NiveauBonus4' => $data->NiveauBonus4,
    'puissanceBonus4' => $data->puissanceBonus4,
    'bonusBonus4' => $data->bonusBonus4,
    'coutBonus4' => $data->coutBonus4,
    'Succes1Accomplis' => $data->Succes1Accomplis,
    'Succes2Accomplis' => $data->Succes2Accomplis,
    'Succes3Accomplis' => $data->Succes3Accomplis,
    'Succes4Accomplis' => $data->Succes4Accomplis,
    'Succes5Accomplis' => $data->Succes5Accomplis,
    'Succes6Accomplis' => $data->Succes6Accomplis,
    'Succes7Accomplis' => $data->Succes7Accomplis,
    'Succes8Accomplis' => $data->Succes8Accomplis,
    'Succes9Accomplis' => $data->Succes9Accomplis,
    'Succes10Accomplis' => $data->Succes10Accomplis,
    'Succes11Accomplis' => $data->Succes11Accomplis,
    'Succes12Accomplis' => $data->Succes12Accomplis,
    'Succes13Accomplis' => $data->Succes13Accomplis,
    'Succes14Accomplis' => $data->Succes14Accomplis,
    'Succes15Accomplis' => $data->Succes15Accomplis,
    'Succes16Accomplis' => $data->Succes16Accomplis,
    'ID' => $result['ID'],
]);

$r = $db->prepare("SELECT * FROM statcompte WHERE `ID` = :ID");
$r->execute(['ID' => $result['ID']]);
$resultStat = $r->fetch();


$statistique = array("Pseudo" => $result['Pseudo'], "Argent" => $resultStat['argent'], "nbrClick" => $resultStat['nbrClick'], "niveauClick" => $resultStat['niveauClick'], "niveauRank" => $resultStat['niveauRank'], "rankArme" => $resultStat['rankArme'], "imgArme" => $resultStat['imgArme'], "puissanceClick" => $resultStat['puissanceClick'], "bonusClick" => $resultStat['bonusClick'], "augmentationPuissanceClick" => $resultStat['augmentationPuissanceClick'], "coutBtnUpgrade" => $resultStat['coutBtnUpgrade'], "zoneAtteinte" => $resultStat['zoneAtteinte'], "zoneDebloquerZone1" => $resultStat['zoneDebloquerZone1'], "nombreDeMonstreTueeZone1" => $resultStat['nombreDeMonstreTueeZone1'], "zoneDebloquerZone2" => $resultStat['zoneDebloquerZone2'], "nombreDeMonstreTueeZone2" => $resultStat['nombreDeMonstreTueeZone2'], "nombreDeMonstreTueeTotal" => $resultStat['nombreDeMonstreTueeTotal'], "actif1" => $resultStat['actif1'], "NiveauBonus1" => $resultStat['NiveauBonus1'], "puissanceBonus1" => $resultStat['puissanceBonus1'], "bonusBonus1" => $resultStat['bonusBonus1'], "coutBonus1" => $resultStat['coutBonus1'], "actif2" => $resultStat['actif2'], "NiveauBonus2" => $resultStat['NiveauBonus2'], "puissanceBonus2" => $resultStat['puissanceBonus2'], "bonusBonus2" => $resultStat['bonusBonus2'], "coutBonus2" => $resultStat['coutBonus2'], "actif3" => $resultStat['actif3'], "NiveauBonus3" => $resultStat['NiveauBonus3'], "puissanceBonus3" => $resultStat['puissanceBonus3'], "bonusBonus3" => $resultStat['bonusBonus3'], "coutBonus3" => $resultStat['coutBonus3'], "actif4" => $resultStat['actif4'], "NiveauBonus4" => $resultStat['NiveauBonus4'], "puissanceBonus4" => $resultStat['puissanceBonus4'], "bonusBonus4" => $resultStat['bonusBonus4'], "coutBonus4" => $resultStat['coutBonus4'], "Succes1Accomplis" => $resultStat['Succes1Accomplis'], "Succes2Accomplis" => $resultStat['Succes2Accomplis'], "Succes3Accomplis" => $resultStat['Succes3Accomplis'], "Succes4Accomplis" => $resultStat['Succes4Accomplis'], "Succes5Accomplis" => $resultStat['Succes5Accomplis'], "Succes6Accomplis" => $resultStat['Succes6Accomplis'], "Succes7Accomplis" => $resultStat['Succes7Accomplis'], "Succes8Accomplis" => $resultStat['Succes8Accomplis'], "Succes9Accomplis" => $resultStat['Succes9Accomplis'], "Succes10Accomplis" => $resultStat['Succes10Accomplis'], "Succes11Accomplis" => $resultStat['Succes11Accomplis'], "Succes12Accomplis" => $resultStat['Succes12Accomplis'], "Succes13Accomplis" => $resultStat['Succes13Accomplis'], "Succes14Accomplis" => $resultStat['Succes14Accomplis'], "Succes15Accomplis" => $resultStat['Succes15Accomplis'], "Succes16Accomplis" => $resultStat['Succes16Accomplis']);

echo json_encode($statistique);
