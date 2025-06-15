⚠️ Die Datei `config.php` enthält lokal sensible Zugangsdaten und wurde aus Sicherheitsgründen bereinigt.
Bitte eigene Zugangsdaten manuell einfügen.

# Fertigpackt – Dein Reise-Reminder kurz vor der Ankunft

## Projektbeschreibung

**Fertigpackt** ist eine Webanwendung, die Reisende dabei unterstützt, kurz vor der Ankunft daran erinnert zu werden, ob sie alles Wichtige dabeihaben. Die Idee: Wenn man sich schon auf der Reise befindet, vergisst man oft beim Aussteigen Dinge wie das Portemonnaie, die Jacke oder Kopfhörer. Unsere App verbindet einen Countdown mit einer individuellen Packliste und erinnert wenige Minuten vor dem Ankommen  daran, die wichtigsten Dinge noch einmal zu überprüfen.

Die Inspiration entstand aus einem humorvollen Moment in der ersten Vorlesung: Unser Dozent hatte auf dem Weg zur Hochschule seine Sachen im Zug vergessen und musste umkehren. Diese Alltagssituation – leicht chaotisch, aber sehr menschlich – wurde zum Ausgangspunkt für unsere Anwendung.

## Entstehungsprozess

### Recherche & Interviews

Durch Interviews mit verschiedenen Personen konnten wir herausfinden, dass das Problem *nicht* beim Packen beginnt, sondern oft beim Aussteigen. Viele Reisende sind mit ihren Gedanken bereits beim nächsten Termin oder dem Ziel selbst – und merken erst nach dem Verlassen des Zuges oder Busses, dass etwas fehlt. Diese Erkenntnisse haben uns dazu gebracht, die Erinnerungsfunktion kurz vor der Zielzeit zu platzieren.

### Persona & UX-Ziele

Auf Basis der Gespräche entwickelten wir eine Persona, die regelmäßig pendelt oder reist und dabei leicht Dinge liegen lässt. Ziel war eine App, die unauffällig im Hintergrund läuft, aber im entscheidenden Moment eine sanfte Erinnerung ausspricht.

### Prototyping mit Figma

Die Gestaltung erfolgte über Figma, wobei wir eng im Team zusammenarbeiteten. Eine Person übernahm den Hauptentwurf, die andere testete, ergänzte und überführte die Designs in die technische Umsetzung. Das Prototyping lief effizient, da wir eine gemeinsame Vision hatten und sie im Design umsetzen konnten.

## Technische Umsetzung

Die App umfasst:
- Registrierung & Login
- Erstellung mehrerer benutzerbezogener Packlisten
- Countdown-Funktion mit konfigurierbarem Zielzeitpunkt
- Automatisches Pop-up 5 Minuten vor der Ankunft, um an vergessene Gegenstände zu erinnern
- Integration der Packliste auf der Countdown-Seite

### Herausforderungen & Learnings

Ein technisches Hindernis war der Abgleich zwischen dem lokalen Code und der Live-Version. Eine Zeit lang wurde unser Code nicht korrekt auf den Server übertragen, wodurch Änderungen scheinbar „nicht funktioniert“ haben – in Wahrheit wurden sie nur nicht synchronisiert.  
Ein weiteres Thema war die Synchronisierung der Checklisten zwischen mehreren Ansichten und Nutzern. Mit Sessions, strukturiertem JavaScript und präzisen SQL-Abfragen konnten wir dieses Problem lösen. Besonders die Filterung nach Benutzer-ID und Listenname war entscheidend für eine personalisierte Nutzung.

**ChatGPT** wurde unterstützend verwendet – vor allem bei:
- Fehleranalysen und strukturellen PHP-Fragen
- DOM-Manipulation mit JavaScript
- CSS-Anpassungen an das Figma-Design

Dabei diente die KI nicht als Copy-Paste-Tool, sondern wurde kritisch genutzt, um eigene Lösungen zu überprüfen oder Vorschläge anzupassen.

## Fazit

Fertigpackt richtet sich an alle, die auf Reisen nicht an die „kleinen Dinge“ denken – aber wissen, wie nervig es ist, wenn genau diese fehlen. Durch die Kombination aus Countdown und individueller Checkliste erfüllt die App ihren Zweck mit einer klaren, freundlichen Oberfläche.  
Sie ist schlicht, nützlich und erinnert einen rechtzeitig – damit auch du beim Aussteigen nicht sagen musst: „Ach, Mist – ich hab was vergessen.“

