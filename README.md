# Vypracované zadání pro CBData

1. Použij Next.js a Typescript
    * Next.js byl využit pro generování HTML hlavičky + server side stránkování
    * TypeScript byl použit v celém projektu

1. Vytvoř stránku `/planets`:

   * API pro získání seznamu: https://swapi.info/api/planets
       * Pro získání seznamu byla využita knihovna axios

   * Přidej state pro celou aplikaci se seznamem planet. Tak, aby jej každá komponenta mohla použít.
       * Každá komponenta může využít API /planets bez nutnosti opakovaného ptání se API díky @tanstack/react-query, což je knihovna která zpracovává globální stavy asynchronních operací jako volání API

   * Použij silně typové objekty.
      * Vytvořil jsem TS objekty které popisují objekty vracené z API

1. Přidej další funkce

   * Ošetři stavy aplikace při načítání seznamu a chyb při komunikaci s API.
      * Stavy byly ošetřeny pomocí komponent <Spin> (načítání) a <Result> (chyby) z ANTD.

   * Implementuj stránkování.
     * Stránkování bylo využito s pomocí knihovny ANTD (List komponenta)

   * Tlačítko na refresh dat.
     * Komponenta <Loader> má nastylované tlačítko z knihovny ANTD které spouští metodu refresh() z useQuery hooku z @tanstack/react-query

1. Nasaď aplikaci tak, aby byla dostupná z internetu.
    * Aplikace je dostupná na: [https://planets-tawny.vercel.app](https://planets-tawny.vercel.app/)

1. Přidej odpovídající `README.md` a vystav kód tak, aby byl dostupný z internetu.
    * Doplněno :-)

1. Pošli nám odkaz na zdrojový kód a nasazenou aplikaci.
    * Zasílám!

BONUS:
  * Aplikace podporuje změnu light mode / dark mode a nastavuje svůj počáteční mód podle toho, jak jej má uživatel nastavený ve zbytku aplikací
  * Aplikace dále načítá API /people a /films a zobrazuje je na vlastní stránce (jak FE tak BE routing)
  * Aplikace má řádnou stránku 404
  * Aplikace má jednoduchý deploy pomocí 1 příkazu
  * Aplikace má nastavený StrictMode pro debugging
  * Aplikace využívá FE knihovnu ANTD pro hezčí zobrazení seznamu
