//Constants and variables
const pointsForCorrectAnswer = 1;
const numberOfQuestions = 10;
let presentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let scoreCounter = 0;
let remainingQuestions = [];

let questions = [
    // Questions and choices
    {
        "question": "What was the name of the Ethiopian Wolf before they knew it was related to wolves?",
        "choice1": "Simien Jackel",
        "choice2": "Ethiopian Coyote",
        "choice3": "Canis Simiensis",
        "correctAnswer": "1" //Question 1, Hard, choice1, Simien Jackel
    },

    {
        "question": "What does hippopotamus mean, and in what langauge?",
        "choice1": "River Horse (Latin)",
        "choice2": "River Horse (Greek)",
        "choice3": "Fat Pig (Greek)",
        "correctAnswer": "2" //Question 2, Medium, choice2, River Horse (Greek)
    },

    {
        "question": "A carnivorous animal eats flesh, what does a nucivorous animal eat?",
        "choice1": "Fruit",
        "choice2": "Seaweed",
        "choice3": "Nuts",
        "correctAnswer": "3" //Question 3, Medium, choice3, Nuts
    },

    {
        "question": "What type of animal is a natterjack?",
        "choice1": "Toad",
        "choice2": "Bird",
        "choice3": "Fish",
        "correctAnswer": "1" //Question 4, Medium, choice1, Toad
    },

    {
        "question": "What is the fastest land animal?",
        "choice1": "Thomson&rsquo;s Gazelle",
        "choice2": "Cheetah",
        "choice3": "Pronghorn Antelope",
        "correctAnswer": "2" //Question 5, Easy, choice2, Cheetah
    },

    {
        "question": "What is the scientific name for modern day humans?",
        "choice1": "Homo Erectus",
        "choice2": "Homo Ergaster",
        "choice3": "Homo Sapiens",
        "correctAnswer": "3" //Question 6, Easy, choice3, Homo Sapiens
    },

    {
        "question": "The Kakapo is a large, flightless, nocturnal parrot native to which country?",
        "choice1": "New Zealand",
        "choice2": "Madagascar",
        "choice3": "Australia",
        "correctAnswer": "1" //Question 7, Easy, choice1, New Zealand
    },

    {
        "question": "Which species of Brown Bear is not extinct?",
        "choice1": "Atlas Bear",
        "choice2": "Syrian Brown Bear",
        "choice3": "California Grizzly Bear",
        "correctAnswer": "2" //Question 8, Hard, choice2, Syrian Brown Bear
    },

    {
        "question": "Hippocampus is the Latin name for which marine creature?",
        "choice1": "Dolphine",
        "choice2": "Octopus",
        "choice3": "Seahorse",
        "correctAnswer": "3" //Question 9, Easy, choice3, Seahorse
    },

    {
        "question": "Cashmere is the wool from which kind of animal?",
        "choice1": "Goat",
        "choice2": "Sheep",
        "choice3": "Llama",
        "correctAnswer": "1" //Question 10, Medium, choice1, Goat
    },

    {
        "question": "What is the scientific name for the Polar Bear?",
        "choice1": "Ursus Spelaeus",
        "choice2": "Ursus Maritimus",
        "choice3": "Ursus Arctos",
        "correctAnswer": "2" //Question 11, Medium, choice2, Ursus Maritimus
    },

    {
        "question": "What are rhino&#039;s horn made of?",
        "choice1": "Bone",
        "choice2": "Ivory",
        "choice3": "Keratin",
        "correctAnswer": "3" //Question 12, Medium, choice3, Keratin
    },

    {
        "question": "How many legs do butterflies have?",
        "choice1": "Six",
        "choice2": "Four",
        "choice3": "Eight",
        "correctAnswer": "1" //Question 13, Easy, choice1, Six
    },

    {
        "question": "What scientific suborder does the family Hyaenidae belong to?",
        "choice1": "Caniformia",
        "choice2": "Feliformia",
        "choice3": "Haplorhini",
        "correctAnswer": "2" //Question 14, Hard, choice2, Feliformia
    },

    {
        "question": "How many known living species of hyenas are there?",
        "choice1": "Two",
        "choice2": "Six",
        "choice3": "Four",
        "correctAnswer": "3" //Question 15, Hard, choice3, Four
    },

    {
        "question": "What scientific family does the Aardwolf belong to?",
        "choice1": "Hyaenidae",
        "choice2": "Canidae",
        "choice3": "Felidae",
        "correctAnswer": "1" //Question 16, Hard, choice1, Hyaenidae
    },

    {
        "question": "For what reason would a spotted hyena &quot;laugh&quot;?",
        "choice1": "Excitement",
        "choice2": "Nervousness",
        "choice3": "Aggression",
        "correctAnswer": "2" //Question 17, Medium, choice2, Nervousness
    },

    {
        "question": "What is the scientific name of the cheetah?",
        "choice1": "Panthera onca",
        "choice2": "Felis catus",
        "choice3": "Acinonyx jubatus",
        "correctAnswer": "3" //Question 18, Hard, choice3, Acinonyx jubatus
    },

    {
        "question": "What is the scientific name of the Budgerigar?",
        "choice1": "Melopsittacus undulatus",
        "choice2": "Nymphicus hollandicus",
        "choice3": "Ara macao",
        "correctAnswer": "1" //Question 19, Hard, choice1, Melopsittacus undulatus
    },

    {
        "question": "Which animal was part of an Russian domestication experiment in 1959?",
        "choice1": "Pigeons",
        "choice2": "Foxes",
        "choice3": "Bears",
        "correctAnswer": "2" //Question 20, Medium, choice2, Foxes
    },

    {
        "question": "The now extinct species &quot;Thylacine&quot; was native to where?",
        "choice1": "Baluchistan, Pakistan",
        "choice2": "Wallachia, Romania",
        "choice3": "Tasmania, Australia",
        "correctAnswer": "3" //Question 21, Medium, choice3, Tasmania, Australia
    },

    {
        "question": "What is the Gray Wolf&#039;s scientific name?",
        "choice1": "Canis Lupus",
        "choice2": "Canis Aureus",
        "choice3": "Canis Latrans",
        "correctAnswer": "1" //Question 22, Hard, choice1, Canis Lupus
    },

    {
        "question": "Which of these animals is NOT a lizard?",
        "choice1": "Komodo Dragon",
        "choice2": "Tuatara",
        "choice3": "Gila Monster",
        "correctAnswer": "2" //Question 23, Hard, choice2, Tuatara
    },

    {
        "question": "What is Grumpy Cat&#039;s real name?",
        "choice1": "Sauce",
        "choice2": "Broccoli",
        "choice3": "Tardar Sauce",
        "correctAnswer": "3" //Question 24, Easy, choice3, Tardar Sauce
    },

    {
        "question": "What type of creature is a Bonobo?",
        "choice1": "Ape",
        "choice2": "Parrot",
        "choice3": "Wildcat",
        "correctAnswer": "1" //Question 25, Hard, choice1, Ape
    },

    {
        "question": "Which of these species is not extinct?",
        "choice1": "Japanese sea lion",
        "choice2": "Komodo dragon",
        "choice3": "Tasmanian tiger",
        "correctAnswer": "2" //Question 26, Medium, choice2, Komodo dragon
    },

    {
        "question": "Which class of animals are newts members of?",
        "choice1": "Fish",
        "choice2": "Reptiles",
        "choice3": "Amphibian",
        "correctAnswer": "3" //Question 27, Easy, choice3, Amphibian
    },

    {
        "question": "What is the name of the family that the domestic cat is a member of?",
        "choice1": "Felidae",
        "choice2": "Felinae",
        "choice3": "Felis",
        "correctAnswer": "1" //Question 28, Medium, choice1, Felidae
    },

    {
        "question": "What dog bread is one of the oldest breeds of dog and has flourished since before 400 BCE?",
        "choice1": "Bulldogs",
        "choice2": "Pugs",
        "choice3": "Chihuahua",
        "correctAnswer": "2" //Question 29, Medium, choice2, Pugs
    },

    {
        "question": "What is the name of the copper-rich protein that creates the blue blood in the Antarctic octopus?",
        "choice1": "Cytochrome",
        "choice2": "Methionine",
        "choice3": "Hemocyanin",
        "correctAnswer": "3" //Question 30, Hard, choice3, Hemocyanin
    },

    {
        "question": "Which species is a &quot;mountain chicken&quot;?",
        "choice1": "Frog",
        "choice2": "Chicken",
        "choice3": "Horse",
        "correctAnswer": "1" //Question 31, Hard, choice1, Frog
    },

    {
        "question": "What is the fastest animal?",
        "choice1": "Cheetah",
        "choice2": "Peregrine Falcon",
        "choice3": "Golden Eagle",
        "correctAnswer": "2" //Question 32, Medium, choice2, Peregrine Falcon
    },

    {
        "question": "The dish Fugu, is made from what family of fish?",
        "choice1": "Bass",
        "choice2": "Salmon",
        "choice3": "Pufferfish",
        "correctAnswer": "3" //Question 33, Medium, choice3, Pufferfish
    },

    {
        "question": "What is the collective noun for a group of crows?",
        "choice1": "Murder",
        "choice2": "Pack",
        "choice3": "Gaggle",
        "correctAnswer": "1" //Question 34, Easy, choice1, Murder
    },

    {
        "question": "Which of the following is another name for the &quot;Poecilotheria Metallica Tarantula&quot;?",
        "choice1": "Hopper",
        "choice2": "Gooty",
        "choice3": "Silver Stripe",
        "correctAnswer": "2" //Question 35, Hard, choice2, Gooty
    },

    {
        "question": "What is the scientific name of the Common Chimpanzee?",
        "choice1": "Gorilla gorilla",
        "choice2": "Pan paniscus",
        "choice3": "Pan troglodytes",
        "correctAnswer": "3" //Question 36, Medium, choice3, Pan troglodytes
    },

    {
        "question": "By definition, where does an abyssopelagic animal live?",
        "choice1": "At the bottom of the ocean",
        "choice2": "In the desert",
        "choice3": "On top of a mountain",
        "correctAnswer": "1" //Question 37, Easy, choice1, At the bottom of the ocean
    },

    {
        "question": "Which of these is a colony of polyps and not a jellyfish?",
        "choice1": "Sea Wasp",
        "choice2": "Portuguese Man-of-War",
        "choice3": "Sea Nettle",
        "correctAnswer": "2" //Question 38, Hard, choice2, Portuguese Man-of-War
    },

    {
        "question": "What colour is the female blackbird?",
        "choice1": "Black",
        "choice2": "White",
        "choice3": "Brown",
        "correctAnswer": "3" //Question 39, Easy, choice3, Brown
    },

    {
        "question": "What is the common term for bovine spongiform encephalopathy (BSE)?",
        "choice1": "Mad Cow disease",
        "choice2": "Weil&#039;s disease",
        "choice3": "Foot-and-mouth disease",
        "correctAnswer": "1" //Question 40, Medium, choice1, Mad Cow disease
    },

    {
        "question": "How many teeth does an adult rabbit have?",
        "choice1": "26",
        "choice2": "28",
        "choice3": "24",
        "correctAnswer": "2" //Question 41, Easy, choice2, 28
    },

    {
        "question": "What is the name for a male bee that comes from an unfertilized egg?",
        "choice1": "Soldier",
        "choice2": "Worker",
        "choice3": "Drone",
        "correctAnswer": "3" //Question 42, Medium, choice3, Drone
    },
    {
        "question": "What is the name of a rabbit&#039;s abode?",
        "choice1": "Burrow",
        "choice2": "Nest",
        "choice3": "Den",
        "correctAnswer": "1" //Question 43, Easy, choice1, Burrow
    },

    {
        "question": "What is the collective noun for bears?",
        "choice1": "Drove",
        "choice2": "Sloth",
        "choice3": "Tribe",
        "correctAnswer": "2" //Question 44, Medium, choice2, Sloth
    },

    {
        "question": "What is the collective noun for rats?",
        "choice1": "Pack",
        "choice2": "Drift",
        "choice3": "Mischief",
        "correctAnswer": "3" //Question 45, Medium, choice3, Mischief
    },

    {
        "question": "What is the collective noun for vultures?",
        "choice1": "Wake",
        "choice2": "Ambush",
        "choice3": "Gaze",
        "correctAnswer": "1" //Question 46, Hard, choice1, Wake
    },

    {
        "question": "What bird is born with claws on its wing digits?",
        "choice1": "Cormorant",
        "choice2": "Hoatzin",
        "choice3": "Secretary bird",
        "correctAnswer": "2" //Question 47, Hard, choice2, Hoatzin
    },

    {
        "question": "Decapods are an order of ten-footed crustaceans. Which of these are NOT decapods?",
        "choice1": "Lobsters",
        "choice2": "Crabs",
        "choice3": "Krill",
        "correctAnswer": "3" //Question 48, Medium, choice3, Krill
    },

    {
        "question": "To which biological phylum do all mammals, birds and reptiles belong?",
        "choice1": "Chordata",
        "choice2": "Echinodermata",
        "choice3": "Placazoa",
        "correctAnswer": "1" //Question 49, Hard, choice1, Chordata
    },

    {
        "question": "What is the world&#039;s longest venomous snake?",
        "choice1": "Inland Taipan",
        "choice2": "King Cobra",
        "choice3": "Yellow Bellied Sea Snake",
        "correctAnswer": "2" //Question 50, Medium, choice2, King Cobra
    },
];