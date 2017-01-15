(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/common/footer.tpl.html",
    "<div class=\"pure-g\">\n" +
    "  <div class=\"pure-u-1 text-center\">\n" +
    "    <p>&copy; 2017 - <a href=\"http://dentist-data.fr\">Dentist-Data</a>\n" +
    "  </div>\n" +
    "  <!-- <div class=\"pure-u-1 text-center\">\n" +
    "    <ul class=\"hlist\">\n" +
    "      <li><a target=\"_blank\" href=\"http://twitter.com/vesparny\">twitter</a>\n" +
    "      </li>\n" +
    "      <li><a target=\"_blank\" href=\"https://plus.google.com/+AlessandroArnodo\">g+</a>\n" +
    "      </li>\n" +
    "      <li><a target=\"_blank\" href=\"http://www.linkedin.com/in/alessandroarnodo\">LinkedIn</a>\n" +
    "      </li>\n" +
    "      <li><a target=\"_blank\" href=\"https://github.com/vesparny/angular-kickstart\">GitHub</a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div> -->\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/common/header.tpl.html",
    "<nav>\n" +
    "    <div class=\"nav-wrapper light-blue lighten-1\">\n" +
    "      <a href=\"#!\" class=\"brand-logo\">Dentist-Data</a>\n" +
    "      <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n" +
    "      <ul class=\"right hide-on-med-and-down\">\n" +
    "        <li><a href ui-sref=\"root.home\">{{ 'home' | uppercase }}</a></li>\n" +
    "        <li><a href ui-sref=\"root.propos\">{{ 'à propos' | uppercase }}</a></li>\n" +
    "        <li><a href ui-sref=\"root.nous\">{{ 'qui somme nous ?' | uppercase }}</a></li>\n" +
    "        <li><a href ui-sref=\"root.pourquoi\">{{ 'pourquoi ce site ?' | uppercase }}</a></li>\n" +
    "        <li><a id=\"loginButton\" class=\"waves-effect waves-light btn light-blue darken-3\" ng-click=\"createLoginPopin()\">Connexion</a></li>\n" +
    "      </ul>\n" +
    "      <ul class=\"side-nav\" id=\"mobile-demo\">\n" +
    "        <li><a href ui-sref=\"root.home\">{{ 'home' | uppercase }}</a></li>\n" +
    "        <li><a href ui-sref=\"root.propos\">{{ 'à propos' | uppercase }}</a></li>\n" +
    "        <li><a href ui-sref=\"root.nous\">{{ 'qui sommes nous ?' | uppercase }}</a></li>\n" +
    "        <li><a href ui-sref=\"root.pourquoi\">{{ 'pourquoi ce site ?' | uppercase }}</a></li>\n" +
    "        <li><a id=\"loginButton\" class=\"waves-effect waves-light btn light-blue darken-3\" ng-click=\"createLoginPopin()\">Connexion</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </nav>\n" +
    "\n" +
    "<div id=\"loginPopin\" class=\"modal-content\" ng-show=\"showLoginPopin\">\n" +
    "    <div class=\"row\">\n" +
    "      <a class=\"close\" href=\"#!\" title=\"Close\" ng-click=\"createLoginPopin()\">X</a>\n" +
    "      <div class=\"input-field col s4 marge2\">\n" +
    "        <input name=\"loginUsername\" id=\"loginUsername\" type=\"text\" class=\"validate text-blue text-darken-2\">\n" +
    "        <label for=\"loginUsername\">Username</label>\n" +
    "      </div>\n" +
    "      <div class=\"input-field col s4 marge2\">\n" +
    "        <input name=\"loginPassword\" id=\"loginPassword\" type=\"password\" class=\"validate text-blue text-darken-2\">\n" +
    "        <label for=\"loginPassword\">Password</label>\n" +
    "      </div>\n" +
    "      <div class=\"input-field col s4 marge2\">\n" +
    "    <a href=\"#!\" id=\"loginButton\" class=\"waves-effect waves-light btn light-blue darken-3\" ng-click=\"createLoginPopin()\">Connexion</a>\n" +
    "</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/home/home.tpl.html",
    "\n" +
    "<div class=\"pure-g\">\n" +
    "  <div class=\"island3 pure-u-1 pure-u-lg-2-3\">\n" +
    "    <h3>Fiche clinique DTM</h3>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<ul class=\"collapsible\" data-collapsible=\"expandable\">\n" +
    "  <li>\n" +
    "    <div class=\"collapsible-header\"><i class=\"material-icons\">assignment_ind</i>Information patient</div>\n" +
    "    <div class=\"collapsible-body\">\n" +
    "      <form class=\"col s12\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"input-field col s5\">\n" +
    "            <label>Identifiant du patient</label>\n" +
    "\n" +
    "            <input type=\"text\" ng-model=\"form.Text0ID\">\n" +
    "          </div>\n" +
    "          <div class=\"input-field col s2\">\n" +
    "            <select>\n" +
    "              <option value=\"\" disabled selected>Sexe</option>\n" +
    "              <option value=\"1\">Homme</option>\n" +
    "              <option value=\"2\">Femme</option>\n" +
    "            </select>\n" +
    "            <label>Sexe</label>\n" +
    "          </div>\n" +
    "          <div class=\"input-field col s5\">\n" +
    "            <label>Profession</label>\n" +
    "            <input type=\"text\" ng-model=\"form.Text0Profession\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"input-field col s6\">\n" +
    "            <label>Date de naissance</label>\n" +
    "            <input type=\"date\" class=\"datepicker\" ng-model=\"form.Date0DateNaissance\">\n" +
    "          </div>\n" +
    "          <div class=\"input-field col s6\">\n" +
    "            <label>Date de la consultation</label>\n" +
    "            <input type=\"date\" class=\"datepicker\" ng-model=\"form.Date0DateConsult\">\n" +
    "            <!--Mettre la date d'aujourd'hui comme base-->\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"input-field col s12\">\n" +
    "            <textarea id=\"textarea1\" class=\"materialize-textarea\" ng-model=\"form.Textarea0BilanSante\"></textarea>\n" +
    "            <label for=\"textarea1\">Bilan de santé</label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <div class=\"collapsible-header\"><i class=\"material-icons\">filter_drama</i>\n" +
    "          1. Motif de la consultation\n" +
    "          <input type=\"checkbox\" class=\"filled-in\" id=\"negatif1\" ng-model=\"form.Checkbox1Negatif\"/>\n" +
    "          <label for=\"negatif1\">Négatif</label>\n" +
    "          <input type=\"checkbox\" class=\"filled-in\" id=\"non1\" ng-model=\"form.Checkbox1NonRenseigne\"/>\n" +
    "          <label for=\"non1\">Non renseigné</label>\n" +
    "        </div>\n" +
    "        <div class=\"collapsible-body\">\n" +
    "\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"input-field col s12\">\n" +
    "              <textarea id=\"douleur\" class=\"materialize-textarea\" ng-model=\"form.Textarea1Douleurs\"></textarea>\n" +
    "              <label for=\"douleur\">Douleurs</label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <p>\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"no-douleur\" ng-model=\"form.Checkbox1NoDouleurs\"/>\n" +
    "            <label for=\"no-douleur\">Pas de douleur</label>\n" +
    "          </p>\n" +
    "          <p>\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"machoire\" ng-model=\"form.Checkbox1DouleursMachoire\"/>\n" +
    "            <label for=\"machoire\">Douleur dans la mâchoire, tempe, oreille ou en avant de l’oreille</label>\n" +
    "          </p>\n" +
    "          <p>\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"spontanee\" ng-model=\"form.Checkbox1DouleursSpontane\"/>\n" +
    "            <label for=\"spontanee\">Douleur spontanée</label>\n" +
    "          </p>\n" +
    "          <p>\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"orale\" ng-model=\"form.Checkbox1DouleursOrale\"/>\n" +
    "            <label for=\"orale\">Douleur provoquée par une fonction/parafonction orale</label>\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "\n" +
    "    <li>\n" +
    "      <div class=\"collapsible-header\"><i class=\"material-icons\">filter_drama</i>\n" +
    "        2. Evaluation de la douleur\n" +
    "        <input type=\"checkbox\" class=\"filled-in\" id=\"negatif2\" ng-model=\"form.Checkbox2Negatif\"/>\n" +
    "        <label for=\"negatif2\">Négatif</label>\n" +
    "        <input type=\"checkbox\" class=\"filled-in\" id=\"non2\" ng-model=\"form.Checkbox2NonRenseigne\"/>\n" +
    "        <label for=\"non2\">Non renseigné</label>\n" +
    "      </div>\n" +
    "      <div class=\"collapsible-body\">\n" +
    "\n" +
    "        <!--CANVAS-->\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"input-field col s12\">\n" +
    "            <label>Douleur 1</label>\n" +
    "            <input type=\"text\" ng-model=\"form.Text2DouleurUn\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <label><b>Fond douloureux </b>(0=pas de douleur | 10=douleur maximale)</label>\n" +
    "        <p class=\"range-field\">\n" +
    "          <input type=\"range\" id=\"fond\" min=\"0\" max=\"1000\" ng-model=\"form.Range2FondDouleur\"/>\n" +
    "        </p>\n" +
    "        <label><b>Pic douloureux </b>(0=pas de douleur | 10=douleur maximale)</label>\n" +
    "        <p class=\"range-field\">\n" +
    "          <input type=\"range\" id=\"pic\" min=\"0\" max=\"10\" ng-model=\"form.Range2PicDouleur\"/>\n" +
    "        </p>\n" +
    "\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"input-field col s12\">\n" +
    "            <label>Date de début</label>\n" +
    "            <input type=\"date\" class=\"datepicker\" ng-model=\"form.Date2DateDebut\">\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"input-field col s12\">\n" +
    "              <label>Qualité</label>\n" +
    "              <input type=\"text\" ng-model=\"form.Text2Qualite\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"input-field col s12\">\n" +
    "              <label>Durée</label>\n" +
    "              <input type=\"text\" ng-model=\"form.Text2Duree\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"input-field col s12\">\n" +
    "              <label>Fréquence</label>\n" +
    "              <input type=\"text\" ng-model=\"form.Text2Frequence\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"input-field col s12\">\n" +
    "              <label>Circonstances du début</label>\n" +
    "              <input type=\"text\" ng-model=\"form.Text2Circonstance\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"input-field col s12\">\n" +
    "              <label>Modifié par</label>\n" +
    "              <input type=\"text\" ng-model=\"form.Text2Modifier\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"input-field col s12\">\n" +
    "              <label>Traitement</label>\n" +
    "              <input type=\"text\" ng-model=\"form.Text2Traitement\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <a class=\"waves-effect waves-light btn\">Questionnaire DN4</a>\n" +
    "\n" +
    "          <a class=\"waves-effect waves-light btn\">Ajouter une douleur</a>\n" +
    "          <a class=\"waves-effect waves-light btn\">Supprimer une douleur</a>\n" +
    "\n" +
    "      </li>\n" +
    "\n" +
    "\n" +
    "        <li>\n" +
    "          <div class=\"collapsible-header\"><i class=\"material-icons\">filter_drama</i>\n" +
    "            3. Environnement\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"negatif3\" ng-model=\"form.Checkbox3Negatif\"/>\n" +
    "            <label for=\"negatif3\">Négatif</label>\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"non3\" ng-model=\"form.Checkbox3NonRenseigne\"/>\n" +
    "            <label for=\"non3\">Non renseigné</label>\n" +
    "          </div>\n" +
    "          <div class=\"collapsible-body\">\n" +
    "            <div class=\"row\">\n" +
    "              <div class=\"input-field col s12\">\n" +
    "                <label>Familial</label>\n" +
    "                <input type=\"text\" ng-model=\"form.Text3Familial\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "              <div class=\"input-field col s12\">\n" +
    "                <label>Social</label>\n" +
    "                <input type=\"text\"ng-model=\"form.Text3Social\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "              <div class=\"input-field col s12\">\n" +
    "                <label>Professionnel</label>\n" +
    "                <input type=\"text\" ng-model=\"form.Text3Professionnel\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "              <div class=\"input-field col s4\">\n" +
    "                <a class=\"waves-effect waves-light btn\">Questionnaire EDAS 21</a>\n" +
    "              </div>\n" +
    "              <div class=\"input-field col s2\">\n" +
    "                <label>Anxiété</label>\n" +
    "                <input type=\"text\" ng-model=\"form.Text3Anxiete\">\n" +
    "              </div>\n" +
    "              <div class=\"input-field col s2\">\n" +
    "                <label>Dépression</label>\n" +
    "                <input type=\"text\" ng-model=\"form.Text3Depression\">\n" +
    "              </div>\n" +
    "              <div class=\"input-field col s2\">\n" +
    "                <label>Stress</label>\n" +
    "                <input type=\"text\" ng-model=\"form.Text3Stress\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </li>\n" +
    "\n" +
    "          <li>\n" +
    "            <div class=\"collapsible-header\"><i class=\"material-icons\">filter_drama</i>\n" +
    "              4. Troubles de la posture\n" +
    "              <input type=\"checkbox\" class=\"filled-in\" id=\"negatif4\" ng-model=\"form.Checkbox4Negatif\"/>\n" +
    "              <label for=\"negatif4\">Négatif</label>\n" +
    "              <input type=\"checkbox\" class=\"filled-in\" id=\"non4\" ng-model=\"form.Checkbox4NonRenseigne\"/>\n" +
    "              <label for=\"non4\">Non renseigné</label>\n" +
    "            </div>\n" +
    "            <div class=\"collapsible-body\">\n" +
    "\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"input-field col s12\">\n" +
    "              <label>Rachidienne</label>\n" +
    "              <input type=\"text\" ng-model=\"form.Text4Rachidienne\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"input-field col s12\">\n" +
    "              <label>Céphalique </label>\n" +
    "              <input type=\"text\" ng-model=\"form.Text4Cephalique\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </li>\n" +
    "\n" +
    "        <div>\n" +
    "          <h4>5. Troubles du sommeil</h4>\n" +
    "          <input type=\"checkbox\" class=\"filled-in\" id=\"negatif5\" ng-model=\"form.Checkbox5Negatif\"/>\n" +
    "          <label for=\"negatif3\">Négatif</label>\n" +
    "          <input type=\"checkbox\" class=\"filled-in\" id=\"non5\" ng-model=\"form.Checkbox5NonRenseigne\"/>\n" +
    "          <label for=\"non3\">Non renseigné</label>\n" +
    "\n" +
    "          <p>Souffrez-vous du syndrome d'apnées/hypopnées obstructives du sommeil ?\n" +
    "            <input class=\"with-gap\" name=\"group1\" type=\"radio\" id=\"oui4\"/>\n" +
    "            <label for=\"oui4\">Oui</label>\n" +
    "            <input class=\"with-gap\" name=\"group1\" type=\"radio\" id=\"non4\"  />\n" +
    "            <label for=\"non4\">Non</label>\n" +
    "          </p>\n" +
    "\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"input-field col s12\">\n" +
    "              <label>Autres symptômes</label>\n" +
    "              <input type=\"text\" ng-model=\"form.Text5Symptomes\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"input-field col s12\">\n" +
    "              <label>Traitement</label>\n" +
    "              <input type=\"text\" ng-model=\"form.Text5Traitement\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "            <a class=\"waves-effect waves-light btn col s4\">Questionnaire PSQI</a>\n" +
    "            <div class=\"input-field col s3\">\n" +
    "              <label>Score PSQI</label>\n" +
    "              <input type=\"text\" ng-model=\"form.Text5ScorePSQI\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "            <a class=\"waves-effect waves-light btn col s4\">Questionnaire ISI</a>\n" +
    "            <div class=\"input-field col s3\">\n" +
    "              <label>Score ISI</label>\n" +
    "              <input type=\"text\" ng-model=\"form.Text5ScoreISI\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div>\n" +
    "            <h4>6. Troubles oculaires</h4>\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"negatif6\" ng-model=\"form.Checkbox6Negatif\"/>\n" +
    "            <label for=\"negatif5\">Négatif</label>\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"non6\" ng-model=\"form.Checkbox6NonRenseigne\"/>\n" +
    "            <label for=\"non5\">Non renseigné</label>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "              <div class=\"input-field col s12\">\n" +
    "                <textarea ng-model=\"form.Text6TroublesOculaires\"></textarea>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div>\n" +
    "            <h4>7. Habitudes nocives</h4>\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"negatif7\" ng-model=\"form.Checkbox7Negatif\"/>\n" +
    "            <label for=\"negatif6\">Négatif</label>\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"non7\" ng-model=\"form.Checkbox7NonRenseigne\"/>\n" +
    "            <label for=\"non6\">Non renseigné</label>\n" +
    "\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"onycophagie\" ng-model=\"form.Checkbox7Onycophagie\"/>\n" +
    "            <label for=\"onycophagie\">Onycophagie</label>\n" +
    "\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"mordillement\" ng-model=\"form.Checkbox7Mordillement\"/>\n" +
    "            <label for=\"mordillement\">Mordillement des lèvres/style/objets</label>\n" +
    "\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"bruxisme\" ng-model=\"form.Checkbox7Bruxisme\"/>\n" +
    "            <label for=\"bruxisme\">Bruxisme d'éveil</label>\n" +
    "\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"gum\" ng-model=\"form.Checkbox7ChewingGum\"/>\n" +
    "            <label for=\"gum\">Chewing-gum</label>\n" +
    "\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"tabac\" ng-model=\"form.Checkbox7Tabac\"/>\n" +
    "            <label for=\"tabac\">Tabac</label>\n" +
    "\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"autres\" ng-model=\"form.Checkbox7Autres\"/>\n" +
    "            <label for=\"autres\">Autres</label>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "              <div class=\"input-field col s12\">\n" +
    "                <textarea ng-model=\"form.Text7Complement\"></textarea>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div>\n" +
    "            <h4>8. Dysfonctionnements oro-ligaux</h4>\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"negatif8\" ng-model=\"form.Checkbox8Negatif\"/>\n" +
    "            <label for=\"negatif7\">Négatif</label>\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"non8\" ng-model=\"form.Checkbox8NonRenseigne\"/>\n" +
    "            <label for=\"non7\">Non renseigné</label>\n" +
    "\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"dysfonctionnements\" ng-model=\"form.Checkbox8Dysfontion\"/>\n" +
    "            <label for=\"dysfonctionnements\">Dysfonctionnements orolinguaux</label>\n" +
    "\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"deglutition\" ng-model=\"form.Checkbox8Deglutition\"/>\n" +
    "            <label for=\"deglutition\">Déglutition atypique</label>\n" +
    "\n" +
    "            <input type=\"text\" ng-model=\"form.Text8Complement\">\n" +
    "\n" +
    "            <button>Score de Friedman</button>\n" +
    "            <label>Score de Friedman</label>\n" +
    "            <input type=\"text\" ng-model=\"form.Text8ScoreFriedman\">\n" +
    "\n" +
    "            <button>Score de Mallampati</button>\n" +
    "            <label>Score de Mallampati</label>\n" +
    "            <input type=\"text\" ng-model=\"form.Text8ScoreMallampati\">\n" +
    "          </div>\n" +
    "\n" +
    "          <div>\n" +
    "            <h4>9. Traumatisme</h4>\n" +
    "            <input type=\"checkbox\" ng-model=\"form.Checkbox9Negatif\">\n" +
    "            <label>Négatif</label>\n" +
    "\n" +
    "            <input type=\"checkbox\" ng-model=\"form.Checkbox9NonRenseigne\">\n" +
    "            <label>Non renseigné</label>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "              <div class=\"input-field col s12\">\n" +
    "                <textarea ng-model=\"form.Text9Complement\"></textarea>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div>\n" +
    "            <h4>10. Observations complémentaires</h4>\n" +
    "            <input type=\"checkbox\" ng-model=\"form.Checkbox10Negatif\">\n" +
    "            <label>Négatif</label>\n" +
    "\n" +
    "            <input type=\"checkbox\" ng-model=\"form.Checkbox10NonRenseigne\">\n" +
    "            <label>Non renseigné</label>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "              <div class=\"input-field col s12\">\n" +
    "                <textarea ng-model=\"form.Text10Complement\"></textarea>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div id=\"div11\">\n" +
    "            <div id=\"titre11\">\n" +
    "              <h2>11. Palpation(s) douloureuse(s) des muscles masticateurs, des atm et des muscles cervico-scapulaires :\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\" ng-model=\"Checkbox11Negatif\"/>\n" +
    "                  Négatif\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\" ng-model=\"Checkbox11NonRenseigne\"/>\n" +
    "                  Non Renseigné\n" +
    "                </label>\n" +
    "              </h2>\n" +
    "            </div>\n" +
    "            <div id=\"champs11\">\n" +
    "              <table>\n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                  <th> </th>\n" +
    "                  <th colspan=\"3\">Côté droit</th>\n" +
    "                  <th colspan=\"3\">Côté gauche</th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Muscles 1kg\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      Douleur provoquée\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      Est-elle identique à la douleur habituelle ?\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      Douleur(s) référée(s)\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      Douleur provoquée\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      Est-elle identique à la douleur habituelle ?\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      Douleur(s) référée(s)\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Temporal postérieur\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11TempPost1\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11TempPost2\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11TempPost3\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11TempPost4\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Temporal moyen\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11TempMoy1\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11TempMoy2\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11TempMoy3\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11TempMoy4\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Temporal antérieur\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11TempAnt1\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11TempAnt2\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11TempAnt3\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11TempAnt4\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      <p>Est-ce que la palpation des muscles temporaux provoque des maux de tête identiques à ceux ressentis habituellement ?</p>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"radio\" name=\"group11\" value=\"Oui\" ng-model=\"Radio11PalpationOui\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"radio\" name=\"group11\" value=\"Non\" ng-model=\"Radio11PalpationNon\"/>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Masséter (origine angle mdb)\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11MasseterOri1\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11MasseterOri2\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11MasseterOri3\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11MasseterOri4\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Masséter (corps)\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11MasseterCorps1\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11MasseterCorps2\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11MasseterCorps3\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11MasseterCorps4\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Masséter (insertion zygomatique)\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11MasseterInsert1\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11MasseterInsert2\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11MasseterInsert3\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11MasseterInsert4\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      <p>ATM</p>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Pôle latéral 0,5 kg\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11Pole1\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11Pole2\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11Pole3\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11Pole4\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Autour du pôle latéral 1 kg\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11AutourPole1\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11AutourPole2\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11AutourPole3\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11AutourPole4\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      <p>Autres muscles masticateurs</p>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Digastrique (région md post)\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11Digastrique1\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11Digastrique2\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11Digastrique3\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11Digastrique4\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Ptérygoïdien médial (région submd)\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11PteryMed1\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11PteryMed2\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11PteryMed3\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11PteryMed4\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Aire du ptérygoïdien latéral\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11PteryLat1\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11PteryLat2\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11PteryLat3\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11PteryLat4\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Tendon du temporal\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11Tendon1\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11Tendon2\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11Tendon3\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11Tendon4\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                <tr>\n" +
    "                  <td>\n" +
    "                    <p>Autres muscles cervico-scapulaires 0,5kg</p>\n" +
    "                  </td>\n" +
    "                </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Sterno-cléido-mastoïdien\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11Sterno1\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11Sterno2\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11Sterno3\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11Sterno4\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Trapèze\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11Trapeze1\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11Trapeze2\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11Trapeze3\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11Trapeze4\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      <p>Autre(s) muscle(s)</p>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      <input type=\"text\" ng-model=\"Text11AutreMuscle1\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11AutreMuscle11\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11AutreMuscle12\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11AutreMuscle13\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11AutreMuscle14\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      <input type=\"text\" ng-model=\"Text11AutreMuscle2\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11AutreMuscle21\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11AutreMuscle22\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11AutreMuscle23\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11AutreMuscle24\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      <input type=\"text\" ng-model=\"Text11AutreMuscle3\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11AutreMuscle31\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11AutreMuscle32\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11AutreMuscle33\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\" ng-model=\"Checkbox11AutreMuscle34\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                </tbody>\n" +
    "              </table>\n" +
    "          </div>\n" +
    "\n" +
    "          <div id=\"div12\">\n" +
    "            <div id=\"titre12\">\n" +
    "              <h2>12. Rapports Incisifs :\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Négatif\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Non Renseigné\n" +
    "                </label>\n" +
    "              </h2>\n" +
    "            </div>\n" +
    "            <div id=\"champs12\">\n" +
    "              <p>Dent de référence : </p>\n" +
    "              <div>\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"group3\"/>\n" +
    "                  11\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"group3\"/>\n" +
    "                  21\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"group3\"/>\n" +
    "                  Autre <input type=\"text\"/>\n" +
    "                </label>\n" +
    "              </div>\n" +
    "              <div>\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"group4\"/>\n" +
    "                  31\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"group4\"/>\n" +
    "                  41\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"group4\"/>\n" +
    "                  Autre <input type=\"text\"/>\n" +
    "                </label>\n" +
    "              </div>\n" +
    "              <div>\n" +
    "                <p>Surplomb horizontal : </p>\n" +
    "                <label>\n" +
    "                  <input type=\"number\"/>\n" +
    "                  mm\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Si négatif\n" +
    "                </label>\n" +
    "              </div>\n" +
    "              <div>\n" +
    "                <p>Recouvrement vertical : </p>\n" +
    "                <label>\n" +
    "                  <input type=\"number\"/>\n" +
    "                  mm\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Si négatif\n" +
    "                </label>\n" +
    "              </div>\n" +
    "              <div>\n" +
    "                <p>Existe-t-il un décalage des milieux inter-incisifs ?</p>\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Oui\n" +
    "                  <label>\n" +
    "                    <input type=\"number\"/>\n" +
    "                    mm\n" +
    "                  </label>\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Non\n" +
    "                </label>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div id=\"div13\">\n" +
    "            <div id=\"titre13\">\n" +
    "              <h2>13. Mouvements d'ouverture, latéralités et propulsion :\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Négatif\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Non Renseigné\n" +
    "                </label>\n" +
    "              </h2>\n" +
    "            </div>\n" +
    "            <div id=\"champs13\">\n" +
    "              <table>\n" +
    "                <thead>\n" +
    "                  <tr>\n" +
    "                    <th colspan=\"3\">Côté droit</th>\n" +
    "                    <th colspan=\"3\">Côté gauche</th>\n" +
    "                  </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                  <tr>\n" +
    "                    <td>Ouverture non douloureuse :\n" +
    "                      <label>\n" +
    "                        <input type=\"number\"/>\n" +
    "                        mm\n" +
    "                      </label>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      Douleur provoquée\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      Est-elle identique à la douleur habituelle ?\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      Douleur(s) référée(s)\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      Douleur provoquée\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      Est-elle identique à la douleur habituelle ?\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      Douleur(s) référée(s)\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td>Ouv. max. non assistée :\n" +
    "                      <label>\n" +
    "                        <input type=\"number\"/>\n" +
    "                        mm\n" +
    "                      </label>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td>Ouv. max. assistée :\n" +
    "                      <label>\n" +
    "                        <input type=\"number\"/>\n" +
    "                        mm\n" +
    "                      </label>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Ouv. contre résistance :\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Fermeture contre résistance :\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td>Latéralité droite :\n" +
    "                      <label>\n" +
    "                        <input type=\"number\"/>\n" +
    "                        mm\n" +
    "                      </label>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td>Latéralité droite assistée :\n" +
    "                      <label>\n" +
    "                        <input type=\"number\"/>\n" +
    "                        mm\n" +
    "                      </label>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Latéralité droite contre résistance :\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td>Latéralité gauche :\n" +
    "                      <label>\n" +
    "                        <input type=\"number\"/>\n" +
    "                        mm\n" +
    "                      </label>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td>Latéralité gauche assistée :\n" +
    "                      <label>\n" +
    "                        <input type=\"number\"/>\n" +
    "                        mm\n" +
    "                      </label>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Latéralité gauche contre résistance :\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td>Propulsion :\n" +
    "                      <label>\n" +
    "                        <input type=\"number\"/>\n" +
    "                        mm\n" +
    "                      </label>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Propulsion contre résistance :\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                </tbody>\n" +
    "              </table>\n" +
    "              <div>\n" +
    "                <p>Est-ce que l'un des mouvements effectués vous a déclenché des maux de tête ? </p>\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\">\n" +
    "                  Oui\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\">\n" +
    "                  Non\n" +
    "                </label>\n" +
    "              </div>\n" +
    "              <div>\n" +
    "                <label>\n" +
    "                  Si Oui lesquels ?\n" +
    "                  <input type=\"text\">\n" +
    "                </label>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div id=\"div14\">\n" +
    "            <div id=\"titre14\">\n" +
    "              <h2>14. Trajet d'ouverture / fermeture :\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Négatif\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Non Renseigné\n" +
    "                </label>\n" +
    "              </h2>\n" +
    "            </div>\n" +
    "            <div id=\"champs14\">\n" +
    "              <p>Forme du trajet d'ouverture : </p>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"/>\n" +
    "                Rectiligne\n" +
    "              </label>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"/>\n" +
    "                Réflexion corrigée à droite\n" +
    "              </label>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"/>\n" +
    "                Réflexion corrigée à gauche\n" +
    "              </label>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"/>\n" +
    "                Déviation non corrigée à droite\n" +
    "              </label>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"/>\n" +
    "                Déviation non corrigée à gauche\n" +
    "              </label>\n" +
    "            </div>\n" +
    "            <div>\n" +
    "              Canvas à foutre ici\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div id=\"div15\">\n" +
    "            <div id=\"titre15\">\n" +
    "              <h2>15. Bruits articulaires lors des mouvements fonctionnels :\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Négatif\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Non Renseigné\n" +
    "                </label>\n" +
    "              </h2>\n" +
    "            </div>\n" +
    "            <div id=\"champs15\">\n" +
    "              <table>\n" +
    "                <thead>\n" +
    "                  <tr>\n" +
    "                    <th colspan=\"2\"> </th>\n" +
    "                    <th colspan=\"2\">Praticien</th>\n" +
    "                    <th colspan=\"2\">Patient</th>\n" +
    "                    <th colspan=\"2\"> </th>\n" +
    "                  </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                  <tr>\n" +
    "                    <td> </td>\n" +
    "                    <td> </td>\n" +
    "                    <td>Claquement</td>\n" +
    "                    <td>Crépitement</td>\n" +
    "                    <td>Claquement</td>\n" +
    "                    <td>Crépitement</td>\n" +
    "                    <td>Douleur</td>\n" +
    "                    <td>Douleur habituelle ?</td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td rowspan=\"2\">Ouverture </td>\n" +
    "                    <td>\n" +
    "                      ATM droite\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      ATM gauche\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td rowspan=\"2\">Fermeture </td>\n" +
    "                    <td>\n" +
    "                      ATM droite\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      ATM gauche\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td rowspan=\"2\">Latéralité gauche </td>\n" +
    "                    <td>\n" +
    "                      ATM droite\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      ATM gauche\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td rowspan=\"2\">Latéralité droite </td>\n" +
    "                    <td>\n" +
    "                      ATM droite\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      ATM gauche\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td rowspan=\"2\">Propulsion </td>\n" +
    "                    <td>\n" +
    "                      ATM droite\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      ATM gauche\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <input type=\"checkbox\"/>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                </tbody>\n" +
    "              </table>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div id=\"div16\">\n" +
    "            <div id=\"titre16\">\n" +
    "              <h2>16. Blocage articulaire :\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Négatif\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Non Renseigné\n" +
    "                </label>\n" +
    "              </h2>\n" +
    "            </div>\n" +
    "            <div id=\"champs16\">\n" +
    "              <div>\n" +
    "                <p>\n" +
    "                  Vous est-il arrivé d'être bloqué(e) ?\n" +
    "                </p>\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Bouche Ouverte\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Bouche Fermée\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  ATM droite\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  ATM gauche\n" +
    "                </label>\n" +
    "              </div>\n" +
    "              <div>\n" +
    "                <label>\n" +
    "                  Fréquence :\n" +
    "                  <input type=\"text\"/>\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  Dernier épisode :\n" +
    "                  <input type=\"text\"/>\n" +
    "                </label>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div id=\"div17\">\n" +
    "            <div id=\"titre17\">\n" +
    "              <h2>17. Test du Bâtonnet :\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Négatif\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Non Renseigné\n" +
    "                </label>\n" +
    "              </h2>\n" +
    "            </div>\n" +
    "            <div id=\"champs17\">\n" +
    "              <table>\n" +
    "                <thead>\n" +
    "                  <tr>\n" +
    "                    <th colspan=\"2\"> </th>\n" +
    "                    <th colspan=\"2\">Douleur</th>\n" +
    "                  </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                  <tr>\n" +
    "                    <td rowspan=\"2\">\n" +
    "                      Bâtonnet\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      Droite\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "\n" +
    "                  <tr>\n" +
    "                    <td>\n" +
    "                      Gauche\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <select>\n" +
    "                        <option></option>\n" +
    "                        <option>M. temporal droit</option>\n" +
    "                        <option>M. temporal gauche</option>\n" +
    "                        <option>M. masséter droit</option>\n" +
    "                        <option>M. masséter gauche</option>\n" +
    "                        <option>Atm droit</option>\n" +
    "                        <option>Atm gauche</option>\n" +
    "                        <option>Autres <input type=\"text\"></option>\n" +
    "                      </select>\n" +
    "                    </td>\n" +
    "                  </tr>\n" +
    "                </tbody>\n" +
    "              </table>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div id=\"div18\">\n" +
    "            <div id=\"titre18\">\n" +
    "              <h2>18. Elasticité Articulaire :\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Négatif\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Non Renseigné\n" +
    "                </label>\n" +
    "              </h2>\n" +
    "            </div>\n" +
    "            <div id=\"champs18\">\n" +
    "              <div>\n" +
    "                <p>ATM droite : </p>\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"group5\"/>\n" +
    "                  Souple\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"group5\"/>\n" +
    "                  Raide\n" +
    "                </label>\n" +
    "              </div>\n" +
    "              <div>\n" +
    "                <p>ATM gauche : </p>\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"group6\">\n" +
    "                  Souple\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"group6\">\n" +
    "                  Raide\n" +
    "                </label>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div id=\"div19\">\n" +
    "            <div id=\"titre19\">\n" +
    "              <h2>19. Examen Endo-Buccal :\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Négatif\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                  Non Renseigné\n" +
    "                </label>\n" +
    "              </h2>\n" +
    "            </div>\n" +
    "            <div id=\"champs19\">\n" +
    "              <div>Canvas à mettre ici</div>\n" +
    "              <div>\n" +
    "                <p>Contacts en OIM : </p>\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"group7\"/>\n" +
    "                  Répartis de manière équilibrée\n" +
    "                </label>\n" +
    "                <div>\n" +
    "                  <input type=\"radio\" name=\"group7\"/>\n" +
    "                  <input type=\"text\"/>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div>\n" +
    "                <p>La position dans laquelle vous fermez vos dents vous paraît-elle confortable ? </p>\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"group8\"/>\n" +
    "                  Oui\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"group8\"/>\n" +
    "                  Non\n" +
    "                </label>\n" +
    "              </div>\n" +
    "              <div>\n" +
    "                <p>Mastication Unilatérale ? </p>\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"group9\"/>\n" +
    "                  Oui\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"group9\"/>\n" +
    "                  Non\n" +
    "                </label>\n" +
    "              </div>\n" +
    "              <div>\n" +
    "                <div>\n" +
    "                  <label>\n" +
    "                    Interférence(s) en litéralité droite :\n" +
    "                    <input type=\"text\" />\n" +
    "                  </label>\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                  <label>\n" +
    "                    Interférence(s) en litéralité gauche :\n" +
    "                    <input type=\"text\" />\n" +
    "                  </label>\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                  <label>\n" +
    "                    Interférence(s) en propulsion :\n" +
    "                    <input type=\"text\" />\n" +
    "                  </label>\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                  <label>\n" +
    "                    Prématuré(s) :\n" +
    "                    <input type=\"text\" />\n" +
    "                  </label>\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                  <p>\n" +
    "                    Différentiel ORC-OIM :\n" +
    "                  </p>\n" +
    "                  <label>\n" +
    "                    Dans le sens vertical :\n" +
    "                    <input type=\"text\"/>\n" +
    "                  </label>\n" +
    "                  <label>\n" +
    "                    Dans le sens antéro-postérieur :\n" +
    "                    <input type=\"text\"/>\n" +
    "                  </label>\n" +
    "                  <label>\n" +
    "                    Dans le sens latéral :\n" +
    "                    <input type=\"text\"/>\n" +
    "                  </label>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div id=\"div20\">\n" +
    "              <div id=\"titre20\">\n" +
    "                <h2>20. Usures dentaires/bruxismes :\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\"/>\n" +
    "                    Négatif\n" +
    "                  </label>\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\"/>\n" +
    "                    Non Renseigné\n" +
    "                  </label>\n" +
    "                </h2>\n" +
    "              </div>\n" +
    "              <div id=\"champs20\">\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"group10\"/>\n" +
    "                  Erosion (dents : <input type=\"text\"/>)\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"group10\"/>\n" +
    "                  Abrasion (dents : <input type=\"text\"/>)\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"group10\"/>\n" +
    "                  Attrition (dents : <input type=\"text\"/>)\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"group10\"/>\n" +
    "                  Bruxisme de sommeil (diagnostic :\n" +
    "                  <select>\n" +
    "                    <option>possible</option>\n" +
    "                    <option>probable</option>\n" +
    "                    <option>défini</option>\n" +
    "                  </select>\n" +
    "                  )\n" +
    "                </label>\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"group10\"/>\n" +
    "                  Bruxisme d'éveil (dents :\n" +
    "                  <select>\n" +
    "                    <option>possible</option>\n" +
    "                    <option>probable</option>\n" +
    "                    <option>défini</option>\n" +
    "                  </select>\n" +
    "                  )\n" +
    "                </label>\n" +
    "                <p>Infos Complémentaires : </p>\n" +
    "                <textarea></textarea>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div id=\"div21\">\n" +
    "              <div id=\"titre21\">\n" +
    "                <h2>\n" +
    "                  Examens Complémentaires :\n" +
    "                </h2>\n" +
    "              </div>\n" +
    "              <div id=\"champs21\">\n" +
    "                <label>\n" +
    "                  Type d'examen :\n" +
    "                  <input type=\"text\"/>\n" +
    "                </label>\n" +
    "                <input type=\"button\" value=\"Télécharger une photo\"/>\n" +
    "                <input type=\"button\" value=\"Ajouter un examen\"/>\n" +
    "                <input type=\"button\" value=\"Supprimer un examen\"/>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div id=\"div22\">\n" +
    "              <div id=\"titre22\">\n" +
    "                <h2>\n" +
    "                  Diagnostic :\n" +
    "                </h2>\n" +
    "              </div>\n" +
    "              <div id=\"champs22\">\n" +
    "                <textarea></textarea>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div id=\"div23\">\n" +
    "              <div id=\"titre23\">\n" +
    "                <h2>\n" +
    "                  Plan de traitement :\n" +
    "                </h2>\n" +
    "              </div>\n" +
    "              <div id=\"champs23\">\n" +
    "                <textarea></textarea>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div>\n" +
    "              <input type=\"reset\" value=\"Réinitialiser le questionnaire\"/>\n" +
    "              <input type=\"button\" value=\"Envoyer\"/>\n" +
    "              <input type=\"submit\" value=\"submit\" style=\"display:none\"/>\n" +
    "              <input type=\"button\" value=\"Imprimer\"/>\n" +
    "            </div>\n" +
    "          </ul>\n" +
    "\n" +
    "        </form>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/nous/nous.tpl.html",
    "\n" +
    "<div class=\"row\">\n" +
    "   <div class=\"input-field col s6\">\n" +
    "     <input placeholder=\"\" id=\"first_name\" type=\"text\" class=\"validate\">\n" +
    "     <label class=\"active\" for=\"first_name\">First Name</label>\n" +
    "   </div>\n" +
    " </div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/pourquoi/pourquoi.tpl.html",
    "<div class=\"pure-g island3\">\n" +
    "  <div class=\"content pure-u-1\">\n" +
    "    <p class=\"island-panel\">\n" +
    "      <strong>Note that this is only a getting started guide, for more detailed information about the build system, the available tasks, the configuration of the build or anything else, please refer to the <a href=\"https://github.com/vesparny/angular-kickstart/#readme\" target=\"_blank\">documentation</a> on the GitHub project.</strong>\n" +
    "    </p>\n" +
    "\n" +
    "    <h3>What and Why</h3>\n" +
    "    <p>\n" +
    "      <code>angular-kickstart</code> is an opinionated kickstart for single page application development with AngularJS. It makes your development and testing easy, keeps the structure of the project consistent and allows you to create a fully optimized\n" +
    "      production release withe ease. After having developed a lot of AngularJS projects I decided to collect here what I've learnt.\n" +
    "    </p>\n" +
    "\n" +
    "    <h3>Getting started</h3>\n" +
    "    <p>\n" +
    "      Install\n" +
    "      <strong><a href=\"https://github.com/joyent/node/wiki/installation\" target=\"_blank\">node.js</a></strong>. Then\n" +
    "      <strong>sass, gulp and bower</strong> if you haven't yet.\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>\n" +
    "    <code>\n" +
    "    $ gem install sass\n" +
    "    $ npm -g install gulp bower\n" +
    "    </code>\n" +
    "</pre>\n" +
    "\n" +
    "    <p>\n" +
    "      After that, install\n" +
    "      <code>angular-kickstart</code> - download the <a href=\"https://github.com/vesparny/angular-kickstart/releases/latest\">latest</a> release (or clone the master branch if want to run the development version). Unzip the project and cd into it, then\n" +
    "      install bower and npm dependencies, and run the application in development mode.\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>\n" +
    "    <code>\n" +
    "    $ npm install\n" +
    "    $ bower install\n" +
    "    $ gulp serve\n" +
    "    </code>\n" +
    "</pre>\n" +
    "\n" +
    "    <p>\n" +
    "      You are now ready to go, your applcation is available at <code>http://127.0.0.1:3000</code>.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      You are now ready to start coding, every file you add, edit or delete into the\n" +
    "      <code>/client</code> folder, will be handled by the build system and the browser will reload.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      When you are ready to build a production release there is a task for that.\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>\n" +
    "    <code>\n" +
    "    $ gulp serve:dist\n" +
    "    </code>\n" +
    "</pre>\n" +
    "\n" +
    "    <p>\n" +
    "      This task will lint your code, optimize css js and images files, run unit tests. After the task has successfully finished, you can find an optimized version of your project in the\n" +
    "      <code>/build/dist</code> folder.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "      Other tasks are available:\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>\n" +
    "    <code>\n" +
    "    #for developing running unit test on every file change.\n" +
    "    $ gulp serve:tdd\n" +
    "\n" +
    "    #for running e2e test. (you application should be running on http://127.0.0.1:3000)\n" +
    "    $ gulp test:e2e\n" +
    "\n" +
    "    #for running unit tests one time then exit.\n" +
    "    $ gulp test:unit\n" +
    "    </code>\n" +
    "</pre>\n" +
    "    <p class=\"text-center\">\n" +
    "      <a href=\"https://github.com/vesparny/angular-kickstart/#readme\" target=\"_blank\" class=\"pure-button button-xlarge pure-button-primary\">\n" +
    "        Full documentation on GitHub\n" +
    "      </a>\n" +
    "    </p>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/propos/propos.tpl.html",
    "<div class=\"pure-g island3\">\n" +
    "  <div class=\"content pure-u-1\">\n" +
    "    <p class=\"island-panel\">\n" +
    "      <strong>Note that this is only a getting started guide, for more detailed information about the build system, the available tasks, the configuration of the build or anything else, please refer to the <a href=\"https://github.com/vesparny/angular-kickstart/#readme\" target=\"_blank\">documentation</a> on the GitHub project.</strong>\n" +
    "    </p>\n" +
    "\n" +
    "    <h3>What and Why</h3>\n" +
    "    <p>\n" +
    "      <code>angular-kickstart</code> is an opinionated kickstart for single page application development with AngularJS. It makes your development and testing easy, keeps the structure of the project consistent and allows you to create a fully optimized\n" +
    "      production release withe ease. After having developed a lot of AngularJS projects I decided to collect here what I've learnt.\n" +
    "    </p>\n" +
    "\n" +
    "    <h3>Getting started</h3>\n" +
    "    <p>\n" +
    "      Install\n" +
    "      <strong><a href=\"https://github.com/joyent/node/wiki/installation\" target=\"_blank\">node.js</a></strong>. Then\n" +
    "      <strong>sass, gulp and bower</strong> if you haven't yet.\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>\n" +
    "    <code>\n" +
    "    $ gem install sass\n" +
    "    $ npm -g install gulp bower\n" +
    "    </code>\n" +
    "</pre>\n" +
    "\n" +
    "    <p>\n" +
    "      After that, install\n" +
    "      <code>angular-kickstart</code> - download the <a href=\"https://github.com/vesparny/angular-kickstart/releases/latest\">latest</a> release (or clone the master branch if want to run the development version). Unzip the project and cd into it, then\n" +
    "      install bower and npm dependencies, and run the application in development mode.\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>\n" +
    "    <code>\n" +
    "    $ npm install\n" +
    "    $ bower install\n" +
    "    $ gulp serve\n" +
    "    </code>\n" +
    "</pre>\n" +
    "\n" +
    "    <p>\n" +
    "      You are now ready to go, your applcation is available at <code>http://127.0.0.1:3000</code>.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      You are now ready to start coding, every file you add, edit or delete into the\n" +
    "      <code>/client</code> folder, will be handled by the build system and the browser will reload.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      When you are ready to build a production release there is a task for that.\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>\n" +
    "    <code>\n" +
    "    $ gulp serve:dist\n" +
    "    </code>\n" +
    "</pre>\n" +
    "\n" +
    "    <p>\n" +
    "      This task will lint your code, optimize css js and images files, run unit tests. After the task has successfully finished, you can find an optimized version of your project in the\n" +
    "      <code>/build/dist</code> folder.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "      Other tasks are available:\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>\n" +
    "    <code>\n" +
    "    #for developing running unit test on every file change.\n" +
    "    $ gulp serve:tdd\n" +
    "\n" +
    "    #for running e2e test. (you application should be running on http://127.0.0.1:3000)\n" +
    "    $ gulp test:e2e\n" +
    "\n" +
    "    #for running unit tests one time then exit.\n" +
    "    $ gulp test:unit\n" +
    "    </code>\n" +
    "</pre>\n" +
    "    <p class=\"text-center\">\n" +
    "      <a href=\"https://github.com/vesparny/angular-kickstart/#readme\" target=\"_blank\" class=\"pure-button button-xlarge pure-button-primary\">\n" +
    "        Full documentation on GitHub\n" +
    "      </a>\n" +
    "    </p>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
}]);
})();
