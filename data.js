/* =========================
   REDGLIDE — DONNÉES MODIFIABLES
   Modifie ce fichier pour ajouter/remplacer des modèles.
   ========================= */

const SCOOTERS = [
  {
    id:"g2", image:"https://kukirin-france.com/cdn/shop/files/kukirin-g2-main-image_1.webp?v=1779417276&width=1080", brand:"KuKirin", model:"G2", price:"489 €", badge:"BUZZ",
    motor:"800 W", battery:"48 V • 15 Ah", range:"55 km", speed:"45 km/h",
    legalSpeed:"25 km/h", derestricted:"45 km/h", weight:"25,3 kg", load:"120 kg",
    tire:"10 pouces", brakes:"Disques AV/AR + frein électrique", suspension:"Ressorts AV/AR",
    waterproof:"IP54", charge:"8–9 h",
    summary:"Un modèle très polyvalent pour débuter et pour les trajets urbains qui demandent un peu plus de confort.",
    pros:["Bon rapport poids/puissance","Pneus 10 pouces","Format encore relativement transportable"],
    cons:["Autonomie réelle variable selon usage","45 km/h non autorisés sur voie publique"],
    honest:"Pour un usage urbain et un budget contenu, la G2 est une option simple à comprendre. Le choix dépend surtout de ton besoin de portabilité et d’autonomie."
  },
  {
    id:"g4", image:"https://escooters.bg/image/cache/wp/gp/SCOOTERS/KUKIRIN%20G4%202026/244b855f-b11e-4cf4-947c-234bdaaa1ebb-650x650.webp", brand:"KuKirin", model:"G4", price:"859 €", badge:"BUZZ",
    motor:"2 000 W", battery:"60 V • 20 Ah", range:"75 km", speed:"70 km/h",
    legalSpeed:"25 km/h", derestricted:"70 km/h", weight:"≈35,5 kg", load:"120 kg",
    tire:"11 pouces", brakes:"Disques AV/AR + frein électrique", suspension:"Ressorts AV/AR",
    waterproof:"IP54", charge:"10–11 h",
    summary:"Un modèle orienté performance, avec grande batterie et roues de 11 pouces.",
    pros:["Batterie 60 V 20 Ah","Roues 11 pouces","Puissance importante"],
    cons:["Lourde","Vitesse max à réserver aux usages autorisés"],
    honest:"À choisir si tu privilégies la puissance et la stabilité plutôt que la facilité de transport. Pour la ville pure, son gabarit peut être excessif."
  },
  {
    id:"thunder3", image:"https://turbokids.ca/cdn/shop/files/dualtron-thunder-3-electric-scooter-side_2000x_b0f8d850-1382-4fab-8471-63f1cb11d4bd.webp?v=1751809917", brand:"Dualtron", model:"Thunder 3", price:"Sur devis", badge:"PERFORMANCE",
    motor:"≈5 500 W × 2", battery:"72 V • 40 Ah (selon version)", range:"Jusqu’à ≈170 km*", speed:"≈100–105 km/h*", 
    legalSpeed:"25 km/h", derestricted:"≈100–105 km/h*", weight:"≈47–51 kg", load:"120 kg",
    tire:"11 pouces tubeless", brakes:"Hydrauliques NUTT", suspension:"Cartouches réglables AV/AR",
    waterproof:"Selon version", charge:"Variable",
    summary:"Une machine très hautes performances destinée à un public expérimenté et aux usages appropriés.",
    pros:["Très grosse batterie sur certaines versions","Freinage hydraulique","Suspensions réglables"],
    cons:["Très lourde","Prix élevé","Performances incompatibles avec la voie publique au-delà des limites légales"],
    honest:"Ce n’est pas le choix rationnel pour tout le monde : son intérêt est la performance et la capacité, pas la simplicité d’un trajet quotidien."
  },
  {
    id:"l2", image:"https://www.ausom.com/cdn/shop/files/L2-1_fc22b68f-573c-4091-a71c-deb6937298b6.jpg?v=1747932926&width=1000", brand:"Ausom", model:"L2", price:"459 €", badge:"BUZZ",
    motor:"800 W", battery:"48 V • 15,6 Ah", range:"70 km", speed:"45 km/h*", 
    legalSpeed:"20 km/h (fiche ABE/UE selon version)", derestricted:"45 km/h*", weight:"29,2 kg", load:"130 kg",
    tire:"10 × 3 pouces", brakes:"E-ABS + disques AV/AR", suspension:"ShocFree",
    waterproof:"IP54", charge:"5–10 h",
    summary:"Un modèle confortable avec pneus larges, suspension et charge maximale élevée.",
    pros:["Pneus 10×3","Charge max. 130 kg","Suspension ShocFree"],
    cons:["Versions et vitesses à vérifier","Plus lourde qu’une citadine légère"],
    honest:"Intéressante si le confort et la stabilité comptent plus que le poids minimal. Vérifie la version exacte avant achat."
  },
  {
    id:"l1", image:"https://www.ausom.com/cdn/shop/files/L1-4_2bcd9567-520b-480c-ab84-97f1876bb58d.jpg?v=1747932926&width=1000", brand:"Ausom", model:"L1", price:"549,00 €", badge:"BUZZ",
    motor:"800 W (fiche comparative)", battery:"48 V • 15,6 Ah", range:"≈70 km", speed:"≈45 km/h*",
    legalSpeed:"Selon version", derestricted:"Selon version", weight:"≈27,6 kg", load:"130 kg",
    tire:"10 × 2,75 pouces", brakes:"E-ABS + disques AV/AR", suspension:"ShocFree",
    waterproof:"IP54", charge:"≈11 h",
    summary:"Une alternative polyvalente, à confirmer selon la version vendue en France.",
    pros:["Format polyvalent","Pneus tubeless","Charge max. élevée"],
    cons:["Fiches différentes selon versions","Prix à vérifier"],
    honest:"À envisager pour un usage quotidien polyvalent, mais compare bien la version exacte et sa certification avant de commander."
  },
  {
    id:"xiaomi4", image:"https://i02.appmifile.com/895_operator_sg/07/01/2025/c291bc11e54be33e05a414066342c784.png", brand:"Xiaomi", model:"Electric Scooter 4", price:"À compléter", badge:"URBAIN",
    motor:"300 W", battery:"36 V • 7,65 Ah", range:"35 km", speed:"25 km/h",
    legalSpeed:"25 km/h", derestricted:"—", weight:"17,2 kg", load:"110 kg",
    tire:"10 pouces", brakes:"E-ABS + disque arrière", suspension:"suspension:"Sans", waterproof:"IP54", charge:"5 h",
    summary:"Une famille très orientée mobilité urbaine et simplicité.",
    pros:["Format urbain","Écosystème Xiaomi"],
    cons:["Les caractéristiques changent selon la version"],
    honest:"Un candidat à comparer pour la ville. Choisis la référence exacte avant de conclure."
  },
  {
    id:"urbanride", image:"https://contents.mediadecathlon.com/m28550516/k%2496d5c75b0f3c35bea8e850e9420cdbed/picture.jpg", brand:"UrbanGlide", model:"Ride 100", price:"269,00 €", badge:"URBAIN",
    motor:"350 W", battery:"21,6 V • 10,4 Ah", range:"25 km", speed:"25 km/h",
    legalSpeed:"25 km/h", derestricted:"—", weight:"16,3 kg", load:"100 kg",
    tire:"10 pouces • chambre à air Off Road", brakes:"Frein à disque arrière", suspension:"Sans", waterproof:"IPX5", charge:"7h",
    summary:"Exemple de fiche UrbanGlide prête à être remplacée par le modèle exact que tu veux référencer.",
    pros:["Marque à ajouter au catalogue"],
    cons:["Données à renseigner"],
    honest:"Fiche volontairement modifiable : remplace ce modèle par une référence précise."
  }
,
  {
    id:"ootdt10", image:"https://wheelyshop.se/cdn/shop/files/ootd-t10-elsparkcykel-8697886.jpg?v=1758995107&width=1206", brand:"OOTD", model:"T10", price:"499 €", badge:"NOUVEAU",
    motor:"900 W", battery:"48 V • 13,5 Ah", range:"60 km", speed:"45 km/h",
    legalSpeed:"20 km/h", derestricted:"≈45 km/h", weight:"≈27 kg", load:"120 kg",
    tire:"10 pouces", brakes:"Disques", suspension:"Double suspension", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"rovoronS7", image:"https://vepace.com/cdn/shop/files/ROVORONS784V37A_TROTTINETTEELECTRIQUEROVORONS7_84V37Ah_1024x.jpg?v=1777570455", brand:"Rovoron", model:"S7", price:"≈2 250 €", badge:"NOUVEAU",
    motor:"5 000 W", battery:"84 V • 37,1 Ah", range:"≈100 km", speed:"100 km/h",
    legalSpeed:"25 km/h", derestricted:"100 km/h", weight:"≈50 kg", load:"120 kg",
    tire:"11 pouces", brakes:"Hydrauliques", suspension:"Avant / arrière", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"urban85city", image:"https://urbanglide.com/wp-content/uploads/2022/09/85-city.png", brand:"UrbanGlide", model:"85 City", price:"À vérifier", badge:"NOUVEAU",
    motor:"À vérifier", battery:"À vérifier", range:"À vérifier", speed:"25 km/h",
    legalSpeed:"25 km/h", derestricted:"—", weight:"À vérifier", load:"À vérifier",
    tire:"10 pouces", brakes:"À vérifier", suspension:"Selon version", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"kukirinS1pro", image:"https://kukirindirect.shop/images/kukirindirect.shop/images/product/kukirin-s1-pro-electric-scooter-3.jpg", brand:"KuKirin", model:"S1 Pro", price:"À vérifier", badge:"NOUVEAU",
    motor:"350 W", battery:"36 V • 7,5 Ah*", range:"≈25 km", speed:"30 km/h*",
    legalSpeed:"25 km/h", derestricted:"30 km/h*", weight:"≈15 kg", load:"100 kg",
    tire:"8,5 pouces", brakes:"Électronique", suspension:"Avant", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"ducatiPro1Evo", image:"https://assets.kotsovolos.gr/product/268577-b.jpg", brand:"Ducati", model:"Pro-I Evo", price:"≈300–600 €", badge:"NOUVEAU",
    motor:"350 W", battery:"36 V • 7,8 Ah", range:"≈30 km", speed:"25 km/h",
    legalSpeed:"25 km/h", derestricted:"—", weight:"≈15 kg", load:"100 kg",
    tire:"8,5 pouces", brakes:"Électronique", suspension:"Arrière", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"iscooterI9max", image:"https://cdn.cdon.com/media-dynamic/images/product/cloud/store/ElectricVehicles/000/197/568/274/197568274-347845648-11453-org.jpg?cache=134078400310270240", brand:"iScooter", model:"i9 Max", price:"À vérifier", badge:"NOUVEAU",
    motor:"À vérifier", battery:"À vérifier", range:"À vérifier", speed:"À vérifier",
    legalSpeed:"25 km/h", derestricted:"Selon version", weight:"À vérifier", load:"À vérifier",
    tire:"10 pouces", brakes:"À vérifier", suspension:"Selon version", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"ausomK20", image:"https://pl.ausomstore.com/cdn/shop/files/ausom-k20-laluz-2-hulajnoga-elektryczna-3.jpg?v=1776849212&width=800", brand:"Ausom", model:"K20", price:"449 €", badge:"NOUVEAU",
    motor:"1 100 W", battery:"64,8 V • 10 Ah*", range:"70 km", speed:"45 km/h*",
    legalSpeed:"20 km/h", derestricted:"45 km/h*", weight:"≈25,5 kg", load:"130 kg",
    tire:"10 × 2,5 pouces", brakes:"Disques AV/AR", suspension:"ShocFree", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"fynzoS11", image:"https://a.allegroimg.com/original/116ef9/78bee05c400e87b83f2af87e73ad/Elektromos-jarmu-Fynzo-S11-1100W-15-6Ah-60km-45km-h-NFC", brand:"Fynzo", model:"S11", price:"À vérifier", badge:"NOUVEAU",
    motor:"800 W", battery:"48 V • 15,6 Ah", range:"60 km", speed:"25",
    legalSpeed:"25 km/h", derestricted:"45 km/h", weight:"25 kg", load:"130 kg",
    tire:"10 × 2,5 pouces", brakes:"E-ABS + disques AV/AR", suspension:"fourche avant + double bras oscillant arrière", waterproof:"IP54", charge:"8h",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"ninebotE2pro", image:"https://ivan-chohol.ua/image/cachewebp/catalog/march24/165193-1000x1000.webp", brand:"Segway", model:"Ninebot E2 Pro", price:"À vérifier", badge:"NOUVEAU",
    motor:"300 W", battery:"36 V • 7,65 Ah", range:"≈27 km", speed:"25 km/h",
    legalSpeed:"25 km/h", derestricted:"—", weight:"≈18,8 kg", load:"90 kg",
    tire:"8,1 pouces", brakes:"Tambour + E-ABS", suspension:"Avant", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"dualtronMini", image:"https://rafplay.com/cdn/shop/files/x23d_1024x1024_2x_1.webp?v=1699867413", brand:"Dualtron", model:"Mini", price:"≈850 €", badge:"NOUVEAU",
    motor:"1 450 W*", battery:"52 V • 13 Ah", range:"≈40 km", speed:"45 km/h*",
    legalSpeed:"25 km/h", derestricted:"45 km/h*", weight:"≈22 kg", load:"120 kg",
    tire:"8,5 pouces", brakes:"Disque + électrique", suspension:"Avant / arrière", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"dualtronTogo", image:"https://dualtronusa.com/cdn/shop/files/DT-Togo-36V-Image-2.jpg?v=1775404422", brand:"Dualtron", model:"Togo", price:"≈479–759 €", badge:"NOUVEAU",
    motor:"900 W", battery:"48 V • 15 Ah", range:"≈40 km", speed:"40 km/h*",
    legalSpeed:"25 km/h", derestricted:"40 km/h*", weight:"≈25 kg", load:"120 kg",
    tire:"10 pouces", brakes:"Disque", suspension:"Selon version", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"dualtronSonicN", image:"https://dualtronusa.com/cdn/shop/files/DT-Sonic-Model-N-Image-4_2000x.jpg?v=1775404332", brand:"Dualtron", model:"Sonic N", price:"À vérifier", badge:"NOUVEAU",
    motor:"À vérifier", battery:"À vérifier", range:"À vérifier", speed:"À vérifier",
    legalSpeed:"25 km/h", derestricted:"Selon version", weight:"À vérifier", load:"À vérifier",
    tire:"À vérifier", brakes:"À vérifier", suspension:"À vérifier", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"dualtronAminia", image:"https://media.hifi.lu/sys-master/products/9473194000414/3840x3840.43001193_04.webp", brand:"Dualtron", model:"Aminia", price:"≈1 150 €", badge:"NOUVEAU",
    motor:"Double moteur", battery:"52 V • 20 Ah*", range:"≈60 km*", speed:"≈60 km/h*",
    legalSpeed:"25 km/h", derestricted:"Selon version", weight:"≈35 kg", load:"120 kg",
    tire:"10 pouces", brakes:"Disques", suspension:"Avant / arrière", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"dualtronPop", image:"https://vepace.com/cdn/shop/files/TROTTINETTE_ELECTRIQUE_DUALTRON_POP_52V_20Ah_MONO_MOTEUR_2_76.jpg?v=1751463952", brand:"Dualtron", model:"Pop", price:"≈790–1 199 €", badge:"NOUVEAU",
    motor:"1 450 W*", battery:"52 V • 14–25 Ah", range:"≈40–70 km*", speed:"55 km/h*",
    legalSpeed:"25 km/h", derestricted:"Selon version", weight:"≈33 kg", load:"120 kg",
    tire:"10 pouces", brakes:"Disques", suspension:"Avant / arrière", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"dualtronForever", image:"https://dualtronusa.com/cdn/shop/files/DT-Forever-Image-1_2048x.jpg?v=1775418547", brand:"Dualtron", model:"Forever", price:"À vérifier", badge:"NOUVEAU",
    motor:"À vérifier", battery:"À vérifier", range:"À vérifier", speed:"À vérifier",
    legalSpeed:"25 km/h", derestricted:"Selon version", weight:"À vérifier", load:"À vérifier",
    tire:"10 pouces", brakes:"À vérifier", suspension:"À vérifier", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"dualtronOriens", image:"https://www.wee-bot.com/cdn/shop/files/trottinette_electrique_Dualtron_Oriens_pas_cher.png?v=1769530806", brand:"Dualtron", model:"Oriens", price:"À vérifier", badge:"NOUVEAU",
    motor:"À vérifier", battery:"À vérifier", range:"À vérifier", speed:"À vérifier",
    legalSpeed:"25 km/h", derestricted:"Selon version", weight:"À vérifier", load:"À vérifier",
    tire:"10 pouces", brakes:"À vérifier", suspension:"À vérifier", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"dualtronFlip", image:"https://fastride.fr/18787-large_default/trottinette-electrique-dualtron-flip-precommande-acompte.jpg", brand:"Dualtron", model:"Flip", price:"À vérifier", badge:"NOUVEAU",
    motor:"À vérifier", battery:"À vérifier", range:"À vérifier", speed:"À vérifier",
    legalSpeed:"25 km/h", derestricted:"Selon version", weight:"À vérifier", load:"À vérifier",
    tire:"À vérifier", brakes:"À vérifier", suspension:"À vérifier", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"dualtronCompact", image:"https://storage.googleapis.com/anjana-images/w1n4bscfb99h0jt2fli3h114htel", brand:"Dualtron", model:"Compact", price:"À vérifier", badge:"NOUVEAU",
    motor:"À vérifier", battery:"À vérifier", range:"À vérifier", speed:"À vérifier",
    legalSpeed:"25 km/h", derestricted:"Selon version", weight:"À vérifier", load:"À vérifier",
    tire:"À vérifier", brakes:"À vérifier", suspension:"À vérifier", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"dualtronVictor", image:"https://hightems.eu/11539-large_default/trottinette-electrique-dualtron-victor-2026.jpg", brand:"Dualtron", model:"Victor", price:"1 790 €", badge:"NOUVEAU",
    motor:"1 200 W × 2", battery:"60 V • 27 Ah", range:"85 km", speed:"80 km/h*",
    legalSpeed:"25 km/h", derestricted:"80 km/h*", weight:"33,5 kg", load:"120 kg",
    tire:"10 pouces", brakes:"Hydrauliques AV/AR", suspension:"Avant / arrière", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"kukirinG2pro", image:"https://pogocycles.it/cdn/shop/files/kukirin-g2-pro-folding-electric-scooter-pogo-cycles-2.webp?v=1740996840", brand:"KuKirin", model:"G2 Pro", price:"≈479 €", badge:"NOUVEAU",
    motor:"800 W", battery:"48 V • 15 Ah", range:"≈55 km", speed:"45 km/h*",
    legalSpeed:"25 km/h", derestricted:"45 km/h*", weight:"≈25 kg", load:"120 kg",
    tire:"10 pouces", brakes:"Disques", suspension:"Avant / arrière", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"kukirinG3", image:"https://kukirin-escooter.com/cdn/shop/files/G3_scooters_2.jpg?v=1751364094&width=2048", brand:"KuKirin", model:"G3", price:"À vérifier", badge:"NOUVEAU",
    motor:"À vérifier", battery:"À vérifier", range:"À vérifier", speed:"À vérifier",
    legalSpeed:"25 km/h", derestricted:"Selon version", weight:"À vérifier", load:"À vérifier",
    tire:"10 pouces", brakes:"À vérifier", suspension:"À vérifier", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"kukirinG3pro", image:"https://kukirinscooter.eu/cdn/shop/files/kukirin-g3-pro-electric-scooter-side-stand-view.jpg?v=1761702416", brand:"KuKirin", model:"G3 Pro", price:"1 229 €", badge:"NOUVEAU",
    motor:"1 200 W × 2", battery:"52 V • 23,4 Ah", range:"80 km", speed:"65 km/h*",
    legalSpeed:"25 km/h", derestricted:"65 km/h*", weight:"44 kg", load:"120 kg",
    tire:"10 pouces", brakes:"Disques huile + E-brake", suspension:"Avant / arrière", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"kukirinG4pro", image:"https://www.e-scooteruaehub.com/cdn/shop/files/save_as_2024-06-13T23_40_28.421Z_1024x1024%402x.png?v=1718322033", brand:"KuKirin", model:"G4 Pro", price:"À vérifier", badge:"NOUVEAU",
    motor:"À vérifier", battery:"À vérifier", range:"À vérifier", speed:"À vérifier",
    legalSpeed:"25 km/h", derestricted:"Selon version", weight:"À vérifier", load:"À vérifier",
    tire:"11 pouces", brakes:"À vérifier", suspension:"À vérifier", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"sunnigoX7", image:"https://images.cdon.com/images/f_auto/t_600x600/cdon-prod/f0989d8a943448c5/3ac17cb9581f/el-scooter-sunnigoo-x7-dobbelt-motor-48v-21ah-batteri-11-luftdak-sort", brand:"SUNNIGOO", model:"X7", price:"669 €", badge:"NOUVEAU",
    motor:"1 800 W × 2", battery:"48 V • 21 Ah", range:"45–60 km", speed:"60 km/h*",
    legalSpeed:"25 km/h", derestricted:"60 km/h*", weight:"À vérifier", load:"150 kg",
    tire:"11 pouces", brakes:"À vérifier", suspension:"Tout-terrain", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"ausomGosoul2", image:"https://imagedelivery.net/JAV112JY973Crznn4xb8Sg/5b5fc854-91d6-438b-47de-0707de5f4700/public", brand:"Ausom", model:"GoSoul 2", price:"499 €", badge:"NOUVEAU",
    motor:"1 100 W", battery:"48 V • 13 Ah", range:"70 km", speed:"20 km/h",
    legalSpeed:"20 km/h", derestricted:"Selon version", weight:"27,9 kg", load:"130 kg",
    tire:"10 × 2,5 pouces", brakes:"Disques + E-ABS", suspension:"ShocFree", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"fynzoT11", image:"https://img.gkbcdn.com/p/2026-05-07/Fynzo-T11-Foldable-Electric-Scooter-1100W-48V-15-6Ah-531485-2._w500_.jpg", brand:"Fynzo", model:"T11", price:"À vérifier", badge:"NOUVEAU",
    motor:"À vérifier", battery:"À vérifier", range:"À vérifier", speed:"À vérifier",
    legalSpeed:"25 km/h", derestricted:"Selon version", weight:"À vérifier", load:"À vérifier",
    tire:"À vérifier", brakes:"À vérifier", suspension:"À vérifier", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"naveeNT5max", image:"https://naveetech.ca/cdn/shop/files/NT-Max_-2.png?v=1773817475&width=940", brand:"NAVEE", model:"NT5 Max", price:"629,99 €", badge:"NOUVEAU",
    motor:"1 600 W max", battery:"À vérifier", range:"85 km", speed:"25 km/h",
    legalSpeed:"25 km/h", derestricted:"Selon version", weight:"À vérifier", load:"150 kg",
    tire:"10,5 pouces", brakes:"Double disque + E-ABS", suspension:"Avant / arrière", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"geleipuZ1pro", image:"https://geleipu.com/cdn/shop/collections/1_af286fec-5547-4279-8238-8a057f9fbc55.jpg?v=1766472586&width=2048", brand:"Geleipu", model:"Z1 Pro", price:"799 €", badge:"NOUVEAU",
    motor:"1 200 W × 2", battery:"52 V • 20 Ah", range:"70 km", speed:"65 km/h*",
    legalSpeed:"25 km/h", derestricted:"65 km/h*", weight:"À vérifier", load:"À vérifier",
    tire:"10 pouces", brakes:"Disques mécaniques", suspension:"À vérifier", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"rcbD7max", image:"https://d2j6dbq0eux0bg.cloudfront.net/images/106964762/products/831488325/5726264345.webp", brand:"RCB", model:"D7 Max", price:"1 299 €", badge:"NOUVEAU",
    motor:"À vérifier", battery:"À vérifier", range:"80–100 km", speed:"25 km/h",
    legalSpeed:"25 km/h", derestricted:"—", weight:"À vérifier", load:"À vérifier",
    tire:"À vérifier", brakes:"À vérifier", suspension:"À vérifier", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"ecoxtremeArmored", image:"https://monorimspain.com/cdn/shop/files/HDARMOREDRED_e0b5e2e3-45cc-468d-af6a-1e2c6f7f2f19.png?v=1768052456&width=1445", brand:"Ecoxtreme", model:"Armored", price:"À vérifier", badge:"NOUVEAU",
    motor:"À vérifier", battery:"À vérifier", range:"À vérifier", speed:"À vérifier",
    legalSpeed:"25 km/h", derestricted:"Selon version", weight:"À vérifier", load:"À vérifier",
    tire:"À vérifier", brakes:"À vérifier", suspension:"À vérifier", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"ecoxtremeM41", image:"https://asf-lustenau.at/cdn/shop/files/ECOXtrem-m41-TANK-HONEYWHALE-g2-PRO-1.png?v=1769528215&width=1445", brand:"Ecoxtreme", model:"M41", price:"À vérifier", badge:"NOUVEAU",
    motor:"À vérifier", battery:"À vérifier", range:"À vérifier", speed:"À vérifier",
    legalSpeed:"25 km/h", derestricted:"Selon version", weight:"À vérifier", load:"À vérifier",
    tire:"À vérifier", brakes:"À vérifier", suspension:"À vérifier", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  },
  {
    id:"joyorT10", image:"https://uk.gleeride.com/cdn/shop/files/2_433e369a-9677-454b-874e-1191a5253635.webp?v=1758081355&width=1214", brand:"Joyor", model:"T10", price:"669 €", badge:"NOUVEAU",
    motor:"1 000 W × 2", battery:"60 V • 18 Ah", range:"30–75 km", speed:"60 km/h*",
    legalSpeed:"25 km/h", derestricted:"60 km/h*", weight:"29,6 kg", load:"120 kg",
    tire:"10 pouces", brakes:"Hydrauliques AV/AR", suspension:"Double suspension", waterproof:"À vérifier", charge:"À vérifier",
    summary:"Fiche ajoutée au catalogue RedGlide. Les valeurs marquées « à vérifier » doivent être remplacées par celles de la version exacte.",
    pros:["Modèle ajouté à la base RedGlide","Fiche prête pour comparaison"],
    cons:["Certaines caractéristiques dépendent de la version"],
    honest:"Vérifie la référence exacte, la certification et la fiche constructeur avant achat."
  }];

const VELOS = [
  {brand:"Decathlon",model:"Elops 920 E",price:"À compléter",motor:"À compléter",battery:"À compléter",range:"À compléter",weight:"À compléter",extra:"Ville • cadre bas"},
  {brand:"Moustache",model:"Samedi 28",price:"À compléter",motor:"À compléter",battery:"À compléter",range:"À compléter",weight:"À compléter",extra:"Ville • confort"},
  {brand:"Cube",model:"Kathmandu Hybrid",price:"À compléter",motor:"À compléter",battery:"À compléter",range:"À compléter",weight:"À compléter",extra:"Trekking • polyvalent"}
];

const CARS = [
  {brand:"Tesla",model:"Model 3",price:"À compléter",power:"À compléter",range:"À compléter",zero100:"À compléter",weight:"À compléter",extra:"Électrique"},
  {brand:"Renault",model:"5 E-Tech",price:"À compléter",power:"À compléter",range:"À compléter",zero100:"À compléter",weight:"À compléter",extra:"Citadine électrique"},
  {brand:"Peugeot",model:"e-208",price:"À compléter",power:"À compléter",range:"À compléter",zero100:"À compléter",weight:"À compléter",extra:"Citadine électrique"}
];
