# Test_x_Fabric

Voici mes deux réponses apportées aux problèmes proposés.

### 1. Que comprends-tu dans ce code ?
https://pastebin.com/cZQrS0Du

Le format de réponse est complètement libre.

#### Ma réponse : 
ligne 1 à 12 --> on importe toutes les ressources nécéssaire à la bonne exécution du composant (librairies / composants / theme)
On va se servir d'hooks afin de faire circuler les informations :
- UseState pour sauvegarder des informations dans le state
- UseDispatch afin de profiter de Redux

lignes 14 à 17 --> On décrit les props du composant
userEventList sera un objet
selectEventList sera une fonction qui est REQUISE --> un warning sera déclenché si cette props n'est pas assignée

ligne 28 --> on assigne aux variables userEventList & selectEventList leurs valeurs similaires aux props

ligne 32 -->  on crée la variable ongoingEvents dans le state : tableau
on lui associe un setter comme le veut l'utilisation de useState()

ligne 36 -->  on crée la variable notOngoingEvents dans le state : tableau
on lui associe un setter comme le veut l'utilisation de useState()

ligne 38 --> on instancie une variable dispatch qui prends pour valeur le hook useDispatch()

ligne 40 à 47 --> on met en place un useEffect() qui se déclenchera lorsque le composant sera monté pour la 1ere fois
On change le state pour y mettre les evenements auquels l'utilisateur s'est inscrit et on retourne une selection vide

ligne 49 à 60 --> on instancie deux tableaux vides : newOngoingEvents & newNotOngoingEvents
on parcours l'objet userEventList qui contient un tableau d'evenement
on vérifie que la date de départ de l'evenement soit aujourdhui au plus tard et que la date de fin soit aujourdhui au plus tôt

SI oui alors on ajoute cet evenement au tableau newOngoingEvents
SI non on ajoute cet evenement au tableau newNotOngoingEvents

On pousse les valeurs des deux tableaux dans le state

ON REPETE L'OPERATION CHAQUE FOIS QUE LA VALEUR DE userEventList EST MODIFIEE

ligne 62 à 69 --> coté JSX on affiche le composant EventSelectionTopBar au sein d'un container. On lui associe les props underlined, selectEventList, selectEventSubscriptions

ligne 71 --> si le tableau ongoingEvents n'est pas vide on l'affiche dans le composant OngoingEventCarousel

ligne 72 --> on affiche la valeur de la variable notOngoingEvents dans le composant SubscriptionList

ligne 78 --> on exporte le composant afin qu'il puisse etre réutilisé ailleurs

ligne 80 à 84 --> on définit un style par défaut au container via des propriétes css et une variables scss

#### En bref il y a une liste d'évènements à venir affichée, ainsi qu'un caroussel montrant les évènements en cours. L'utilisateur peut s'inscrire aux évènements qui ne sont pas encore commencés

### 2. Développer un formulaire en React, récupérant le prénom, le nom, l'adresse email et le téléphone de l'utilisateur. Tous les champs sont obligatoires sauf le numéro de téléphone. Une fois le formulaire submitted, une autre page s'affiche récapitulant les informations renseignées, avec un bouton pour clear les données et revenir au formulaire vide.

#### Ma réponse :

Je m'imagine un processus de création en plusieurs étapes afin d'avancer plus sereinement :
- construire un formulaire basique avec des champs controlés
- gérer la redirection et le reset du formulaire
- afficher un message en cas d'erreur de saisie
- rendre tous les champs obligatoires sauf téléphone

Et c'est parti !
