
WordNet-LMF-DE
==============

WordNet Lexical Markup Framework (LMF): German (DE)

<p/>
<img src="https://nodei.co/npm/wordnet-lmf-de.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/wordnet-lmf-de.png" alt=""/>

About
-----

This is a [Node.js](https://nodejs.org/) module shipping the
[CC-BY-SA-4.0](https://spdx.org/licenses/CC-BY-SA-4.0.html) licensed,
120K words containing, on-the-fly downloaded [WordNet LMF (XML)](https://github.com/globalwordnet/schemas)
data file of [Open DE WordNet 1.0](https://github.com/hdaSprachtechnologie/odenet/)
from the [Open DE WordNet Initiative](https://ikum.mediencampus.h-da.de/projekt/open-de-wordnet-initiative/)
plus the corresponding SQLite database file, on-the-fly generated with the
[wordnet-lmf](https://npmjs.com/wordnet-lmf) module.

Installation
------------

```shell
$ npm install wordnet-lmf wordnet-lmf-de
```

Usage
-----

```js
(async () => {

    const LMF   = require("wordnet-lmf")
    const LMFde = require("wordnet-lmf-de")

    console.log(LMFde.name)

    let lmf = new LMF({ database: LMFde.db })
    await lmf.open()
    let results = await lmf.query(
        "SELECT * FROM Lemma WHERE writtenForm LIKE '%nerd%';",
        { format: "table" }
    )
    console.log(results)
    await lmf.close()

})().catch((err) => {
    console.log(`ERROR: ${err}`)
})
```

```
Open DE WordNet 1.0 (2018-05-11) [26 MB, CC-BY-SA-4.0]
┌────────────────┬──────────────────────┬──────────────┐
│ lexicalEntryId │ writtenForm          │ partOfSpeech │
├────────────────┼──────────────────────┼──────────────┤
│ w26204         │ Schneidbrennerdüse   │ n            │
│ w40189         │ Nerd                 │ n            │
│ w51748         │ Zenerdiode           │ n            │
│ w56117         │ innerdeutsche Grenze │ n            │
│ w62204         │ Nerd (Neol.)         │ n            │
│ w69145         │ Porzellanerde        │ n            │
│ w69146         │ weiße Tonerde        │ n            │
│ w69149         │ Pfeifenerde          │ n            │
│ w69358         │ Gartenerdbeere       │ n            │
│ w92320         │ männerdominiert      │ a            │
│ w100223        │ Designerdroge        │ n            │
│ w103172        │ Seltenerdmagnet      │ n            │
│ w106758        │ Seltenerdmetalle     │ n            │
│ w110720        │ ebenerdig            │ a            │
└────────────────┴──────────────────────┴──────────────┘
```

License
-------

Copyright (c) 2018 Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

