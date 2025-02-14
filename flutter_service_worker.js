'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b1b2930c4d74d6c3345b7452b7eb8ff5",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "b62fdffad02a8d7125ef378aafb9a12b",
"/": "b62fdffad02a8d7125ef378aafb9a12b",
"main.dart.js": "3d51bc2f603fc810e9ef2d7183659a9c",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "e4e1e7abef71bc3049aacb49d3024c05",
".git/objects/61/5eda93b09bb7493b7484f817ceb3b42b0e2c76": "2983ebbf17aec3c0ef92e8e7cd9702a8",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/0c/1bb13786514862f0a3c54d404606662209f74b": "be58fa473f07fc05ed545d9514058e92",
".git/objects/9b/7a63212f34103812fb89be49da566b5fc7748e": "f5c242e3d78a02f477e1bcf221dc480d",
".git/objects/9e/3fbc5a63e50570b33b3305de594b054f867458": "dd9d482aae8be84351c37a88afb0c532",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/69/e6f78fa1a100b2f27f40cbc0cafacbfc1b3dd6": "83e1740af38a55b95e02ddc2c0f33173",
".git/objects/56/457d06a43aedc306a2aff1861230a7ddbb736e": "1c21c74142f91fd42901b6e8a14cb111",
".git/objects/56/b2a161b6d8b0e07240b2fa8d8a5fd6febadc7d": "1bff363550df4baf63573eec68c23429",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/aa3023833c383e2fe5099a08bc1bf5669128bd": "c2bd0f001873c02ef1f939d4c31b4675",
".git/objects/0e/1ca20863da14d0d0c02e7b04c204a738ae510d": "30277ce8084ebbac8ba8edbd43b4cdf7",
".git/objects/0e/cbc8cfbd9c5d6f181dae6c8b174ed21f959e98": "75f4329574be2bde619196d5c9094dcc",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/d9/23d4aa4c3542dd60f2aa6ad495811b5d00d09a": "17b52f445b96734e4dda3e652ae29ea6",
".git/objects/ad/fc04b6c875952a0c5a720922efe507b2c16da7": "bc63b0f9d9924106b357b34ee20029cf",
".git/objects/ad/179be64e508052776de8a086547f0cee0b94e3": "639e931bd6d607c689e6b0547d70d501",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d0/9871fbff22a87d3b1b0be8e208f293cbc5713f": "343824c7f0996c2a8a3e3ac7c8fd9650",
".git/objects/be/179d55d35ca425fb91dcdc8f89aea3022c5f36": "ac8eb365f17ee18dd8b1060af310b04e",
".git/objects/b4/a78117c99f5d88d1808149e9bae69d753a167c": "681ff64dd44be34dc478a28fb691d48e",
".git/objects/d1/7b9f36a59c9164e9129c0095ea45b412b1844e": "53dbc6cf733812b96a2270c501cec540",
".git/objects/d6/d35efb6550104eeda8a58ca47ed1ed445506ce": "cf76f32c28f97278094b32d653133f7b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/ed9f6aafdb1a061674bd5bdca5faf34a88fca2": "5fb4c0ca6b1251125ef9c0068fbc1fb5",
".git/objects/ab/8f755d6e410bf6be9e67bc2048f5633e03ae69": "eb91bb3ff5b2dec6d1945fad3e494c82",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/e2/4754cc0c19662c45b8ead0e2ce41d344906f6b": "078d98dc2c4cb97ef0fb21ecf949f1c8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/4c8eaa5dab4c92dbe98e163232e83138cff191": "4afcb2ef74097225dcef52e1d5ad2ee2",
".git/objects/c0/7380c08a82471283f6ea0d9b0c91500a50ecb4": "6f5d9d3fe298eb1bb7ae9f47ca780f4e",
".git/objects/ee/50248b5796fb3ea23c11be99ab8d9ab183880d": "e742d5565229be53d556cd52561fb9f0",
".git/objects/ee/eb9b26d52eec369d587eb8c63d50222860ed80": "7a115033629a16146d281a98fa824f2a",
".git/objects/fc/0ecc95447ec72447cba4ba5ab3b8c18003d54e": "cc1900efc3af32a5a54f14cd7990ce29",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/c8/09f632e8997e032d42a965a243b9b37ca2a04d": "0327c737a2d51e96dbff6a2f752a72a1",
".git/objects/fb/b8c0747e237dc9cff0e3adc085821ef7a24348": "0ee5c2742d969176cd3aabf453055964",
".git/objects/ed/ae57579d6ecfd4c3ccc7580adca078f4e0f346": "166234a4858e6790f1327df75103af1d",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/ec/8ecd6d0a52d50fbdd321bd21d111bc1b756fbb": "2ce58ce6caff09f368ead8dbd1f85153",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/18ffcfb20db4b09fee8f51b64659ea9529739e": "108af1004b53afa8367b7e8aef0e7c42",
".git/objects/18/3b7b0b72849552de7784367ad8712ebdd7ec1c": "6bf3a22f970d23b06795a51a59dacc1b",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/11/9166614ee3801a2f368eae623953de722f4ae9": "393cc852369db6a7b0b9194770201fbd",
".git/objects/42/a9e501740530a5fff6893f31c9cc8ae459f775": "26c4d0a6c9f8e0e704421a0a44045972",
".git/objects/89/6e17047744a6cfd58d7364e102e9b58ccec459": "010f91cfd74fbbf74de019e091edfdb3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/8d170cebaca78970bd778404efa774c45411b8": "9a20356234cd8063d7c7cad9bbef167a",
".git/objects/74/f3c6ec46cb1af94329452f48ea205337ba8772": "c41776a78509eaf577938e60d48c8d41",
".git/objects/8f/13c346110a6a2f83a8399760e4c7e5f5323a42": "015c150c1c484a81b7d18274728efbdf",
".git/objects/8f/92f44b629684d94b0ea6e377fc2aa046f83828": "12d94670fcab2faa2584c3baaf7783bc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/9e8dcb876bbefd441dbe3d29bcb3015991016c": "27468ce4b05730a111b3e8d25d0beb17",
".git/objects/19/12bceb98078904f9cc82b57e6de51601c04d38": "3d1931d999709d76a184cd7c75755f79",
".git/objects/86/1dad7200732ecbb3af8c282249d886cd72f4c4": "c5351d43aeab3696f3412d79e2636f87",
".git/objects/2f/dd89f6c40981ae0b380dfa74b2ec67fce59fed": "a4c978e734eefd86dcf3baa35f1ef40f",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/fc1e21c3b5ff26d9d38a423e125112b459fd8e": "ad7347fde32af257f37b7a1275f62b26",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/09/233dd43455b705b19968ce3f1a5569dbeed7e2": "80053255765c47225dcb9c22a505e5bf",
".git/objects/09/011ce9c8e5f12b5ee80fcf485838dbba9ee27d": "8b06de4a2d959ba78f034f02a4910e1b",
".git/objects/65/81751b06da9275cd086859ea5690487e8dcb4f": "6c4ebe906340daf0b132ab7179ec8f81",
".git/objects/62/c1f4367aee0720f590abc7353d6d78ef6fc4a2": "d965bf57917dce9a5e833a3ec096c861",
".git/objects/96/781a4ffc92f9f40ddbdd3b922acb880839db51": "b66a581f9e429146e387e03953965494",
".git/objects/96/80f2563647537077b83880897b31533f96a3d4": "c55148e3ecc396b56e541b313239e45c",
".git/objects/54/76b9ceb1f7435d34a02b659be57132994deeca": "d7cedb04c072c8ba9bca11e2d49ac7e8",
".git/objects/54/f6577a9c56153eccfda1fe3436f139b3b5994e": "113732aaf31530e03adf0fdcb65928d2",
".git/objects/98/95ac82c06d0de49d26c6e6ce5ddd4175edd789": "8448e761cbb95a5464e1f0fbf5e5ae18",
".git/objects/53/2a7cbf01bb58880a7610e966d485ec25d97d7a": "ef5c5ee0cfa2bbcffe82a0c880dfa590",
".git/objects/01/38d242ae4b288b18d6cb8a81b1a5d0da0dd82b": "a1f32448ec9127845f18c089a4f46a9d",
".git/objects/06/0b4e1c585aa5508efd11948a1681bd6d96fbdb": "33e5de96d1b5d0478317b319b09a5109",
".git/objects/6c/827b5dcbfe55231bfdb51df7c641c663082f55": "eb9098297697eb13e32041e58d1d8bb7",
".git/objects/55/3eb9acdbd4190914b52efb9d38dde203051927": "371a0e9c6959ad814bae17f6e323b030",
".git/objects/90/5d6a8b9d866b431499a806abde12d7a91152bd": "bdcbdc15d9e5ed10634fa1e7c2d5f633",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b6/392db224d8562ebad9fd75cbd687b988fac3e5": "102f4fa9f59e2fc9d38a04b5bf8666b1",
".git/objects/d2/a0293d9fa4b87d2c00e86b66ff0985d51204fe": "46512e337e46c42a44fa87238915b0e4",
".git/objects/af/79b1183f530ea24bc3d18c9c9898ba6f885b13": "018e59af6ab12eb3cd7e4c688fb419f3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/85ee354fb41248f4b5212b3fe2aa8e790ea7e1": "6ba4101a3d3b7d76939ac8f13e941ba8",
".git/objects/de/47566115a7260d07d525cd0d500066282d5ed4": "093c928490b7968e1a940044e2675fa5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/575e7476ef9cca3bffa935572e19a7c5006b0e": "219c9cf664c0cbe188b27476cd5fe3a7",
".git/objects/ea/a6ef336fad9cd8026f6569e72ff295165db916": "4f3066a78dcdcf8468e2bb5d13420f84",
".git/objects/e6/1b0332da39031f453fc7150434e1f982b2ab65": "fd301d0291d595c7b86c2c1672df04a3",
".git/objects/f9/14ffe86e09b177f39997a31699348ec50ca818": "f9dc8ff37359906c2a2317b0d0982a11",
".git/objects/f7/e313c225d99aae8bb21fbb1144c608055f5796": "ab756a32153cb8690fa57d116235c1f0",
".git/objects/fa/fcb1a50a75d3ed8348c2c52b5fdc22a561fb12": "c0eb43fc86d9725146a00533b8058ed9",
".git/objects/ff/a826bcc266263f457eae552badad2003f731ed": "75c3d8760dea3c4dd1b29ec5e0b7a412",
".git/objects/f1/c435a26f57fc379830d1253f18392270db3c05": "32dcb4d46d2220aed2c3d0402032e680",
".git/objects/f8/6fe324753305b0b6eac0cc0a9c8f29f9110237": "88ce5bd703ddb55f3f9eb85fb2c60eb7",
".git/objects/f8/a76347a226818acfed2ddf8b3a7993e0fe53fa": "13f85c51a6eaa25d199b14e72f4c9d75",
".git/objects/46/d58a9dbb0e2bee17dde773dfb85649b815b6c8": "4ad422b0814d5319b32e1b93494b949a",
".git/objects/83/9646f79b8ed3854d5e0c58ea9343cd704de7dd": "c65ef0bce1a71e4d5dd1473a3dabdbc5",
".git/objects/77/9f327be225aedd8f5e284166c4957d5eb2c221": "1f05e9f4e9224dcb523f01050ab818b8",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/85/3e3548fc8301edc31b500cf4e8ccf63585de8f": "41e3c677488b14ec07f24f252525f3d5",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/49/9d73257da082d9f3db71aeff72a0c9abe4c942": "c62f416c91d7135975500ac7172a6217",
".git/objects/49/ed6597ec1367ce56db9ee2e3080cd937dc8c65": "724d0778cd99c36a9c2f170d6cc83acb",
".git/objects/2e/2bdf75c4cb006c66d6ad83e2841d5f76a90c03": "8f2d2dde40a7447df31b4752a7015183",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/13/2ee07de01308e791163c3ac095cbf5193fb65c": "85cd285f384ad4a3180fa07578cf9b11",
".git/objects/14/5dcff4f58cc2740b974cfd62fc39f3bec243c4": "f71c4e27da3b2c9324eef5ea98080b41",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "33faee0e9efbfa25ef615012f009910a",
".git/logs/refs/heads/main": "c1017c5d3d212875dd67415e67e9d105",
".git/logs/refs/remotes/origin/main": "72b05fa7d83375ba94d5b2a495391a2b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b862e22198c5e76d71488532a1a16029",
".git/refs/remotes/origin/main": "b862e22198c5e76d71488532a1a16029",
".git/index": "2b4e32305d6d4063825f99209cef1af6",
".git/COMMIT_EDITMSG": "99b2a7e9de283f774d3fc0c10b8db6ef",
"assets/AssetManifest.json": "f980db28ac6aad73e62ede948cdff578",
"assets/NOTICES": "3c9259c35cfba0936a300b63fdb42256",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "390463ce2ad3b7e32862bfe9e5f00aa3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9d4cfa1d1aa29faeb5a5c2455991911d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6d539b5c1f7b23d816c6a8c6d3955cda",
"assets/fonts/MaterialIcons-Regular.otf": "7e8d2f3f03b55fdff7a207bf867a7261",
"assets/assets/images/MIRI.png": "74b13d7eead828720d0f057cec550f96",
"assets/assets/images/weather_image.png": "bd42618dc551354986e9c47de886db2d",
"assets/assets/images/regrip_erp.png": "a1400bf25c9a9ee54ad7d3377dc8526d",
"assets/assets/images/password_generator.png": "1627f739835b947008a313adf7767edd",
"assets/assets/images/drishtee.png": "71dc1adcbfd2e996717d765b233c1143",
"assets/assets/images/todo_image.png": "9234bdad2c075a745f3657159167538c",
"assets/assets/images/img.png": "c51086949fbe963c2861aa19c964b38e",
"assets/assets/images/reel_image.png": "f4920d4bf59e399e99d55cbc8ae8c699",
"assets/assets/images/regrip.png": "17daf665129956598590a0f1c0465114",
"assets/assets/images/covid19_image.png": "0d321429d347821b48ba6f36f9e3c1c4",
"assets/assets/images/bg.jpg": "6866668cedca62441ba295e98b1ad408",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/flutter.svg": "6cd173d28a8329986fa3bcaa44ace88d",
"assets/assets/icons/kotlin.svg": "4f40a87ca280233ad2c62e4940ab60db",
"assets/assets/icons/phone_icon.svg": "20fb46023e06b410ba7a9fd4cfdc241a",
"assets/assets/icons/email_icon.svg": "ccf9330ac3ef5f19c47b7af607a7479e",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/react.svg": "f0340143227cc3546b667fd9c4d1e1d8",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
