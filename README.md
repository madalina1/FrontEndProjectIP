# IP_User_View

* Diagrama Use-Case a fost realizata de Adascalitei Mihai.

Pasii urmatori sunt pentru cei care nu au proiectul salvat local, pe calculator:

1. Mergeti pe repoul Madalinei unde are proiectul
2. Fork prima data (asta o sa faca un folder pe githubul vostru cu proiectul)
3. Apoi click pe butonul verde din dreapta 
4. Selectati linkul
5. Mergeti intr-un folder unde vreti sa salvati proiectul si sa il aveti local
6. Deschideti command line in folderul respectiv - SHIFT + click dreapta - Open cmd window....(sper ca aveti github instalat pe windows)
7. In cmd scrieti git clone si linkul salvat anterior. Asta o sa faca un folder cu numele proiectului in folderul in care sunteti momentan. Dupa puteti deschide proiectul cu Intellij.

Pentru cei care au deja salvat proiectul, intrati in Intellij, deschideti folder-ul in care se afla proiectul si apasati pe butonul din dreapta sus(cel pe care scrie VCS cu sageata albastra in jos -> Update Project) si sa aveti bifat la "Update Type" -> "Branch Default" si la "Clean working tree..." -> "Using Stash".

* Pentru a da run la proiect, intrati in folder-ul front-end si scrieti in terminal (View -> Tool Window -> Terminal) npm start (Cand apare Compiled successfully puteti sa intrati pe site -> localhost:4200). 
* PS: Cei care nu au rulat niciodata proiectul, intai scrieti in terminal npm install si apoi npm start.

+cateva reguli de la Katy

1. Toti trebuie sa avem acelasi Code Style pentru proiectul asta in momentul in care o sa urcam pe Github. Am sa atasez un fisier xml si unul txt pe grupul de facebook si sa urmati pasii de acolo.
2. In momentul in care o sa vreti sa lucrati ceva sa va faceti un branch nou NU PE MASTER. Dupa ce vedeti ca aveti ceva functional faceti commituri pe branchul vostru( ex. : made nav bar).Dupa ce terminati de lucrat puteti face Pull Request pe Repoul mare si dupa un review decidem impreuna daca ceea ce ati lucrat poate fi urcat pe Master sau mai sunt necesare anumite modificari inainte de a urca pe Master.
3. Pe langa asta sa nu uitati sa aveti grija sa faceti update la ce aveti voi local . Adica sa apasati pe Sagetica in jos albastra dreapta sus si lasati ce e ales acolo si OK. Oricum am sa postez de fiecare data cand o sa modific Masterul ca sa faceti si voi update
