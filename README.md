## unicope

Converts Unicode characters to their perceptually best ASCII representation.


### usage

```js
import { unicope } from "unicope";

console.log(unicope('𝕦𝕟𝕚𝕔𝕠𝕡𝕖')); // output: unicope
```

### unicope.d.ts

```ts
declare enum AllowedBlockLimit {
    BasicLatin = "basic",
    Latin1Supplement = "latin-1",
    LatinExtendedA = "latin-extended-a"
}
interface UnicopeOptions {
    placeholder?: string;
    maxAllowedBlock?: AllowedBlockLimit;
    alphanumericOnly?: boolean;
}
/**
 * Transliterates a Unicode string into ASCII.
 *
 * @param {string} input
 * @param {UnicopeOptions} options
 * @returns {string}
 */
declare function unicope(input: string, options?: UnicopeOptions): string;

export { AllowedBlockLimit, unicope };
```

### example with options

| input | `{ "alphanumericOnly":true }` | `{ "placeholder":"", "alphanumericOnly":true }` | `{ "placeholder":"", "alphanumericOnly":true, "maxAllowedBlock":"basic" }` |
| --- | --- | --- | --- |
| 𝔲𝔫𝔦𝔠𝔬𝔭𝔢 | unicope | unicope | unicope |
| 𝖚𝖓𝖎𝖈𝖔𝖕𝖊 | unicope | unicope | unicope |
| ᑌŇᎥᑕ𝐎ᑭ𝓔 | UNiCOPE | UNiCOPE | UNiCOPE |
| 𝓾𝓷𝓲𝓬𝓸𝓹𝓮 | unicope | unicope | unicope |
| 𝓊𝓃𝒾𝒸𝑜𝓅𝑒 | unicope | unicope | unicope |
| 𝕦𝕟𝕚𝕔𝕠𝕡𝕖 | unicope | unicope | unicope |
| ｕｎｉｃｏｐｅ | UNICOpE | UNICOpE | UNICOpE |
| ꪊꪀ꠸ᥴꪮρꫀ | uniCoPe | uniCoPe | uniCoPe |
| υꪀꪱᝯׁᨵ℘ꫀׁ | Unicope | Unicope | Unicope |
| ᴜɴɪᴄᴏᴘᴇ | UNICOPE | UNICOPE | UNICOPE |
| ǝdoɔıun | edociun | edociun | edociun |
| 🅄🄽🄸🄲🄾🄿🄴 | UNICOPE | UNICOPE | UNICOPE |
| ɘqoɔiᴎu | eqocinu | eqocinu | eqocinu |
| ú̸͎̠̱͕̲̿ń̴̟̗͚͍̃ͅi̷̞̩͓̪̺͇͇̣̞̐̍͘c̴͕̙̜̆̆͒̃̕õ̸̻̐̇̅̑̇p̵̢̿́͗͝e̸̝͍̞̱̤̲̪̪͚̯̽̄̅̃̂̎ | únicõpe | únicõpe | unicope |
| 🆄🅽🅸🅲🅾🅿🅴 | UNICOPE | UNICOPE | UNICOPE |
| ᵤₙᵢcₒₚₑ | UnicOPE | UnicOPE | UnicOPE |
| ᵘⁿⁱᶜᵒᵖᵉ | unIcope | unIcope | unIcope |
| ⓤⓝⓘⓒⓞⓟⓔ | UNICOPE | UNICOPE | UNICOPE |
| ยภเς๏קє | unlcopE | unlcopE | unlcopE |
| υɳιƈσρҽ | UnlCOPe | UnlCOPe | UnlCOPe |
| ʊռɨƈօքɛ | vniCOpE | vniCOpE | vniCOpE |
| ᏬᏁᎥፈᎧᎮᏋ | unicoPE | unicoPE | unicoPE |
| ųŋıƈơ℘ɛ | UniCOpE | UniCOpE | UniCOpE |
| นຖi¢໐pē | uniOpe | uniOpe | unicOpe |
| 𝐮𝐧𝐢𝐜𝐨𝐩𝐞 | unicope | unicope | unicope |
| 𝘂𝗻𝗶𝗰𝗼𝗽𝗲 | unicope | unicope | unicope |
| 𝘶𝘯𝘪𝘤𝘰𝘱𝘦 | unicope | unicope | unicope |
| 𝙪𝙣𝙞𝙘𝙤𝙥𝙚 | unicope | unicope | unicope |
| 𝚞𝚗𝚒𝚌𝚘𝚙𝚎 | unicope | unicope | unicope |
| ЦПIᄃӨPΣ | unIcOPE | unIcOPE | unIcOPE |
| υηι¢σρє | UnlOPE | UnlOPE | UnlcOPE |
| µñï¢ðþê | ñïðê | ñïðê | unicope |
| Ʉ₦ł₵Ø₱Ɇ | UnIcØPE | UnIcØPE | UnIcOPE |
| ㄩ几丨匚ㄖ卩乇 | UniCopE | UniCopE | UniCopE |
| ひ刀ﾉᄃのｱ乇 | unicopE | unicopE | unicopE |
| 【u】【n】【i】【c】【o】【p】【e】 | unicope | unicope | unicope |
| 『u』『n』『i』『c』『o』『p』『e』 | unicope | unicope | unicope |
| ≋u≋n≋i≋c≋o≋p≋e≋ | unicope | unicope | unicope |
| ░u░n░i░c░o░p░e░ | unicope | unicope | unicope |
| ｕｎｉｃｏｐｅ | UNICOpE | UNICOpE | UNICOpE |
| [̲̅u][̲̅n][̲̅i][̲̅c][̲̅o][̲̅p][̲̅e] | unicope | unicope | unicope |
| u҉n҉i҉c҉o҉p҉e҉ | unicope | unicope | unicope |
| մղìçօքҽ | unìçOpe | unìçOpe | unicOpe |
| ᑌᑎIᑕOᑭE | UnICOPE | UnICOPE | UnICOPE |
| ᑘᘉᓰᑢᓍᕵᘿ | UNIcPQE | UNIcPQE | UNIcPQE |
| u̶n̶i̶c̶o̶p̶e̶ | unicope | unicope | unicope |
| u̴n̴i̴c̴o̴p̴e̴ | unicope | unicope | unicope |
| u̷n̷i̷c̷o̷p̷e̷ | unicope | unicope | unicope |
| u̲n̲i̲c̲o̲p̲e̲ | unicope | unicope | unicope |
| u̳n̳i̳c̳o̳p̳e̳ | unicope | unicope | unicope |
| u̾n̾i̾c̾o̾p̾e̾ | unicope | unicope | unicope |
| u♥n♥i♥c♥o♥p♥e | unicope | unicope | unicope |
| u͎n͎i͎c͎o͎p͎e͎ | unicope | unicope | unicope |
| u͓̽n͓̽i͓̽c͓̽o͓̽p͓̽e͓̽ | unicope | unicope | unicope |
| ｕ𝔫丨ᑕ𝐨ᑭᗴ | UniCoPE | UniCoPE | UniCoPE |
| 𝓾Ňί𝕔𝓞𝐏ｅ | uNicOPE | uNicOPE | uNicOPE |
| 𝓊ή𝓲ᑕ𝐎ⓟ𝔢 | uiCOPe | uiCOPe | uiCOPe |
| ᵘ𝐧𝐈ς𝓸ᵖⓔ | unIcopE | unIcopE | unIcopE |
| 𝔲ηᶤ匚ᗝᑭ𝒆 | uniCPe | uniCPe | uniCPe |
| ｕᶰĮς𝓸𝕡€ | UNicopE | UNicopE | UNicopE |
| υŇίℂＯρέ | UNiCOP | UNiCOP | UNiCOP |
| 𝐔𝓷Ⓘᶜⓞ𝐩€ | UnIcOpE | UnIcOpE | UnIcOpE |
| 𝓊ηเᶜⓞᵖⓔ | unlcOpE | unlcOpE | unlcOpE |
| ùη𝕀𝐜Ｏ𝔭ᗴ | ùnIcOpE | ùnIcOpE | unIcOpE |
| ย𝕟เcㄖƤẸ | unlcoPE | unlcoPE | unlcoPE |
| ᵘⓝ𝕀Čㄖ𝓹ε | uNICopE | uNICopE | uNICopE |
| ยŇι匚ØƤ𝔢 | uNlCØPe | uNlCØPe | uNlCOPe |
| ⓤ𝓝𝓘ᑕｏ𝕡𝒆 | UNICOpe | UNICOpe | UNICOpe |
| υŇƗ𝒸𝔬𝔭𝕖 | UNBcope | UNBcope | UNBcope |
| υⓃ𝔦ᶜσｐ𝔼 | UNicOpE | UNicOpE | UNicOpE |
| υ𝐧𝒾𝐂𝓸𝕡𝓔 | UniCopE | UniCopE | UniCopE |
| 𝕌ℕ𝓘𝓬Ⓞ卩𝔢 | UNIcOpe | UNIcOpe | UNIcOpe |
| 𝓾𝕟𝕀ⓒ𝑜ρ€ | unICoPE | unICoPE | unICoPE |
| ᵘŇｉℂ๏Ⓟε | uNICoPE | uNICoPE | uNICoPE |
| ยⓝι𝔠ᵒρ𝐞 | uNlcoPe | uNlcoPe | uNlcoPe |
| 𝓊𝓃𝒾𝒸🏵𝓅𝑒 | unicpe | unicpe | unicpe |
| 𝓊𝓃𝒾𝒸❀𝓅𝑒 | unicpe | unicpe | unicpe |
