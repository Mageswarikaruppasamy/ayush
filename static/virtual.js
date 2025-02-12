const plantsData = {
    "Ayurveda": [
        { name: "Ashwagandha", scientific_name: "Withania somnifera", uses: "Stress relief, vitality enhancement", image: "ashwagandha.jpg" },
        { name: "Tulsi", scientific_name: "Ocimum sanctum", uses: "Immune-boosting", image: "tulsi.jpg" },
        { name: "Neem", scientific_name: "Azadirachta indica", uses: "Antibacterial, skin-healing", image: "neem.jpg" },
        { name: "Amla", scientific_name: "Emblica officinalis", uses: "Boosts immunity, aids digestion", image: "amla.jpg" },
        { name: "Turmeric", scientific_name: "Curcuma longa", uses: "Anti-inflammatory, antioxidant", image: "turmeric.jpg" },
        { name: "Brahmi", scientific_name: "Bacopa monnieri", uses: "Boosts memory and cognitive function", image: "brahmi.jpg" },
        { name: "Shatavari", scientific_name: "Asparagus racemosus", uses: "Supports reproductive health", image: "shatavari.jpg" },
        { name: "Guduchi", scientific_name: "Tinospora cordifolia", uses: "Immunity booster", image: "guduchi.jpg" },
        { name: "Guggulu", scientific_name: "Commiphora wightii", uses: "Supports joint and heart health", image: "guggulu.jpg" },
        { name: "Manjistha", scientific_name: "Rubia cordifolia", uses: "Blood purification", image: "manjistha.jpg" },
        { name: "Haritaki", scientific_name: "Terminalia chebula", uses: "Digestive aid, detoxification", image: "haritaki.jpg" },
        { name: "Kapur Kachri", scientific_name: "Hedychium spicatum", uses: "Respiratory health, anti-inflammatory", image: "kapur_kachri.jpg" }
    ],
    "Unani": [
        { name: "Senna", scientific_name: "Senna alexandrina", uses: "Natural laxative", image: "senna.jpg" },
        { name: "Henna", scientific_name: "Lawsonia inermis", uses: "Cooling, skin health", image: "henna.jpg" },
        { name: "Fenugreek", scientific_name: "Trigonella foenum-graecum", uses: "Aids digestion, reduces inflammation", image: "fenugreek.jpg" },
        { name: "Black Seed", scientific_name: "Nigella sativa", uses: "Boosts immunity, treats respiratory issues", image: "blackseed.jpg" },
        { name: "Licorice", scientific_name: "Glycyrrhiza glabra", uses: "Soothing throat, digestive support", image: "licorice.jpg" },
        { name: "Sandalwood", scientific_name: "Santalum album", uses: "Cooling, skin benefits", image: "sandalwood.jpg" },
        { name: "Rose", scientific_name: "Rosa damascena", uses: "Aphrodisiac, cooling effect", image: "rose.jpg" },
        { name: "Saffron", scientific_name: "Crocus sativus", uses: "Skin glow, digestion support", image: "saffron.jpg" },
        { name: "Cinnamon", scientific_name: "Cinnamomum verum", uses: "Diabetes management, digestion aid", image: "cinnamon.jpg" },
        { name: "Clove", scientific_name: "Syzygium aromaticum", uses: "Dental care, pain relief", image: "clove.jpg" },
        { name: "Fennel", scientific_name: "Foeniculum vulgare", uses: "Digestion, bloating relief", image: "fennel.jpg" },
        { name: "Ajwain", scientific_name: "Trachyspermum ammi", uses: "Gas relief, digestion", image: "ajwain.jpg" }
    ],
    "Siddha": [
        { name: "Acalypha", scientific_name: "Acalypha indica", uses: "Respiratory ailments, skin diseases", image: "acalypha.jpg" },
        { name: "Vasambu", scientific_name: "Acorus calamus", uses: "Digestive disorders", image: "vasambu.jpg" },
        { name: "Keezhanelli", scientific_name: "Phyllanthus niruri", uses: "Liver health, jaundice treatment", image: "keezhanelli.jpg" },
        { name: "Thoothuvalai", scientific_name: "Solanum trilobatum", uses: "Cough, asthma relief", image: "thoothuvalai.jpg" },
        { name: "Nilavembu", scientific_name: "Andrographis paniculata", uses: "Fever treatment", image: "nilavembu.jpg" },
        { name: "Adathodai", scientific_name: "Justicia adhatoda", uses: "Respiratory issues", image: "adathodai.jpg" },
        { name: "Mudakathan", scientific_name: "Cardiospermum halicacabum", uses: "Joint pain relief", image: "mudakathan.jpg" },
        { name: "Manathakkali", scientific_name: "Solanum nigrum", uses: "Liver health, ulcer treatment", image: "manathakkali.jpg" },
        { name: "Pirandai", scientific_name: "Cissus quadrangularis", uses: "Bone strength, digestion", image: "pirandai.jpg" },
        { name: "Karisalankanni", scientific_name: "Eclipta alba", uses: "Hair growth, liver health", image: "karisalankanni.jpg" },
        { name: "Seenthil", scientific_name: "Tinospora cordifolia", uses: "Immunity booster", image: "tinospora.jpg" },
        { name: "Chitharathai", scientific_name: "Alpinia galanga", uses: "Cold, cough relief", image: "chitharathai.jpg" }
    ],
    "Homeopathy": [
        { name: "Arnica", scientific_name: "Arnica montana", uses: "Bruises, muscle soreness", image: "arnica.jpg" },
        { name: "Belladonna", scientific_name: "Atropa belladonna", uses: "Acute inflammations, fevers", image: "belladonna.jpg" },
        { name: "Chamomilla", scientific_name: "Matricaria chamomilla", uses: "Calming, especially for children", image: "chamomilla.jpg" },
        { name: "Nux Vomica", scientific_name: "Strychnos nux-vomica", uses: "Digestive disorders, irritability", image: "nux_vomica.jpg" },
        { name: "Rhus Tox", scientific_name: "Rhus toxicodendron", uses: "Joint pains, skin eruptions", image: "rhus_tox.jpg" },
        { name: "Calendula", scientific_name: "Calendula officinalis", uses: "Wound healing, skin care", image: "calendula.jpg" },
        { name: "Gelsemium", scientific_name: "Gelsemium sempervirens", uses: "Flu symptoms, fatigue", image: "gelsemium.jpg" },
        { name: "Pulsatilla", scientific_name: "Pulsatilla nigricans", uses: "Hormonal balance, cold relief", image: "pulsatilla.jpg" },
        { name: "Sulphur", scientific_name: "Sulphur", uses: "Skin eruptions, detoxification", image: "sulphur.jpg" },
        { name: "Aconite", scientific_name: "Aconitum napellus", uses: "Sudden fever, anxiety relief", image: "aconite.jpg" },
        { name: "Hypericum", scientific_name: "Hypericum perforatum", uses: "Nerve pain, wound healing", image: "hypericum.jpg" },
        { name: "Bryonia", scientific_name: "Bryonia alba", uses: "Arthritis, flu symptoms", image: "bryonia.jpg" }
    ],
    "Yoga & Naturopathy": [
        { name: "Lemon", scientific_name: "Citrus limon", uses: "Detoxification, digestion aid", image: "lemon.jpg" },
        { name: "Ginger", scientific_name: "Zingiber officinale", uses: "Anti-inflammatory, digestion", image: "ginger.jpg" },
        { name: "Garlic", scientific_name: "Allium sativum", uses: "Boosts immunity, heart health", image: "garlic.jpg" },
        { name: "Peppermint", scientific_name: "Mentha piperita", uses: "Headache relief, digestion", image: "peppermint.jpg" },
        { name: "Aloe Vera", scientific_name: "Aloe barbadensis", uses: "Skin care, digestion", image: "aloevera.jpg" },
        { name: "Coconut", scientific_name: "Cocos nucifera", uses: "Hydration, skin nourishment", image: "coconut.jpg" },
        { name: "Cucumber", scientific_name: "Cucumis sativus", uses: "Cooling effect, hydration", image: "cucumber.jpg" },
        { name: "Carrot", scientific_name: "Daucus carota", uses: "Eye health, detoxification", image: "carrot.jpg" },
        { name: "Papaya", scientific_name: "Carica papaya", uses: "Digestion aid, skin glow", image: "papaya.jpg" },
        { name: "Beetroot", scientific_name: "Beta vulgaris", uses: "Blood purification, stamina boost", image: "beetroot.jpg" },
        { name: "Moringa", scientific_name: "Moringa oleifera", uses: "Nutrient-rich, anti-inflammatory", image: "moringa.jpg" },
        { name: "Coriander", scientific_name: "Coriandrum sativum", uses: "Detoxification, digestion aid", image: "coriander.jpg" },
    ]
};


function showCategory(category) {
    const container = document.getElementById("plants-container");
    container.innerHTML = "";
    container.classList.add("show");

    plantsData[category].forEach(plant => {
        container.innerHTML += `
            <div class="plant-card">
                <img src="static/images/${plant.image}" alt="${plant.name}">
                <h3>${plant.name} (${plant.scientific_name})</h3>
                <p>${plant.uses}</p>
            </div>
        `;
    });
}
