Voici une version améliorée et corrigée de votre fichier README, prenant en compte les routes définies et les informations spécifiques sur votre application. 

---

# **StandardizedInvoice**

## **Description**
Cette API permet aux entreprises et aux développeurs de gérer efficacement la génération, la validation, l’annulation et le suivi des factures normalisées conformément aux exigences fiscales de la Direction Générale des Impôts (DGI) du Bénin. Elle s’intègre facilement aux systèmes existants et offre également un accès aux informations fiscales (groupes de taxes, types de paiement, types de factures).

### **Fonctionnalités principales :**
- **Automatisation de la facturation** : Génération de factures conformes aux normes fiscales de la DGI.
- **Validation et confirmation des factures** : Validation sécurisée via l’API eMecef.
- **Gestion des erreurs et des annulations** : Annulation ou modification de factures en cas de besoin.
- **Accès aux informations fiscales** : Consultation des types de taxes, types de paiements et autres informations essentielles.
- **Conformité et sécurité** : Garantit une gestion des données fiscales selon les normes en vigueur avec une protection des données renforcée.

---

## **Prérequis**
- **Node.js** (version 14 ou supérieure)
- **npm** ou **yarn**
- Compte API eMecef (avec un token d'accès valide)
- Variables d’environnement configurées dans un fichier `.env` :
  ```plaintext
  API_FACTURATION_URL_TEST=https://api.dgi.gov.bj/facturation
  API_INFORMATION_URL_TEST=https://api.dgi.gov.bj/informations
  API_KEY_TOKEN=VOTRE_TOKEN_API
  PORT=7001
  ```
- en production vous devez utilser les routes correspondant à la production
---
