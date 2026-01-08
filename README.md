# Site Web ACIC-SN

Site web institutionnel pour ACIC-SN (Afrique Chimie pour Industries et Collectivités – Société Nouvelle).

## Structure du projet

```
ACIC-SN/
├── index.html              # Page d'accueil
├── a-propos.html           # Page À propos
├── produits.html           # Page Produits
├── domaines.html           # Page Domaines d'intervention
├── services.html           # Page Services
├── marques.html            # Page Marques & Partenaires
├── actualites.html         # Page Actualités
├── agence.html             # Page Agence
├── contact.html            # Page Contact
├── devis.html              # Page Demande de devis
├── css/
│   └── styles.css          # Feuille de style principale
├── js/
│   └── script.js           # Scripts JavaScript
├── LOGO ACIC-SN .png       # Logo de l'entreprise
├── marques representées/   # Logos des marques
├── partenaires/            # Logos des partenaires
└── prd.md                  # Document PRD (Product Requirements Document)
```

## Technologies utilisées

- HTML5
- CSS3 (avec variables CSS)
- JavaScript (vanilla)
- Google Fonts (Poppins, Roboto)

## Charte graphique

### Couleurs
- Bleu industriel (principal) : `#24356E`
- Bleu secondaire : `#3F5E9C`
- Jaune/Or (accent & CTA) : `#F4C430`
- Rouge (accent secondaire) : `#C4161C`
- Gris foncé (texte) : `#2E2E2E`
- Gris clair (fonds) : `#F5F7FA`
- Blanc : `#FFFFFF`

### Typographies
- Titres : Poppins (Semi-bold à Bold)
- Texte : Roboto (Regular)

## Fonctionnalités

- ✅ Navigation responsive avec menu mobile
- ✅ Toutes les pages du PRD créées
- ✅ Formulaires de contact et demande de devis
- ✅ Intégration Google Maps
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Animations au scroll
- ✅ Validation des formulaires

## Pages disponibles

1. **Accueil** (`index.html`) - Présentation générale, produits, domaines, actualités
2. **À propos** (`a-propos.html`) - Histoire, mission, vision, valeurs
3. **Produits** (`produits.html`) - Toutes les catégories de produits
4. **Domaines d'intervention** (`domaines.html`) - Secteurs d'activité
5. **Services** (`services.html`) - Services proposés
6. **Marques & Partenaires** (`marques.html`) - Marques représentées et partenaires
7. **Actualités** (`actualites.html`) - Blog et actualités
8. **Agence** (`agence.html`) - Localisation et informations
9. **Contact** (`contact.html`) - Formulaire de contact
10. **Demande de devis** (`devis.html`) - Formulaire de demande de devis

## Installation

1. Cloner ou télécharger le projet
2. Ouvrir `index.html` dans un navigateur web
3. Pour un serveur local (recommandé), utiliser WAMP, XAMPP ou un serveur HTTP simple

## Personnalisation

### Modifier les couleurs
Éditer les variables CSS dans `css/styles.css` :
```css
:root {
    --blue-primary: #24356E;
    --yellow-accent: #F4C430;
    /* ... */
}
```

### Ajouter du contenu
- Modifier directement les fichiers HTML
- Les images doivent être placées dans les dossiers appropriés
- Les logos des marques et partenaires sont déjà référencés

## Notes importantes

- Les formulaires nécessitent une configuration backend pour l'envoi des emails
- La carte Google Maps utilise un lien de partage - peut nécessiter une clé API pour un usage intensif
- Les images de produits doivent être ajoutées selon les besoins

## Contact

- **Adresse** : Koumassi – Terminus 11
- **Email** : asicsn@live.fr

## Licence

© 2024 ACIC-SN. Tous droits réservés.
