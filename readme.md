# Test

## Types de tests

### Test unitaire
Tester une partie précise du code dans un scénario (success, erreur)

### Test d'intégration
Tester une fonctionnalité complete (ensemble des couches)

### Tests système
Test l'ensemble de systeme (Charge / Perf / Stress)

## Objectif
- Automatiser les tests
    - Permet de relancer l'ensemble des tests après la modification du code
    - Être notifier en cas de changement "cassant"

- Evité la régréssion
    - Casser une feature précedement implementé

- Evité qu'un bug « corrigé » revienne
    - Création d'un test lié à un bug
    - Si en modifiant le code, celui-ci réapparait, le test déclanche

- Garantir que le code est fonctionnel
    - Code coverage


## Mise en place du TDD (Test Driven Development)

1) Ecrire un test d'un fonctionnalité à résoudre
2) Verifier que le test plante
3) Ecrire le code necessaire pour réusir le test
4) Verifier que le test passe (S'il plante -> Retour à l'etape 3)
5) Remanier le code
6) Executer le test (S'il plante -> Retour à l'etape 5)
7) Retour à l'etape 1 pour la fonctionnalité suivante