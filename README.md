# Restabilire poligon

**Enunț**: Ghiţă a desenat pe o foaie de hâtrie în pătrăţele nu poligon, laturile căruia trec numai pe liniile caroiajului. Apoi a scris în fiecare pătrăţel numărul de laturi a pătrăţelului, care sunt şi laturi ale poligonului. Şi mai apoi a şters liniile, lîsând doar cifrele. În final a rămas numai un tablou de cifre.

Restabiliţi poligonul desenat de Ghiţă

**Input** Prima linie a fişierului de intrare conţine două numere naturale: Y — numărul de linii, X — numărul de coloane a foii (3≤Y≤1000, 3≤X≤1000). În fiecare din următoarele Y linii sunt înscrise câte X numere întregi nenegative, care nu depăşesc valoarea 4.

Nici una din laturi nu trece pe marginea foii.

**Output** Fişierul de ieşire va conţine poligonul iniţial în următorul format.

În fişier vor fi Y linii a câte 2X–1 simboluri fiecare ( câte un symbol la fiecare pătrăţel şi la fiecare linie între pătrăţele).

În prima linie veţi afişa liniile verticale a primului rând, folosind simbolul | (linie verticală, cod ASCII 124) şi liniile orizontale, care separă prima linie de următoarea, Folosind simbolul de subliniere \_ (cod ASCII 95 ). Dacă segmental respective lipseşte în poligonul dat, în locul lui se afişează un punct . (cod ASCII 46). A doua linie va conţine segmentele verticale şi orizontale din rîndul 2 ş.a.m.d. În fiecare linie pe poziţii impare pot fi doar puncte sau linii de subliniere, pe poziţii pare – doar puncte sau linii verticale.

Se garantează existenţa cel puţin a unei soluţii. Dacă sunt mai multe, afişaţi oricare din ele.

# Exemplu

[![N|Solid](https://sites.google.com/site/infocursro/_/rsrc/1363427454687/probleme-de-concurs/modelare/restabilirepoligon/exemplu.jpg)](https://sites.google.com/site/infocursro/probleme-de-concurs/modelare/restabilirepoligon)

#### Execute

```sh
$ node index.js < input.txt
```
