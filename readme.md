# **Boilerplate: Simple**

> Autor: [Jairus Joer](https://github.com/jairusjoer)

## **Voraussetzungen**

- [Node](https://nodejs.org/en/) ≥ v10
- Google Chrome 91.0.4472.77

_Sollte die korrekte Node-Version nicht installiert sein, kann diese parallel zu existierenden Konfigurationen über den [Node Version Manager](https://github.com/nvm-sh/nvm) hinzugefügt werden._

## **Installation**

```bash
npm install
```

installiert notwendige Node-Module zur Entwicklung und Kompilierung des Projekts.

**devDependencies**

- @snowpack/plugin-postcss: 1.4.0
- @snowpack/plugin-sass: 1.4.0
- autoprefixer: 10.2.5
- cssnano: 5.0.4
- postcss: 8.3.0
- sass: 1.34.0
- snowpack: 3.5.1

**dependencies**

- @glidejs/glide: 3.4.1

Eine Übersicht der verwendeten Module findet sich auch in der <u>/package.json</u>. Lizenzen und Namensnennungen finden sich in den entsprechenden Modul-Ordnern unter <u>/release/libraries/pkg/</u>.

## **Entwicklung**

```bash
npm run dev # snowpack dev
```

produziert die aktive Entwicklungsumgebung und öffnet einen Webbrowser mit dem Ziel: http://localhost:3000/. Die Entwicklungsumgebung unterstützt [_Hot Module Replacement_](https://www.snowpack.dev/concepts/hot-module-replacement) (HMR) und – je nach Konfiguration – auch Kompilierung in Echtzeit.

Alle Änderungen an den Projektdateien im Ordner <u>/source/</u> werden live im Webbrowser wiedergegeben.

## **Produktion**

```bash
npm run build # rm -r release && snowpack build
```

kompiliert das Projekt und produziert für den Einsatz optimierte Dateien im Ordner <u>/release/</u>.<!--Während der Kompilierung wird der verwendete Code minifiziert und Kommentare werden entfernt. Ausgeschlossen davon sind Kommentare betreffend der Lizenz oder Namensnennung.--> Die aus der Produktion resultierenden Dateien sollten nur für den Einsatz und nicht für die weitere Entwicklung verwendet werden.

## **Übergabe**

```bash
npm run build
```

Nach der erfolgreichen Produktion, können sämtliche Inhalte aus dem Ordner <u>/release/</u> auf dem Ziel-Server abgelegt werden.
