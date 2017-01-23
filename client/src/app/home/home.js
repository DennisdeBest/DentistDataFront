(function () {
    'use strict';

    /**
     * @name  HomeCtrl
     * @description Controller
     */
    function HomeCtrl($scope, $http, $log, connexionService) {
        var home = this;
        $scope.form = {};

        $scope.login = connexionService.getLogin();
        $scope.swapped = function () {
            $scope.swap = connexionService.swapLogin();
        };
        $scope.$watch(
            function () {
                return connexionService.getLogin();
            },
            function (data) {
                $scope.login = data;
            }
        );
         
        $scope.isAdmin = connexionService.getAdmin();
        $scope.isCustomer = connexionService.getCustomer();

        $scope.submitForm = function () {
            var datas = _getDatas();
            $http.post("http://devapi.dentist-data.fr/api/form", JSON.stringify(datas)).success( function (data) {
                $log.debug(data)
            });
            console.log(datas);
        };

        function _getDatas() {
            var form = $scope.form;
            return {

                Text0ID: form.Text0ID,
                Text0Profession: form.Text0Profession,
                Date0DateNaissance: form.Date0DateNaissance,
                Date0DateConsult: form.Date0DateConsult,
                Textarea0BilanSante: form.Textarea0BilanSante,
                Checkbox1Negatif: form.Checkbox1Negatif,
                Checkbox1NonRenseigne: form.Checkbox1NonRenseigne,
                Textarea1Douleurs: form.Textarea1Douleurs,
                Checkbox1NoDouleurs: form.Checkbox1NoDouleurs,
                Checkbox1DouleursMachoire: form.Checkbox1DouleursMachoire,
                Checkbox1DouleursSpontane: form.Checkbox1DouleursSpontane,
                Checkbox1DouleursOrale: form.Checkbox1DouleursOrale,
                Checkbox2Negatif: form.Checkbox2Negatif,
                Checkbox2NonRenseigne: form.Checkbox2NonRenseigne,
                Text2DouleurUn: form.Text2DouleurUn,
                Range2FondDouleur: form.Range2FondDouleur,
                Range2PicDouleur: form.Range2PicDouleur,
                Date2DateDebut: form.Date2DateDebut,
                Text2Qualite: form.Text2Qualite,
                Text2Duree: form.Text2Duree,
                Text2Frequence: form.Text2Frequence,
                Text2Circonstance: form.Text2Circonstance,
                Text2Modifier: form.Text2Modifier,
                Text2Traitement: form.Text2Traitement,
                Checkbox3Negatif: form.Checkbox3Negatif,
                Checkbox3NonRenseigne: form.Checkbox3NonRenseigne,
                Text3Familial: form.Text3Familial,
                Text3Social: form.Text3Social,
                Text3Professionnel: form.Text3Professionnel,
                Text3Anxiete: form.Text3Anxiete,
                Text3Depression: form.Text3Depression,
                Text3Stress: form.Text3Stress,
                Checkbox4Negatif: form.Checkbox4Negatif,
                Checkbox4NonRenseigne: form.Checkbox4NonRenseigne,
                Text4Rachidienne: form.Text4Rachidienne,
                Text4Cephalique: form.Text4Cephalique,
                Checkbox5Negatif: form.Checkbox5Negatif,
                Checkbox5NonRenseigne: form.Checkbox5NonRenseigne,
                Radio5ApneOui: form.Radio5ApneOui,
                Radio5ApneNon: form.Radio5ApneNon,
                Text5Symptomes: form.Text5Symptomes,
                Text5Traitement: form.Text5Traitement,
                Text5ScorePSQI: form.Text5ScorePSQI,
                Text5ScoreISI: form.Text5ScoreISI,
                Checkbox6Negatif: form.Checkbox6Negatif,
                Checkbox6NonRenseigne: form.Checkbox6NonRenseigne,
                Text6TroublesOculaires: form.Text6TroublesOculaires,
                Checkbox7Negatif: form.Checkbox7Negatif,
                Checkbox7NonRenseigne: form.Checkbox7NonRenseigne,
                Checkbox7Onycophagie: form.Checkbox7Onycophagie,
                Checkbox7Mordillement: form.Checkbox7Mordillement,
                Checkbox7Bruxisme: form.Checkbox7Bruxisme,
                Checkbox7ChewingGum: form.Checkbox7ChewingGum,
                Checkbox7Tabac: form.Checkbox7Tabac,
                Checkbox7Autres: form.Checkbox7Autres,
                Text7Complement: form.Text7Complement,
                Checkbox8Negatif: form.Checkbox8Negatif,
                Checkbox8NonRenseigne: form.Checkbox8NonRenseigne,
                Checkbox8Dysfontion: form.Checkbox8Dysfontion,
                Checkbox8Deglutition: form.Checkbox8Deglutition,
                Text8Complement: form.Text8Complement,
                Text8ScoreFriedman: form.Text8ScoreFriedman,
                Text8ScoreMallampati: form.Text8ScoreMallampati,
                Checkbox9Negatif: form.Checkbox9Negatif,
                Checkbox9NonRenseigne: form.Checkbox9NonRenseigne,
                Text9Complement: form.Text9Complement,
                Checkbox10Negatif: form.Checkbox10Negatif,
                Checkbox10NonRenseigne: form.Checkbox10NonRenseigne,
                Text10Complement: form.Text10Complement,
                Checkbox11Negatif: form.Checkbox11Negatif,
                Checkbox11NonRenseigne: form.Checkbox11NonRenseigne,
                Checkbox11TempPost1: form.Checkbox11TempPost1,
                Checkbox11TempPost2: form.Checkbox11TempPost2,
                Select11TempPost1: form.Select11TempPost1,
                Checkbox11TempPost3: form.Checkbox11TempPost3,
                Checkbox11TempPost4: form.Checkbox11TempPost4,
                Checkbox11TempMoy1: form.Checkbox11TempMoy1,
                Checkbox11TempMoy2: form.Checkbox11TempMoy2,
                Checkbox11TempMoy3: form.Checkbox11TempMoy3,
                Checkbox11TempMoy4: form.Checkbox11TempMoy4,
                Checkbox11TempAnt1: form.Checkbox11TempAnt1,
                Checkbox11TempAnt2: form.Checkbox11TempAnt2,
                Checkbox11TempAnt3: form.Checkbox11TempAnt3,
                Checkbox11TempAnt4: form.Checkbox11TempAnt4,
                Radio11PalpationOui: form.Radio11PalpationOui,
                Radio11PalpationNon: form.Radio11PalpationNon,
                Checkbox11MasseterOri1: form.Checkbox11MasseterOri1,
                Checkbox11MasseterOri2: form.Checkbox11MasseterOri2,
                Checkbox11MasseterOri3: form.Checkbox11MasseterOri3,
                Checkbox11MasseterOri4: form.Checkbox11MasseterOri4,
                Checkbox11MasseterCorps1: form.Checkbox11MasseterCorps1,
                Checkbox11MasseterCorps2: form.Checkbox11MasseterCorps2,
                Checkbox11MasseterCorps3: form.Checkbox11MasseterCorps3,
                Checkbox11MasseterCorps4: form.Checkbox11MasseterCorps4,
                Checkbox11MasseterInsert1: form.Checkbox11MasseterInsert1,
                Checkbox11MasseterInsert2: form.Checkbox11MasseterInsert2,
                Checkbox11MasseterInsert3: form.Checkbox11MasseterInsert3,
                Checkbox11MasseterInsert4: form.Checkbox11MasseterInsert4,
                Checkbox11Pole1: form.Checkbox11Pole1,
                Checkbox11Pole2: form.Checkbox11Pole2,
                Checkbox11Pole3: form.Checkbox11Pole3,
                Checkbox11Pole4: form.Checkbox11Pole4,
                Checkbox11AutourPole1: form.Checkbox11AutourPole1,
                Checkbox11AutourPole2: form.Checkbox11AutourPole2,
                Checkbox11AutourPole3: form.Checkbox11AutourPole3,
                Checkbox11AutourPole4: form.Checkbox11AutourPole4,
                Checkbox11Digastrique1: form.Checkbox11Digastrique1,
                Checkbox11Digastrique2: form.Checkbox11Digastrique2,
                Checkbox11Digastrique3: form.Checkbox11Digastrique3,
                Checkbox11Digastrique4: form.Checkbox11Digastrique4,
                Checkbox11PteryMed1: form.Checkbox11PteryMed1,
                Checkbox11PteryMed2: form.Checkbox11PteryMed2,
                Checkbox11PteryMed3: form.Checkbox11PteryMed3,
                Checkbox11PteryMed4: form.Checkbox11PteryMed4,
                Checkbox11PteryLat1: form.Checkbox11PteryLat1,
                Checkbox11PteryLat2: form.Checkbox11PteryLat2,
                Checkbox11PteryLat3: form.Checkbox11PteryLat3,
                Checkbox11PteryLat4: form.Checkbox11PteryLat4,
                Checkbox11Tendon1: form.Checkbox11Tendon1,
                Checkbox11Tendon2: form.Checkbox11Tendon2,
                Checkbox11Tendon3: form.Checkbox11Tendon3,
                Checkbox11Tendon4: form.Checkbox11Tendon4,
                Checkbox11Sterno1: form.Checkbox11Sterno1,
                Checkbox11Sterno2: form.Checkbox11Sterno2,
                Checkbox11Sterno3: form.Checkbox11Sterno3,
                Checkbox11Sterno4: form.Checkbox11Sterno4,
                Checkbox11Trapeze1: form.Checkbox11Trapeze1,
                Checkbox11Trapeze2: form.Checkbox11Trapeze2,
                Checkbox11Trapeze3: form.Checkbox11Trapeze3,
                Checkbox11Trapeze4: form.Checkbox11Trapeze4,
                Text11AutreMuscle1: form.Text11AutreMuscle1,
                Checkbox11AutreMuscle11: form.Checkbox11AutreMuscle11,
                Checkbox11AutreMuscle12: form.Checkbox11AutreMuscle12,
                Checkbox11AutreMuscle13: form.Checkbox11AutreMuscle13,
                Checkbox11AutreMuscle14: form.Checkbox11AutreMuscle14,
                Text11AutreMuscle2: form.Text11AutreMuscle2,
                Checkbox11AutreMuscle21: form.Checkbox11AutreMuscle21,
                Checkbox11AutreMuscle22: form.Checkbox11AutreMuscle22,
                Checkbox11AutreMuscle23: form.Checkbox11AutreMuscle23,
                Checkbox11AutreMuscle24: form.Checkbox11AutreMuscle24,
                Text11AutreMuscle3: form.Text11AutreMuscle3,
                Checkbox11AutreMuscle31: form.Checkbox11AutreMuscle31,
                Checkbox11AutreMuscle32: form.Checkbox11AutreMuscle32,
                Checkbox11AutreMuscle33: form.Checkbox11AutreMuscle33,
                Checkbox11AutreMuscle34: form.Checkbox11AutreMuscle34,

                Checkbox12Negatif: form.Checkbox12Negatif,
                Checkbox12NonRenseigne: form.Checkbox12NonRenseigne,
                Radio12Dent11: form.Radio12Dent11,
                Radio12Dent21: form.Radio12Dent21,
                Radio12DentAutre1: form.Radio12DentAutre1,
                Radio12DentAutre1Choix: form.Radio12DentAutre1Choix,
                Radio12Dent31: form.Radio12Dent31,
                Radio12Dent41: form.Radio12Dent41,
                Radio12DentAutre2: form.Radio12DentAutre2,
                Radio12DentAutre2Choix: form.Radio12DentAutre2Choix,
                Number12Surplomb: form.Number12Surplomb,
                Checkbox12Surplomb: form.Checkbox12Surplomb,
                Number12Recouvrement: form.Number12Recouvrement,
                Checkbox12Recouvrement: form.Checkbox12Recouvrement,
                Radio12DecalageOui: form.Radio12DecalageOui,
                Number12DecalageOui: form.Number12DecalageOui,
                Radio12DecalageNon: form.Radio12DecalageNon,

                Checkbox13Negatif: form.Checkbox13Negatif,
                Checkbox13NonRenseigne: form.Checkbox13NonRenseigne,
                Number13OuvDouleur: form.Number13OuvDouleur,
                Number13OuvNonAssist: form.Number13OuvNonAssist,
                Checkbox13DroitDouleurProv1: form.Checkbox13DroitDouleurProv1,
                Checkbox13GaucheDouleurProv1: form.Checkbox13GaucheDouleurProv1,
                Number13OuvAssist: form.Number13OuvAssist,
                Checkbox13DroitDouleurProv2: form.Checkbox13DroitDouleurProv2,
                Checkbox13GaucheDouleurProv2: form.Checkbox13GaucheDouleurProv2,
                Checkbox13DroitDouleurProv3: form.Checkbox13DroitDouleurProv3,
                Checkbox13GaucheDouleurProv3: form.Checkbox13GaucheDouleurProv3,
                Checkbox13DroitDouleurProv4: form.Checkbox13DroitDouleurProv4,
                Checkbox13GaucheDouleurProv4: form.Checkbox13GaucheDouleurProv4,
                Number13LatDroit: form.Number13LatDroit,
                Checkbox13DroitDouleurProv5: form.Checkbox13DroitDouleurProv5,
                Checkbox13GaucheDouleurProv5: form.Checkbox13GaucheDouleurProv5,
                Number13LatDroitAssist: form.Number13LatDroitAssist,
                Checkbox13DroitDouleurProv6: form.Checkbox13DroitDouleurProv6,
                Checkbox13GaucheDouleurProv6: form.Checkbox13GaucheDouleurProv6,
                Checkbox13DroitDouleurProv7: form.Checkbox13DroitDouleurProv7,
                Checkbox13GaucheDouleurProv7: form.Checkbox13GaucheDouleurProv7,
                Number13LatGauche: form.Number13LatGauche,
                Checkbox13DroitDouleurProv8: form.Checkbox13DroitDouleurProv8,
                Checkbox13GaucheDouleurProv8: form.Checkbox13GaucheDouleurProv8,
                Number13LatGaucheAssist: form.Number13LatGaucheAssist,
                Checkbox13DroitDouleurProv9: form.Checkbox13DroitDouleurProv9,
                Checkbox13GaucheDouleurProv9: form.Checkbox13GaucheDouleurProv9,
                Checkbox13DroitDouleurProv10: form.Checkbox13DroitDouleurProv10,
                Checkbox13GaucheDouleurProv10: form.Checkbox13GaucheDouleurProv10,
                Number13Propulsion: form.Number13Propulsion,
                Checkbox13DroitDouleurProv11: form.Checkbox13DroitDouleurProv11,
                Checkbox13GaucheDouleurProv11: form.Checkbox13GaucheDouleurProv11,
                Checkbox13DroitDouleurProv12: form.Checkbox13DroitDouleurProv12,
                Checkbox13GaucheDouleurProv12: form.Checkbox13GaucheDouleurProv12,
                Radio13MauxOui: form.Radio13MauxOui,
                Radio13MauxNon: form.Radio13MauxNon,
                Text13MauxOui: form.Text13MauxOui,

                Checkbox14Negatif: form.Checkbox14Negatif,
                Checkbox14NonRenseigne: form.Checkbox14NonRenseigne,
                Checkbox14Rectiligne: form.Checkbox14Rectiligne,
                Checkbox14ReflexionDroit: form.Checkbox14ReflexionDroit,
                Checkbox14ReflexionGauche: form.Checkbox14ReflexionGauche,
                Checkbox14DevDroit: form.Checkbox14DevDroit,
                Checkbox14DevGauche: form.Checkbox14DevGauche,

                Checkbox15Negatif: form.Checkbox15Negatif,
                Checkbox15NonRenseigne: form.Checkbox15NonRenseigne,
                Checkbox15DroitPraClaq1: form.Checkbox15DroitPraClaq1,
                Checkbox15DroitPraCrep1: form.Checkbox15DroitPraCrep1,
                Checkbox15DroitPatClaq1: form.Checkbox15DroitPatClaq1,
                Checkbox15DroitPatCrep1: form.Checkbox15DroitPatCrep1,
                Checkbox15DroitDouleur1: form.Checkbox15DroitDouleur1,
                Checkbox15GauchePraClaq1: form.Checkbox15GauchePraClaq1,
                Checkbox15GauchePraCrep1: form.Checkbox15GauchePraCrep1,
                Checkbox15GauchePatClaq1: form.Checkbox15GauchePatClaq1,
                Checkbox15GauchePatCrep1: form.Checkbox15GauchePatCrep1,
                Checkbox15GaucheDouleur1: form.Checkbox15GaucheDouleur1,
                Checkbox15DroitPraClaq2: form.Checkbox15DroitPraClaq2,
                Checkbox15DroitPraCrep2: form.Checkbox15DroitPraCrep2,
                Checkbox15DroitPatClaq2: form.Checkbox15DroitPatClaq2,
                Checkbox15DroitPatCrep2: form.Checkbox15DroitPatCrep2,
                Checkbox15DroitDouleur2: form.Checkbox15DroitDouleur2,
                Checkbox15GauchePraClaq2: form.Checkbox15GauchePraClaq2,
                Checkbox15GauchePraCrep2: form.Checkbox15GauchePraCrep2,
                Checkbox15GauchePatClaq2: form.Checkbox15GauchePatClaq2,
                Checkbox15GauchePatCrep2: form.Checkbox15GauchePatCrep2,
                Checkbox15GaucheDouleur2: form.Checkbox15GaucheDouleur2,
                Checkbox15DroitPraClaq3: form.Checkbox15DroitPraClaq3,
                Checkbox15DroitPraCrep3: form.Checkbox15DroitPraCrep3,
                Checkbox15DroitPatClaq3: form.Checkbox15DroitPatClaq3,
                Checkbox15DroitPatCrep3: form.Checkbox15DroitPatCrep3,
                Checkbox15DroitDouleur3: form.Checkbox15DroitDouleur3,
                Checkbox15GauchePraClaq3: form.Checkbox15GauchePraClaq3,
                Checkbox15GauchePraCrep3: form.Checkbox15GauchePraCrep3,
                Checkbox15GauchePatClaq3: form.Checkbox15GauchePatClaq3,
                Checkbox15GauchePatCrep3: form.Checkbox15GauchePatCrep3,
                Checkbox15GaucheDouleur3: form.Checkbox15GaucheDouleur3,
                Checkbox15DroitPraClaq4: form.Checkbox15DroitPraClaq4,
                Checkbox15DroitPraCrep4: form.Checkbox15DroitPraCrep4,
                Checkbox15DroitPatClaq4: form.Checkbox15DroitPatClaq4,
                Checkbox15DroitPatCrep4: form.Checkbox15DroitPatCrep4,
                Checkbox15DroitDouleur4: form.Checkbox15DroitDouleur4,
                Checkbox15GauchePraClaq4: form.Checkbox15GauchePraClaq4,
                Checkbox15GauchePraCrep4: form.Checkbox15GauchePraCrep4,
                Checkbox15GauchePatClaq4: form.Checkbox15GauchePatClaq4,
                Checkbox15GauchePatCrep4: form.Checkbox15GauchePatCrep4,
                Checkbox15GaucheDouleur4: form.Checkbox15GaucheDouleur4,
                Checkbox15DroitPraClaq5: form.Checkbox15DroitPraClaq5,
                Checkbox15DroitPraCrep5: form.Checkbox15DroitPraCrep5,
                Checkbox15DroitPatClaq5: form.Checkbox15DroitPatClaq5,
                Checkbox15DroitPatCrep5: form.Checkbox15DroitPatCrep5,
                Checkbox15DroitDouleur5: form.Checkbox15DroitDouleur5,
                Checkbox15GauchePraClaq5: form.Checkbox15GauchePraClaq5,
                Checkbox15GauchePraCrep5: form.Checkbox15GauchePraCrep5,
                Checkbox15GauchePatClaq5: form.Checkbox15GauchePatClaq5,
                Checkbox15GauchePatCrep5: form.Checkbox15GauchePatCrep5,
                Checkbox15GaucheDouleur5: form.Checkbox15GaucheDouleur5,

                Checkbox16Negatif: form.Checkbox16Negatif,
                Checkbox16NonRenseigne: form.Checkbox16NonRenseigne,
                Checkbox16Ouv: form.Checkbox16Ouv,
                Checkbox16Ferm: form.Checkbox16Ferm,
                Checkbox16Droit: form.Checkbox16Droit,
                Checkbox16Gauche: form.Checkbox16Gauche,
                Text16Frequence: form.Text16Frequence,
                Text16DerEpi: form.Text16DerEpi,

                Checkbox17Negatif: form.Checkbox17Negatif,
                Checkbox17NonRenseigne: form.Checkbox17NonRenseigne,

                Checkbox18Negatif: form.Checkbox18Negatif,
                Checkbox18NonRenseigne: form.Checkbox18NonRenseigne,
                Radio18DroitSouple: form.Radio18DroitSouple,
                Radio18DroitRaide: form.Radio18DroitRaide,
                Radio18GaucheSouple: form.Radio18GaucheSouple,
                Radio18GaucheRaide: form.Radio18GaucheRaide,

                Checkbox19Negatif: form.Checkbox19Negatif,
                Checkbox19NonRenseigne: form.Checkbox19NonRenseigne,
                Radio19OIM1: form.Radio19OIM1,
                Radio19OIM2: form.Radio19OIM2,
                Text19OIM: form.Text19OIM,
                Radio19PosOui: form.Radio19PosOui,
                Radio19PosNon: form.Radio19PosNon,
                Radio19MasticOui: form.Radio19MasticOui,
                Radio19MasticNon: form.Radio19MasticNon,
                Text19InterDroit: form.Text19InterDroit,
                Text19InterGauche: form.Text19InterGauche,
                Text19Propul: form.Text19Propul,
                Text19Premat: form.Text19Premat,
                Text19OIMVerti: form.Text19OIMVerti,
                Text19OIMAnt: form.Text19OIMAnt,
                Text19OIMLat: form.Text19OIMLat,

                Checkbox20Negatif: form.Checkbox20Negatif,
                Checkbox20NonRenseigne: form.Checkbox20NonRenseigne,
                Checkbox20Erosion: form.Checkbox20Erosion,
                Text20Erosion: form.Text20Erosion,
                Checkbox20Abrasion: form.Checkbox20Abrasion,
                Text20Abrasion: form.Text20Abrasion,
                Checkbox20Attrition: form.Checkbox20Attrition,
                Text20Attrition: form.Text20Attrition,
                Checkbox20BruxismeSom: form.Checkbox20BruxismeSom,
                Checkbox20BruxismeEve: form.Checkbox20BruxismeEve,
                Textarea20Info: form.Textarea20Info,

                Text21TypeExam: form.Text21TypeExam,

                Textarea22Diag: form.Textarea22Diag,

                Textarea23Trait: form.Textarea23Trait

            }
        }
    }


    angular.module('home', [])
        .controller('HomeCtrl', HomeCtrl);

})();