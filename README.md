## unicope

Converts Unicode characters to their perceptually best ASCII representation.


### usage

```js
import { unicope } from "unicope";

console.log(unicope('ð¦ðððð ð¡ð')); // output: unicope
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
| ð²ð«ð¦ð ð¬ð­ð¢ | unicope | unicope | unicope |
| ððððððð | unicope | unicope | unicope |
| áÅá¥áðá­ð | UNiCOPE | UNiCOPE | UNiCOPE |
| ð¾ð·ð²ð¬ð¸ð¹ð® | unicope | unicope | unicope |
| ððð¾ð¸ððð | unicope | unicope | unicope |
| ð¦ðððð ð¡ð | unicope | unicope | unicope |
| ï½ï½ï½ï½ï½ï½ï½ | UNICOpE | UNICOpE | UNICOpE |
| êªêªê ¸á¥´êª®Ïê« | uniCoPe | uniCoPe | uniCoPe |
| Ïêªêª±á¯×á¨µâê«× | Unicope | Unicope | Unicope |
| á´É´Éªá´á´á´á´ | UNICOPE | UNICOPE | UNICOPE |
| ÇdoÉÄ±un | edociun | edociun | edociun |
| ðð½ð¸ð²ð¾ð¿ð´ | UNICOPE | UNICOPE | UNICOPE |
| ÉqoÉiá´u | eqocinu | eqocinu | eqocinu |
| uÌ¸ÍÌ¿ÍÌ Ì±ÍÌ²nÌ´ÌÌÌÍÌÍÍiÌ·ÌÌÍÌÌ©ÍÌªÌºÍÍÌ£ÌcÌ´ÌÌÌÍÌÍÌÌoÌ¸ÌÌÌÌÌÌÌ»pÌµÌ¿ÍÍÍÌ¢eÌ¸Ì½ÌÌÌÌÌÌÍÌÌ±Ì¤Ì²ÌªÌªÍÌ¯ | ÃºnicÃµpe | ÃºnicÃµpe | unicope |
| ðð½ð¸ð²ð¾ð¿ð´ | UNICOPE | UNICOPE | UNICOPE |
| áµ¤âáµ¢câââ | UnicOPE | UnicOPE | UnicOPE |
| áµâ¿â±á¶áµáµáµ | unIcope | unIcope | unIcope |
| â¤ââââââ | UNICOPE | UNICOPE | UNICOPE |
| à¸¢à¸ à¹Ïà¹×§Ñ | unlcopE | unlcopE | unlcopE |
| ÏÉ³Î¹ÆÏÏÒ½ | UnlCOPe | UnlCOPe | UnlCOPe |
| ÊÕ¼É¨ÆÖÖÉ | vniCOpE | vniCOpE | vniCOpE |
| á¬áá¥áá§á®á | unicoPE | unicoPE | unicoPE |
| Å³ÅÄ±ÆÆ¡âÉ | UniCOpE | UniCOpE | UniCOpE |
| à¸àºiÂ¢à»pÄ | uniOpe | uniOpe | unicOpe |
| ð®ð§ð¢ðð¨ð©ð | unicope | unicope | unicope |
| ðð»ð¶ð°ð¼ð½ð² | unicope | unicope | unicope |
| ð¶ð¯ðªð¤ð°ð±ð¦ | unicope | unicope | unicope |
| ðªð£ððð¤ð¥ð | unicope | unicope | unicope |
| ððððððð | unicope | unicope | unicope |
| Ð¦ÐIáÓ¨PÎ£ | unIcOPE | unIcOPE | unIcOPE |
| ÏÎ·Î¹Â¢ÏÏÑ | UnlOPE | UnlOPE | UnlcOPE |
| ÂµÃ±Ã¯Â¢Ã°Ã¾Ãª | Ã±Ã¯Ã°Ãª | Ã±Ã¯Ã°Ãª | unicope |
| Éâ¦ÅâµÃâ±É | UnIcÃPE | UnIcÃPE | UnIcOPE |
| ã©å ä¸¨åãå©ä¹ | UniCopE | UniCopE | UniCopE |
| ã²åï¾áã®ï½±ä¹ | unicopE | unicopE | unicopE |
| ãuããnããiããcããoããpããeã | unicope | unicope | unicope |
| ãuããnããiããcããoããpããeã | unicope | unicope | unicope |
| âuânâiâcâoâpâeâ | unicope | unicope | unicope |
| âuânâiâcâoâpâeâ | unicope | unicope | unicope |
| ï½ï½ï½ï½ï½ï½ï½ | UNICOpE | UNICOpE | UNICOpE |
| [ÌÌ²u][ÌÌ²n][ÌÌ²i][ÌÌ²c][ÌÌ²o][ÌÌ²p][ÌÌ²e] | unicope | unicope | unicope |
| uÒnÒiÒcÒoÒpÒeÒ | unicope | unicope | unicope |
| Õ´Õ²Ã¬Ã§ÖÖÒ½ | unÃ¬Ã§Ope | unÃ¬Ã§Ope | unicOpe |
| ááIáOá­E | UnICOPE | UnICOPE | UnICOPE |
| ááá°á¢ááµá¿ | UNIcPQE | UNIcPQE | UNIcPQE |
| uÌ¶nÌ¶iÌ¶cÌ¶oÌ¶pÌ¶eÌ¶ | unicope | unicope | unicope |
| uÌ´nÌ´iÌ´cÌ´oÌ´pÌ´eÌ´ | unicope | unicope | unicope |
| uÌ·nÌ·iÌ·cÌ·oÌ·pÌ·eÌ· | unicope | unicope | unicope |
| uÌ²nÌ²iÌ²cÌ²oÌ²pÌ²eÌ² | unicope | unicope | unicope |
| uÌ³nÌ³iÌ³cÌ³oÌ³pÌ³eÌ³ | unicope | unicope | unicope |
| uÌ¾nÌ¾iÌ¾cÌ¾oÌ¾pÌ¾eÌ¾ | unicope | unicope | unicope |
| uâ¥nâ¥iâ¥câ¥oâ¥pâ¥e | unicope | unicope | unicope |
| uÍnÍiÍcÍoÍpÍeÍ | unicope | unicope | unicope |
| uÌ½ÍnÌ½ÍiÌ½ÍcÌ½ÍoÌ½ÍpÌ½ÍeÌ½Í | unicope | unicope | unicope |
| ï½ð«ä¸¨áð¨á­á´ | UniCoPE | UniCoPE | UniCoPE |
| ð¾ÅÎ¯ðððï½ | uNicOPE | uNicOPE | uNicOPE |
| ðÎ®ð²áðâð¢ | uiCOPe | uiCOPe | uiCOPe |
| áµð§ðÏð¸áµâ | unIcopE | unIcopE | unIcopE |
| ð²Î·á¶¤åáá­ð | uniCPe | uniCPe | uniCPe |
| ï½á¶°Ä®Ïð¸ð¡â¬ | UNicopE | UNicopE | UNicopE |
| ÏÅÎ¯âï¼¯ÏÎ­ | UNiCOP | UNiCOP | UNiCOP |
| ðð·â¾á¶âð©â¬ | UnIcOpE | UnIcOpE | UnIcOpE |
| ðÎ·à¹á¶âáµâ | unlcOpE | unlcOpE | unlcOpE |
| Ã¹Î·ððï¼¯ð­á´ | Ã¹nIcOpE | Ã¹nIcOpE | unIcOpE |
| à¸¢ðà¹cãÆ¤áº¸ | unlcoPE | unlcoPE | unlcoPE |
| áµâðÄãð¹Îµ | uNICopE | uNICopE | uNICopE |
| à¸¢ÅÎ¹åÃÆ¤ð¢ | uNlCÃPe | uNlCÃPe | uNlCOPe |
| â¤ððáï½ð¡ð | UNICOpe | UNICOpe | UNICOpe |
| ÏÅÆð¸ð¬ð­ð | UNBcope | UNBcope | UNBcope |
| Ïâð¦á¶Ïï½ð¼ | UNicOpE | UNicOpE | UNicOpE |
| Ïð§ð¾ðð¸ð¡ð | UniCopE | UniCopE | UniCopE |
| ðâðð¬âå©ð¢ | UNIcOpe | UNIcOpe | UNIcOpe |
| ð¾ððâðÏâ¬ | unICoPE | unICoPE | unICoPE |
| áµÅï½âà¹âÎµ | uNICoPE | uNICoPE | uNICoPE |
| à¸¢âÎ¹ð áµÏð | uNlcoPe | uNlcoPe | uNlcoPe |
| ððð¾ð¸ðµðð | unicpe | unicpe | unicpe |
| ððð¾ð¸âðð | unicpe | unicpe | unicpe |
