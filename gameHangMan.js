let wordBank = ['apple', 'orange', 'banana', 'grape', 'watermelon', 'lemon', 'lime', 'cherry', 'blueberry',
    'strawberry', 'raspberry', 'blackberry', 'peach', 'plum', 'apricot', 'mango', 'pineapple', 'kiwi', 'passionfruit',
    'papaya', 'coconut', 'guava', 'tangerine', 'nectarine', 'fig', 'pomegranate', 'lychee', 'dragonfruit', 'melon',
    'grapefruit', 'date', 'quince', 'pear', 'cantaloupe', 'honeydew', 'cranberry', 'redcurrant', 'gooseberry', 'boysenberry',
    'lognan', 'elderberry', 'pluot', 'persimmon', 'cucumber', 'tomato', 'avocado', 'zucchini', 'carrot', 'potato', 'sweetpotato',
    'onion', 'garlic', 'ginger', 'lettuce', 'spinach', 'kale', 'broccoli', 'cauliflower', 'brusselsprout', 'eggplant', 'pepper',
    'celery', 'radish', 'beet', 'turnip', 'parsnip', 'rutabaga', 'daikon', 'leek', 'shallot', 'scallion', 'fennel', 'artichoke',
    'asparagus', 'squash', 'pumpkin', 'cabbage', 'kohlrabi', 'endive', 'arugula', 'chard', 'collard', 'okra', 'okra', 'lotusroot',
    'seaweed', 'salsify', 'watercress', 'algae', 'peapod', 'snowpea', 'snappea', 'sugarpea', 'mushroom', 'truffle', 'soybean',
    'edamame', 'quinoa', 'barley', 'rye', 'oats', 'wheat', 'corn', 'rice', 'millet', 'sorghum', 'spelt', 'kamut', 'teff', 'fonio',
    'amaranth', 'buckwheat', 'chia', 'flax', 'sunflower', 'hemp', 'poppy', 'sesame', 'almond', 'cashew', 'walnut', 'pecan',
    'hazelnut', 'pine', 'peanut', 'pistachio', 'macadamia', 'brazilnut', 'chestnut', 'filbert', 'ginkgo', 'acorn', 'gingko',
    'edibleflowers', 'rose', 'lavender', 'chamomile', 'dandelion', 'hibiscus', 'elderflower', 'violet', 'marigold', 'nasturtium',
    'pansy', 'primrose', 'calendula', 'borage', 'daylily', 'bamboo', 'aloe', 'hemp', 'moringa', 'baobab', 'neem', 'kudzu',
    'yarrow', 'sage', 'rosemary', 'thyme', 'basil', 'oregano', 'mint', 'cilantro', 'parsley', 'dill', 'tarragon', 'marjoram',
    'chervil', 'chives', 'sorrel', 'lovage', 'fenugreek', 'saffron', 'turmeric', 'paprika', 'cayenne', 'chili', 'cardamom',
    'cinnamon', 'clove', 'nutmeg', 'mace', 'allspice', 'staranise', 'anise', 'cumin', 'coriander', 'fennel', 'caraway', 'mustard',
    'horseradish', 'wasabi', 'ginger', 'galangal', 'tamarind', 'amla', 'jackfruit', 'durian', 'mangosteen', 'langsat', 'rambutan',
    'blackrice', 'whiterice', 'brownrice', 'japonicarice', 'basmatirice', 'jasmine', 'koshihikari', 'calrose', 'arborio',
    'glutinousrice', 'wildrice', 'flaxseed', 'chia', 'cacao', 'carob', 'coconutmilk', 'almondmilk', 'ricemilk', 'oatmilk',
    'soyamilk', 'goatmilk', 'sheepmilk', 'cheese', 'yogurt', 'butter', 'ghee', 'cremefraiche', 'cream', 'whippingcream',
    'sourcream', 'cottagecheese', 'ricotta', 'mascarpone', 'mozzarella', 'feta', 'cheddar', 'bluecheese', 'brie', 'camembert',
    'gorgonzola', 'parmesan', 'romano', 'pecorino', 'gruyere', 'emmental', 'savoy', 'swiss', 'edam', 'gouda', 'havarti',
    'muenster', 'provolone', 'fontina', 'pepperjack', 'montereyjack', 'asiago', 'colby', 'creamer', 'cheddars', 'processcheese',
    'cheesefood', 'soymilk', 'almondmilk', 'oatmilk', 'coconutmilk', 'ricemilk', 'goatmilk', 'sheepmilk', 'camelmilk', 'horsemeat',
    'beef', 'pork', 'lamb', 'veal', 'chicken', 'turkey', 'duck', 'goose', 'quail', 'pheasant', 'rabbit', 'venison', 'bison',
    'elk', 'boar', 'kangaroo', 'ostrich', 'emu', 'alligator', 'crocodile', 'frog', 'snake', 'turtle', 'eel', 'salmon', 'trout',
    'tuna', 'cod', 'haddock', 'halibut', 'swordfish', 'marlin', 'sailfish', 'snapper', 'bass', 'catfish', 'tilapia', 'flounder',
    'sole', 'perch', 'carp', 'herring', 'sardine', 'mackerel', 'anchovy', 'shark', 'ray', 'stingray', 'jellyfish', 'squid',
    'octopus', 'cuttlefish', 'crab', 'lobster', 'shrimp', 'prawn', 'clam', 'oyster', 'mussel', 'scallop', 'conch', 'urchin',
    'whelk', 'abalone', 'cockle', 'geoduck', 'surfclam', 'quahog', 'razorclam', 'goby', 'scorpionfish', 'stonefish', 'lionfish',
    'barracuda', 'tarpon', 'kingfish', 'tilefish', 'mako', 'bonito', 'amberjack', 'jackfish', 'cobia', 'grunt', 'porgy',
    'sheepshead', 'hogfish', 'silverfish', 'ladyfish', 'rainbowrunner', 'pompano', 'trumpetfish', 'cornetfish', 'pipefish',
    'seahorse', 'batfish', 'garfish', 'needlefish', 'sawfish', 'sturgeon', 'spoonbill', 'paddlefish', 'bowfin', 'mooneye',
    'goldeye', 'drum', 'croaker', 'spot', 'kingcroaker', 'redfish', 'blackdrum', 'whiting', 'sandperch', 'seaweed', 'kelp',
    'wakame', 'nori', 'agar', 'spirulina', 'chorella', 'kombu', 'dulse', 'grapeseed', 'linseed', 'hempseed', 'rapeseed',
    'sunflowerseed', 'pumpkinseed', 'sesameseed', 'mustardseed', 'poppyseed', 'chias', 'flaxseed', 'oliveoil', 'sesameoil',
    'coconutoil', 'palmoil', 'canolaoil', 'soyoil', 'corn oil', 'saffloweroil', 'sunfloweroil', 'peanutoil', 'wheatgermoil',
    'grapeseedoil', 'almondoil', 'avocadooil', 'macademiaoil', 'hempoil', 'flaxseedoil', 'coldpressoil', 'extravirgin',
    'maltvinegar', 'whitevinegar', 'applecidervinegar', 'balsamicvinegar', 'redwinevinegar', 'whitewinevinegar', 'sherryvinegar',
    'ricevinegar', 'coconutvinegar', 'honey', 'agave', 'maplesyrup', 'molasses', 'caramelsyrup', 'corn syrup', 'glucose',
    'sweeteners', 'stevia', 'saccharin', 'aspartame', 'sucralose', 'acesulfame', 'keto diet', 'paleo diet', 'vegan diet',
    'vegetarian diet', 'mediterranean diet', 'low carb diet', 'low fat diet', 'atkins diet', 'south beach diet', 'raw food diet',
    'dash diet', 'intermittent fasting', 'ketoacidosis', 'metabolism', 'calories', 'protein', 'carbohydrates', 'fats',
    'saturated fat', 'unsaturated fat', 'trans fat', 'omega 3 fatty acids', 'omega 6 fatty acids', 'cholesterol', 'vitamins',
    'minerals', 'fiber', 'antioxidants', 'probiotics', 'prebiotics', 'enzymes', 'phytonutrients', 'polyphenols', 'flavonoids',
    'isoflavones', 'anthocyanins', 'glucosinolates', 'carotenoids', 'chlorophyll', 'lycopene', 'lutein', 'zeaxanthin', 'alkaloids',
    'tannins', 'saponins', 'catechins', 'epicatechins', 'epigallocatechin', 'gallate', 'polyunsaturated fatty acids',
    'docosahexaenoic acid', 'eicosapentaenoic acid', 'linoleic acid', 'linolenic acid', 'phytosterols', 'gluten', 'casein',
    'lactose', 'fructose', 'sucrose', 'maltose', 'lactulose', 'galactose', 'sorbitol', 'maltodextrin', 'carrageenan',
    'xanthan gum', 'guar gum', 'locust bean gum', 'arabic gum', 'pectin', 'agar agar', 'gelatin', 'pectin', 'methocel',
    'carrageenan', 'alginate', 'emulsifiers', 'lecithin', 'mono diglycerides', 'polysorbates', 'starch', 'glycogen', 'cellulose',
    'fibers', 'hemi cellulose', 'lignin', 'pectin', 'arabinoxylan', 'fructan', 'galactooligosaccharides', 'fructooligosaccharides',
    'insulin', 'resistant starch', 'amylose', 'amylopectin', 'polydextrose', 'dietary fibers', 'water', 'air', 'nitrogen',
    'oxygen', 'carbon dioxide', 'hydrogen', 'helium', 'neon', 'argon', 'krypton', 'xenon', 'radon', 'hygroscopic', 'hydrophilic',
    'hydrophobic', 'aerobic', 'anaerobic', 'organic', 'inorganic', 'minerals', 'vitamins', 'metals', 'nonmetals', 'compounds',
    'molecules', 'atoms', 'ions', 'elements', 'periodic table', 'chemical bonds', 'covalent bonds', 'ionic bonds',
    'hydrogen bonds', 'metallic bonds', 'alloys', 'mixtures', 'solutions', 'solvents', 'solutes', 'acids', 'bases',
    'alkalines', 'pH scale', 'neutralization', 'reactions', 'catalysts', 'enzymes', 'inhibitors', 'kinetics', 'thermodynamics',
    'entropy', 'enthalpy', 'energy', 'heat', 'work', 'power', 'force', 'mass', 'weight', 'gravity', 'velocity', 'speed',
    'acceleration', 'momentum', 'impulse', 'inertia', 'friction', 'pressure', 'volume', 'density', 'bouyancy', 'fluids',
    'solids', 'liquids', 'gases', 'plasmas', 'melting', 'freezing', 'evaporation', 'condensation', 'sublimation', 'deposition',
    'fusion', 'fission', 'radiation', 'electromagnetic waves', 'electricity', 'magnetism', 'light', 'optics', 'reflection'];

let randomWord = Math.floor((Math.random()*(wordBank.length-1))+1);
let chosenWord = wordBank[randomWord];
let wordReveal = chosenWord;
let blankWord = "";
let numChances = 10;
let gameRunning = true;
let keysPressed = "";
for(let i = 0; i < chosenWord.length; i++) {
    if(chosenWord[i] === " "){
        blankWord = blankWord + " ";
    }else{
        blankWord = blankWord + "-";
    }
}

let hiddenword = document.querySelector(".hiddenWord");
hiddenword.innerHTML = blankWord;
let chancesDisplay = document.querySelector(".playerChances");
chancesDisplay.innerHTML = "you have : " + numChances + " chances left.";
let lettersGuested = document.querySelector(".lettersGuest");

document.addEventListener("keydown", function(e){
    let keyLowerCase = e.key.toLowerCase();
    if(keysPressed.includes(keyLowerCase) === false){keysPressed = keysPressed + keyLowerCase;}
    lettersGuested.innerHTML = keysPressed;
    if(gameRunning){
        if(chosenWord.indexOf(keyLowerCase) >= 0){
            while(chosenWord.indexOf(keyLowerCase) >= 0){
                blankWord = replaceIndex(keyLowerCase,blankWord,chosenWord,chosenWord[chosenWord.indexOf(keyLowerCase)]);
                chosenWord = replaceIndex(keyLowerCase,chosenWord,chosenWord,"-");
            }
        }
        if(blankWord.indexOf(keyLowerCase) < 0){
            numChances -= 1;
        }
        chancesDisplay.innerHTML = "you have : " + numChances + " chances left.";
        hiddenword.innerHTML = blankWord;
        if(numChances <= 0 ){hiddenword.innerHTML = wordReveal + " Game Over!"; gameRunning = false;}
        if(blankWord.includes("-") === false){hiddenword.innerHTML = blankWord + " You Win!"; gameRunning = false;}
    }

});



function replaceIndex(index, string, word,replacement){
    string = string.slice(0,word.indexOf(index)) + replacement + string.slice(word.indexOf(index)+1,string.length);
    return string;
}
