const LineConnect = require('./giris');
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
İster Düşman Dostu Sırf Kendisinden Üstün Olmasın Diye\n\
Başklarının botunu bile Sizden Saklayanlara inat ben\n\
Yapma İmkanı veriyorum\n\
Hayat Burdan İbaret Değil..!\n\
\n\
=========================================");

let client =  new LineConnect();

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
