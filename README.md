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
  Pinterest
  https://nl.pinterest.com/

  #### Screenshot(s) van de eerste pagina (small screen): 
 Home  
  <img src="readme-images/home.jpg" width="375px" alt="omschrijving van de pagina">

  #### Screenshot(s) van de tweede pagina (small screen):
  zoekpagina
  <img src="readme-images/zoeken.jpg" width="375px" alt="omschrijving van de pagina">
 
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
- Pinterest gebruikt overmatig veel divs.
- Pinterest maakt ook geen gebruik van headings.
- Er worden ook geen lists gebruikt.
- Niet elke afbeelding heeft goede alt.
- De contrast van de navigatie iconen zijn niet heel goed te zien, want ze zijn licht grijs op een witte achtergrond.

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/home.jpg" width="375px" alt="breakdown van de hele pagina">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/zoeken.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  Begin van de opzet en navigatie gaat tot nu toe goed. Ik vind het alleen lastig hoe ik de main content ga coderen.
<img src="readme-images/week1-nav.png" width="375px" alt="">

  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Navigatie mag bestaan uit meerdere navs en die dan het liefst in de header plaatsen.
  - Zorg dat je nu al bezig bent met toegankelijkheid
  - De scroll content kan je beter met flex of column count maken inplaats van grid.

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  Week 2
  Ging goed, aan het begin probeerde ik nog wel grid te gebruiken op mijn ul voor de scroll content maar dat kreeg ik niet voor elkaar. 

  <img src="readme-images/moeite-code-css-week2.jpg" width="375px" alt="">
  <img src="moeite-met-ruimte-content-plaatsing.png" width="375px" alt="">


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Ik mag geen classes of ID's gebruiken
  - Darkmode kan ik verbeteren door de afbeeldingen naar een witte versie te laten veranderen met prefers color scheme
  - Ik mag de body van de 2e html pagina een class naam geven zodat het niet te moeilijk wordt met selectors.

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  - Ik moet nog een skip link hebben.
  - Afbeeldingen mogen wel iets groter.
  - Focus stijl moet beter zichtbaar worden.

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  Ging goed

  De eerste animatie die ik had gemaakt ging goed en daarom heb ik een tweede animatie gemaakt. In deze tweede animatie heb ik de custum bezier website gebruikt om de animatie een soort bounce effect te geven.
  <img src="readme-images/code-animatie1.png">
  <img src="readme-images/animatie2.png">

  Ging slecht

  Ik kwam er steeds niet achter waarom ik niet met de keyboard door de website content kon tabben, maar uiteindelijk kwam ik er achter dat ik niet alle afbeeldingen een link had toegegeven.
  <img src="readme-images/moeite-met-keyboard-nav.png">

  Ook had ik moeite met een hele specifieke section te selecteren zonder een andere section ook toe te voegen. Uiteindelijk heb ik een has selector gebruikt die gelukkig wel werkt.
  <img src="readme-images/moeite-has-selector.png">
  




  Vragen die ik heb

  -Ik heb elk label en text op mijn website in het engels staan net zoals de echte website. Alleen heb ik de alt attributen in het nederlands staan. Moet ik dan een lang="nl" of lang="en"

  -Voor de focus states moet ik elk element opnieuw stijlen met een specifieke bijpassende border of stijl?

  -Mijn uitschuifbalk is niet selecteer baar in voice over modus. Hoe fix ik dit?

  -De uitschuifbalk krijg ik niet mooi gepositioneerd bij grote schermen. Moet ik hiervoor dan mediaquerys gebruiken?

  -Links zien er raar uit als ze worden ingedrukt.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Bronnenlijst moet nog.
  - Code beter bij elkaar geordend.
  - Animatie preference maken.
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