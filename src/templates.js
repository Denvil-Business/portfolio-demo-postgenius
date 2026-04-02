const templates = {
  fr: {
    professional: {
      court: [
        `{SUJET} — un sujet que trop peu de professionnels prennent au sérieux.\n\nAprès 8 ans dans le secteur, voici ce que j'ai appris :\n\nLa clé, c'est la constance. Pas le talent. Pas le réseau. La constance.\n\nCeux qui réussissent ne sont pas les plus brillants. Ce sont ceux qui se présentent chaque jour, même quand personne ne regarde.`,
        `J'ai passé 6 mois à étudier {SUJET}.\n\nVoici la leçon n°1 que personne ne vous dit :\n\nLe marché ne récompense pas la perfection. Il récompense l'exécution rapide et l'itération.\n\nArrêtez de planifier. Commencez à livrer.`,
        `{SUJET} va transformer votre façon de travailler.\n\nPourquoi ? Parce que les entreprises qui l'ignorent aujourd'hui seront dépassées demain.\n\n3 actions concrètes à mettre en place dès cette semaine :\n→ Analysez vos process actuels\n→ Identifiez les points de friction\n→ Testez une solution, même imparfaite`,
        `Parlons de {SUJET}.\n\nEn 2025, ignorer ce sujet n'est plus une option. Les chiffres parlent d'eux-mêmes :\n\n→ 73% des leaders l'ont déjà intégré\n→ +40% de productivité en moyenne\n→ ROI positif en moins de 6 mois\n\nLa vraie question n'est pas "pourquoi ?" mais "pourquoi pas encore ?"`,
      ],
      moyen: [
        `J'ai fait une erreur pendant 3 ans sur {SUJET}.\n\nJe pensais que le plus important, c'était la stratégie. J'avais tort.\n\nLe plus important, c'est l'exécution.\n\nVoici ce que j'aurais aimé savoir plus tôt :\n\n1. Commencez petit. Vraiment petit. Un seul objectif par trimestre.\n2. Mesurez tout. Ce qui ne se mesure pas ne s'améliore pas.\n3. Entourez-vous de gens qui vous challengent, pas de gens qui vous approuvent.\n4. Acceptez l'échec comme un feedback, pas comme une fin.\n5. Partagez vos apprentissages. L'enseignement est le meilleur accélérateur.\n\nLe secret des experts en {SUJET} ? Ils ne sont pas plus intelligents. Ils ont juste échoué plus vite et appris plus vite.\n\nAujourd'hui, je suis convaincu d'une chose : la compétence sans l'action ne vaut rien. Et l'action sans la réflexion est dangereuse.\n\nTrouvez l'équilibre. C'est là que la magie opère.`,
        `Tout le monde parle de {SUJET}. Peu de gens le comprennent vraiment.\n\nVoici ma grille de lecture après avoir accompagné +50 entreprises :\n\nNiveau 1 — La prise de conscience\nVous savez que {SUJET} existe. Vous lisez des articles. Vous assistez à des conférences. Mais rien ne change dans votre quotidien.\n\nNiveau 2 — L'expérimentation\nVous commencez à tester. Des petits projets. Des POC. Certains fonctionnent, d'autres non. C'est normal.\n\nNiveau 3 — L'intégration\nC'est là que tout change. {SUJET} n'est plus un projet à part. C'est dans votre ADN. Chaque décision, chaque process en tient compte.\n\nLa plupart des organisations sont bloquées entre le niveau 1 et 2.\n\nLa différence entre ceux qui passent au niveau 3 ? Un leadership fort et une culture qui accepte l'erreur.`,
      ],
      long: [
        `Il y a 5 ans, je ne connaissais rien à {SUJET}.\n\nAujourd'hui, c'est devenu le pilier de ma carrière. Voici tout ce que j'ai appris — sans filtre.\n\n---\n\nChapitre 1 : Le déclic\n\nTout a commencé par une conversation avec un mentor. Il m'a posé une question simple : "Dans 5 ans, est-ce que ta compétence actuelle aura encore de la valeur ?"\n\nJe n'ai pas su répondre. Et c'est cette incertitude qui m'a poussé à explorer {SUJET}.\n\nChapitre 2 : Les premiers pas\n\nJ'ai commencé par lire. Beaucoup. Puis j'ai testé. J'ai échoué. J'ai recommencé.\n\nLe piège ? Vouloir tout maîtriser avant de se lancer. La réalité, c'est qu'on apprend 10x plus vite en faisant qu'en étudiant.\n\nChapitre 3 : Le plateau\n\nAprès 18 mois, j'ai atteint un plateau. Les progrès étaient lents. La motivation baissait. C'est le moment où 90% des gens abandonnent.\n\nMa solution ? Trouver une communauté. Des gens qui partagent le même chemin. L'énergie collective est sous-estimée.\n\nChapitre 4 : L'accélération\n\nEn enseignant {SUJET} à d'autres, j'ai consolidé mes propres connaissances. Et les opportunités ont commencé à affluer.\n\nLeçon clé : partager votre expertise vous positionne comme référence. Pas besoin d'être le meilleur. Il suffit d'être généreux avec vos connaissances.\n\n---\n\nSi vous commencez votre parcours sur {SUJET} aujourd'hui, voici mes 5 conseils :\n\n→ Commencez avant d'être prêt\n→ Documentez votre progression\n→ Trouvez un mentor ou une communauté\n→ Enseignez ce que vous apprenez\n→ Soyez patient — les résultats exponentiels prennent du temps`,
      ],
    },
    inspiring: {
      court: [
        `On m'a dit que {SUJET} était impossible.\n\nAlors j'ai arrêté d'écouter.\n\nJ'ai arrêté de demander la permission.\n\nJ'ai commencé à agir.\n\n6 mois plus tard, les résultats parlaient d'eux-mêmes.\n\nLa leçon ? Les seules limites qui existent sont celles que vous acceptez.`,
        `Personne ne croyait en mon projet sur {SUJET}.\n\n"C'est trop ambitieux."\n"Le marché est saturé."\n"Tu n'as pas l'expérience."\n\nAujourd'hui, ces mêmes personnes me demandent des conseils.\n\nMorale de l'histoire : votre entourage reflète votre passé. Votre ambition dessine votre futur.`,
        `Le jour où j'ai compris {SUJET}, tout a changé.\n\nPas parce que j'ai trouvé une formule magique.\n\nMais parce que j'ai accepté une vérité simple :\n\nLe succès n'est pas un sprint. C'est une série de petites victoires, jour après jour, même quand personne n'applaudit.`,
        `{SUJET} m'a appris quelque chose que l'école ne m'a jamais enseigné :\n\nL'échec n'est pas le contraire du succès. C'est le chemin vers le succès.\n\nChaque erreur est une leçon. Chaque obstacle est un tremplin.\n\nLa seule vraie défaite, c'est d'arrêter d'essayer.`,
      ],
      moyen: [
        `Il y a 2 ans, j'ai tout quitté pour me lancer dans {SUJET}.\n\nMon compte en banque : presque vide.\nMon réseau : quasi inexistant.\nMon expérience : limitée.\n\nMais j'avais une chose que personne ne pouvait m'enlever : la conviction que je pouvais y arriver.\n\nLes 6 premiers mois ont été les plus durs de ma vie :\n- Des nuits blanches à douter\n- Des portes qui se ferment une par une\n- L'impression de crier dans le vide\n\nPuis un jour, tout a basculé. Un premier client. Puis deux. Puis dix.\n\nPas parce que j'étais le meilleur.\nMais parce que j'étais encore là quand les autres avaient abandonné.\n\nSi vous êtes dans cette phase de doute en ce moment, lisez ceci :\n\nLe succès arrive souvent juste après le moment où vous vouliez abandonner.\n\nTenez bon. Votre moment viendra.`,
        `{SUJET} — la compétence qui a changé ma vie.\n\nEn janvier 2023, j'étais perdu. Pas de vision claire. Pas de direction.\n\nPuis j'ai pris une décision radicale : investir 100% de mon énergie sur un seul sujet.\n\nCe sujet, c'était {SUJET}.\n\nLes résultats ne sont pas venus tout de suite. Pendant 4 mois, j'avais l'impression de faire du surplace.\n\nMais quelque chose d'invisible se construisait. Des fondations solides.\n\nEt quand les résultats sont arrivés, ils sont arrivés en avalanche :\n→ Des opportunités inattendues\n→ Des rencontres transformatrices\n→ Une confiance retrouvée\n\nLe secret ? Focus, patience, et une obstination presque déraisonnable.\n\nQuel est LE sujet sur lequel vous devriez tout miser cette année ?`,
      ],
      long: [
        `Cette histoire va peut-être changer votre vision de {SUJET}.\n\nEn 2019, j'ai rencontré Sarah, une entrepreneuse qui venait de perdre son entreprise.\n\nElle avait tout investi : ses économies, son temps, sa santé. Et tout s'est effondré en 3 mois.\n\nQuand je l'ai rencontrée, elle était au plus bas. "C'est fini", m'a-t-elle dit.\n\nJe lui ai répondu : "Non. C'est le début."\n\n---\n\nElle a recommencé. Pas le même projet. Un nouveau. Centré sur {SUJET}.\n\nCette fois, elle a fait les choses différemment :\n\n1. Elle a écouté le marché au lieu de suivre son ego\n2. Elle a commencé en freelance pour valider son idée\n3. Elle s'est entourée de mentors expérimentés\n4. Elle a avancé étape par étape, sans brûler les étapes\n\n---\n\n18 mois plus tard, son entreprise générait 400K€ de CA.\n\nMais ce n'est pas le chiffre le plus important.\n\nLe plus important, c'est ce qu'elle m'a dit :\n\n"L'échec de ma première boîte n'était pas une fin. C'était ma formation la plus précieuse."\n\n---\n\nSi vous traversez une période difficile :\n\n→ N'ayez pas honte d'échouer. Les meilleurs échouent le plus.\n→ Prenez le temps de comprendre vos erreurs\n→ Entourez-vous des bonnes personnes\n→ Recommencez avec humilité\n→ Faites confiance au processus\n\nL'échec n'est pas votre ennemi. L'inaction, oui.\n\nRebondissez. Toujours.`,
      ],
    },
    storytelling: {
      court: [
        `Mardi dernier, 9h du matin.\n\nJe suis en réunion client. Le sujet : {SUJET}.\n\nLe directeur me regarde et dit : "Personne n'a jamais réussi à nous convaincre sur ce point."\n\nJ'ai souri.\n\nPas parce que j'avais une solution miracle. Mais parce que j'avais quelque chose de plus puissant : des données.\n\n45 minutes plus tard, on signait.`,
        `"Tu fais une erreur."\n\nC'est ce que mon associé m'a dit quand j'ai décidé de me concentrer sur {SUJET}.\n\nC'était en 2022.\n\n2023 : +200% de croissance.\n2024 : leader sur notre segment.\n\nParfois, les meilleures décisions ressemblent à des erreurs au début.`,
        `Vendredi 18h. Mon téléphone sonne.\n\nC'est un ancien client : "Tu avais raison sur {SUJET}. On aurait dû t'écouter il y a 2 ans."\n\nCe message m'a rappelé une leçon essentielle :\n\nAvoir raison trop tôt, c'est presque comme avoir tort. Le timing est tout.`,
        `L'ascenseur. 30 secondes. Un PDG du CAC 40.\n\nIl me demande : "C'est quoi {SUJET} en une phrase ?"\n\nMa réponse : "C'est la différence entre les entreprises qui vont survivre et celles qui vont disparaître dans les 5 prochaines années."\n\nSilence.\n\nPuis il me tend sa carte : "Appelez mon bureau lundi."\n\nLe pouvoir d'un pitch clair et direct.`,
      ],
      moyen: [
        `L'histoire que je vais vous raconter a changé ma vision de {SUJET} pour toujours.\n\nC'était un mardi pluvieux de novembre.\n\nJe venais de perdre un client important. Mon plus gros contrat. Du jour au lendemain. Terminé.\n\nDans le taxi du retour, je repensais à tout ce que j'avais fait de travers. La liste était longue.\n\nPuis mon téléphone a sonné. Un numéro inconnu.\n\n"Bonjour, on m'a recommandé votre expertise sur {SUJET}. Vous êtes disponible pour un projet ?"\n\nCe projet est devenu mon plus beau succès.\n\nLa leçon ?\n\nQuand une porte se ferme, une fenêtre s'ouvre. Mais seulement si vous avez construit une réputation solide.\n\nVotre travail quotidien, même invisible, construit le socle de vos futures opportunités.\n\nNe sous-estimez jamais le pouvoir du bouche-à-oreille et de la compétence silencieuse.`,
        `Il y a 3 ans, j'ai participé à une conférence sur {SUJET}.\n\nDans la salle : 200 personnes. Des experts, des décideurs, des influenceurs.\n\nPendant la pause café, je me retrouve à côté d'un homme discret. Chemise simple. Pas de badge VIP.\n\nOn discute 15 minutes de {SUJET}. Sa vision était brillante. Simple mais profonde.\n\n"Vous faites quoi ?" je lui demande.\n\n"Je dirige une entreprise de 500 personnes."\n\nCe jour-là, j'ai appris trois choses :\n\n1. Les vrais leaders n'ont pas besoin de se mettre en avant\n2. Les meilleures conversations naissent dans l'informel\n3. La curiosité ouvre plus de portes que le titre sur votre carte de visite\n\nDepuis ce jour, je ne juge plus jamais un interlocuteur sur son apparence.\n\nChaque personne que vous croisez peut transformer votre trajectoire.`,
      ],
      long: [
        `Cette rencontre a changé ma carrière. Laissez-moi vous raconter.\n\n---\n\nSeptembre 2021. Je suis dans un coworking à Paris.\n\nÀ ma gauche, un type tape furieusement sur son clavier. Il travaille sur {SUJET}.\n\nJe lui lance, un peu par hasard : "Tu bosses sur quoi ?"\n\nIl me regarde, hésite, puis commence à parler. Pendant une heure.\n\nSon projet était fou. Ambitieux. Et surtout... exactement ce que je cherchais.\n\n---\n\nOn a commencé à travailler ensemble le lendemain. Sans contrat. Sans business plan. Juste de la confiance et une vision partagée.\n\nLes 3 premiers mois :\n- On travaillait 14h par jour\n- On n'avait aucun client\n- Notre entourage pensait qu'on était fous\n\nMois 4 : premier client. 500€.\nMois 8 : 15 clients. 45K€ de CA.\nMois 12 : on embauchait notre premier salarié.\n\n---\n\nAujourd'hui, en 2025, cette entreprise née d'une conversation de coworking emploie 20 personnes.\n\nLes leçons que j'en tire :\n\n→ Les meilleures opportunités naissent de conversations authentiques\n→ La confiance est le capital le plus précieux en business\n→ Commencer sans tout planifier est parfois la meilleure stratégie\n→ L'exécution bat la stratégie. Toujours.\n→ Entourez-vous de gens complémentaires, pas similaires\n\n---\n\nSi {SUJET} vous intéresse, si vous sentez que c'est le bon moment : lancez-vous.\n\nPas demain. Pas la semaine prochaine. Maintenant.\n\nLa prochaine conversation qui changera votre vie est peut-être celle que vous aurez aujourd'hui.`,
      ],
    },
    humorous: {
      court: [
        `On m'a demandé d'expliquer {SUJET} à mon grand-père.\n\nSa réponse : "De mon temps, on appelait ça du bon sens."\n\n...Il n'a pas complètement tort.\n\nParfois les concepts les plus "innovants" sont juste des évidences qu'on avait oubliées, emballées dans un joli PowerPoint.`,
        `POV : Tu expliques {SUJET} à ton stagiaire.\n\nMinute 1 : "C'est simple, tu vas voir."\nMinute 15 : "Bon, c'est un peu plus complexe que prévu."\nMinute 45 : "En fait, personne ne comprend vraiment."\nMinute 60 : Le stagiaire t'explique un truc que tu ne savais pas.\n\nMorale : arrêtez de sous-estimer les juniors. Ils voient ce que l'expérience nous cache.`,
        `Choses qu'on m'a dites sur {SUJET} vs la réalité :\n\n"C'est facile" → J'ai pleuré 3 fois\n"Ça prend 2 semaines" → Ça fait 6 mois\n"Le marché est prêt" → Le marché ne savait même pas que ça existait\n"Les investisseurs adorent" → Les investisseurs ont ghosté\n\nMais est-ce que je referais tout ?\n\nAbsolument. Sans hésiter.`,
        `Ma to-do list de lundi :\n\n□ Répondre aux 47 emails\n□ Avancer sur {SUJET}\n□ "Quick call de 5 min" (qui dure 45 min)\n□ Faire semblant de comprendre le dernier buzzword\n□ Regretter de ne pas être resté au lit\n□ Avoir une idée de génie à 17h59\n\nSi vous vous reconnaissez, vous êtes mon peuple.`,
      ],
      moyen: [
        `Confession : j'ai mis 2 ans à comprendre {SUJET}.\n\nPas parce que c'est compliqué. Mais parce que tout le monde l'explique mal.\n\nVoici comment j'aurais aimé qu'on me l'explique :\n\nImaginez que votre entreprise est un restaurant.\n\nLe produit, c'est la cuisine. C'est important, oui.\nMais si personne ne trouve votre restaurant, si le service est nul, si le menu est incompréhensible... peu importe la qualité du plat.\n\n{SUJET}, c'est tout ce qui se passe AUTOUR du plat.\n\nLe décor. L'ambiance. Le serveur qui retient votre nom. Le menu qui raconte une histoire.\n\nLes entreprises qui excellent en {SUJET} ne sont pas celles qui ont le meilleur produit.\n\nCe sont celles qui offrent la meilleure expérience.\n\nVoilà. C'est tout. Pas besoin d'un MBA pour comprendre ça.\n\n(Par contre, le MBA, c'est bien pour mettre sur LinkedIn. Ça fait pro.)`,
        `Les 5 étapes du deuil quand on découvre {SUJET} :\n\n1. Le déni\n"Non mais ça va, on n'a pas besoin de ça. On a toujours fait sans."\n\n2. La colère\n"POURQUOI PERSONNE NE M'A DIT ÇA PLUS TÔT ?!"\n\n3. La négociation\n"OK, on va juste faire un petit POC. Rien d'engageant."\n\n4. La dépression\n"C'est tellement profond comme sujet, on va jamais y arriver..."\n\n5. L'acceptation\n"En fait, c'est pas si compliqué. Et ça change tout."\n\nSi vous êtes à l'étape 1 : bienvenue. On est tous passés par là.\n\nLe plus important ? Ne restez pas bloqué à l'étape 1. C'est là que les opportunités vous passent sous le nez.`,
      ],
      long: [
        `L'histoire la plus absurde de ma carrière implique {SUJET}. Attachez vos ceintures.\n\n---\n\nScène 1 : La réunion\n\nLundi 9h. Salle de réunion. 12 personnes. Un écran. Et un slide qui dit : "Stratégie {SUJET} 2025."\n\nLe directeur commence : "On doit être les premiers sur ce sujet."\n\nTout le monde acquiesce. Personne ne sait de quoi on parle. Mais on acquiesce. C'est la règle n°1 en corporate.\n\n---\n\nScène 2 : Le brainstorm\n\nOn nous met en groupes. Post-its. Feutres. Musique de fond zen.\n\nGroupe 1 propose une app. Groupe 2 propose un podcast. Groupe 3 propose... la même chose qu'on fait déjà mais avec un nouveau nom.\n\nDevinez quelle idée a été retenue ? La 3. Évidemment.\n\n---\n\nScène 3 : L'exécution\n\n6 mois de travail. 3 agences. 47 réunions de cadrage. Un budget que je n'oserai pas mentionner.\n\nRésultat ? Un truc qui marche. Presque. Quand le WiFi fonctionne.\n\n---\n\nScène 4 : Le plot twist\n\nLe stagiaire (oui, encore lui) propose pendant la pause café une idée simple. Gratuite. Faisable en 2 semaines.\n\nCette idée génère 3x plus de résultats que notre projet à 6 chiffres.\n\n---\n\nLa morale ?\n\n→ La simplicité bat la complexité. Toujours.\n→ Écoutez les gens qui sont proches du terrain\n→ Un gros budget ne remplace pas une bonne idée\n→ Les meilleures solutions naissent souvent... à la machine à café\n\nSi vous avez vécu une histoire similaire, racontez-la moi. Je collectionne les anecdotes corporate absurdes.\n\n(Et si vous êtes le stagiaire de l'histoire : bravo. Le monde a besoin de plus de gens comme vous.)`,
      ],
    },
  },
  en: {
    professional: {
      court: [
        `{SUJET} — a topic too few professionals take seriously.\n\nAfter 8 years in the field, here's what I've learned:\n\nThe key is consistency. Not talent. Not your network. Consistency.\n\nThose who succeed aren't the most brilliant. They're the ones who show up every day, even when no one is watching.`,
        `I spent 6 months studying {SUJET}.\n\nHere's lesson #1 that nobody tells you:\n\nThe market doesn't reward perfection. It rewards fast execution and iteration.\n\nStop planning. Start delivering.`,
        `{SUJET} will transform the way you work.\n\nWhy? Because companies ignoring it today will be left behind tomorrow.\n\n3 concrete steps to implement this week:\n→ Audit your current processes\n→ Identify friction points\n→ Test a solution, even an imperfect one`,
      ],
      moyen: [
        `I made a mistake for 3 years when it came to {SUJET}.\n\nI thought strategy was the most important thing. I was wrong.\n\nExecution is what matters.\n\nHere's what I wish I had known earlier:\n\n1. Start small. Really small. One objective per quarter.\n2. Measure everything. What can't be measured can't be improved.\n3. Surround yourself with people who challenge you, not people who agree with you.\n4. Treat failure as feedback, not as a dead end.\n5. Share what you learn. Teaching is the best accelerator.\n\nThe secret of experts in {SUJET}? They're not smarter. They just failed faster and learned faster.\n\nThe right balance between action and reflection is where the magic happens.`,
      ],
      long: [
        `5 years ago, I knew nothing about {SUJET}.\n\nToday, it's become the cornerstone of my career. Here's everything I've learned — unfiltered.\n\n---\n\nChapter 1: The turning point\n\nIt started with a question from a mentor: "In 5 years, will your current skills still be relevant?"\n\nI couldn't answer. That uncertainty pushed me to explore {SUJET}.\n\nChapter 2: The first steps\n\nI started by reading. A lot. Then I tested. Failed. Started over.\n\nThe trap? Wanting to master everything before diving in. The reality is we learn 10x faster by doing than by studying.\n\nChapter 3: The plateau\n\nAfter 18 months, I hit a plateau. Progress was slow. Motivation dipped. That's when 90% of people give up.\n\nMy solution? Find a community. People on the same journey. Collective energy is underrated.\n\nChapter 4: The acceleration\n\nBy teaching {SUJET} to others, I consolidated my own knowledge. And opportunities started flowing.\n\nKey lesson: sharing your expertise positions you as a reference. You don't need to be the best. Just be generous with your knowledge.\n\n---\n\nIf you're starting your journey with {SUJET} today, here are my 5 tips:\n\n→ Start before you're ready\n→ Document your progress\n→ Find a mentor or community\n→ Teach what you learn\n→ Be patient — exponential results take time`,
      ],
    },
    inspiring: {
      court: [
        `They told me {SUJET} was impossible.\n\nSo I stopped listening.\n\nI stopped asking for permission.\n\nI started taking action.\n\n6 months later, the results spoke for themselves.\n\nThe lesson? The only limits that exist are the ones you accept.`,
        `Nobody believed in my project around {SUJET}.\n\n"It's too ambitious."\n"The market is saturated."\n"You don't have the experience."\n\nToday, those same people ask me for advice.\n\nMoral of the story: your environment reflects your past. Your ambition shapes your future.`,
      ],
      moyen: [
        `2 years ago, I left everything to pursue {SUJET}.\n\nMy bank account: nearly empty.\nMy network: virtually non-existent.\nMy experience: limited.\n\nBut I had one thing nobody could take from me: the conviction that I could make it.\n\nThe first 6 months were the hardest of my life:\n- Sleepless nights full of doubt\n- Doors closing one by one\n- The feeling of shouting into the void\n\nThen, one day, everything shifted. A first client. Then two. Then ten.\n\nNot because I was the best.\nBut because I was still standing when others had quit.\n\nIf you're in that phase of doubt right now, read this:\n\nSuccess often comes right after the moment you wanted to give up.\n\nHold on. Your moment will come.`,
      ],
      long: [
        `This story might change your view on {SUJET}.\n\nIn 2019, I met Sarah, an entrepreneur who had just lost her business.\n\nShe had invested everything: her savings, her time, her health. And it all collapsed in 3 months.\n\nWhen I met her, she was at rock bottom. "It's over," she told me.\n\nI replied: "No. It's the beginning."\n\n---\n\nShe started over. Not the same project. A new one. Centered on {SUJET}.\n\nThis time, she did things differently:\n\n1. She listened to the market instead of following her ego\n2. She started freelancing to validate her idea\n3. She surrounded herself with experienced mentors\n4. She moved step by step, without rushing\n\n---\n\n18 months later, her business generated €400K in revenue.\n\nBut that's not the most important number.\n\nThe most important thing is what she told me:\n\n"The failure of my first company wasn't an ending. It was my most valuable education."\n\n---\n\nIf you're going through a tough time:\n\n→ Don't be ashamed to fail. The best people fail the most.\n→ Take time to understand your mistakes\n→ Surround yourself with the right people\n→ Start again with humility\n→ Trust the process\n\nFailure is not your enemy. Inaction is.\n\nBounce back. Always.`,
      ],
    },
    storytelling: {
      court: [
        `Last Tuesday. 9am.\n\nClient meeting. The topic: {SUJET}.\n\nThe director looks at me and says: "Nobody has ever managed to convince us on this point."\n\nI smiled.\n\nNot because I had a magic solution. But because I had something more powerful: data.\n\n45 minutes later, we were signing.`,
        `"You're making a mistake."\n\nThat's what my partner said when I decided to focus on {SUJET}.\n\nIt was 2022.\n\n2023: +200% growth.\n2024: market leader in our segment.\n\nSometimes the best decisions look like mistakes at first.`,
      ],
      moyen: [
        `The story I'm about to tell you changed my vision of {SUJET} forever.\n\nIt was a rainy Tuesday in November.\n\nI had just lost an important client. My biggest contract. Gone overnight.\n\nIn the cab ride home, I was reviewing everything I'd done wrong. The list was long.\n\nThen my phone rang. An unknown number.\n\n"Hello, I was referred to you for your expertise in {SUJET}. Are you available for a project?"\n\nThat project became my greatest success.\n\nThe lesson?\n\nWhen one door closes, a window opens. But only if you've built a solid reputation.\n\nYour daily work, even invisible, builds the foundation for future opportunities.\n\nNever underestimate the power of word-of-mouth and quiet competence.`,
      ],
      long: [
        `This encounter changed my career. Let me tell you about it.\n\n---\n\nSeptember 2021. I'm in a coworking space in Paris.\n\nTo my left, a guy is typing furiously on his keyboard. Working on {SUJET}.\n\nI casually ask: "What are you working on?"\n\nHe looks up, hesitates, then starts talking. For an hour.\n\nHis project was wild. Ambitious. And exactly what I'd been looking for.\n\n---\n\nWe started working together the next day. No contract. No business plan. Just trust and a shared vision.\n\nThe first 3 months:\n- Working 14 hours a day\n- Zero clients\n- People around us thought we were crazy\n\nMonth 4: first client. €500.\nMonth 8: 15 clients. €45K revenue.\nMonth 12: we hired our first employee.\n\n---\n\nToday, in 2025, this business born from a coworking conversation employs 20 people.\n\nThe lessons I take from it:\n\n→ The best opportunities come from authentic conversations\n→ Trust is the most precious capital in business\n→ Starting without a complete plan is sometimes the best strategy\n→ Execution beats strategy. Always.\n→ Surround yourself with complementary people, not similar ones\n\n---\n\nIf {SUJET} interests you, if you feel the timing is right: go for it.\n\nNot tomorrow. Not next week. Now.\n\nThe next conversation that changes your life might be one you have today.`,
      ],
    },
    humorous: {
      court: [
        `Someone asked me to explain {SUJET} to my grandfather.\n\nHis response: "In my day, we just called it common sense."\n\n...He's not entirely wrong.\n\nSometimes the most "innovative" concepts are just obvious things we forgot, wrapped in a nice PowerPoint.`,
        `POV: You explain {SUJET} to your intern.\n\nMinute 1: "It's simple, you'll see."\nMinute 15: "OK, it's a bit more complex than expected."\nMinute 45: "Honestly, nobody really gets it."\nMinute 60: The intern explains something you didn't know.\n\nMoral: stop underestimating juniors. They see what experience blinds us to.`,
      ],
      moyen: [
        `Confession: it took me 2 years to understand {SUJET}.\n\nNot because it's complicated. But because everyone explains it badly.\n\nHere's how I wish someone had explained it to me:\n\nImagine your business is a restaurant.\n\nThe product is the food. That matters, yes.\nBut if nobody can find your restaurant, if the service is terrible, if the menu is incomprehensible... the quality of the dish doesn't matter.\n\n{SUJET} is everything that happens AROUND the dish.\n\nThe decor. The atmosphere. The waiter who remembers your name. The menu that tells a story.\n\nCompanies that excel at {SUJET} aren't the ones with the best product.\n\nThey're the ones that offer the best experience.\n\nThere you go. That's it. No MBA needed to understand that.\n\n(But the MBA is great for LinkedIn. Very professional-looking.)`,
      ],
      long: [
        `The most absurd story of my career involves {SUJET}. Buckle up.\n\n---\n\nScene 1: The meeting\n\nMonday 9am. Conference room. 12 people. One screen. A slide that reads: "{SUJET} Strategy 2025."\n\nThe director begins: "We need to be first on this topic."\n\nEveryone nods. Nobody knows what we're talking about. But we nod. That's corporate rule #1.\n\n---\n\nScene 2: The brainstorm\n\nWe're put in groups. Post-its. Markers. Zen background music.\n\nGroup 1 proposes an app. Group 2 proposes a podcast. Group 3 proposes... the same thing we already do but with a new name.\n\nGuess which idea was chosen? Number 3. Obviously.\n\n---\n\nScene 3: The execution\n\n6 months of work. 3 agencies. 47 planning meetings. A budget I won't dare mention.\n\nResult? Something that works. Mostly. When the WiFi is cooperating.\n\n---\n\nScene 4: The plot twist\n\nThe intern (yes, again) proposes during a coffee break a simple idea. Free. Achievable in 2 weeks.\n\nThat idea generates 3x more results than our six-figure project.\n\n---\n\nThe moral?\n\n→ Simplicity beats complexity. Always.\n→ Listen to people who are close to the ground\n→ A big budget doesn't replace a good idea\n→ The best solutions often emerge... at the coffee machine\n\nIf you've lived a similar story, share it with me. I collect absurd corporate anecdotes.\n\n(And if you're the intern in this story: bravo. The world needs more people like you.)`,
      ],
    },
  },
}

const emojiSets = [
  ['🚀', '💡', '✨', '🎯', '📈'],
  ['🔥', '💪', '⚡', '🌟', '📊'],
  ['💎', '🏆', '🎓', '🧠', '📌'],
]

const ctas = {
  fr: [
    "\n\n💬 Et vous, qu'en pensez-vous ? Dites-le moi en commentaire !",
    '\n\n💬 Quelle est votre expérience sur ce sujet ? Partagez en commentaire 👇',
    '\n\n🔄 Si ce post vous a plu, partagez-le pour aider votre réseau.\n💬 Et dites-moi en commentaire : quelle est votre plus grande leçon sur ce sujet ?',
    "\n\n👇 Je suis curieux : quelle est votre vision ? Dites-le moi en commentaire !\n🔔 Suivez-moi pour plus de contenus comme celui-ci.",
  ],
  en: [
    '\n\n💬 What do you think? Let me know in the comments!',
    "\n\n💬 What's your experience on this topic? Share in the comments 👇",
    "\n\n🔄 If you found this valuable, share it with your network.\n💬 And tell me in the comments: what's your biggest lesson on this topic?",
    "\n\n👇 I'm curious: what's your take? Share in the comments!\n🔔 Follow me for more content like this.",
  ],
}

export function generatePost({ lang = 'fr', sujet, ton, longueur, emojis, cta }) {
  const pool = templates[lang]?.[ton]?.[longueur] || templates.fr.professional.court
  const template = pool[Math.floor(Math.random() * pool.length)]

  const defaultSubject = lang === 'fr' ? 'ce sujet' : 'this topic'
  let post = template.replace(/\{SUJET\}/g, sujet || defaultSubject)

  if (emojis) {
    const set = emojiSets[Math.floor(Math.random() * emojiSets.length)]
    const lines = post.split('\n')
    let emojiIdx = 0
    post = lines.map((line) => {
      if (line.startsWith('→') || line.startsWith('-') || /^\d+\./.test(line)) {
        const emoji = set[emojiIdx % set.length]
        emojiIdx++
        return `${emoji} ${line}`
      }
      return line
    }).join('\n')
  }

  if (cta) {
    const ctaList = ctas[lang] || ctas.fr
    post += ctaList[Math.floor(Math.random() * ctaList.length)]
  }

  return post
}

export const examples = {
  fr: [
    {
      label: 'Leadership & Management',
      config: { sujet: 'le leadership authentique', ton: 'inspiring', longueur: 'moyen', emojis: true, cta: true },
    },
    {
      label: 'IA & Productivité',
      config: { sujet: "l'intelligence artificielle en entreprise", ton: 'professional', longueur: 'court', emojis: false, cta: true },
    },
    {
      label: 'Humour Corporate',
      config: { sujet: 'les réunions inutiles', ton: 'humorous', longueur: 'court', emojis: true, cta: true },
    },
  ],
  en: [
    {
      label: 'Leadership & Management',
      config: { sujet: 'authentic leadership', ton: 'inspiring', longueur: 'moyen', emojis: true, cta: true },
    },
    {
      label: 'AI & Productivity',
      config: { sujet: 'artificial intelligence in business', ton: 'professional', longueur: 'court', emojis: false, cta: true },
    },
    {
      label: 'Corporate Humour',
      config: { sujet: 'pointless meetings', ton: 'humorous', longueur: 'court', emojis: true, cta: true },
    },
  ],
}
