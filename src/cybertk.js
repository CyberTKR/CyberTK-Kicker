const LineConnect = require('./connect');
const LINE = require('./kicker.js');
console.info("\n\
╔══╗\n\
║██║\n\
║(O)║♫ ♪ ♫ ♪\n\
╚══╝\n\
▄ █ ▄ █ ▄ ▄ █ ▄ █ ▄ █\n\
Min- - - - - - - - - - - -●Max\n\
\n\
✄▒█▀▀█ ▒█░░▒█ ▒█▀▀█ ▒█▀▀▀ ▒█▀▀█ ▀▀█▀▀ ▒█░▄▀ \n\
✄▒█░░░ ▒█▄▄▄█ ▒█▀▀▄ ▒█▀▀▀ ▒█▄▄▀ ░▒█░░ ▒█▀▄░ \n\
✄▒█▄▄█ ░░▒█░░ ▒█▄▄█ ▒█▄▄▄ ▒█░▒█ ░▒█░░ ▒█░▒█ \n\
\n\
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n\
▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░▒▒▒▒░░░▒▒▒▒░░░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒░▒▒▒▒▒▒░░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒░░░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒░░░░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒░░░░░░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░▒░░░░░░░░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒░▒▒▒░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒░░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒░░░░░░▓▓  \n\
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n\
_______▒__________▒▒▒▒▒▒▒▒▒▒▒▒▒▒                       \n\
______▒_______________▒▒▒▒▒▒▒▒                            \n\
_____▒________________▒▒▒▒▒▒▒▒                            \n\
____▒___________▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                    \n\
___▒                                                         \n\
__▒______▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ \n\
_▒______▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓   \n\
▒▒▒▒___▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓   \n\
▒▒▒▒__▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓    \n\
▒▒▒__▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓     \n\
▒▒\n");
console.info("\n\
=========================================\n\
BotName: LINE CyberTK: ULTRAKİCKER\n\
Version: 7.5.8 VERSION\n\
Thanks to @CyberTK \n\
=========================================\n\
\n\
İnsanın istediği ve elinde olmadığı şey her\n\
Zaman Çok tatlı gelir.Önem olan O beklediğin\n\
Şey Eline Geçtiğinde Onu nasıl kullandığındır.\n\
Ve Son Olarak ..\n\
Bazı Şeyler İçin kimseye boyun Eğmeyin İster Dost Ol\n\
İster Düşman Dostunun Sırf Kendisi Üstün Olsun Diye\n\
Başklarının botunu bile Sizden Saklayanlara inat ben\n\
Yapma İmkanı veriyorum\n\
Hayat Burdan İbaret Değil..!\n\
\n\
             Hayat Ebedi Değil Ölüm Var\n\
\n\
Yapmanın sadece 3 4 saatimi aldığı\n\
şu basit şey için Cahilliği es geçtim\n\
Tek amacı Şurda Barınmak Olan\n\
Ve bunun İçin Kendini satan Kişiliğini\n\
Satan En Önemlisi Dostunu satan\n\
Acizce Annesini feda Eden soysuz \n\
Bireyler sizede selam Olsun ..!\n\
\n\
=========================================");

const auth = {
	authToken: 'Eurpzj6cJppICKt3IML2.Q7LN6Ix1FE31xkWvdH5c8G.v3OFBvPDDmQjAwcU5o807rTUdEjrP4ihIXz+1/FKGjk=',
	certificate: '2be4d787a69e863c43b2634b44f450d4e17d4ce6604a3acab6883cb09e7af071',
  email: '',
	password: ''
}

//let client =  new LineConnect();
let client =  new LineConnect(auth);

client.startx().then(async (res) => {
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
		LINE.aLike() //AutoLike (CAUSE LAG)
	}
});
