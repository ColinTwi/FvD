# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Colin Twisker

  #### Je startniveau:
Rood 

  #### Je focus:
  Responsiveness
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  Voor deze opdracht heb ik Pinterst gekozen. Als student designer gebruik ik pinterest best vaak en daarom ben ik benieuwd wat ik aan de website kan gaan verbeteren.

  Pinterest
  https://nl.pinterest.com/

  De pagina's die ik na wil gaan maken zijn de home pagina en de profiel pagina die beide een zoekbalk uit laten klappen. De home pagina heeft bijzondere elementen zoals hover links en gifs die ik wil gaan proberen na te maken. De profiel pagina heeft een nette lay-out die ik ook wil proberen na te maken.

  #### Screenshot(s) van de eerste pagina (small screen): 
 Home pagina 
  <img src="readme-images/home.jpg" width="375px" alt="Home scherm met afbeeldingen en gifs">

  #### Screenshot(s) van de tweede pagina (small screen):
  zoek pagina
  <img src="readme-images/zoeken.jpg" width="375px" alt="Zoekbalk met recente zoekopdrachten">

  Profiel pagina
  <img src="readme-images/profielpagina.png" width="375px" alt="omschrijving van de pagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

------------foto van blaadje test ------
<img src="readme-images/wcag1.jpg" width="375px" alt="">
<img src="readme-images/wcag2.jpg" width="375px" alt="">
<img src="readme-images/wcag3.jpg" width="375px" alt="">
<img src="readme-images/wcag4.jpg" width="375px" alt="">
<img src="readme-images/wcag5.jpg" width="375px" alt="">

Mijn bevindingen:

Pinterest gebruikt overmatig veel divs en is niet semantisch netjes. Verder maakt Pinterest ook geen gebruik van headings. Ook worden er geen lists gebruikt terwijl pinterst vaak informatie heeft dat eigenlijk in een list zou horen. Niet elke afbeelding heeft een goede alt tekst waardoor gebruikers met een visuele beperking niet goed kunnen weten wat er op de afbeelding staat. Als laatste is de contrast van de navigatie iconen niet heel goed te zien, deze zijn licht grijs op een witte achtergrond.

Samengevat heeft pinterest de volgende problemen:
- Te veel divs
- Geen headings
- Geen lists
- Ontbrekende duidelijke alt
- Slecht icoon contrast

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  Dit is mijn breakdown schets van de home page:
  <img src="readme-images/home.jpg" width="375px" alt="breakdown van de hele pagina">

  ### wellicht nog een dynamisch deel (bijv filter): 
  Dit is mijn breakdown schets van de zoekbalk op de website:
  <img src="readme-images/zoeken.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  Het begin van het maken van de opzet van de navigatie gaat tot nu to goed. Ik heb eerder flexbox gebruikt waardoor ik iniedergeval weet hoe ik van werk moet gaan. Ik zou nog wel de opmaak hiervan een stuk netter mogen maken.
  <img src="readme-images/week1-nav.png" width="375px" alt="">

  Ik vind het alleen lastig hoe ik de main content ga coderen. Ik weet nog niet hoe ik dit wil gaan doen. Nu zit ik te twijfelen tussen grid en flexbox, maar ik ga als eerste grid uitproberen.



  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1 Colin     | student 2          | student 3    | student 4        |
  | Hoe maak ik         | ---                | ---          | ---              |
  | de lay-out          | en dit             | en ik dit    | en dan ik dat    |
  | van de              | dit als er tijd is | nog een punt | dit wil ik zeker |
  | scroll content      | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  Uitkomsten: 

  De navigatie zou een stuk beter zijn als het uit meerdere nav elementen bestaat en deze moeten dan nog in een header gezet worden. Verder heb ik nog weinig aan de toengankelijkheid gedaan dus moet ik hier nog snel aandacht aan gaan geven. Zo kan ik de toegangelijkheid beter intergreren in mijn app ontwerp. De content waar de gebruiker doorheen kan scrollen is momenteel gemaakt met grid, maar op aanbeveling van de docent kan ik ook column count gaan gebruiken. Deze zouden de afbeeldingen en tekst op een natuurlijkere manier op de website positioneren.

  Belangrijkste samengevat:

  - Navigatie mag bestaan uit meerdere navs en die dan het liefst in de header plaatsen.
  - Zorg dat je nu al bezig bent met toegankelijkheid
  - De scroll content kan je beter met flex of column count maken inplaats van grid.

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  Ik heb nog een tijdje de afbeeldingen (scoll content) proberen netjes te positioneren met grid, maar dit kreeg ik niet voor elkaar. Uiteindelijk op de advies van de docent uit het vorige feedback gesprek ben ik toch met column count gaan werken. Hier moest ik eerst nog wel even de tijd voor nemen om online te leren hoe column count werkt, dit was namelijk niet deel van de uitleg in de lessen.

  <img src="readme-images/moeite-code-css-week2.jpg" width="375px" alt="">
  <img src="moeite-met-ruimte-content-plaatsing.png" width="375px" alt="">


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1  Colin    | student 2          | student 3    | student 4        |
  | Colin               | ---                | ---          | ---              |
  | dit bespreken       | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog      | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...                 | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  Uitkomsten:

  Er mogen geen classes of id's gebruikt worden tenzij het echt noodzakelijk is. Alleen ik had al veel met classes en id's gewerkt dus dit moet ik allemaal weer gaan veranderen en hiervoor iets lastigere selectors gaan gebruiken. Verder kan ik de darkmode nog gaan verbeteren door de iconen zoals de plusjes en kruisjes laten veranderen door een witte variant. Zo zouden deze ook beter te zien zijn.

  Belangrijkste samengevat:

  - Ik mag geen classes of ID's gebruiken
  - Darkmode kan ik verbeteren door de afbeeldingen naar een witte versie te laten veranderen met prefers color scheme
  - Ik mag de body van de 2e html pagina een class naam geven zodat het niet te moeilijk wordt met selectors.

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  In de 2e toegankelijkheidstest heb ik de volgenden bevindingen gevonden:

  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  # Negatieve bevindingen
  Uit de 2e toengankelijkheidstest bleek dat ik geen visible focus style heb voor de interactieve en navigeerbare elementen. Daarnaast zijn de knoppen in de navigatie een beetje klein en daarom ook moeilijk te activeren. Verder mis ik nog een skiplink voor de visueel beperkte gebruikers. Voor een paar van de afbeeldingen kloppen de alt attributen niet helemaal, sommige staan in het nederlands geschreven en de andere in het engels. Dit zorgt ervoor dat de voice over sommige alt attributen verkeerd uitspreekt. 

  Voor de scroll content is er media (Gifs) die automatisch afspelen maar sinds je gifs niet kan pauzeren zou ik niet weten hoe ik dit moet oplossen. Verder volgen de animaties de prefers-reduced motion media query nog niet.

  Een andere bevinding is dat de uitschuif zoekbalk niet uitklapbaar/selecteerbaar is via de toetsenbord knoppen.

  # Verbeterde bevindingen
  De pagina's zijn nu gevalideerd en hebben elk een unieke titel en elk één h1. De interactieve elementen naast de zoekbalk zijn nu wel navigeerbaar met het toetsenbord. Daarnaast hebben ze nu ook meer ruimte tussen elkaar voor een betere scroll gebied. Verder wordt list content nu wel in list elementen geplaatst. Voor de knoppen heb ik nu button elementen gebruikt inplaats van divs met de opmaak van een button. Darkmode en light mode worden onderstuind en de kleur contrast van de knoppen en tekst zijn verbeterd.

  # Belangrijkste samengevat
  - Maak een goede zichtbare focus style.
  - Vergroot de navigatie knop iconen.
  - Maak een skiplink.
  - Verander de alt attributen allemaal in het engels.
  - Zorg dat de animaties de prefers-reduced motion media query volgen.

</details>



HEADING LEVELS DIE NIET KLOPPEN!!!!!! hier bijschrijven voor voortgang

## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  Ging goed:

  De eerste animatie die ik had gemaakt ging goed en daarom heb ik een tweede animatie gemaakt. In deze tweede animatie heb ik de custum bezier website gebruikt om de animatie een soort bounce effect te geven.
  <img src="readme-images/code-animatie1.png">
  <img src="readme-images/animatie2.png">

  Ging slecht:

  Ik kwam er steeds niet achter waarom ik niet met de keyboard door de website content kon tabben, maar uiteindelijk kwam ik er achter dat ik niet alle afbeeldingen een link had toegegeven en daarom ook niet interactief waren.
  <img src="readme-images/moeite-met-keyboard-nav.png">

  Ook had ik moeite met een hele specifieke section te selecteren zonder een andere section ook toe te voegen. Uiteindelijk heb ik een has selector gebruikt die gelukkig wel werkt.
  <img src="readme-images/moeite-has-selector.png">
  




  Vragen die ik heb

  -Ik heb elk label en text op mijn website in het engels staan net zoals de echte website. Alleen heb ik de alt attributen in het nederlands staan. Moet ik dan een lang="nl" of lang="en"

  -Voor de focus states moet ik elk element opnieuw stijlen met een specifieke bijpassende border of stijl?

  -Mijn uitschuifbalk is niet selecteer baar in voice over modus. Hoe fix ik dit?

  -De uitschuifbalk krijg ik niet mooi gepositioneerd bij grote schermen. Moet ik hiervoor dan mediaquerys gebruiken?

 


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  De volgorde van mijn headings kloppen nog niet. Zo gebruik ik bijvoorbeeld h7 en h8 terwijl de headings elementen maar tot h6 mogen lopen. Verder staat mijn code een beetje door elkaar waardoor het lastig is om code terug te vinden. Daarom moet ik de code die bij elkaar hoort onder elkaar zetten met een comment die laat zien waar de code begint/stopt en wat de code doet. Ook moet ik nog een bronnenlijst gaan toevoegen. De uisschuifbalk/zoekbalk staat nu in een nav element maar het zou semantisch netter zijn als het in een section element staat.

  Belangrijkste samengevat: 
  - Bronnenlijst moet nog.
  - Code beter bij elkaar geordend.
  - Heading moet ik laten kloppen
  - Uitschuifbalk staat in nav mr gelieve in een section hebben

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/uitkomst.png" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  Ik heb geleerd hoe ik websites responsive maak. 
  <img src="readme-images/responsive.png" width="375px" alt="top">

  Ik heb geleerd hoe ik een darkmode kan maken.
  <img src="readme-images/darkmode.png" width="375px" alt="top">

  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  Geen tijd meer over om de prefer animatie te maken
  <img src="readme-images/preferanimatie.png" width="375px" alt="bummer">

  Ik had moeite met de uitschuifbalk laten werken op telefoon formaat
  <img src="readme-images/uitschuifbalk.png" width="375px" alt="bummer">
</details>

## Feedback uit het eindgesprek (week 5)

  De kleine animaties die nu normale transities zijn mogen ook weer animatie werk zoals de keyframes die ik gebruik voor de website titel animatie.

  De focus stijl in een andere kleur, want de kleur die ik nu gebruik lijkt erg op de standaard focus kleur.

  Als je op bepaalde afbeeldingen hovert worden ze iets groter gemaakt. Het zou ook leuk zijn als hetzelfde gebeurd op de andere afbeeldingen.

  De kruisjes in de zoekbalk navigatie staan niet helemaal even.
  <img src="readme-images/kruisje-niet-net.png">

  Maak ook nog een typfeld voor de zoekbalk op de kleine mobiele versie.

  Werk het proces verslag (de README) af.


## Dit heb ik verbeterd (herkansing)

Kruisen staan nu recht met de tekst:
  <img src="readme-images/kruisen-nu-recht.png">

De focusstijl is nu in een kleur die opvallender is:
  <img src="readme-images/verbeterde-focus.png">

Ik heb voor in de darkmode de achtergrond kleur van de zoekbalk donkerder gemaakt zodat je het icoontje en de tekst er in goed kan zien.
  <img src="readme-images/inputbalk-donker.png">


## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. Has selectors:
  https://developer.mozilla.org/en-US/docs/Web/CSS/:has
  2. Hover focus states:
  https://zellwk.com/blog/style-hover-focus-active-states/
  3. Darkmode redesign:
  https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode
  4. Multi column:
  https://www.w3schools.com/css/css3_multiple_columns.asp
  5. Break inside avoid: 
  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout
  6. Afbeeldingen en gifs:
 https://nl.pinterest.com/
 7. Bezier animatie:
 https://tools.webdevpuneet.com/css-easing-generator/




</details>