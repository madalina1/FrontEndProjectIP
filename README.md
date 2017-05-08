# IP_User_View

* Diagrama Use-Case a fost realizata de Adascalitei Mihai.

Pasii urmatori sunt pentru cei care nu au proiectul salvat local, pe calculator:

1. Mergeti pe repoul Madalinei unde are proiectul
2. Fork prima data (asta o sa faca un folder pe githubul vostru cu proiectul)
3. Apoi click pe butonul verde din dreapta (Clone or download)
4. Selectati linkul
5. Mergeti intr-un folder unde vreti sa salvati proiectul si sa il aveti local
6. Deschideti command line in folderul respectiv - SHIFT + click dreapta - Open cmd window....(sper ca aveti github instalat pe windows)
7. In cmd scrieti git clone si linkul salvat anterior. Asta o sa faca un folder cu numele proiectului in folderul in care sunteti momentan. Dupa puteti deschide proiectul cu Intellij.

Pentru cei care au deja salvat proiectul, intrati in Intellij, deschideti folder-ul in care se afla proiectul si apasati pe butonul din dreapta sus(cel pe care scrie VCS cu sageata albastra in jos -> Update Project) si sa aveti bifat la "Update Type" -> "Branch Default" si la "Clean working tree..." -> "Using Stash".

* Pentru a da run la proiect, scrieti in terminal (View -> Tool Window -> Terminal) cd front-end (asta va va muta in directorul front-end) si apoi scrieti: npm start (Cand apare Compiled successfully puteti sa intrati pe site -> localhost:4200). 
* PS: Cei care nu au rulat niciodata proiectul, intai scrieti in terminal npm install si apoi npm start.

+cateva reguli de la Katy

1. Toti trebuie sa avem acelasi Code Style pentru proiectul asta in momentul in care o sa urcam pe Github. Am sa atasez un fisier xml si unul txt pe grupul de facebook si sa urmati pasii de acolo.
2. In momentul in care o sa vreti sa lucrati ceva sa va faceti un branch nou NU PE MASTER. Dupa ce vedeti ca aveti ceva functional faceti commituri pe branchul vostru( ex. : made nav bar).Dupa ce terminati de lucrat puteti face Pull Request pe Repoul mare si dupa un review decidem impreuna daca ceea ce ati lucrat poate fi urcat pe Master sau mai sunt necesare anumite modificari inainte de a urca pe Master.
3. Pe langa asta sa nu uitati sa aveti grija sa faceti update la ce aveti voi local . Adica sa apasati pe Sagetica in jos albastra dreapta sus si lasati ce e ales acolo si OK. Oricum am sa postez de fiecare data cand o sa modific Masterul ca sa faceti si voi update

 -> Cum sa uploadezi schimbarile facute de tine pe Git <-
 1. In folderul principal al proiectului deschizi o consola git prin click dreapta -> 'Git Bash Here'
 1.Optional. Pentru a verifica schimbarile facute de tine (care nu au fost 'comitate') scrie 'git status' si vei primi o lista de fisiere modificate, sterse sau adaugate
 2. Daca ai modificari, scrie 'git commit -m "comment"' unde 'comment' e preferabil sa fie ce schimbari ai facut in commit-ul respectiv. De exemplu 'git commit -m "Schimbat culori si adaugat imagini"' (Obs: Ghilimelele din jurul comment-ului sunt necesare)
 3. Ca sa nu uploadezi schimbarile direct pe master, fa un branch nou cu 'git checkout -b newBranch' ('newBranch' fiind numele noului branch, pui ce vrei, nu prea conteaza; numele sa nu contina spatii)
 3.Optional. Pentru a verifica pe ce branch esti si sa vezi celelalte branch-uri scrie 'git branch'
 4. Dai 'git push origin newBranch' pentru a trimite schimbarile facute pe repository (Inlocuiesti 'newBranch' cu numele branchului facut nou de tine)
 5. Intri in browser pe github la repository (adica pagina la care esti acum :>) si ar trebui sa-ti apara un pic mai jos de bara colorata in diferite culori commit-ul facut de tine. Dai pe el si dai pull request (poti vedea fiecare linie cu schimarile facute de tine).
 6. Done! Acum anunti seful de echipa care va verifica schimbarile facute de tine si va da sau nu merge :D
