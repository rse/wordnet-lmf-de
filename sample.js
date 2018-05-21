
(async () => {

    const LMF   = require("wordnet-lmf")
    const LMFde = require(".")

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

