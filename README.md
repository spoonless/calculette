calculette
==========

Le Kata "String calculator" (http://osherove.com/tdd-kata-1/) en JavaScript avec Jasmine.

Ouvrez le fichier SpecRunner.html dans votre navigateur préféré et éditez le fichier spec/calculatrice.js pour commencer à ajouter des tests. Le navigateur Web rafraîchit les tests toutes les 3 secondes.

Voici une feuille de route (non restrictive) pour ce Kata :

Créer une simple calculatrice avec une méthode :

int add(String numbers)

* Cette méthode peut prendre 0, 1 ou 2 nombres et retournera leur somme (pour une chaîne de caractères vide, elle retournera 0).
   Par exemple : "", "1" ou "1,2"

* Autoriser la méthode add à prendre en compte un nombre quelconque de nombres

* Autoriser la méthode add à prendre en compte les retours à ligne en plus des virgules comme séparateur.
   Par exemple : "1\n2,3" donne 6

* Par contre "1,\n" nest pas ok

* Autoriser la méthode add à prendre en compte des séparateurs quelconques. Pour changer de séparateur, la chaînes de caractères peut commencer par la ligne : "//[séparateur]\n". La première ligne est optionnelle et tous les scénarios précédents restent valides.
   Par exemple : "//;\n1;2" vaut 3

* Appeler add avec un nombre négatif entraîne une exception de type "negatives not allowed" suivi du nombre négatif passé dans la chaîne de caractères. S'il y a plusieurs nombre négatifs, il faut tous les ajouter dans le message de l'exception

* Les nombres supérieurs à 1000 sont ignorés. Par exemple "2,1001" vaut 2

* Le délimiteur peut avoir n'importe quelle longueur. Par exemple : "//:::\n1:::2:::3" vaut 6

* Autoriser plusieurs délimiteurs : "//[*][%]\n1*2%3" vaut 6

