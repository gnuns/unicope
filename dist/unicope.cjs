'use strict';

const basicMap = {
  384: "B",
  385: "B",
  386: "B",
  387: "B",
  391: "C",
  392: "C",
  394: "D",
  395: "D",
  396: "D",
  398: "T",
  401: "F",
  402: "S",
  403: "G",
  405: "H",
  407: "B",
  408: "K",
  409: "K",
  410: "B",
  413: "N",
  414: "N",
  415: "B",
  416: "O",
  417: "O",
  420: "P",
  421: "P",
  427: "T",
  428: "T",
  429: "T",
  430: "T",
  431: "U",
  432: "U",
  434: "S",
  435: "Y",
  436: "Y",
  437: "Z",
  438: "Z",
  453: "C",
  456: "C",
  459: "C",
  461: "A",
  462: "A",
  463: "I",
  464: "I",
  465: "O",
  466: "O",
  467: "U",
  468: "U",
  469: "U",
  470: "U",
  471: "U",
  472: "U",
  473: "U",
  474: "U",
  475: "U",
  476: "U",
  478: "A",
  479: "A",
  480: "A",
  481: "A",
  484: "G",
  485: "G",
  486: "G",
  487: "G",
  488: "K",
  489: "K",
  490: "O",
  491: "O",
  492: "O",
  493: "O",
  496: "J",
  498: "Z",
  500: "G",
  501: "G",
  504: "N",
  505: "N",
  506: "A",
  507: "A",
  510: "O",
  511: "O",
  512: "A",
  513: "A",
  514: "A",
  515: "A",
  516: "E",
  517: "E",
  518: "E",
  519: "E",
  520: "I",
  521: "I",
  522: "I",
  523: "I",
  524: "O",
  525: "O",
  526: "O",
  527: "O",
  528: "R",
  529: "R",
  530: "R",
  531: "R",
  532: "U",
  533: "U",
  534: "U",
  535: "U",
  536: "S",
  537: "S",
  538: "T",
  539: "T",
  542: "H",
  543: "H",
  544: "N",
  545: "D",
  548: "Z",
  549: "Z",
  550: "A",
  551: "A",
  552: "E",
  553: "E",
  554: "O",
  555: "O",
  556: "O",
  557: "O",
  558: "O",
  559: "O",
  560: "O",
  561: "O",
  562: "Y",
  563: "Y",
  564: "L",
  565: "N",
  566: "T",
  570: "A",
  571: "C",
  572: "C",
  573: "L",
  574: "T",
  575: "S",
  576: "Z",
  579: "B",
  580: "U",
  582: "E",
  583: "E",
  584: "J",
  585: "J",
  587: "Q",
  588: "R",
  589: "R",
  590: "Y",
  591: "Y",
  595: "B",
  597: "C",
  598: "D",
  599: "D",
  600: "R",
  608: "G",
  614: "H",
  616: "B",
  619: "L",
  620: "L",
  621: "L",
  625: "M",
  626: "N",
  627: "N",
  636: "R",
  637: "R",
  638: "F",
  639: "R",
  642: "S",
  648: "T",
  649: "U",
  651: "S",
  656: "Z",
  657: "Z",
  669: "C",
  672: "Q",
  867: "A",
  868: "E",
  869: "I",
  870: "O",
  871: "U",
  872: "C",
  873: "D",
  874: "H",
  875: "M",
  876: "R",
  877: "T",
  878: "V",
  879: "X",
  6847: "W",
  7522: "I",
  7523: "R",
  7524: "U",
  7525: "V",
  7532: "B",
  7533: "D",
  7534: "F",
  7535: "M",
  7536: "N",
  7537: "P",
  7538: "R",
  7539: "R",
  7540: "S",
  7541: "T",
  7542: "Z",
  7549: "P",
  7552: "B",
  7553: "D",
  7554: "F",
  7555: "G",
  7556: "K",
  7557: "L",
  7558: "M",
  7559: "N",
  7560: "P",
  7561: "R",
  7562: "S",
  7564: "V",
  7565: "X",
  7566: "Z",
  7567: "A",
  7569: "D",
  7570: "E",
  7574: "I",
  7577: "U",
  7626: "R",
  7639: "C",
  7642: "G",
  7644: "K",
  7645: "L",
  7648: "N",
  7651: "R",
  7652: "S",
  7654: "Z",
  7656: "B",
  7659: "F",
  7660: "L",
  7661: "O",
  7662: "P",
  7664: "U",
  7665: "W",
  7666: "A",
  7667: "O",
  7668: "U",
  7680: "A",
  7681: "A",
  7682: "B",
  7683: "B",
  7684: "B",
  7685: "B",
  7686: "B",
  7687: "B",
  7688: "C",
  7689: "C",
  7690: "D",
  7691: "D",
  7692: "D",
  7693: "D",
  7694: "D",
  7695: "D",
  7696: "D",
  7697: "D",
  7698: "D",
  7699: "D",
  7700: "E",
  7701: "E",
  7702: "E",
  7703: "E",
  7704: "E",
  7705: "E",
  7706: "E",
  7707: "E",
  7708: "E",
  7709: "E",
  7710: "F",
  7711: "F",
  7712: "G",
  7713: "G",
  7714: "H",
  7715: "H",
  7716: "H",
  7717: "H",
  7718: "H",
  7719: "H",
  7720: "H",
  7721: "H",
  7722: "H",
  7723: "H",
  7724: "I",
  7725: "I",
  7726: "I",
  7727: "I",
  7728: "K",
  7729: "K",
  7730: "K",
  7731: "K",
  7732: "K",
  7733: "K",
  7734: "L",
  7735: "L",
  7736: "L",
  7737: "L",
  7738: "L",
  7739: "L",
  7740: "L",
  7741: "L",
  7742: "M",
  7743: "M",
  7744: "M",
  7745: "M",
  7746: "M",
  7747: "M",
  7748: "N",
  7749: "N",
  7750: "N",
  7751: "N",
  7752: "N",
  7753: "N",
  7754: "N",
  7755: "N",
  7756: "O",
  7757: "O",
  7758: "O",
  7759: "O",
  7760: "O",
  7761: "O",
  7762: "O",
  7763: "O",
  7764: "P",
  7765: "P",
  7766: "P",
  7767: "P",
  7768: "R",
  7769: "R",
  7770: "R",
  7771: "R",
  7772: "R",
  7773: "R",
  7774: "R",
  7775: "R",
  7776: "S",
  7777: "S",
  7778: "S",
  7779: "S",
  7780: "S",
  7781: "S",
  7782: "S",
  7783: "S",
  7784: "S",
  7785: "S",
  7786: "T",
  7787: "T",
  7788: "T",
  7789: "T",
  7790: "T",
  7791: "T",
  7792: "T",
  7793: "T",
  7794: "U",
  7795: "U",
  7796: "U",
  7797: "U",
  7798: "U",
  7799: "U",
  7800: "U",
  7801: "U",
  7802: "U",
  7803: "U",
  7804: "V",
  7805: "V",
  7806: "V",
  7807: "V",
  7808: "W",
  7809: "W",
  7810: "W",
  7811: "W",
  7812: "W",
  7813: "W",
  7814: "W",
  7815: "W",
  7816: "W",
  7817: "W",
  7818: "X",
  7819: "X",
  7820: "X",
  7821: "X",
  7822: "Y",
  7823: "Y",
  7824: "Z",
  7825: "Z",
  7826: "Z",
  7827: "Z",
  7828: "Z",
  7829: "Z",
  7830: "H",
  7831: "T",
  7832: "W",
  7833: "Y",
  7834: "A",
  7840: "A",
  7841: "A",
  7842: "A",
  7843: "A",
  7844: "A",
  7845: "A",
  7846: "A",
  7847: "A",
  7848: "A",
  7849: "A",
  7850: "A",
  7851: "A",
  7852: "A",
  7853: "A",
  7854: "A",
  7855: "A",
  7856: "A",
  7857: "A",
  7858: "A",
  7859: "A",
  7860: "A",
  7861: "A",
  7862: "A",
  7863: "A",
  7864: "E",
  7865: "E",
  7866: "E",
  7867: "E",
  7868: "E",
  7869: "E",
  7870: "E",
  7871: "E",
  7872: "E",
  7873: "E",
  7874: "E",
  7875: "E",
  7876: "E",
  7877: "E",
  7878: "E",
  7879: "E",
  7880: "I",
  7881: "I",
  7882: "I",
  7883: "I",
  7884: "O",
  7885: "O",
  7886: "O",
  7887: "O",
  7888: "O",
  7889: "O",
  7890: "O",
  7891: "O",
  7892: "O",
  7893: "O",
  7894: "O",
  7895: "O",
  7896: "O",
  7897: "O",
  7898: "O",
  7899: "O",
  7900: "O",
  7901: "O",
  7902: "O",
  7903: "O",
  7904: "O",
  7905: "O",
  7906: "O",
  7907: "O",
  7908: "U",
  7909: "U",
  7910: "U",
  7911: "U",
  7912: "U",
  7913: "U",
  7914: "U",
  7915: "U",
  7916: "U",
  7917: "U",
  7918: "U",
  7919: "U",
  7920: "U",
  7921: "U",
  7922: "Y",
  7923: "Y",
  7924: "Y",
  7925: "Y",
  7926: "Y",
  7927: "Y",
  7928: "Y",
  7929: "Y",
  7934: "Y",
  7935: "Y",
  8305: "I",
  8319: "N",
  8336: "A",
  8337: "E",
  8338: "O",
  8339: "X",
  8341: "H",
  8342: "K",
  8343: "L",
  8344: "M",
  8345: "N",
  8346: "P",
  8347: "S",
  8348: "T",
  8580: "R",
  9372: "A",
  9373: "B",
  9374: "C",
  9375: "D",
  9376: "E",
  9377: "F",
  9378: "G",
  9379: "H",
  9380: "I",
  9381: "J",
  9382: "K",
  9383: "L",
  9384: "M",
  9385: "N",
  9386: "O",
  9387: "P",
  9388: "Q",
  9389: "R",
  9390: "S",
  9391: "T",
  9392: "U",
  9393: "V",
  9394: "W",
  9395: "X",
  9396: "Y",
  9397: "Z",
  9398: "A",
  9399: "B",
  9400: "C",
  9401: "D",
  9402: "E",
  9403: "F",
  9404: "G",
  9405: "H",
  9406: "I",
  9407: "J",
  9408: "K",
  9409: "L",
  9410: "M",
  9411: "N",
  9412: "O",
  9413: "P",
  9414: "Q",
  9415: "R",
  9416: "S",
  9417: "T",
  9418: "U",
  9419: "V",
  9420: "W",
  9421: "X",
  9422: "Y",
  9423: "Z",
  9424: "A",
  9425: "B",
  9426: "C",
  9427: "D",
  9428: "E",
  9429: "F",
  9430: "G",
  9431: "H",
  9432: "I",
  9433: "J",
  9434: "K",
  9435: "L",
  9436: "M",
  9437: "N",
  9438: "O",
  9439: "P",
  9440: "Q",
  9441: "R",
  9442: "S",
  9443: "T",
  9444: "U",
  9445: "V",
  9446: "W",
  9447: "X",
  9448: "Y",
  9449: "Z",
  11360: "L",
  11361: "L",
  11362: "L",
  11363: "P",
  11364: "R",
  11365: "A",
  11366: "T",
  11367: "H",
  11368: "H",
  11369: "K",
  11370: "K",
  11371: "Z",
  11372: "Z",
  11374: "M",
  11377: "V",
  11378: "W",
  11379: "W",
  11380: "V",
  11384: "E",
  11386: "O",
  11388: "J",
  11390: "S",
  11391: "Z",
  42814: "R",
  42815: "R",
  42816: "K",
  42817: "K",
  42818: "K",
  42819: "K",
  42820: "K",
  42821: "K",
  42824: "L",
  42825: "L",
  42826: "O",
  42827: "O",
  42828: "O",
  42829: "O",
  42832: "P",
  42833: "P",
  42834: "P",
  42835: "P",
  42836: "P",
  42837: "P",
  42838: "Q",
  42839: "Q",
  42840: "Q",
  42841: "Q",
  42842: "R",
  42843: "R",
  42846: "V",
  42847: "V",
  42894: "L",
  42896: "N",
  42897: "N",
  42898: "C",
  42899: "C",
  42900: "C",
  42901: "H",
  42902: "B",
  42903: "B",
  42904: "F",
  42905: "F",
  42912: "G",
  42913: "G",
  42914: "K",
  42915: "K",
  42916: "N",
  42917: "N",
  42918: "R",
  42919: "R",
  42920: "S",
  42921: "S",
  42922: "H",
  42925: "L",
  42930: "J",
  42936: "U",
  42937: "U",
  42948: "C",
  42949: "S",
  42950: "Z",
  42951: "D",
  42952: "D",
  42953: "S",
  42954: "S",
  43825: "A",
  43828: "E",
  43831: "L",
  43832: "L",
  43833: "L",
  43834: "M",
  43835: "N",
  43847: "R",
  43849: "R",
  43854: "U",
  43855: "U",
  43858: "U",
  43862: "X",
  43863: "X",
  43864: "X",
  43865: "X",
  43866: "Y",
  65313: "A",
  65314: "B",
  65315: "C",
  65316: "D",
  65317: "E",
  65318: "F",
  65319: "G",
  65320: "H",
  65321: "I",
  65322: "J",
  65323: "K",
  65324: "L",
  65325: "M",
  65326: "N",
  65327: "O",
  65328: "P",
  65329: "Q",
  65330: "R",
  65331: "S",
  65332: "T",
  65333: "U",
  65334: "V",
  65335: "W",
  65336: "X",
  65337: "Y",
  65338: "Z",
  65345: "A",
  65346: "B",
  65347: "C",
  65348: "D",
  65349: "E",
  65350: "F",
  65351: "G",
  65352: "H",
  65353: "I",
  65354: "J",
  65355: "K",
  65356: "L",
  65357: "M",
  65358: "N",
  65359: "O",
  65360: "P",
  65361: "Q",
  65362: "R",
  65363: "S",
  65364: "T",
  65365: "U",
  65366: "V",
  65367: "W",
  65368: "X",
  65369: "Y",
  65370: "Z",
  122627: "R",
  122633: "T",
  122641: "L",
  122643: "L",
  122646: "R",
  122650: "I",
  122651: "O",
  122653: "C",
  122654: "S",
  122661: "D",
  122662: "L",
  122663: "N",
  122664: "R",
  122665: "S",
  122666: "T",
  127248: "A",
  127249: "B",
  127250: "C",
  127251: "D",
  127252: "E",
  127253: "F",
  127254: "G",
  127255: "H",
  127256: "I",
  127257: "J",
  127258: "K",
  127259: "L",
  127260: "M",
  127261: "N",
  127262: "O",
  127263: "P",
  127264: "Q",
  127265: "R",
  127266: "S",
  127267: "T",
  127268: "U",
  127269: "V",
  127270: "W",
  127271: "X",
  127272: "Y",
  127273: "Z",
  127274: "S",
  127275: "C",
  127276: "R",
  127280: "A",
  127281: "B",
  127282: "C",
  127283: "D",
  127284: "E",
  127285: "F",
  127286: "G",
  127287: "H",
  127288: "I",
  127289: "J",
  127290: "K",
  127291: "L",
  127292: "M",
  127293: "N",
  127294: "O",
  127295: "P",
  127296: "Q",
  127297: "R",
  127298: "S",
  127299: "T",
  127300: "U",
  127301: "V",
  127302: "W",
  127303: "X",
  127304: "Y",
  127305: "Z",
  127312: "A",
  127313: "B",
  127314: "C",
  127315: "D",
  127316: "E",
  127317: "F",
  127318: "G",
  127319: "H",
  127320: "I",
  127321: "J",
  127322: "K",
  127323: "L",
  127324: "M",
  127325: "N",
  127326: "O",
  127327: "P",
  127328: "Q",
  127329: "R",
  127330: "S",
  127331: "T",
  127332: "U",
  127333: "V",
  127334: "W",
  127335: "X",
  127336: "Y",
  127337: "Z",
  127344: "A",
  127345: "B",
  127346: "C",
  127347: "D",
  127348: "E",
  127349: "F",
  127350: "G",
  127351: "H",
  127352: "I",
  127353: "J",
  127354: "K",
  127355: "L",
  127356: "M",
  127357: "N",
  127358: "O",
  127359: "P",
  127360: "Q",
  127361: "R",
  127362: "S",
  127363: "T",
  127364: "U",
  127365: "V",
  127366: "W",
  127367: "X",
  127368: "Y",
  127369: "Z",
  127370: "P",
  127397: "D",
  917569: "A",
  917570: "B",
  917571: "C",
  917572: "D",
  917573: "E",
  917574: "F",
  917575: "G",
  917576: "H",
  917577: "I",
  917578: "J",
  917579: "K",
  917580: "L",
  917581: "M",
  917582: "N",
  917583: "O",
  917584: "P",
  917585: "Q",
  917586: "R",
  917587: "S",
  917588: "T",
  917589: "U",
  917590: "V",
  917591: "W",
  917592: "X",
  917593: "Y",
  917594: "Z",
  917601: "A",
  917602: "B",
  917603: "C",
  917604: "D",
  917605: "E",
  917606: "F",
  917607: "G",
  917608: "H",
  917609: "I",
  917610: "J",
  917611: "K",
  917612: "L",
  917613: "M",
  917614: "N",
  917615: "O",
  917616: "P",
  917617: "Q",
  917618: "R",
  917619: "S",
  917620: "T",
  917621: "U",
  917622: "V",
  917623: "W",
  917624: "X",
  917625: "Y",
  917626: "Z"
};

const perceptualMap = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  120068,
  120069,
  8493,
  120071,
  120072,
  120073,
  120074,
  8460,
  8465,
  120077,
  120078,
  120079,
  120080,
  120081,
  120082,
  120083,
  120084,
  8476,
  120086,
  120087,
  120088,
  120089,
  120090,
  120091,
  120092,
  8488,
  120094,
  120095,
  120096,
  120097,
  120098,
  120099,
  120100,
  120101,
  120102,
  120103,
  120104,
  120105,
  120106,
  120107,
  120108,
  120109,
  120110,
  120111,
  120112,
  120113,
  120114,
  120115,
  120116,
  120117,
  120118,
  120119,
  120120,
  120121,
  8450,
  120123,
  120124,
  120125,
  120126,
  8461,
  120128,
  120129,
  120130,
  120131,
  120132,
  8469,
  120134,
  8473,
  8474,
  8477,
  120138,
  120139,
  120140,
  120141,
  120142,
  120143,
  120144,
  8484,
  120146,
  120147,
  120148,
  120149,
  120150,
  120151,
  120152,
  120153,
  120154,
  120155,
  120156,
  120157,
  120158,
  120159,
  120160,
  120161,
  120162,
  120163,
  120164,
  120165,
  120166,
  120167,
  120168,
  120169,
  120170,
  120171,
  593,
  595,
  67,
  599,
  603,
  1330,
  71,
  614,
  73,
  669,
  75,
  646,
  625,
  627,
  1139,
  80,
  81,
  640,
  3619,
  84,
  85,
  1141,
  87,
  88,
  89,
  90,
  593,
  595,
  99,
  599,
  603,
  1330,
  103,
  614,
  105,
  669,
  107,
  646,
  625,
  627,
  1139,
  112,
  113,
  640,
  3619,
  116,
  117,
  1141,
  119,
  120,
  121,
  122,
  127344,
  127345,
  127346,
  127347,
  127348,
  127349,
  127350,
  127351,
  127352,
  127353,
  127354,
  127355,
  127356,
  127357,
  127358,
  127359,
  127360,
  127361,
  127362,
  127363,
  127364,
  127365,
  127366,
  127367,
  127368,
  127369,
  127344,
  127345,
  127346,
  127347,
  127348,
  127349,
  127350,
  127351,
  127352,
  127353,
  127354,
  127355,
  127356,
  127357,
  127358,
  127359,
  127360,
  127361,
  127362,
  127363,
  127364,
  127365,
  127366,
  127367,
  127368,
  127369,
  945,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  945,
  98,
  99,
  100,
  101,
  102,
  103,
  104,
  105,
  106,
  107,
  108,
  109,
  110,
  111,
  112,
  113,
  114,
  115,
  116,
  117,
  118,
  119,
  120,
  121,
  122,
  945,
  1074,
  2798,
  273,
  2799,
  1330,
  71,
  1106,
  73,
  74,
  2717,
  8467,
  653,
  3607,
  1139,
  961,
  2791,
  2792,
  2749,
  428,
  2743,
  8730,
  2710,
  215,
  89,
  90,
  945,
  1074,
  2798,
  273,
  2799,
  1330,
  103,
  1106,
  105,
  106,
  2717,
  8467,
  653,
  3607,
  1139,
  961,
  2791,
  2792,
  2749,
  428,
  2743,
  8730,
  2710,
  215,
  121,
  122,
  9424,
  9425,
  9426,
  9427,
  9428,
  9429,
  9430,
  9431,
  9432,
  9433,
  9434,
  9435,
  9436,
  9437,
  9438,
  9439,
  9440,
  9441,
  9442,
  9443,
  9444,
  9445,
  9446,
  9447,
  9448,
  9449,
  9424,
  9425,
  9426,
  9427,
  9428,
  9429,
  9430,
  9431,
  9432,
  9433,
  9434,
  9435,
  9436,
  9437,
  9438,
  9439,
  9440,
  9441,
  9442,
  9443,
  9444,
  9445,
  9446,
  9447,
  9448,
  9449,
  945,
  66,
  67,
  68,
  1108,
  70,
  71,
  1085,
  73,
  74,
  75,
  76,
  1084,
  1080,
  963,
  961,
  81,
  1103,
  3619,
  1090,
  965,
  86,
  87,
  88,
  89,
  90,
  945,
  98,
  99,
  100,
  1108,
  102,
  103,
  1085,
  105,
  106,
  107,
  108,
  1084,
  1080,
  963,
  961,
  113,
  1103,
  3619,
  1090,
  965,
  118,
  119,
  120,
  121,
  122,
  945,
  66,
  67,
  68,
  1108,
  70,
  71,
  1035,
  73,
  74,
  75,
  322,
  1084,
  951,
  248,
  961,
  81,
  82,
  115,
  359,
  85,
  86,
  87,
  88,
  89,
  90,
  945,
  98,
  99,
  100,
  1108,
  102,
  103,
  1035,
  105,
  106,
  107,
  322,
  1084,
  951,
  248,
  961,
  113,
  114,
  115,
  359,
  117,
  118,
  119,
  120,
  121,
  122,
  120432,
  120433,
  120434,
  120435,
  120436,
  120437,
  120438,
  120439,
  120440,
  120441,
  120442,
  120443,
  120444,
  120445,
  120446,
  120447,
  120448,
  120449,
  120450,
  120451,
  120452,
  120453,
  120454,
  120455,
  120456,
  120457,
  120458,
  120459,
  120460,
  120461,
  120462,
  120463,
  120464,
  120465,
  120466,
  120467,
  120468,
  120469,
  120470,
  120471,
  120472,
  120473,
  120474,
  120475,
  120476,
  120477,
  120478,
  120479,
  120480,
  120481,
  120482,
  120483,
  120328,
  120329,
  120330,
  120331,
  120332,
  120333,
  120334,
  120335,
  120336,
  120337,
  120338,
  120339,
  120340,
  120341,
  120342,
  120343,
  120344,
  120345,
  120346,
  120347,
  120348,
  120349,
  120350,
  120351,
  120352,
  120353,
  120354,
  120355,
  120356,
  120357,
  120358,
  120359,
  120360,
  120361,
  120362,
  120363,
  120364,
  120365,
  120366,
  120367,
  120368,
  120369,
  120370,
  120371,
  120372,
  120373,
  120374,
  120375,
  120376,
  120377,
  120378,
  120379,
  119964,
  119861,
  119966,
  119967,
  119864,
  119865,
  119970,
  119867,
  119868,
  119973,
  119974,
  119871,
  119872,
  119977,
  119978,
  119979,
  119980,
  119877,
  119982,
  119983,
  119984,
  119985,
  119986,
  119987,
  119988,
  119989,
  119886,
  119887,
  119888,
  119889,
  119890,
  119891,
  119892,
  8462,
  119894,
  119895,
  119896,
  119897,
  119898,
  119899,
  119900,
  119901,
  119902,
  119903,
  119904,
  119905,
  119906,
  119907,
  119908,
  119909,
  119910,
  119911,
  7491,
  7495,
  7580,
  7496,
  7497,
  7584,
  7501,
  688,
  8305,
  690,
  7503,
  737,
  7504,
  8319,
  7506,
  7510,
  740,
  691,
  738,
  7511,
  7512,
  7515,
  695,
  739,
  696,
  7611,
  7491,
  7495,
  7580,
  7496,
  7497,
  7584,
  7501,
  688,
  8305,
  690,
  7503,
  737,
  7504,
  8319,
  7506,
  7510,
  740,
  691,
  738,
  7511,
  7512,
  7515,
  695,
  739,
  696,
  7611,
  3588,
  3666,
  67,
  3668,
  1108,
  358,
  71,
  1106,
  3648,
  1503,
  1082,
  108,
  1084,
  3616,
  3663,
  80,
  81,
  3616,
  3619,
  1090,
  3618,
  86,
  87,
  88,
  89,
  90,
  3588,
  3666,
  99,
  3668,
  1108,
  358,
  103,
  1106,
  3648,
  1503,
  1082,
  108,
  1084,
  3616,
  3663,
  112,
  113,
  3616,
  3619,
  1090,
  3618,
  118,
  119,
  120,
  121,
  122,
  506,
  1074,
  67,
  208,
  8364,
  402,
  485,
  1035,
  73,
  74,
  75,
  321,
  1084,
  1080,
  216,
  961,
  81,
  1103,
  3619,
  1090,
  220,
  86,
  969,
  215,
  165,
  438,
  506,
  1074,
  99,
  208,
  8364,
  402,
  485,
  1035,
  105,
  106,
  107,
  321,
  1084,
  1080,
  216,
  961,
  113,
  1103,
  3619,
  1090,
  220,
  118,
  969,
  215,
  165,
  438,
  1570,
  1571,
  1572,
  1573,
  1574,
  1574,
  1575,
  1576,
  1577,
  1578,
  1579,
  1580,
  1582,
  1583,
  1584,
  1585,
  1586,
  1587,
  1570,
  1589,
  1590,
  1591,
  1592,
  1593,
  1594,
  1489,
  1570,
  1571,
  1572,
  1573,
  1574,
  1574,
  1575,
  1576,
  1577,
  1578,
  1579,
  1580,
  1582,
  1583,
  1584,
  1585,
  1586,
  1587,
  1570,
  1589,
  1590,
  1591,
  1592,
  1593,
  1594,
  1489,
  592,
  66,
  596,
  68,
  477,
  607,
  387,
  613,
  305,
  638,
  670,
  1503,
  623,
  78,
  79,
  80,
  81,
  633,
  83,
  647,
  85,
  652,
  653,
  88,
  654,
  90,
  592,
  98,
  596,
  100,
  477,
  607,
  387,
  613,
  305,
  638,
  670,
  1503,
  623,
  110,
  111,
  112,
  113,
  633,
  115,
  647,
  117,
  652,
  653,
  120,
  654,
  122,
  119860,
  119861,
  119862,
  119863,
  119864,
  119865,
  119866,
  119867,
  119868,
  119869,
  119870,
  119871,
  119872,
  119873,
  119874,
  119875,
  119876,
  119877,
  119878,
  119879,
  119880,
  119881,
  119882,
  119883,
  119884,
  119885,
  119886,
  119887,
  119888,
  119889,
  119890,
  119891,
  119892,
  8462,
  119894,
  119895,
  119896,
  119897,
  119898,
  119899,
  119900,
  119901,
  119902,
  119903,
  119904,
  119905,
  119906,
  119907,
  119908,
  119909,
  119910,
  119911,
  119808,
  119809,
  119810,
  119811,
  119812,
  119813,
  119814,
  119815,
  119816,
  119817,
  119818,
  119819,
  119820,
  119821,
  119822,
  119823,
  119824,
  119825,
  119826,
  119827,
  119828,
  119829,
  119830,
  119831,
  119832,
  119833,
  119834,
  119835,
  119836,
  119837,
  119838,
  119839,
  119840,
  119841,
  119842,
  119843,
  119844,
  119845,
  119846,
  119847,
  119848,
  119849,
  119850,
  119851,
  119852,
  119853,
  119854,
  119855,
  119856,
  119857,
  119858,
  119859,
  5609,
  5718,
  5205,
  208,
  5486,
  8355,
  484,
  5500,
  407,
  5262,
  7728,
  5290,
  5616,
  5641,
  12295,
  5229,
  4275,
  5511,
  5397,
  428,
  5196,
  8548,
  5615,
  5741,
  978,
  20057,
  5609,
  5718,
  5205,
  208,
  5486,
  8355,
  484,
  5500,
  407,
  5262,
  7728,
  5290,
  5616,
  5641,
  12295,
  5229,
  4275,
  5511,
  5397,
  428,
  5196,
  8548,
  5615,
  5741,
  978,
  20057,
  122,
  654,
  120,
  653,
  652,
  110,
  647,
  115,
  633,
  98,
  100,
  111,
  651,
  623,
  124,
  670,
  638,
  305,
  613,
  595,
  607,
  601,
  961,
  596,
  98,
  592,
  122,
  654,
  120,
  653,
  652,
  110,
  647,
  115,
  633,
  98,
  100,
  111,
  651,
  623,
  124,
  670,
  638,
  305,
  613,
  595,
  607,
  601,
  961,
  596,
  98,
  592,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  3588,
  3670,
  162,
  3795,
  275,
  102,
  3719,
  104,
  105,
  3623,
  107,
  108,
  3667,
  3734,
  3792,
  112,
  3665,
  114,
  350,
  116,
  3609,
  3591,
  3743,
  120,
  3631,
  3722,
  3588,
  3670,
  162,
  3795,
  275,
  102,
  3719,
  104,
  105,
  3623,
  107,
  108,
  3667,
  3734,
  3792,
  112,
  3665,
  114,
  350,
  116,
  3609,
  3591,
  3743,
  120,
  3631,
  3722,
  5609,
  5623,
  5218,
  5490,
  5695,
  5556,
  5660,
  5500,
  5360,
  5274,
  5565,
  5176,
  5290,
  5691,
  5641,
  5325,
  5493,
  5492,
  5511,
  83,
  5558,
  5208,
  5178,
  5690,
  5741,
  5563,
  5609,
  5623,
  5218,
  5490,
  5695,
  5556,
  5660,
  5500,
  5360,
  5274,
  5565,
  5176,
  5290,
  5691,
  5641,
  5325,
  5493,
  5492,
  5511,
  83,
  5558,
  5208,
  5178,
  5690,
  5741,
  5563,
  52,
  66,
  67,
  68,
  51,
  70,
  71,
  72,
  49,
  74,
  75,
  76,
  77,
  78,
  48,
  80,
  81,
  82,
  53,
  55,
  85,
  86,
  87,
  88,
  89,
  90,
  52,
  98,
  99,
  100,
  51,
  102,
  103,
  104,
  49,
  106,
  107,
  108,
  109,
  110,
  48,
  112,
  113,
  114,
  53,
  55,
  117,
  118,
  119,
  120,
  121,
  122,
  913,
  66,
  67,
  68,
  1101,
  70,
  71,
  1085,
  73,
  74,
  75,
  76,
  1084,
  1048,
  216,
  112,
  81,
  1071,
  83,
  358,
  117,
  86,
  87,
  88,
  89,
  90,
  913,
  98,
  99,
  100,
  1101,
  102,
  103,
  1085,
  105,
  106,
  107,
  108,
  1084,
  1048,
  216,
  112,
  113,
  1071,
  115,
  358,
  117,
  118,
  119,
  120,
  121,
  122,
  225,
  66,
  67,
  68,
  232,
  70,
  71,
  72,
  237,
  74,
  75,
  76,
  77,
  78,
  212,
  80,
  81,
  82,
  83,
  84,
  217,
  86,
  87,
  88,
  89,
  90,
  225,
  98,
  99,
  100,
  232,
  102,
  103,
  72,
  237,
  106,
  107,
  108,
  109,
  110,
  212,
  112,
  113,
  114,
  83,
  116,
  217,
  118,
  119,
  120,
  121,
  122,
  3621,
  1074,
  162,
  8706,
  1101,
  402,
  966,
  1106,
  3648,
  1504,
  1082,
  8467,
  1084,
  1080,
  3663,
  1511,
  7907,
  1103,
  3619,
  8224,
  181,
  8730,
  969,
  1175,
  253,
  382,
  3621,
  1074,
  162,
  8706,
  1101,
  402,
  966,
  1106,
  3648,
  1504,
  1082,
  8467,
  1084,
  1080,
  3663,
  1511,
  7907,
  1103,
  3619,
  8224,
  181,
  8730,
  969,
  1175,
  253,
  382,
  506,
  66,
  67,
  68,
  8364,
  70,
  71,
  1035,
  73,
  74,
  75,
  76,
  1084,
  1087,
  216,
  961,
  81,
  1071,
  1705,
  84,
  220,
  86,
  87,
  88,
  89,
  90,
  506,
  98,
  99,
  100,
  8364,
  102,
  103,
  1035,
  105,
  106,
  107,
  108,
  1084,
  1087,
  216,
  961,
  113,
  1071,
  1705,
  84,
  220,
  118,
  119,
  120,
  121,
  122,
  916,
  946,
  262,
  272,
  8364,
  8355,
  484,
  294,
  926,
  308,
  1180,
  321,
  924,
  327,
  216,
  1056,
  8486,
  344,
  350,
  358,
  7918,
  86,
  372,
  1046,
  165,
  381,
  916,
  946,
  262,
  272,
  8364,
  8355,
  484,
  294,
  926,
  308,
  1180,
  321,
  924,
  327,
  216,
  1056,
  8486,
  344,
  350,
  358,
  7918,
  86,
  372,
  1046,
  165,
  381,
  119938,
  119939,
  119940,
  119941,
  119942,
  119943,
  119944,
  119945,
  119946,
  119947,
  119948,
  119949,
  119950,
  119951,
  119952,
  119953,
  119954,
  119955,
  119956,
  119957,
  119958,
  119959,
  119960,
  119961,
  119962,
  119963,
  119938,
  119939,
  119940,
  119941,
  119942,
  119943,
  119944,
  119945,
  119946,
  119947,
  119948,
  119949,
  119950,
  119951,
  119952,
  119953,
  119954,
  119955,
  119956,
  119957,
  119958,
  119959,
  119960,
  119961,
  119962,
  119963,
  3588,
  3666,
  392,
  599,
  65225,
  2367,
  65261,
  614,
  1649,
  65245,
  5845,
  621,
  3667,
  3585,
  1147,
  961,
  1785,
  636,
  3619,
  1351,
  2730,
  1783,
  3613,
  3595,
  1509,
  1401,
  3588,
  3666,
  392,
  599,
  65225,
  2367,
  65261,
  614,
  1649,
  65245,
  5845,
  621,
  3667,
  3585,
  1147,
  961,
  1785,
  636,
  3619,
  1351,
  2730,
  1783,
  3613,
  3595,
  1509,
  1401,
  945,
  1074,
  162,
  8706,
  1108,
  402,
  65261,
  1085,
  953,
  1504,
  1082,
  8467,
  1084,
  951,
  963,
  961,
  1785,
  1103,
  1109,
  1090,
  965,
  957,
  969,
  967,
  1091,
  1401,
  945,
  1074,
  162,
  8706,
  1108,
  402,
  65261,
  1085,
  953,
  1504,
  1082,
  8467,
  1084,
  951,
  963,
  961,
  1785,
  1103,
  1109,
  1090,
  965,
  957,
  969,
  967,
  1091,
  1401,
  3588,
  3666,
  962,
  3668,
  1108,
  358,
  65262,
  1106,
  3648,
  1503,
  1082,
  621,
  3667,
  3616,
  3663,
  1511,
  7907,
  1075,
  3619,
  1351,
  3618,
  1513,
  3628,
  1488,
  1509,
  1401,
  3588,
  3666,
  962,
  3668,
  1108,
  358,
  65262,
  1106,
  3648,
  1503,
  1082,
  621,
  3667,
  3616,
  3663,
  1511,
  7907,
  1075,
  3619,
  1351,
  3618,
  1513,
  3628,
  1488,
  1509,
  1401,
  4621,
  4876,
  4653,
  4821,
  4735,
  4731,
  4759,
  4824,
  4878,
  4875,
  4885,
  4648,
  4896,
  4781,
  4816,
  4840,
  4818,
  4842,
  4752,
  4949,
  4609,
  4608,
  4640,
  4664,
  4611,
  4874,
  4621,
  4876,
  4653,
  4821,
  4735,
  4731,
  4759,
  4824,
  4878,
  4875,
  4885,
  4648,
  4896,
  4781,
  4816,
  4840,
  4818,
  4842,
  4752,
  4949,
  4609,
  4608,
  4640,
  4664,
  4611,
  4874,
  228,
  7685,
  267,
  7691,
  235,
  7711,
  289,
  7719,
  239,
  106,
  7731,
  7735,
  7745,
  7749,
  246,
  7767,
  113,
  7771,
  7777,
  7831,
  252,
  7807,
  7813,
  7821,
  255,
  380,
  228,
  7685,
  267,
  7691,
  235,
  7711,
  289,
  7719,
  239,
  106,
  7731,
  7735,
  7745,
  7749,
  246,
  7767,
  113,
  7771,
  7777,
  7831,
  252,
  7807,
  7813,
  7821,
  255,
  380,
  65345,
  65346,
  65347,
  65348,
  65349,
  65350,
  65351,
  65352,
  65353,
  65354,
  65355,
  65356,
  65357,
  65358,
  65359,
  65360,
  65361,
  65362,
  65363,
  65364,
  65365,
  65366,
  65367,
  65368,
  65369,
  65370,
  65345,
  65346,
  65347,
  65348,
  65349,
  65350,
  65351,
  65352,
  65353,
  65354,
  65355,
  65356,
  65357,
  65358,
  65359,
  65360,
  65361,
  65362,
  65363,
  65364,
  65365,
  65366,
  65367,
  65368,
  65369,
  65370,
  570,
  384,
  572,
  273,
  583,
  102,
  485,
  295,
  616,
  585,
  42817,
  322,
  109,
  110,
  248,
  7549,
  42839,
  589,
  115,
  359,
  7550,
  118,
  119,
  120,
  591,
  438,
  570,
  384,
  572,
  273,
  583,
  102,
  485,
  295,
  616,
  585,
  42817,
  322,
  109,
  110,
  248,
  7549,
  42839,
  589,
  115,
  359,
  7550,
  118,
  119,
  120,
  591,
  438
];

function unicope(input) {
  return [...input].map((c) => {
    const codePoint = c.codePointAt(0);
    if (codePoint <= 255) {
      return c;
    }
    if (basicMap[codePoint]) {
      return basicMap[codePoint];
    }
    const perceptualIndex = perceptualMap.indexOf(codePoint);
    if (perceptualIndex !== -1) {
      return perceptualMap[perceptualIndex % 52];
    }
    return "?";
  }).join("");
}

exports.unicope = unicope;
