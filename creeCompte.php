<?php
include 'database.php';

$Pseudo = $_GET["Pseudo"];
$Email = $_GET["Email"];
$MDP = $_GET["MDP"];
$Donnee = $_GET["Donnee"];

$c = $db->prepare("SELECT * FROM compteclicker WHERE `Email` = :Email");
$c->execute(['Email' => $Email]);
$result = $c->rowCount();

$c = $db->prepare("SELECT * FROM compteclicker WHERE `Email` = :Email");
$c->execute(['Email' => $Email]);
$result = $c->rowCount();
$p = $db->prepare("SELECT * FROM compteclicker WHERE `Pseudo` = :Pseudo");
$p->execute(['Pseudo' => $Pseudo]);
$resultP = $p->rowCount();

if ($result == 0) {
    if ($resultP == 0) {

        $options = [
            'cost' => 12,
        ];
        $hashpass = password_hash($MDP, PASSWORD_BCRYPT, $options);

        $q = $db->prepare("INSERT INTO `compteclicker`(`Pseudo`, `Email`, `MDP`) VALUES(:Pseudo,:Email,:MDP)");
        $q->execute([
            'Pseudo' => $Pseudo,
            'Email' => $Email,
            'MDP' => $hashpass,
        ]);


        $data = json_decode($Donnee);
        $g = $db->prepare("INSERT INTO `statcompte`(`argent`, `nbrClick`, `niveauClick`, `niveauRank`, `rankArme`, `imgArme`, `puissanceClick`, `bonusClick`, `augmentationPuissanceClick`, `coutBtnUpgrade`, `zoneAtteinte`, `zoneDebloquerZone1`, `nombreDeMonstreTueeZone1`, `zoneDebloquerZone2`, `nombreDeMonstreTueeZone2`, `nombreDeMonstreTueeTotal`, `actif1`, `NiveauBonus1`, `puissanceBonus1`, `bonusBonus1`, `coutBonus1`, `actif2`, `NiveauBonus2`, `puissanceBonus2`, `bonusBonus2`, `coutBonus2`, `actif3`, `NiveauBonus3`, `puissanceBonus3`, `bonusBonus3`, `coutBonus3`, `actif4`, `NiveauBonus4`, `puissanceBonus4`, `bonusBonus4`, `coutBonus4`, `Succes1Accomplis`, `Succes2Accomplis`, `Succes3Accomplis`, `Succes4Accomplis`, `Succes5Accomplis`, `Succes6Accomplis`, `Succes7Accomplis`, `Succes8Accomplis`, `Succes9Accomplis`, `Succes10Accomplis`, `Succes11Accomplis`, `Succes12Accomplis`, `Succes13Accomplis`, `Succes14Accomplis`, `Succes15Accomplis`, `Succes16Accomplis`) VALUES(:argent,:nbrClick,:niveauClick,:niveauRank,:rankArme,:imgArme,:puissanceClick,:bonusClick,:augmentationPuissanceClick,:coutBtnUpgrade,:zoneAtteinte,:zoneDebloquerZone1,:nombreDeMonstreTueeZone1,:zoneDebloquerZone2,:nombreDeMonstreTueeZone2,:nombreDeMonstreTueeTotal,:actif1,:NiveauBonus1,:puissanceBonus1,:bonusBonus1,:coutBonus1,:actif2,:NiveauBonus2,:puissanceBonus2,:bonusBonus2,:coutBonus2,:actif3,:NiveauBonus3,:puissanceBonus3,:bonusBonus3,:coutBonus3,:actif4,:NiveauBonus4,:puissanceBonus4,:bonusBonus4,:coutBonus4,:Succes1Accomplis,:Succes2Accomplis,:Succes3Accomplis,:Succes4Accomplis,:Succes5Accomplis,:Succes6Accomplis,:Succes7Accomplis,:Succes8Accomplis,:Succes9Accomplis,:Succes10Accomplis,:Succes11Accomplis,:Succes12Accomplis,:Succes13Accomplis,:Succes14Accomplis,:Succes15Accomplis,:Succes16Accomplis)");
        $g->execute([
            'argent' => $data->argent,
            'nbrClick' => $data->nbrClick,
            'niveauClick' => $data->niveauClick,
            'niveauRank' => $data->niveauRank,
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
        ]);
    } else echo "Erreur Pseudo";
} else echo "Erreur Email";
