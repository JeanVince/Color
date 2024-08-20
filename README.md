# README

## Vue d'ensemble du projet

Ce projet est une application web dynamique et interactive, conçue avec un accent particulier sur l'expérience utilisateur et un design réactif. L'application intègre plusieurs fonctionnalités clés qui améliorent l'interactivité et l'esthétique du site. Parmi ces fonctionnalités, on trouve un changement de couleur de fond, un outil de copie vers le presse-papiers avec un indicateur visuel de succès, et un menu de navigation basculable avec des transitions fluides.

## Fonctionnalités

### 1. Changeur de couleur de fond dynamique

- **Description** : Permet aux utilisateurs de changer la couleur de fond de la page en générant des codes de couleur hexadécimale aléatoires.
- **Implémentation** : Lorsque l'utilisateur clique sur le bouton "Changer de couleur", la couleur de fond de la page change pour une couleur hexadécimale générée aléatoirement. Le code couleur généré est affiché à l'écran, et les utilisateurs peuvent le copier dans leur presse-papiers en cliquant sur un bouton "Copier".
- **Extrait de code** :

  ```javascript
  document.addEventListener("DOMContentLoaded", () => {
    const Colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let btnChange = document.getElementById("btnChange");
    let span = document.querySelector(".color");
    let copier = document.querySelector(".copier");
    let successIcon = document.getElementById("success-icon");

    btnChange.addEventListener("click", () => {
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += Colors[Math.floor(Math.random() * Colors.length)];
      }
      document.body.style.background = hexColor;
      span.textContent = hexColor;
    });

    copier.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(span.textContent);
        successIcon.classList.remove("hidden");
        setTimeout(() => {
          successIcon.classList.add("hidden");
        }, 2000);
      } catch (err) {
        console.error("Échec de la copie : ", err);
      }
    });
  });
  ```

### 2. Menu de navigation basculable

- **Description** : Un menu de navigation réactif qui peut être basculé en cliquant sur un bouton. L'icône du bouton change pour indiquer si le menu est déployé ou replié.
- **Implémentation** : Lorsque le menu de navigation est actif, l'icône du bouton passe à une flèche "vers le haut" (`fa-chevron-up`), et lorsqu'il est inactif, l'icône revient à une flèche "vers le bas" (`fa-chevron-down`). Cette fonctionnalité offre aux utilisateurs un moyen intuitif de contrôler la visibilité du menu de navigation.
- **Extrait de code** :

  ```javascript
  let btn = document.querySelector(".btn");
  let nav = document.getElementById("nav");
  let icon = btn.querySelector("i");

  btn.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    if (nav.classList.contains("nav-active")) {
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
      btn.classList.add("button-active");
    } else {
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
      btn.classList.remove("button-active");
    }
  });
  ```

## Comment utiliser

1. **Changer la couleur de fond** :

   - Cliquez sur le bouton "Changer de couleur" pour générer une couleur de fond aléatoire.
   - Le code hexadécimal de la couleur s'affichera à l'écran.
   - Cliquez sur le bouton "Copier" pour copier le code hexadécimal dans votre presse-papiers. Une icône de succès apparaîtra brièvement pour confirmer l'action de copie.

2. **Basculer le menu de navigation** :
   - Cliquez sur le bouton avec l'icône de flèche pour basculer le menu de navigation.
   - L'icône changera en fonction de l'état du menu (déployé ou replié).

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/JeanVince/Color.git
   ```
2. Accédez au répertoire du projet :
   ```bash
   cd Color
   ```
3. Ouvrez le fichier `index.html` dans votre navigateur web pour voir le projet en action.

## Technologies utilisées

- **HTML5** : Structure et mise en page de l'application.
- **CSS3** : Style et design réactif.
- **JavaScript (ES6)** : Interactivité et fonctionnalités dynamiques.

## Contribution

Si vous souhaitez contribuer à ce projet, veuillez suivre ces étapes :

1. Forkez le dépôt.
2. Créez une nouvelle branche :
   ```bash
   git checkout -b nouvelle-fonctionnalité
   ```
3. Apportez vos modifications et validez-les :
   ```bash
   git commit -m "Ajout d'une nouvelle fonctionnalité"
   ```
4. Poussez la branche :
   ```bash
   git push origin nouvelle-fonctionnalité
   ```
5. Ouvrez une pull request et décrivez les changements que vous avez effectués.

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Remerciements

Un grand merci à tous les contributeurs et à ceux qui ont fourni des retours pendant le développement de ce projet. Vos idées ont été inestimables pour faire de ce projet un succès.
