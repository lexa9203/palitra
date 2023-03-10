const products = [
	{
		name: 'DECORAZZA ALCANTARA',
		img: './img/DecorazzaAlcantara.png',
		price: 3190,
		materials: ['decorative-paints'],
	},
	{
		name: 'DECORAZZA VELOURS',
		img: './img/DecorazzaVelours.png',
		price: 3000,
		view: ['velyur'],
		purpose: ['sleeping'],
		materials: ['decorative-paints'],
	},
	{
		name: 'DECORAZZA SETA NOVA',
		img: './img/DecorazzaSetaNova.png',
		price: 2460,
		view: ['perlamutrovaya', 'shelk'],
		purpose: ['bathroom', 'corridor', 'kitchen', 'ceiling', 'room'],
		materials: ['decorative-paints'],
	},
	{
		name: 'DECORAZZA SETA',
		img: './img/DecorazzaSeta.png',
		price: 2890,
		view: ['perlamutrovaya', 'shelk'],
		purpose: ['bathroom', 'corridor', 'kitchen', 'ceiling', 'room'],
		materials: ['decorative-paints'],
	},
	{
		name: 'DECORAZZA LUCETEZZA NOVA',
		img: './img/DecorazzaLucetezzaNova.png',
		price: 2460,
		view: ['two-colors', 'pesok'],
		purpose: ['sleeping', 'bathroom', 'corridor', 'ceiling', 'room'],
		materials: ['decorative-paints'],
	},
	{
		name: 'DECORAZZA LUCETEZZA',
		img: './img/DecorazzaLucetezza.png',
		price: 2890,
		view: ['two-colors', 'pesok'],
		purpose: ['sleeping', 'bathroom', 'corridor', 'ceiling', 'room'],
		materials: ['decorative-paints'],
	},
	{
		name: 'DECORAZZA VELLUTO',
		img: './img/DecorazzaVelluto.png',
		price: 2890,
		view: ['perlamutrovaya', 'shelk'],
		purpose: ['bathroom', 'corridor', 'kitchen', 'ceiling', 'room'],
		materials: ['decorative-paints'],
	},
	{
		name: 'DECORAZZA BREZZA',
		img: './img/DecorazzaBrezza.png',
		price: 2410,
		view: ['pesok'],
		purpose: ['sleeping', 'bathroom', 'corridor', 'ceiling', 'room'],
		materials: ['decorative-paints'],
	},
	{
		name: 'DECORAZZA FIORA',
		img: './img/DecorazzaFiora.png',
		price: 960,
		materials: ['decorative-paints'],
	},
	{
		name: 'DECORAZZA EFFETTO METALLICO',
		img: './img/DecorazzaEffettometallico.png',
		price: 520,
		purpose: ['bathroom', 'corridor', 'balcony'],
		materials: ['decorative-paints'],
	},
	{
		name: 'DECORAZZA SETA DA VINCI',
		img: './img/SetaDaVinci.png',
		price: 3830,
		purpose: ['sleeping', 'corridor', 'ceiling', 'room'],
		materials: ['decorative-paints'],
	},
	{
		name: 'DECORAZZA CRAQUELURE',
		img: './img/DecorazzaCraquelure.png',
		price: 1500,
		purpose: ['corridor', 'balcony'],
		materials: ['decorative-paints'],
	},
	{
		name: 'DECORAZZA WALL ARTE',
		img: './img/DecorazzaWallArte.jpg',
		price: 1050,
		materials: ['decorative-paints'],
	},
	{
		name: 'DECORAZZA STUCCO VENEZIANO',
		img: './img/DecorazzaStuccoVeneziano.png',
		price: 3480,
		purpose: ['corridor', 'ceiling', 'room'],
		materials: ['venetian-plaster'],
	},
	{
		name: 'DECORAZZA CALCE VENEZIANA',
		img: './img/DecorazzaCalceVeneziana.png',
		price: 3360,
		materials: ['venetian-plaster'],
	},
	{
		name: 'DECORAZZA TRAVERTINO NATURALE',
		img: './img/DecorazzaTravertinoNaturale.png',
		price: 6050,
		view: ['kirpich', 'mramorino', 'kamen', 'travertin'],
		purpose: ['bathroom', 'corridor', 'balcony', 'room'],
		materials: ['textured-coatings'],
	},
	{
		name: 'DECORAZZA ART BETON',
		img: './img/DecorazzaArtBeton.png',
		price: 3400,
		view: ['loft', 'beton'],
		purpose: ['bathroom', 'corridor', 'kitchen', 'balcony', 'room'],
		materials: ['textured-coatings'],
	},
	{
		name: 'DECORAZZA TRAVERTA',
		img: './img/DecorazzaTraverta.png',
		price: 5100,
		purpose: ['sleeping'],
		view: ['kirpich', 'loft', 'beton', 'travertin'],
		purpose: ['bathroom', 'corridor', 'balcony', 'room'],
		materials: ['textured-coatings'],
	},
	{
		name: 'DECORAZZA ROMANO',
		img: './img/DecorazzaRomano.png',
		price: 8000,
		view: ['two-colors'],
		purpose: ['corridor'],
		materials: ['textured-coatings'],
	},
	{
		name: 'DECORAZZA BARILIEVO',
		img: './img/DecorazzaBarilievo.png',
		price: 2600,
		view: ['uzory', 'two-colors'],
		purpose: ['sleeping', 'corridor', 'room'],
		materials: ['textured-coatings'],
	},
	{
		name: 'DECORAZZA MURALES',
		img: './img/DECORAZZA_MURALES.png',
		price: 5700,
		view: ['uzory'],
		purpose: ['bathroom', 'corridor', 'kitchen', 'room'],
		materials: ['textured-coatings'],
	},
	{
		name: 'DECORAZZA SOLLIEVO',
		img: './img/DecorazzaSollievo.png',
		price: 8850,
		purpose: ['bathroom', 'corridor', 'balcony'],
		materials: ['textured-coatings'],
	},
	{
		name: 'DECORAZZA RUSTIC',
		img: './img/DecorazzaRustic.png',
		price: 5050,
		purpose: ['bathroom', 'corridor', 'kitchen', 'balcony'],
		view: ['kamen'],
		materials: ['textured-coatings'],
	},
	{
		name: 'FRONTE + LEGANTE МЕЛКАЯ ФРАКЦИЯ',
		img: './img/Fronte+Legante.png',
		price: 3950,
		view: ['loft', 'beton'],
		purpose: ['bathroom', 'corridor', 'kitchen', 'balcony'],
		materials: ['components-MICROCEMENTO', 'textured-coatings'],
	},
	{
		name: 'STRUTTURA + LEGANTE КРУПНАЯ ФРАКЦИЯ',
		img: './img/Struttura+Legante.png',
		price: 8150,
		view: ['loft'],
		materials: ['components-MICROCEMENTO', 'textured-coatings'],
	},
	{
		name: 'DECORAZZA PERLA VERNICI',
		img: './img/DecorazzaPerlaVernici.png',
		price: 2750,
		materials: ['finishes'],
	},
	{
		name: 'DECORAZZA FINITURA',
		img: './img/DecorazzaFinitura.png',
		price: 1060,
		materials: ['finishes'],
	},
	{
		name: 'DECORAZZA FLEUR DECO',
		img: './img/DecorazzaFleurDeco.png',
		price: 2250,
		materials: ['finishes'],
	},
	{
		name: 'DECORAZZA CERA DECOR',
		img: './img/DecorazzaCeraDecor.png',
		price: 3280,
		view: ['kamen'],
		materials: ['finishes'],
	},
	{
		name: 'DECORAZZA LUCENTE',
		img: './img/DecorazzaLucente.png',
		price: 1160,
		materials: ['finishes'],
	},
	{
		name: 'DECORAZZA MICA',
		img: './img/DecorazzaMica.jpg',
		price: 730,
		materials: ['finishes'],
	},
	{
		name: 'DECORAZZA CERA DI VENEZIANO NOVA',
		img: './img/DecorazzaCeraDiVenezianoNova.png',
		price: 3500,
		materials: ['finishes'],
	},
	{
		name: 'DECORAZZA CERA DI VENEZIANO',
		img: './img/DecorazzaCeraDiVeneziano.png',
		price: 13013,
		materials: ['finishes'],
	},
	{
		name: 'DECORAZZA PASTELLO VERNICI',
		img: './img/DecorazzaPastelloVernici.png',
		price: 2190,
		materials: ['finishes'],
	},
	{
		name: 'PROTETTO MATTE',
		img: './img/ProtettoMatte.png',
		price: 12500,
		purpose: ['bathroom', 'corridor', 'kitchen', 'balcony'],
		view: ['loft', 'beton'],
		materials: ['components-MICROCEMENTO', 'finishes'],
	},
	{
		name: 'DECORAZZA PRIMER',
		img: './img/Primer.png',
		price: 950,
		materials: ['preparatory-materials'],
	},
	{
		name: 'DECORAZZA PRIEMER DI QUARZO',
		img: './img/DECORAZZAPRIEMERDIQUARZO.png',
		price: 760,
		materials: ['preparatory-materials'],
	},
	{
		name: 'DECORAZZA BASE',
		img: './img/DECORAZZABASE.png',
		price: 960,
		materials: ['preparatory-materials'],
	},
	{
		name: 'PAVAN КЕЛЬМА ВЕНЕЦИАНСКАЯ, НЕРЖАВЕЮЩАЯ СТАЛЬ, ТОНКАЯ 0,5 ММ (200Х80 ММ)',
		img: './img/PavanKelmaVenician.png',
		price: 2750,
		tools: ['spatulas'],
	},
	{
		name: 'VAIVEN КЕЛЬМА ВЕНЕЦИАНСКАЯ',
		img: './img/VaivenKelmaVenician.jpg',
		price: 3530,
		tools: ['spatulas'],
	},
	{
		name: 'PENTRILO КЕЛЬМА ЗАКРУГЛЕННАЯ СТАЛЬ INOX',
		img: './img/PentriloInox.png',
		price: 1850,
		tools: ['spatulas'],
	},
	{
		name: 'PAVAN КЕЛЬМА ВЕНЕЦИАНСКАЯ SINTESI',
		img: './img/PavanSintesi.png',
		price: 5200,
		tools: ['spatulas'],
	},
	{
		name: 'PENTRILO КЕЛЬМА ПРОФЕССИОНАЛЬНАЯ',
		img: './img/PentriloProfi.jpg',
		price: 2450,
		tools: ['spatulas'],
	},
	{
		name: 'VAIVEN КЕЛЬМА ШТУКАТУРНАЯ FLEX PREMIUM',
		img: './img/VaivenFlexPremium.jpg',
		price: 2700,
		tools: ['spatulas'],
	},
	{
		name: 'PAVAN ЗОЛОТО ВЕНЕЦИИ',
		img: './img/PavanGold.jpg',
		price: 6300,
		tools: ['spatulas'],
	},
	{
		name: 'PAVAN КЕЛЬМА ВЕНЕЦИАНСКАЯ DOMO',
		img: './img/PavanDomo.jpg',
		price: 3350,
		tools: ['spatulas'],
	},
	{
		name: 'ARMERO КЕЛЬМА ДЛЯ ВЕНЕЦИАНСКОЙ ШТУКАТУРКИ',
		img: './img/Armero.jpg',
		price: 1350,
		tools: ['spatulas'],
	},
	{
		name: 'PAVAN ШПАТЕЛЬ ИЗ НЕРЖ.СТАЛИ С ПЛАСТИКОВОЙ РУЧКОЙ',
		img: './img/PavanShpatel.png',
		price: 1350,
		tools: ['spatulas'],
	},
	{
		name: 'PAVAN КЕЛЬМА ВЕНЕЦИАНСКАЯ БЕЛЫЙ ПЛАСТИК',
		img: './img/PavanWhitePlastic.jpg',
		price: 1000,
		tools: ['spatulas'],
	},
	{
		name: 'PAVAN КЕЛЬМА ВЕНЕЦИАНСКАЯ ПРОЗРАЧНЫЙ ПЛАСТИК',
		img: './img/PavanTransparentPlastic.jpg',
		price: 1950,
		tools: ['spatulas'],
	},
	{
		name: 'VAIVEN ШПАТЕЛЬ ТРЕУГОЛЬНЫЙ ПЛАСТИКОВЫЙ',
		img: './img/VaivenPlastic.png',
		price: 220,
		tools: ['spatulas'],
	},
	{
		name: 'VAIVEN ШПАТЕЛЬ PREMIUM ДЛЯ ШПАТЛЕВОК И ГИПСА',
		img: './img/VaivenPremium.jpg',
		price: 750,
		tools: ['spatulas'],
	},
	{
		name: 'VAIVEN НАБОР "ЯПОНСКИХ" ШПАТЕЛЕЙ INOX',
		img: './img/VaivenInox.jpg',
		price: 710,
		tools: ['spatulas'],
	},
	{
		name: 'КИСТЬ ФЛОРЕНТИЙСКАЯ, НАТУРАЛЬНАЯ ЩЕТИНА, 70 ММ',
		img: './img/Florentiskaya.png',
		price: 740,
		tools: ['decorative-tools'],
	},
	{
		name: 'KUHLEN КЕЛЬМА-МИНИ ПЛАСТИКОВАЯ ДЛЯ ТЕКСТУРНЫХ КРАСОК (Ø 100 ММ)',
		img: './img/Kuhlen.jpg',
		price: 850,
		tools: ['decorative-tools'],
	},
	{
		name: 'ГРЕБЕНКА C ЗАКРУГЛЕННЫМИ КРАЯМИ',
		img: './img/greben.jpg',
		price: 990,
		tools: ['decorative-tools'],
	},
	{
		name: 'PAVAN ЩЕТКА ДЛЯ ДЕКОРАТИВНЫХ РАБОТ 200Х115',
		img: './img/Pavan.jpg',
		price: 1900,
		tools: ['decorative-tools'],
	},
	{
		name: 'VAIVEN ВАРЕЖКА ИЗ НАТУРАЛЬНОЙ ШЕРСТИ',
		img: './img/Vaiven.png',
		price: 1770,
		tools: ['decorative-tools'],
	},
	{
		name: 'PENTRILO АПЛИКАТОР ВЕНЕЦИАНСКИЙ ЭФФЕКТ "МРАМОР"',
		img: './img/Pentrilo.jpg',
		price: 3880,
		tools: ['decorative-tools'],
	},
	{
		name: 'ТЕРКА C ГУБКОЙ ORANGE',
		img: './img/Orange.jpg',
		price: 1710,
		tools: ['decorative-tools'],
	},
	{
		name: 'PAVAN ГУБКА ДЕКОРАТИВНАЯ, ИСКУССТВЕННАЯ',
		img: './img/PavanDecorativnaya.jpg',
		price: 1050,
		tools: ['decorative-tools'],
	},
	{
		name: 'PENTRILO ГУБКА НАТУРАЛЬНАЯ',
		img: './img/PentriloNatur.png',
		price: 1060,
		tools: ['decorative-tools'],
	},
	{
		name: 'VAIVEN РЕЗИНОВЫЙ АПЛИКАТОР ДЕКО',
		img: './img/VaivenRezina.png',
		price: 1330,
		tools: ['decorative-tools'],
	},
	{
		name: 'КИСТЬ-ФЛЕЙЦ PREMIUM FLORENTINA, СЕРИЯ 3',
		img: './img/PREMIUMFlorentina3.png',
		price: 690,
		tools: ['decorative-tools'],
	},
	{
		name: 'МИНИ-КИСТЬ BOLDRINI VERNICI VEL-PEN',
		img: './img/BoldriniVerniciVEL-PEN.png',
		price: 650,
		tools: ['decorative-tools'],
	},
	{
		name: 'КЕЛЬМА ПЛАСТИКОВАЯ С КОНУСОМ',
		img: './img/kelmaKonus.png',
		price: 980,
		tools: ['decorative-tools'],
	},
	{
		name: 'VAIVEN ШПАТУЛЕТКА',
		img: './img/Vaiven.jpg',
		price: 560,
		tools: ['decorative-tools'],
	},
	{
		name: 'PENTRILO ВАЛИК ДЕКОРАТИВНЫЙ ГУБКА ПОРИСТАЯ',
		img: './img/PentriloOrange.jpg',
		price: 1140,
		tools: ['decorative-tools'],
	},
	{
		name: 'PENTRILO ШУБКА ДЕКОРАТИВНАЯ МИНИ ПОРОЛОНОВЫЙ',
		img: './img/Pentrilo.jpg',
		price: 310,
		tools: ['decorative-tools'],
	},
	{
		name: 'VAIVEN АПЛИКАТОР ДЛЯ ПРОДУКТОВ ДЛЯ ДЕРЕВА',
		img: './img/VaivenTree.jpg',
		price: 1080,
		tools: ['decorative-tools'],
	},
	{
		name: 'VAIVEN НАСАДКИ АПЛИКАТОР ДЛЯ ПРОДУКТОВ ДЛЯ ДЕРЕВА',
		img: './img/VaivenAddedTree.jpg',
		price: 840,
		tools: ['decorative-tools'],
	},
	{
		name: 'VAIVEN ГУБКА АБРАЗИВНАЯ ДЛЯ УГЛОВ МЕЛКОЗЕРНИСТАЯ',
		img: './img/VaivenAbrazivUglov.jpg',
		price: 210,
		tools: ['decorative-tools'],
	},
	{
		name: 'VAIVEN ГУБКА АБРАЗИВНАЯ МЕЛКОЗЕРНИСТАЯ',
		img: './img/VaivenAbrazimMin.jpg',
		price: 170,
		tools: ['decorative-tools'],
	},
	{
		name: 'VAIVEN ГУБКА СИНТЕТИЧЕСКАЯ',
		img: './img/VaivenSintetic.png',
		price: 200,
		tools: ['decorative-tools'],
	},
	{
		name: 'ГУБКА ПРЯМОУГОЛЬНАЯ, ЦЕЛЛЮЛОЗНАЯ',
		img: './img/Paper.png',
		price: 960,
		tools: ['decorative-tools'],
	},
	{
		name: 'КИСТЬ ШТРИХОВАЯ КРУГЛАЯ PRO, № 24',
		img: './img/kistShtrixPro.jpg',
		price: 500,
		tools: ['brushes'],
	},
	{
		name: 'КИСТЬ ШТРИХОВАЯ КРУГЛАЯ PRO, № 12 (Ø 9,5 ММ)',
		img: './img/kistCirclePro.jpg',
		price: 240,
		tools: ['brushes'],
	},
	{
		name: 'КИСТЬ РАДИАТОРНАЯ PRO 30 ММ',
		img: './img/kistPro30mm.jpg',
		price: 320,
		tools: ['brushes'],
	},
	{
		name: 'КИСТЬ-ФЛЕЙЦ ТРЕХКОМП. СЕРИЯ 71 VELOUREX',
		img: './img/71VELOUREX.jpg',
		price: 480,
		tools: ['brushes'],
	},
	{
		name: 'КИСТЬ-ФЛЕЙЦ КЛАССИК “CHEAP & CHIC” СМЕСЬ НАТУРАЛЬНОЙ ЩЕТИНЫ И СИНТЕТИЧЕСКИХ ВОЛОКОН',
		img: './img/CHEAP&CHIC.jpg',
		price: 190,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN КИСТЬ-ФЛЕЙЦ FOREST',
		img: './img/VaivenForest.jpg',
		price: 520,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN БЮГЕЛЬНАЯ СИСТЕМА, СТАНОК АЛЮМИНИЙ Ø 8ММ',
		img: './img/Vaiven8mm.jpg',
		price: 530,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN БЮГЕЛЬНАЯ СИСТЕМА, СТАНОК СТАЛЬ Ø 8ММ',
		img: './img/7cc649af421f7f3cb1445d38886209c7.jpg',
		price: 420,
		tools: ['brushes'],
	},
	{
		name: 'AIVEN БЮГЕЛЬНАЯ СИСТЕМА Ø 8ММ, ШУБКА ДЛИННЫЙ ВОРС SUPER',
		img: './img/VaivenØ8mmSuper.jpg',
		price: 830,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN БЮГЕЛЬНАЯ СИСТЕМА Ø 8ММ, ШУБКА MICROFIBER SILK',
		img: './img/VaivenMicrofiberSilk.png',
		price: 690,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN БЮГЕЛЬНАЯ СИСТЕМА Ø 8ММ, ШУБКА CUBRIX REVOLUTION',
		img: './img/VaivenCubrixRevolution.jpg',
		price: 770,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN БЮГЕЛЬНАЯ СИСТЕМА Ø 8ММ, ШУБКА SENSITIVE',
		img: './img/VaivenSensitive.png',
		price: 730,
		tools: ['brushes'],
	},
	{
		name: 'ВАЛИК-МИНИ ANTIDROP, ДЛЯ БЮГЕЛЯ Ø 6ММ (2 ШТ.) 100 ММ',
		img: './img/Antidrop2.jpeg',
		price: 220,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN БЮГЕЛЬНАЯ СИСТЕМА Ø 8ММ, ШУБКА ANTIDROP EXQUISIT',
		img: './img/VaivenAntidropExquisit.png',
		price: 730,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN CAGE Ø 50, ШУБКА CUBRIX REVOLUTION',
		img: './img/VaivenCageCubrixRevolution.jpg',
		price: 520,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN CAGE Ø 50, ШУБКА МИКРОФИБРА EXCELLENCE',
		img: './img/VAIVENCAGEØ50EXCELLENCE.jpg',
		price: 450,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN СТАНОК CAGE Ø 50, РУЧКА ДВУХКОМПОНЕНТНАЯ',
		img: './img/VaivenCage2Components.jpg',
		price: 560,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN СТАНОК CAGE Ø 50, ШУБКА BRIGHT ДЛЯ ПОЛА',
		img: './img/VaivenCAGEØ50Bright.jpg',
		price: 480,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN СТАНОК МИНИ/МИДИ Ø 6 ММ',
		img: './img/VaivenMINIØ6мм.jpg',
		price: 160,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN СТАНОК МИНИ ВАЛИКА 11 СМ, УДЛИНЁННЫЙ',
		img: './img/Vaiven11.jpg',
		price: 870,
		tools: ['brushes'],
	},
	{
		name: 'ВАЛИК-МИДИ ШУБКА "BICOLOR" Ø 30, 11 СМ',
		img: './img/Bicolorø30.jpg',
		price: 290,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN МИДИ Ø 30, ШУБКА 11 СМ MICROFIBER SILK',
		img: './img/Vaiven2MicrofiberSilk.jpg',
		price: 260,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN МИДИ Ø 30, ШУБКА 11 СМ SENSITIVE',
		img: './img/VaivenØ3011Sensitive.jpg',
		price: 280,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN ПАК 2 ШУБКИ МИНИ ПОРОЛОНОВЫЙ FINEFOAM',
		img: './img/VaivenFinefoam.jpg',
		price: 190,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN ПАК 2 ШУБКИ МИНИ MICROFIBER SILK',
		img: './img/Vaiven2MicrofiberSilk.jpg',
		price: 220,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN ПАК 2 ШУБКИ МИНИ SENSITIVE',
		img: './img/Vaiven2Sensitive.jpg',
		price: 180,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN МИНИ ВАЛИК EASYLINES',
		img: './img/VaivenEasyLines.png',
		price: 1860,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN EASYLINES ШУБКА МИКРОФИБРА EXCELLENCE',
		img: './img/VaivenEasyLinesExcellence.jpg',
		price: 280,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN EASYLINES ШУБКА CUBRIX',
		img: './img/VaivenEasyLinesCubrix.jpg',
		price: 300,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN МИНИ ВАЛИК EASYBARS',
		img: './img/VaivenEasyBars.jpg',
		price: 1090,
		tools: ['brushes'],
	},
	{
		name: 'VAIVEN УДЛИНИТЕЛЬ АЛЮМИНИЕВЫЙ',
		img: './img/vaivelenYDLIN.jpg',
		price: 1450,
		tools: ['brushes'],
	},
	{
		name: 'ЩЕТКА ОБОЙНАЯ. ПРОФЕССИОНАЛЬНЫЙ ФОРМАТ',
		img: './img/ke.png',
		price: 710,
		tools: ['protected'],
	},
	{
		name: 'РУЧНОЙ ПЛАСТИКОВЫЙ МИКСЕР',
		img: './img/fy.jpg',
		price: 160,
		tools: ['protected'],
	},
	{
		name: 'VAIVEN ЛОТОК ПЛАСТИКОВЫЙ 11 СМ',
		img: './img/lotok11.png',
		price: 150,
		tools: ['protected'],
	},
	{
		name: 'VAIVEN ЛОТОК ПЛАСТИКОВЫЙ 25 СМ',
		img: './img/lotok25.jpg',
		price: 610,
		tools: ['protected'],
	},
	{
		name: 'VAIVEN ГУБКА АБРАЗИВНАЯ ДЛЯ УГЛОВ МЕЛКОЗЕРНИСТАЯ',
		img: './img/VaivenAbrazivUglov.jpg',
		price: 210,
		tools: ['protected'],
	},
	{
		name: 'VAIVEN ГУБКА АБРАЗИВНАЯ МЕЛКОЗЕРНИСТАЯ',
		img: './img/VaivenAbrazimMin.jpg',
		price: 170,
		tools: ['protected'],
	},
	{
		name: 'VAIVEN БУМАГА С МАЛЯРНОЙ ЛЕНТОЙ',
		img: './img/VaivenPaper.jpg',
		price: 220,
		tools: ['protected'],
	},
	{
		name: 'VAIVEN ПЛЕНКА С МАЛЯРНОЙ ЛЕНТОЙ2',
		img: './img/VaivenStrach.jpg',
		price: 1080,
		tools: ['protected'],
	},
	{
		name: 'VAIVEN ТОНКАЯ ЗАЩИТНАЯ ПЛЕНКА',
		img: './img/VaivenMicroPlastico.jpg',
		price: 170,
		tools: ['protected'],
	},
	{
		name: 'VAIVEN ПЛОТНАЯ ЗАЩИТНАЯ ПЛЁНКА',
		img: './img/VaivenMacroPlastico.jpg',
		price: 840,
		tools: ['protected'],
	},
];

const allCatalog = document.querySelector('.all-catalog');
const filters = document.querySelectorAll('.filter');
const productsWrap = document.querySelector('.products');
const productTemplate = document.querySelector('#product-template').content;
const headerFilters = document.querySelectorAll("[data-name='spoiler-title']");

function renderProducts(products) {
	productsWrap.textContent = '';
	products.forEach(el => {
		const product = productTemplate.querySelector('div');
		const clonedProduct = product.cloneNode(true);
		clonedProduct.children[0].alt = el.name;
		clonedProduct.children[0].src = el.img;
		clonedProduct.children[1].children[0].textContent = el.name;
		clonedProduct.children[1].children[1].querySelector('.price').textContent = el.price;
		productsWrap.appendChild(clonedProduct);
	});
}
renderProducts(products);
pagination();
allCatalog.addEventListener('click', () => {
	renderProducts(products);
});

function headerClick() {
	this.nextElementSibling.classList.toggle('spoiler-body');
	const arrow = this.querySelectorAll('.arrow');
	arrow[0].classList.toggle('rotate');
}

headerFilters.forEach(function (item) {
	item.addEventListener('click', headerClick);
});

$("a[href='#to_nav']").on('click', function (event) {
	event.preventDefault();
	$([document.documentElement, document.body]).animate(
		{
			scrollTop: $('.page-template-default').offset().top,
		},
		500
	);
});

function filter(filter, value) {
	let filteredProducts = products;
	if (value && value !== 'all') {
		filteredProducts = products.filter(item => {
			return item[filter]?.includes(value);
		});
	}
	if (value === 'all') {
		filteredProducts = products.filter(item => {
			return item.hasOwnProperty(filter);
		});
	}
	renderProducts(filteredProducts);
	pagination();
}

filters.forEach(el => {
	el.addEventListener('click', () => {
		filters.forEach(el => el.classList.remove('selected'));
		el.classList.add('selected');
		const currentFilter = el.dataset.filter;
		const currentFilterValue = el.dataset.value;
		filter(currentFilter, currentFilterValue, el);
	});
});

function pagination() {
	var items = $('.list-wrapper .list-item');
	var numItems = items.length;
	var perPage = 15;

	items.slice(perPage).hide();
	$('#pagination-container').pagination({
		items: numItems,
		itemsOnPage: perPage,
		prevText: '&laquo;',
		nextText: '&raquo;',
		onPageClick: function (pageNumber) {
			var showFrom = perPage * (pageNumber - 1);
			var showTo = showFrom + perPage;
			items.hide().slice(showFrom, showTo).show();
		},
	});
}
